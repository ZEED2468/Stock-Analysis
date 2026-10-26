import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./landing.css";

const ticks = [
  { s: "AAPL", p: "214.32", c: "+1.24%", up: true },
  { s: "NVDA", p: "128.45", c: "+2.81%", up: true },
  { s: "TSLA", p: "248.10", c: "-0.64%", up: false },
  { s: "MSFT", p: "428.90", c: "+0.92%", up: true },
  { s: "AMZN", p: "186.55", c: "+1.08%", up: true },
  { s: "META", p: "582.20", c: "-0.31%", up: false },
  { s: "GOOGL", p: "176.40", c: "+0.55%", up: true },
  { s: "BTC", p: "67,420", c: "+1.90%", up: true },
  { s: "ETH", p: "3,214", c: "+0.84%", up: true },
];

const loop = [
  {
    n: "01  WATCH",
    title: "Pin what you trade",
    copy: "Build a live watchlist across stocks and crypto. Heatmaps and charts stay one click away.",
  },
  {
    n: "02  ALERT",
    title: "Rules that fire for you",
    copy: "Price targets, percent moves, unusual volume. Emailed the second the market agrees.",
  },
  {
    n: "03  DECIDE",
    title: "Context before the click",
    copy: "AI digests and company news so you act on a thesis, not a gut reaction.",
  },
];

function Spark({ up = true }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 320 88" className="is-spark" aria-hidden>
      <defs>
        <linearGradient id="isFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={up ? "#0FEDBE" : "#FF4D62"} stopOpacity="0.35" />
          <stop offset="100%" stopColor={up ? "#0FEDBE" : "#FF4D62"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={
          up
            ? "M0 62 C40 58 55 70 90 48 S150 18 190 28 S250 12 320 8 L320 88 L0 88 Z"
            : "M0 18 C40 22 55 12 90 34 S150 68 190 58 S250 78 320 82 L320 88 L0 88 Z"
        }
        fill="url(#isFill)"
        stroke="none"
      />
      <path
        d={
          up
            ? "M0 62 C40 58 55 70 90 48 S150 18 190 28 S250 12 320 8"
            : "M0 18 C40 22 55 12 90 34 S150 68 190 58 S250 78 320 82"
        }
        stroke={up ? "#0FEDBE" : "#FF4D62"}
      />
    </svg>
  );
}

export default function LandingPage() {
  const tape = [...ticks, ...ticks];

  return (
    <div className="is-landing">
      {/* ===== HERO: no Signalist mock — atmosphere only until fresh capture ===== */}
      <section className="is-hero">
        <div className="is-hero-atmosphere" aria-hidden />
        <div className="is-hero-grid" aria-hidden />
        <div className="is-hero-glow" aria-hidden />

        <header className="is-nav">
          <Link href="/" className="is-brand is-display">
            <span className="is-brand-mark" aria-hidden>
              <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
                <rect x="5" y="18" width="4" height="9" rx="1" fill="#4F8CFF" />
                <rect x="12" y="12" width="4" height="15" rx="1" fill="#0FEDBE" />
                <rect x="19" y="7" width="4" height="20" rx="1" fill="#8B93FF" />
                <path
                  d="M6 14 L13 10 L20 13 L27 6"
                  stroke="#0FEDBE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            IntelliStock
          </Link>
          <nav className="is-nav-links">
            <a href="#product">Product</a>
            <a href="#loop">The loop</a>
            <a href="#platform">Platform</a>
          </nav>
          <div className="is-nav-actions">
            <Link href="/sign-in" className="is-btn is-btn-ghost hidden sm:inline-flex">
              Log in
            </Link>
            <Link href="/sign-up" className="is-btn is-btn-solid">
              Get started
            </Link>
          </div>
        </header>

        <div className="is-hero-content">
          <h1>
            Markets, watched.
            <br />
            Moves, <em>caught.</em>
          </h1>
          <p className="is-hero-copy">
            IntelliStock is the dark terminal for your watchlist: live data, price
            alerts, and AI insights so you never miss the move that matters.
          </p>
          <div className="is-hero-cta">
            <Link href="/sign-up" className="is-btn is-btn-primary">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/sign-in" className="is-btn is-btn-ghost">
              Sign in
            </Link>
          </div>
          <div className="is-hero-meta">
            <span>Finnhub live feeds</span>
            <span>TradingView charts</span>
            <span>Email alerts</span>
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div className="is-ticker" aria-hidden>
        <div className="is-ticker-track">
          {tape.map((t, i) => (
            <div className="is-tick" key={`${t.s}-${i}`}>
              <strong>{t.s}</strong>
              <span className="px">{t.p}</span>
              <span className={t.up ? "up" : "down"}>{t.c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== THE LOOP ===== */}
      <section className="is-section" id="loop">
        <div className="is-section-head">
          <h2>Watch. Alert. Decide.</h2>
          <p className="sub">
            One continuous flow, not six feature cards pretending to be a product.
          </p>
        </div>
        <div className="is-loop">
          {loop.map((item) => (
            <article className="is-loop-item" key={item.n}>
              <span className="n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== PLATFORM SPLITS ===== */}
      <section className="is-section" id="platform">
        <div className="is-section-head">
          <h2>Built like a terminal. Feels like a product.</h2>
          <p className="sub">
            Cyan on ink, the same language as the dashboard you actually use.
          </p>
        </div>

        <div className="is-split" id="product">
          <div className="is-split-copy">
            <h3>Alerts that earn their keep</h3>
            <p>
              Define the move once. IntelliStock watches the tape and reaches you
              when price, percent, or volume crosses your line.
            </p>
            <ul>
              <li>Target price and % change rules</li>
              <li>Email delivery when conditions fire</li>
              <li>Tied to the symbols on your watchlist</li>
            </ul>
          </div>
          <div className="is-panel is-panel-scan">
            <div className="is-panel-inner">
              <div className="is-panel-top">
                <span>Active alerts</span>
                <span className="is-chip">LIVE</span>
              </div>
              {[
                { s: "NVDA", m: "Above $128.00" },
                { s: "TSLA", m: "Session -3%" },
                { s: "AAPL", m: "Target $220" },
                { s: "BTC", m: "Break $68k" },
              ].map((row) => (
                <div className="is-row" key={row.s}>
                  <div>
                    <div className="sym">{row.s}</div>
                    <div className="meta">{row.m}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="is-split reverse" style={{ marginTop: "4.5rem" }}>
          <div className="is-split-copy">
            <h3>The market, still moving</h3>
            <p>
              Indices, watchlists, and TradingView charts in one dark surface so
              you read the session without tab-hopping.
            </p>
            <ul>
              <li>Realtime quotes via Finnhub</li>
              <li>Heatmaps and multi-timeframe charts</li>
              <li>Watchlist as your home base</li>
            </ul>
          </div>
          <div className="is-panel">
            <div className="is-panel-inner">
              <div className="is-panel-top">
                <span>S&amp;P 500 · session</span>
                <span style={{ color: "var(--is-cyan)", fontVariantNumeric: "tabular-nums" }}>
                  +1.42%
                </span>
              </div>
              <p
                className="is-display"
                style={{ fontSize: "2rem", letterSpacing: "-0.03em", marginBottom: "0.35rem" }}
              >
                5,603.24
              </p>
              <Spark up />
            </div>
          </div>
        </div>

        <div className="is-split" style={{ marginTop: "4.5rem" }}>
          <div className="is-split-copy">
            <h3>AI that shortens the brief</h3>
            <p>
              Morning digests and symbol-level context. Enough signal to frame a
              trade, not another feed to drown in.
            </p>
            <ul>
              <li>Daily market summary in your inbox</li>
              <li>Company news beside the chart</li>
              <li>Bias tags you can scan in seconds</li>
            </ul>
          </div>
          <div className="is-panel">
            <div className="is-panel-inner">
              <div className="is-panel-top">
                <span>Intelligence</span>
                <span className="is-chip">AI</span>
              </div>
              <div className="is-digest">
                <div className="label">Today&apos;s digest</div>
                <p>
                  Mag7 mixed; AI infrastructure still bid into the close. Volume
                  leaders: NVDA, AVGO. Risk: late-day fade in mega-cap tech.
                </p>
                <div className="is-tags">
                  <span>Bullish bias</span>
                  <span>High volume</span>
                  <span>Semis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="is-section" style={{ paddingTop: 0 }}>
        <div className="is-cta">
          <h2>Open your terminal.</h2>
          <p>
            Create a free account, pin your symbols, and arm your first alert before
            the next session.
          </p>
          <div className="actions">
            <Link href="/sign-up" className="is-btn is-btn-primary">
              Create free account
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/sign-in" className="is-btn is-btn-ghost">
              I already have an account
            </Link>
          </div>
        </div>
      </section>

      <footer className="is-footer">
        <div className="is-footer-inner">
          <Link href="/" className="is-brand is-display" style={{ fontSize: "0.95rem" }}>
            <span className="is-brand-mark" aria-hidden style={{ width: "1.35rem", height: "1.35rem" }}>
              <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
                <rect x="5" y="18" width="4" height="9" rx="1" fill="#4F8CFF" />
                <rect x="12" y="12" width="4" height="15" rx="1" fill="#0FEDBE" />
                <rect x="19" y="7" width="4" height="20" rx="1" fill="#8B93FF" />
                <path d="M6 14 L13 10 L20 13 L27 6" stroke="#0FEDBE" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            IntelliStock
          </Link>
          <p>© {new Date().getFullYear()} IntelliStock · Track. Alert. Decide.</p>
        </div>
      </footer>
    </div>
  );
}
