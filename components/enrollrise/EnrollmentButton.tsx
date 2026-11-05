import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  enrollmentActions,
  resolveEnrollmentLink,
  type EnrollmentAction,
} from "@/lib/enrollrise";
import { cn } from "@/lib/utils";

type EnrollmentButtonProps = VariantProps<typeof buttonVariants> & {
  action: EnrollmentAction;
  /** Override the default label for this action. */
  label?: string;
  /** EnrollRise event identifier (used by the "rsvp" action). */
  eventId?: string;
  className?: string;
  /** Accessible label when the visible text needs extra context (e.g. "RSVP for Open House"). */
  ariaLabel?: string;
  showArrow?: boolean;
};

/**
 * Reusable enrollment CTA. Destinations are resolved by the EnrollRise adapter
 * (lib/enrollrise.ts) so they can be pointed at hosted EnrollRise flows by
 * configuration alone. `data-enrollrise-*` attributes allow an EnrollRise embed
 * script to intercept clicks (e.g. to open a modal) in the future.
 */
export function EnrollmentButton({
  action,
  label,
  eventId,
  variant,
  size,
  className,
  ariaLabel,
  showArrow = false,
}: EnrollmentButtonProps) {
  const { href, external } = resolveEnrollmentLink(action, { eventId });
  const text = label ?? enrollmentActions[action].label;
  const classes = cn(buttonVariants({ variant, size }), className);
  const dataAttrs = {
    "data-enrollrise-action": action,
    ...(eventId ? { "data-enrollrise-event": eventId } : {}),
  };

  const content = (
    <>
      {text}
      {external ? (
        <>
          <ArrowUpRight aria-hidden="true" className="size-4" />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      ) : showArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        {...dataAttrs}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} {...dataAttrs}>
      {content}
    </Link>
  );
}
