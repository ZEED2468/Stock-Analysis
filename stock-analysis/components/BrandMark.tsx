import Link from "next/link";

/** Text + mark brand — avoids Signalist PNG wordmark */
export default function BrandMark({
  href = "/",
  size = "md",
}: {
  href?: string;
  size?: "sm" | "md";
}) {
  const icon = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  const text = size === "sm" ? "text-sm" : "text-base";

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 text-white no-underline"
    >
      <span
        className={`${icon} relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0B1220]`}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-[70%] w-[70%]" fill="none">
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
      <span
        className={`${text} font-semibold tracking-tight`}
        style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
      >
        IntelliStock
      </span>
    </Link>
  );
}
