/**
 * Core school profile. Elevate Charter Academy is a fictional school created to
 * demonstrate the EnrollRise platform. No real address, phone number, or email
 * address is published on this site.
 */
export const school = {
  name: "Elevate Charter Academy",
  shortName: "Elevate",
  tagline: "Inspiring Minds. Elevating Futures.",
  mission:
    "To empower every student through academic excellence, innovative learning, and a supportive community that prepares them to lead, discover, and succeed.",
  vision:
    "A community where every child discovers their strengths, grows in character, and leaves ready to shape the world with confidence and compassion.",
  type: "Tuition-Free Public Charter School",
  grades: "Kindergarten through 8th Grade",
  gradesShort: "K–8",
  state: "North Carolina",
  enrollmentYear: "2027–2028",
  enrollmentYearValue: "2027-2028",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Sample schedule shown for demonstration purposes. */
  hours: [
    { label: "Student Day", value: "7:45 a.m. – 3:15 p.m." },
    { label: "Front Office", value: "7:15 a.m. – 4:00 p.m." },
    { label: "Days", value: "Monday – Friday" },
  ],
  demoDisclaimer:
    "Elevate Charter Academy is a fictional school. This website is a demonstration of the EnrollRise enrollment platform. Events, testimonials, and details shown are samples and do not represent a real school.",
} as const;

export type SocialLink = {
  label: string;
  platform: "facebook" | "instagram" | "youtube" | "linkedin";
  /** Leave null until a real account exists — the icon will route to Contact. */
  href: string | null;
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", platform: "facebook", href: null },
  { label: "Instagram", platform: "instagram", href: null },
  { label: "YouTube", platform: "youtube", href: null },
  { label: "LinkedIn", platform: "linkedin", href: null },
];
