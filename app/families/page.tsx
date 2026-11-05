import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  CalendarDays,
  Clock,
  FileText,
  HandHeart,
  LayoutDashboard,
  Megaphone,
  Utensils,
} from "lucide-react";

import { EnrollmentCTA } from "@/components/home/EnrollmentCTA";
import { DemoNotice, SampleBadge } from "@/components/ui/demo-notice";
import { Media } from "@/components/ui/media";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Family Resources",
  description:
    "Resources for Elevate Charter Academy families: parent portal, school calendar, communication, and ways to get involved.",
  alternates: { canonical: "/families" },
  openGraph: { title: "Family Resources | Elevate Charter Academy", url: "/families" },
};

const quickLinks = [
  { icon: LayoutDashboard, label: "Parent Portal", href: "#parent-portal" },
  { icon: CalendarDays, label: "School Calendar", href: "#calendar" },
  { icon: FileText, label: "Family Resources", href: "#resources" },
  { icon: HandHeart, label: "Get Involved", href: "#involvement" },
];

const sampleCalendar = [
  { month: "August", item: "First day of school & new family orientation" },
  { month: "September", item: "Back-to-School Night" },
  { month: "October", item: "Family–teacher conferences" },
  { month: "November", item: "Family Literacy Night · Thanksgiving break" },
  { month: "December", item: "Winter break" },
  { month: "February", item: "STEM Discovery Day" },
  { month: "April", item: "Spring break · Arts Showcase" },
  { month: "June", item: "Field Day · 8th Grade Promotion · Last day of school" },
];

const resources = [
  {
    icon: FileText,
    title: "Family Handbook",
    text: "Policies, routines, and expectations for students and families.",
  },
  {
    icon: Utensils,
    title: "Meals & Nutrition",
    text: "Breakfast and lunch information, menus, and meal benefit applications.",
  },
  {
    icon: Bus,
    title: "Arrival, Dismissal & Transportation",
    text: "Carpool procedures, schedules, and transportation information.",
  },
  {
    icon: Clock,
    title: "Before & After School",
    text: "Supervised care options and after-school club schedules.",
  },
  {
    icon: Megaphone,
    title: "Weekly Family Update",
    text: "Our weekly newsletter with announcements, reminders, and celebrations.",
  },
  {
    icon: CalendarDays,
    title: "Supply Lists",
    text: "Grade-level supply lists, published each summer.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Families"
        eyebrow="For Families"
        title="Partners in Every Step"
        description="Everything Elevate families need to stay informed, involved, and connected — from the parent portal to the school calendar."
        image={images.backpacksWalking}
      />

      {/* Quick links */}
      <nav aria-label="Family resources" className="border-b border-slate-200 bg-white">
        <ul className="container-site grid grid-cols-2 lg:grid-cols-4">
          {quickLinks.map(({ icon: Icon, label, href }, index) => (
            <li key={href} className={index > 0 ? "border-slate-200 max-lg:odd:border-l-0 sm:border-l" : ""}>
              <Link
                href={href}
                className="group flex items-center gap-3 px-2 py-6 font-display font-bold text-navy transition-colors hover:text-royal sm:px-6"
              >
                <Icon aria-hidden="true" className="size-5 text-royal" strokeWidth={1.75} />
                {label}
                <ArrowRight aria-hidden="true" className="ml-auto hidden size-4 transition-transform group-hover:translate-x-0.5 sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Parent portal */}
      <section id="parent-portal" aria-labelledby="portal-title" className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              id="portal-title"
              eyebrow="Parent Portal"
              title="Stay Connected to Your Child's Learning"
              description="Enrolled families use the parent portal to view grades and attendance, message teachers, update contact information, and receive school announcements."
            />
            <DemoNotice className="mt-7 rounded-sm bg-gold-100 p-4 text-navy">
              The parent portal is available to enrolled families. This demonstration site does not
              include a live portal login.
            </DemoNotice>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 font-display font-bold text-navy"
            >
              <span className="border-b-2 border-gold pb-0.5 group-hover:text-royal">Need help with portal access?</span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <Reveal className="lg:col-span-6">
            <Media image={images.libraryStacks} sizes="(min-width: 1024px) 48vw, 100vw" className="aspect-[4/3] rounded-sm" />
          </Reveal>
        </div>
      </section>

      {/* Calendar */}
      <section id="calendar" aria-labelledby="calendar-title" className="scroll-mt-28 bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="calendar-title"
              eyebrow="School Calendar"
              title="The Year at a Glance"
              description="The official calendar, with exact dates, is shared with enrolled families each summer."
            />
            <SampleBadge label="Sample calendar" className="mt-6" />
          </div>
          <ol className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
            {sampleCalendar.map((row) => (
              <li key={row.month} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <span className="font-display font-bold text-royal">{row.month}</span>
                <span className="text-navy">{row.item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" aria-labelledby="resources-title" className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="resources-title"
            eyebrow="Family Resources"
            title="Helpful Information"
            description="Current families receive these resources through the parent portal and weekly family update."
          />
          <ul className="mt-14 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map(({ icon: Icon, title, text }, index) => (
              <Reveal as="li" key={title} delay={(index % 3) * 0.06} className="flex gap-4 border-t border-slate-200 py-7">
                <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-royal" strokeWidth={1.75} />
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-body">{text}</p>
                  <p className="mt-2 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                    Available to enrolled families
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Involvement */}
      <section id="involvement" aria-labelledby="involvement-title" className="scroll-mt-28 bg-sky py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="involvement-title"
              eyebrow="Get Involved"
              title="There's a Place for Every Family"
              description="Whether you have an hour a year or an hour a week, there are meaningful ways to contribute."
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {[
              ["Family Council", "Help plan community events and share family perspectives with school leaders."],
              ["Classroom volunteers", "Read with students, chaperone field trips, or help with special projects."],
              ["Family workshops", "Join sessions on literacy, math at home, and supporting the middle school transition."],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.07} className="border-t-2 border-gold pt-6">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-body">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrollmentCTA
        title="Know a Family Who Would Love Elevate?"
        description="Enrollment for 2027–2028 is open to families across North Carolina. Share the next step with a friend."
      />
    </>
  );
}
