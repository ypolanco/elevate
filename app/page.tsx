import type { Metadata } from "next";

import { InquirySection } from "@/components/forms/InquirySection";
import { AcademicPrograms } from "@/components/home/AcademicPrograms";
import { AdmissionsSection } from "@/components/home/AdmissionsSection";
import { EnrollmentCTA } from "@/components/home/EnrollmentCTA";
import { Hero } from "@/components/home/Hero";
import { SchoolHighlights } from "@/components/home/SchoolHighlights";
import { SchoolLife } from "@/components/home/SchoolLife";
import { Testimonials } from "@/components/home/Testimonials";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { WhyElevate } from "@/components/home/WhyElevate";

export const metadata: Metadata = {
  title: { absolute: "Elevate Charter Academy | Tuition-Free K–8 Public Charter School" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SchoolHighlights />
      <WelcomeSection />
      <AcademicPrograms />
      <WhyElevate />
      <AdmissionsSection />
      <InquirySection
        id="family-interest"
        idPrefix="home"
        title="Interested in Elevate? Let's Talk."
        enrollRiseInlineId="hRIfvTRLemci"
      />
      <SchoolLife />
      <UpcomingEvents />
      <Testimonials />
      <EnrollmentCTA />
    </>
  );
}
