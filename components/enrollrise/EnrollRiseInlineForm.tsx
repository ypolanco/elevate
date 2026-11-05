"use client";

import * as React from "react";
import Script from "next/script";

import { cn } from "@/lib/utils";

/**
 * Hosted EnrollRise form rendered inline via the EnrollRise embed script.
 * The script finds `[data-enrollrise-inline]` elements and injects an iframe.
 *
 * The placeholder is only rendered after mount: the header also loads
 * embed/v1.js site-wide, and if the script injects the iframe before React
 * hydrates this subtree, React reports a hydration mismatch.
 */
const noopSubscribe = () => () => {};

export function EnrollRiseInlineForm({ formId, className }: { formId: string; className?: string }) {
  // false during SSR and hydration, true once the client has taken over.
  const mounted = React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  return (
    <>
      {mounted ? (
        <div data-enrollrise-inline={formId} className={cn("w-full", className)} />
      ) : (
        <div className={cn("min-h-[640px] w-full", className)} aria-hidden="true" />
      )}
      <Script src="https://enrollrise.com/embed/v1.js" strategy="afterInteractive" />
    </>
  );
}
