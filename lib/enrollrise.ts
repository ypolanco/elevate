/**
 * EnrollRise integration adapter.
 *
 * Every enrollment-related call to action on the site resolves its destination
 * through this module. When an EnrollRise URL is configured (via environment
 * variables), CTAs link straight to the hosted EnrollRise experience. When it is
 * not configured, CTAs fall back to an on-site page that explains the next step,
 * so no button on the demo site is ever dead.
 *
 * Supported URL tokens: {schoolId}, {eventId}
 *
 * NOTE: Only NEXT_PUBLIC_* variables referenced literally are inlined by Next.js,
 * so each one is read explicitly below.
 */

export type EnrollmentAction = "apply" | "inquire" | "tour" | "rsvp";

type ActionDefinition = {
  /** Default human-readable label for the CTA. */
  label: string;
  /** What this action maps to inside EnrollRise. */
  enrollRiseFeature: string;
  /** Configured EnrollRise URL (may contain tokens). */
  configuredUrl: string | undefined;
  /** On-site fallback when no EnrollRise URL is configured. */
  fallbackHref: string;
};

export const enrollRiseConfig = {
  schoolId: process.env.NEXT_PUBLIC_ENROLLRISE_SCHOOL_ID ?? "",
  /** Endpoint that receives Family Interest Form submissions (JSON POST). */
  inquiryEndpoint: process.env.NEXT_PUBLIC_ENROLLRISE_INQUIRY_ENDPOINT ?? "",
  /**
   * Optional hosted EnrollRise form URL. When set, the Family Interest Form is
   * replaced by the embedded EnrollRise form (iframe).
   */
  formEmbedUrl: process.env.NEXT_PUBLIC_ENROLLRISE_FORM_EMBED_URL ?? "",
} as const;

export const enrollmentActions: Record<EnrollmentAction, ActionDefinition> = {
  apply: {
    label: "Apply Now",
    enrollRiseFeature: "Enrollment Application",
    configuredUrl: process.env.NEXT_PUBLIC_ENROLLRISE_APPLY_URL,
    fallbackHref: "/admissions#apply",
  },
  inquire: {
    label: "Request Information",
    enrollRiseFeature: "Lead Capture",
    configuredUrl: process.env.NEXT_PUBLIC_ENROLLRISE_INQUIRY_URL,
    fallbackHref: "/contact#inquiry",
  },
  tour: {
    label: "Schedule a Tour",
    enrollRiseFeature: "Campus Tour Registration",
    configuredUrl: process.env.NEXT_PUBLIC_ENROLLRISE_TOUR_URL,
    fallbackHref: "/admissions#tour",
  },
  rsvp: {
    label: "RSVP",
    enrollRiseFeature: "Event Registration",
    configuredUrl: process.env.NEXT_PUBLIC_ENROLLRISE_EVENT_URL,
    // Demo fallback: the interest form captures event interest ("information session").
    fallbackHref: "/contact#inquiry",
  },
};

export type ResolvedEnrollmentLink = {
  href: string;
  /** True when the link points to an external EnrollRise URL. */
  external: boolean;
  /** True when EnrollRise is configured for this action. */
  connected: boolean;
};

export function resolveEnrollmentLink(
  action: EnrollmentAction,
  options: { eventId?: string } = {},
): ResolvedEnrollmentLink {
  const definition = enrollmentActions[action];
  const configured = definition.configuredUrl?.trim();

  if (!configured) {
    return { href: definition.fallbackHref, external: false, connected: false };
  }

  const href = configured
    .replaceAll("{schoolId}", encodeURIComponent(enrollRiseConfig.schoolId))
    .replaceAll("{eventId}", encodeURIComponent(options.eventId ?? ""));

  return { href, external: /^https?:\/\//i.test(href), connected: true };
}

export function isInquiryEndpointConfigured() {
  return enrollRiseConfig.inquiryEndpoint.trim().length > 0;
}
