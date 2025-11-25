import { betterAuth } from "better-auth";
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase} from "@/database/mongoose";
import { nextCookies} from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;
let authPromise: Promise<ReturnType<typeof betterAuth>> | null = null;

const createAuthInstance = (db?: any) => {
    const config: any = {
        secret: process.env.BETTER_AUTH_SECRET || 'dummy-secret-for-build',
        baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    };

    if (db) {
        config.database = mongodbAdapter(db);
    }

    return betterAuth(config);
};

export const getAuth = async () => {
    if(authInstance) return authInstance;
    if(authPromise) return authPromise;

    // Try to connect to database, but fall back to no-database instance if it fails
    // This handles build-time scenarios where DB connection isn't available
    authPromise = (async () => {
        try {
            // Only attempt DB connection if MONGODB_URI is set
            if (process.env.MONGODB_URI) {
                const mongoose = await connectToDatabase();
                const db = mongoose.connection.db;

                if(db) {
                    authInstance = createAuthInstance(db);
                    return authInstance;
                }
            }
        } catch (error) {
            // If connection fails (e.g., during build, IP not whitelisted, etc.),
            // create auth instance without database
            console.warn('MongoDB connection failed, creating auth instance without database:', error instanceof Error ? error.message : 'Unknown error');
        }

        // Fallback: create auth instance without database
        // This allows the build to complete and auth to work at runtime when DB is available
        if (!authInstance) {
            authInstance = createAuthInstance();
        }
        return authInstance;
    })();

    return authPromise;
}

// Initialize auth synchronously for immediate use (e.g., during build)
// This will be a no-database instance during build
// At runtime, getAuth() will upgrade it with database connection
const initAuthSync = () => {
    if (!authInstance) {
        authInstance = createAuthInstance();
    }
    return authInstance;
};

// Initialize the instance synchronously for build time
initAuthSync();

// Export auth as a Proxy that always references the current authInstance
// This ensures that when getAuth() upgrades authInstance with DB connection,
// the exported auth will automatically use the upgraded instance
export const auth = new Proxy(authInstance!, {
    get(target, prop) {
        // Always use the current authInstance (which may have been upgraded by getAuth())
        return (authInstance || target)[prop as keyof typeof authInstance];
    }
}) as ReturnType<typeof betterAuth>;
