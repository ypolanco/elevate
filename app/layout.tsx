import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { EnrollRiseTourPopup } from "@/components/enrollrise/EnrollRiseTourPopup";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/shared/JsonLd";
import { school } from "@/data/school";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Elevate Charter Academy is a tuition-free K–8 public charter school in North Carolina, combining academic excellence, STEM, the arts, and a warm, family-centered community. Now enrolling for 2027–2028.";

export const metadata: Metadata = {
  metadataBase: new URL(school.siteUrl),
  title: {
    default: `${school.name} | Tuition-Free K–8 Public Charter School`,
    template: `%s | ${school.name}`,
  },
  description,
  applicationName: school.name,
  keywords: [
    "charter school",
    "tuition-free school",
    "K-8 school",
    "North Carolina charter school",
    "STEM school",
    "school enrollment",
  ],
  openGraph: {
    type: "website",
    siteName: school.name,
    title: `${school.name} | ${school.tagline}`,
    description,
    locale: "en_US",
    images: [
      {
        url: "/images/hero-classroom.jpg",
        width: 2200,
        height: 1464,
        alt: "Elementary students learning together in a classroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${school.name} | ${school.tagline}`,
    description,
    images: ["/images/hero-classroom.jpg"],
  },
  // Demo site: keep it out of search indexes unless explicitly enabled.
  robots:
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true"
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#142D4E",
};

// Only facts that are true of the (fictional) organization as presented on this site.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: school.name,
  slogan: school.tagline,
  description: `${school.type} serving ${school.grades}. Demonstration website.`,
  url: school.siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-navy px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <EnrollRiseTourPopup />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
