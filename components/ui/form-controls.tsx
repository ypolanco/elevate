import * as React from "react";

import { cn } from "@/lib/utils";

const fieldBase =
  "block w-full rounded-md border bg-white px-3.5 text-[0.95rem] text-ink placeholder:text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors focus:border-royal focus:outline-none focus:ring-3 focus:ring-royal/25 disabled:bg-slate-50 aria-[invalid=true]:border-red-600 aria-[invalid=true]:focus:ring-red-600/20";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldBase, "h-12 border-slate-300", className)} {...props} />;
}

export function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(fieldBase, "h-12 appearance-none border-slate-300 pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-slate-500"
      >
        <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Label({
  className,
  required,
  children,
  ...props
}: React.ComponentProps<"label"> & { required?: boolean }) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-semibold text-navy", className)}
      {...props}
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-red-700" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
      )}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-red-700">
      <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 size-4 shrink-0">
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      {message}
    </p>
  );
}
