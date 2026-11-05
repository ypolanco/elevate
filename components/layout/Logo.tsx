import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  /** Render as a link to the homepage (default true). */
  asLink?: boolean;
};

/** Abstract mark: an open book with a rising sun and upward arrow. */
export function LogoMark({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const ink = tone === "dark" ? "#142D4E" : "#FFFFFF";
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("size-10", className)}>
      {/* sun rays */}
      <g stroke="#E9B44C" strokeWidth="2.4" strokeLinecap="round">
        <path d="M9.5 21.5 12.6 23" />
        <path d="M14.2 13.4 16.6 15.8" />
        <path d="M38.5 21.5 35.4 23" />
        <path d="M33.8 13.4 31.4 15.8" />
      </g>
      {/* rising sun */}
      <path d="M15 28a9 9 0 0 1 18 0Z" fill="#E9B44C" />
      {/* upward arrow through the sun */}
      <path
        d="M24 30V7.5M18.8 12.4 24 7.2l5.2 5.2"
        fill="none"
        stroke={ink}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* open book */}
      <path
        d="M4 30.5c6.7-2.3 13.4-1.8 20 2.2 6.6-4 13.3-4.5 20-2.2v9.2c-6.7-2.3-13.4-1.8-20 2.2-6.6-4-13.3-4.5-20-2.2Z"
        fill={ink}
      />
      <path d="M24 32.7v9.2" stroke={tone === "dark" ? "#FFFFFF" : "#142D4E"} strokeWidth="1.4" />
    </svg>
  );
}

export function Logo({ tone = "dark", className, asLink = true }: LogoProps) {
  const inner = (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark tone={tone} className="size-10 sm:size-11" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-extrabold tracking-[-0.03em]",
            tone === "dark" ? "text-navy" : "text-white",
          )}
        >
          Elevate
        </span>
        <span
          className={cn(
            "mt-1 font-display text-[0.6rem] font-bold tracking-[0.24em] uppercase",
            tone === "dark" ? "text-slate-600" : "text-white/75",
          )}
        >
          Charter Academy
        </span>
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="Elevate Charter Academy — home" className="inline-flex rounded-sm">
      {inner}
    </Link>
  );
}
