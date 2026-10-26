import { auth, getAuth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BrandMark from "@/components/BrandMark";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col bg-[#030712] text-white lg:flex-row">
      <section className="flex w-full flex-col overflow-y-auto px-6 py-8 sm:px-10 lg:w-[45%] lg:px-16 lg:py-10">
        <div className="mb-10">
          <BrandMark href="/" />
        </div>

        <div className="mb-8 max-w-md">
          <h1
            className="text-3xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
          >
            Markets, watched. Moves{" "}
            <span className="text-[#0FEDBE]">caught.</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            Sign in to your watchlist, alerts, and AI insights.
          </p>
        </div>

        <div className="flex-1 pb-8">{children}</div>
      </section>

      <section className="relative hidden w-full overflow-hidden border-l border-white/10 bg-[#070B14] lg:flex lg:w-[55%] lg:flex-col lg:justify-between lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(79,140,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,140,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#0FEDBE]/15 blur-[90px]"
        />

        <blockquote className="relative z-10 max-w-lg text-xl font-medium leading-relaxed text-white/85">
          IntelliStock turned my watchlist into a winning list. The alerts are
          spot-on, and I feel more confident making moves in the market.
          <footer className="mt-6 text-sm text-white/45">
            Ethan R., Retail investor
          </footer>
        </blockquote>

        <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Watch", v: "Live symbols" },
            { k: "Alert", v: "Price rules" },
            { k: "Decide", v: "AI digests" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0FEDBE]">
                {item.k}
              </p>
              <p className="mt-2 text-sm text-white/70">{item.v}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Layout;
