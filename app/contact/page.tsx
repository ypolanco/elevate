import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, MessageCircle, Share2 } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { FamilyInterestForm } from "@/components/forms/FamilyInterestForm";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { DemoNotice } from "@/components/ui/demo-notice";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { school } from "@/data/school";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Contact Elevate Charter Academy's admissions team, request information, or schedule a campus tour.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Elevate Charter Academy", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact Us"
        title="We'd Love to Hear from You."
        description="Whether you're just starting to explore or ready to apply, our admissions team is here to answer questions and help you plan your next step."
        image={images.joyfulStudent}
      />

      <section id="inquiry" aria-labelledby="inquiry-title" className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="space-y-10 lg:col-span-4" aria-label="Contact information">
            <div>
              <h2 id="inquiry-title" className="text-3xl font-extrabold">
                Request Information
              </h2>
              <p className="mt-4 leading-relaxed text-body">
                Complete the family interest form and a member of our admissions team will follow
                up using your preferred contact method.
              </p>
            </div>

            <div className="flex gap-4">
              <MessageCircle aria-hidden="true" className="mt-1 size-5 shrink-0 text-royal" />
              <div>
                <h3 className="font-display text-lg font-bold">Admissions questions</h3>
                <p className="mt-1.5 leading-relaxed text-body">
                  Use the form to ask about enrollment, tours, or a specific grade.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-royal" />
              <div>
                <h3 className="font-display text-lg font-bold">
                  Office hours <span className="text-sm font-normal text-slate-600">(sample)</span>
                </h3>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-[0.95rem]">
                  {school.hours.map((row) => (
                    <div key={row.label} className="contents">
                      <dt className="text-slate-600">{row.label}</dt>
                      <dd className="text-navy">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-royal" />
              <div>
                <h3 className="font-display text-lg font-bold">Visit campus</h3>
                <p className="mt-1.5 leading-relaxed text-body">
                  Campus location and parking details are shared when you register for a tour or
                  event.
                </p>
                <EnrollmentButton action="tour" variant="outline" size="sm" className="mt-4" />
              </div>
            </div>

            <div id="stay-connected" className="scroll-mt-32 rounded-sm bg-navy-950 p-6 surface-dark">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                <Share2 aria-hidden="true" className="size-5 text-gold" />
                Stay connected
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Follow along for classroom highlights and event reminders.
              </p>
              <SocialIcons className="mt-4" />
              <DemoNotice tone="dark" className="mt-4 text-xs">
                Social accounts are not active for this demonstration school.
              </DemoNotice>
            </div>

            <DemoNotice>
              {school.name} is a fictional school, so no real address, phone number, or email
              address is listed. See our{" "}
              <Link href="/privacy" className="font-semibold text-royal underline underline-offset-2">
                privacy policy
              </Link>{" "}
              for how form information is handled.
            </DemoNotice>
          </aside>

          <Reveal className="lg:col-span-8">
            <FamilyInterestForm idPrefix="contact" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
