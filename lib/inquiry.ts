import { enrollRiseConfig, isInquiryEndpointConfigured } from "@/lib/enrollrise";

/**
 * Prospective family record sent to EnrollRise (or any configured endpoint).
 * Intentionally minimal — no student names, birthdates, or other sensitive data.
 */
export type FamilyInquiry = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  grade: string;
  schoolYear: string;
  interests: string[];
  contactMethod: "email" | "phone" | "text";
  consent: boolean;
};

export type InquiryResult =
  | { status: "sent" }
  /** No endpoint configured — nothing was transmitted or stored. */
  | { status: "demo" };

export class InquirySubmissionError extends Error {}

export async function submitFamilyInquiry(
  inquiry: FamilyInquiry,
): Promise<InquiryResult> {
  if (!isInquiryEndpointConfigured()) {
    // Demo mode: simulate network latency so the loading state is visible,
    // but do not send or persist anything.
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { status: "demo" };
  }

  let response: Response;
  try {
    response = await fetch(enrollRiseConfig.inquiryEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "elevate-charter-academy-website",
        schoolId: enrollRiseConfig.schoolId || undefined,
        record: "prospective_family",
        ...inquiry,
      }),
    });
  } catch {
    throw new InquirySubmissionError(
      "We couldn't reach the enrollment system. Please check your connection and try again.",
    );
  }

  if (!response.ok) {
    throw new InquirySubmissionError(
      "Something went wrong while sending your information. Please try again in a moment.",
    );
  }

  return { status: "sent" };
}
