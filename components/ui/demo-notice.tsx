import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

/** Small, honest label used wherever content is illustrative sample data. */
export function DemoNotice({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 text-sm leading-relaxed",
        tone === "dark" ? "text-white/70" : "text-slate-600",
        className,
      )}
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export function SampleBadge({ label = "Sample", className }: { label?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-slate-300 bg-white px-1.5 py-0.5 text-[0.68rem] font-semibold tracking-wider text-slate-600 uppercase",
        className,
      )}
    >
      {label}
    </span>
  );
}
