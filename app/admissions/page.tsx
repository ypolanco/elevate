import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList, Footprints, Info, MapPinned, Users } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { InquirySection } from "@/components/forms/InquirySection";
import { EnrollmentSteps } from "@/components/home/AdmissionsSection";
import { EnrollmentCTA } from "@/components/home/EnrollmentCTA";
import { EventList } from "@/components/shared/EventList";
import { buttonVariants } from "@/components/ui/button";
import { DemoNotice } from "@/components/ui/demo-notice";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { upcomingEvents } from "@/data/events";
import { images } from "@/data/images";
import { resolveEnrollmentLink } from "@/lib/enrollrise";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admissions & Enrollment",
  description:
    "Apply to Elevate Charter Academy for 2027–2028. Learn how enrollment works, schedule a campus tour, and attend an information session.",
  alternates: { canonical: "/admissions" },
  openGraph: { title: "Admissions & Enrollment | Elevate Charter Academy", url: "/admissions" },
};

const timeline = [
  {
    phase: "Fall",
    title: "Explore",
    text: "Attend information sessions, tour campus, and ask questions.",
  },
  {
    phase: "Winter",
    title: "Apply",
    text: "Submit the online application during the open enrollment window.",
  },
  {
    phase: "Spring",
    title: "Lottery & offers",
    text: "If a grade has more applicants than seats, a public random lottery determines offers and waitlist order.",
  },
  {
    phase: "Summer",
    title: "Enroll & welcome",
    text: "Accept your seat, complete registration, and join us for new family orientation.",
  },
];

const faqs = [
  {
    q: "Is there tuition to attend Elevate?",
    a: "No. Elevate Charter Academy is a public charter school. There is no tuition and no fee to apply.",
  },
  {
    q: "Who can apply?",
    a: "Any child eligible to attend public school in North Carolina may apply for kindergarten through 8th grade. Kindergarten applicants must meet the state's age requirement for kindergarten entry.",
  },
  {
    q: "How does the lottery work?",
    a: "If applications for a grade exceed the number of available seats, admission is determined by a random lottery. Applicants not offered a seat are placed on a waitlist in lottery order.",
  },
  {
    q: "Do siblings of current students receive priority?",
    a: "North Carolina law permits charter schools to give enrollment priority to siblings of currently enrolled students. Details are shared with families during the enrollment process.",
  },
  {
    q: "Does Elevate serve students with IEPs or 504 plans?",
    a: "Yes. As a public school, Elevate serves all students and provides special education services and accommodations according to each student's plan.",
  },
  {
    q: "What information do I need to apply?",
    a: "The initial application asks for basic parent/guardian contact information and your child's intended grade. Additional registration documents are requested only after a seat is offered.",
  },
];

const tourFormats = [
  {
    icon: Users,
    title: "Small-group tours",
    text: "Weekday morning tours led by our admissions team, with time to see classes in session.",
  },
  {
    icon: Footprints,
    title: "Open house events",
    text: "Weekend events where families can explore at their own pace and meet teachers.",
  },
  {
    icon: MapPinned,
    title: "What to expect",
    text: "Tours last about an hour. Children are welcome. Location details are shared when you register.",
  },
];

export default function AdmissionsPage() {
  const apply = resolveEnrollmentLink("apply");
  const tour = resolveEnrollmentLink("tour");

  return (
    <>
      <PageHero
        breadcrumb="Admissions"
        eyebrow="Now Enrolling for 2027–2028"
        title="Your Child's Next Chapter Starts Here."
        description="Joining the Elevate family is simple. Explore our admissions process, connect with our team, and take the first step toward an inspiring educational experience."
        image={images.appleBlocks}
      >
        <EnrollmentButton action="apply" variant="gold" size="lg" showArrow />
        <EnrollmentButton action="inquire" variant="outline-light" size="lg" />
      </PageHero>

      {/* Steps */}
      <section aria-labelledby="steps-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="steps-title"
              eyebrow="How to Enroll"
              title="Three Steps to Joining Elevate"
              description="Our admissions team is here to help at every step — whether you have a question about the application or want to see a classroom in action."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <EnrollmentButton action="tour" variant="outline" />
              <EnrollmentButton action="inquire" variant="ghost" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <EnrollmentSteps />
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" aria-labelledby="apply-title" className="scroll-mt-28 bg-sky py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              id="apply-title"
              eyebrow="Enrollment Application"
              title="Apply for the 2027–2028 School Year"
              description="The online application takes about ten minutes and asks only for basic family contact information and your child's intended grade."
            />
            <ul className="mt-8 space-y-3 text-navy">
              {[
                "No tuition and no application fee",
                "One application per child",
                "Apply for any grade, kindergarten through 8th",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="lg:col-span-6">
            <div className="rounded-sm bg-white p-8 shadow-[0_30px_60px_-30px_rgba(15,35,64,0.3)] sm:p-10">
              <ClipboardList aria-hidden="true" className="size-8 text-royal" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-bold">Ready to begin?</h3>
              {apply.connected ? (
                <>
                  <p className="mt-3 leading-relaxed text-body">
                    Start your application through our secure enrollment portal, powered by
                    EnrollRise.
                  </p>
                  <EnrollmentButton action="apply" label="Start Your Application" size="lg" className="mt-7" />
                </>
              ) : (
                <>
                  <p className="mt-3 leading-relaxed text-body">
                    In a live deployment, this opens the school&apos;s online enrollment application
                    hosted on EnrollRise.
                  </p>
                  <DemoNotice className="mt-5 rounded-sm bg-gold-100 p-4 text-navy">
                    Demo site: the online application isn&apos;t connected yet. Request information
                    below and you&apos;ll see how lead capture works.
                  </DemoNotice>
                  <EnrollmentButton action="inquire" size="lg" className="mt-7" showArrow />
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="timeline-title"
            eyebrow="Enrollment Timeline"
            title="A Typical Admissions Year"
            description="Specific dates for the 2027–2028 enrollment window will be announced by the school. Here's the general sequence."
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <Reveal as="li" key={item.phase} delay={index * 0.07} className="relative bg-white p-7 sm:p-8">
                <p className="eyebrow text-royal">{item.phase}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{item.text}</p>
                <span aria-hidden="true" className="absolute top-0 left-0 h-1 w-12 bg-gold" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Tours */}
      <section id="tour" aria-labelledby="tour-title" className="surface-dark scroll-mt-28 bg-navy py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="tour-title"
              tone="dark"
              eyebrow="Campus Tours"
              title="Come See Elevate in Action"
              description="Walk our halls, step into classrooms, and meet the people who make Elevate special."
            />
            <div className="mt-9">
              {tour.connected ? (
                <EnrollmentButton action="tour" variant="gold" size="lg" />
              ) : (
                <>
                  <Link
                    href="/contact#inquiry"
                    className={cn(buttonVariants({ variant: "gold", size: "lg" }))}
                    data-enrollrise-action="tour"
                  >
                    Request a Tour
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <DemoNotice tone="dark" className="mt-5 max-w-md">
                    Demo site: tour scheduling isn&apos;t connected. Choose &ldquo;Scheduling a campus
                    tour&rdquo; on the interest form to see how a tour request is captured.
                  </DemoNotice>
                </>
              )}
            </div>
          </div>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 xl:grid-cols-3">
            {tourFormats.map(({ icon: Icon, title, text }, index) => (
              <Reveal as="li" key={title} delay={index * 0.07} className="border-t border-white/20 pt-6">
                <Icon aria-hidden="true" className="size-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/80">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Events */}
      <section id="events" aria-labelledby="admissions-events-title" className="scroll-mt-28 bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="admissions-events-title"
            eyebrow="Admissions Events"
            title="Information Sessions & Open Houses"
          />
          <DemoNotice className="mt-5">
            Events shown are sample listings for this demonstration site — they are not scheduled
            real-world events. In production, this list syncs with EnrollRise event registration.
          </DemoNotice>
          <div className="mt-10">
            <EventList events={upcomingEvents} detailed />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="Questions" title="Admissions FAQ" />
            <p className="mt-5 flex gap-2 leading-relaxed text-body">
              <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-royal" />
              Don&apos;t see your question? Our admissions team is happy to help.
            </p>
            <EnrollmentButton action="inquire" variant="outline" className="mt-6" />
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-bold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="relative size-5 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-5 before:-translate-y-1/2 before:bg-royal after:absolute after:top-0 after:left-1/2 after:h-5 after:w-0.5 after:-translate-x-1/2 after:bg-royal after:transition-transform group-open:after:scale-y-0"
                  />
                </summary>
                <p className="max-w-3xl pb-6 leading-relaxed text-body">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InquirySection id="request-information" idPrefix="admissions" title="Have Questions? We're Here to Help." />

      <EnrollmentCTA />
    </>
  );
}
