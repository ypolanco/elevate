export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", description: "Mission, values, and our approach" },
  { label: "Academics", href: "/academics", description: "K–5, 6–8, STEM, and the arts" },
  { label: "Admissions", href: "/admissions", description: "How to apply and visit" },
  { label: "Student Life", href: "/student-life", description: "Clubs, athletics, and traditions" },
  { label: "Families", href: "/families", description: "Resources for current families" },
  { label: "Contact", href: "/contact", description: "Questions and inquiries" },
];

export const utilityNavigation: NavItem[] = [
  { label: "Parent Portal", href: "/families#parent-portal" },
  { label: "School Calendar", href: "/families#calendar" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Student Life", href: "/student-life" },
    { label: "Admissions", href: "/admissions" },
  ],
  families: [
    { label: "Parent Resources", href: "/families" },
    { label: "Calendar", href: "/families#calendar" },
    { label: "Enrollment", href: "/admissions#apply" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} satisfies Record<string, NavItem[]>;
