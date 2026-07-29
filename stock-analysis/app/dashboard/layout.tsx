import { auth, getAuth } from "@/lib/better-auth/auth";
import { redirect } from "next/navigation";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import Dashboard from "./page";

export default async function DashboardLayout() {
    // Ensure auth is initialized with database connection at runtime
    await getAuth();
    const session = await auth.api.getSession({
        headers: await import("next/headers").then(h => h.headers())
    });

    if (!session) {
        redirect("/");
    }

    // Fetch initial stocks data
    const initialStocks = await searchStocks();

    return <Dashboard user={session.user} initialStocks={initialStocks} />;
}
