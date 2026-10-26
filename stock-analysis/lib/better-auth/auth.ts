import { betterAuth } from "better-auth";
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase} from "@/database/mongoose";
import { nextCookies} from "better-auth/next-js";
import type { Db } from "mongodb";

type AuthInstance = ReturnType<typeof betterAuth>;

let authInstance: AuthInstance | null = null;
let authPromise: Promise<AuthInstance> | null = null;
let dbReady = false;

const createAuthInstance = (db?: Db) => {
    const options = {
        secret: process.env.BETTER_AUTH_SECRET || 'dummy-secret-for-build',
        baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3002',
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
        ...(db ? { database: mongodbAdapter(db) } : {}),
    };

    return betterAuth(options);
};

export const getAuth = async () => {
    if (authInstance && dbReady) return authInstance;
    if (authPromise) return authPromise;

    authPromise = (async () => {
        try {
            if (process.env.MONGODB_URI) {
                const mongoose = await connectToDatabase();
                const db = mongoose.connection.db;

                if (db) {
                    authInstance = createAuthInstance(db);
                    dbReady = true;
                    console.log('[auth] Better Auth connected with MongoDB adapter');
                    return authInstance;
                }
            }
        } catch (error) {
            console.warn(
                'MongoDB connection failed, creating auth instance without database:',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }

        if (!authInstance) {
            authInstance = createAuthInstance();
        }
        return authInstance;
    })();

    try {
        return await authPromise;
    } finally {
        // Allow retry if DB was not ready (e.g. memory mongo started later)
        if (!dbReady) authPromise = null;
    }
}

const initAuthSync = () => {
    if (!authInstance) {
        authInstance = createAuthInstance();
    }
    return authInstance;
};

initAuthSync();

export const auth = new Proxy({} as AuthInstance, {
    get(_target, prop) {
        const instance = authInstance as AuthInstance | null;
        if (!instance) return undefined;
        const value = instance[prop as keyof AuthInstance];
        return typeof value === 'function' ? value.bind(instance) : value;
    }
}) as AuthInstance;
