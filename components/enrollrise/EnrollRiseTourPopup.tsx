import Script from "next/script";
import { CalendarCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Floating "Register for Campus Tour" button. The EnrollRise popup script pins
 * it to the viewport corner (data-enrollrise-position) and opens the event
 * registration popup on click. The script binds buttons once on load, so this
 * lives in the root layout to stay mounted across client-side navigation.
 */
export function EnrollRiseTourPopup() {
  return (
    <>
      <button
        type="button"
        data-enrollrise-event-code="campus-tour-jueyk7"
        data-enrollrise-position="bottom-right"
        className={cn(
          buttonVariants({ variant: "gold", size: "md" }),
          "fixed right-0 bottom-0 z-50 m-5 rounded-full shadow-lg",
        )}
      >
        <CalendarCheck aria-hidden="true" className="size-4" />
        Register for Campus Tour
      </button>
      <Script src="https://enrollrise.com/embed/enrollrise-popup.js" strategy="afterInteractive" />
    </>
  );
}
