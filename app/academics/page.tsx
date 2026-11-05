import type { Metadata } from "next";
import { Check } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { EnrollmentCTA } from "@/components/home/EnrollmentCTA";
import { SampleBadge } from "@/components/ui/demo-notice";
import { Media } from "@/components/ui/media";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { images, type SiteImage } from "@/data/images";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Academic Programs",
  description:
    "Explore Elevate Charter Academy's K–5 elementary program, 6–8 middle school, STEM & Innovation, and Arts & Enrichment.",
  alternates: { canonical: "/academics" },
  openGraph: { title: "Academic Programs | Elevate Charter Academy", url: "/academics" },
};

const principles = [
  {
    title: "Strong foundations",
    text: "Explicit, sequenced instruction in reading, writing, and math builds the skills students need to tackle complex work.",
  },
  {
    title: "Learning by doing",
    text: "Labs, projects, discussions, and design challenges help students apply what they learn and remember it.",
  },
  {
    title: "Feedback that moves learning",
    text: "Frequent checks for understanding let teachers adjust instruction and help students see their own growth.",
  },
];

const sectionImages: Record<string, SiteImage> = {
  elementary: images.lettersPlaydough,
  "middle-school": images.classroomBack,
  stem: images.scienceModel,
  arts: images.musicRoom,
};

const programDetail: Record<string, string> = {
  elementary:
    "In kindergarten through fifth grade, students build the habits and skills that make future learning possible. Literacy blocks pair phonics and fluency with rich read-alouds; math lessons move from hands-on models to confident problem-solving. Daily morning meetings help students practice kindness, cooperation, and self-management.",
  "middle-school":
    "Sixth through eighth graders take on more independence and responsibility. Students read and write across disciplines, conduct research, present their work, and take on leadership roles. Every student belongs to an advisory group with a dedicated adult who helps them set goals and plan for high school.",
  stem:
    "Science, technology, engineering, and math come alive through regular hands-on work. Younger students explore coding with screen-free robots and tablets; older students design, test, and improve solutions to real-world problems. Every grade takes part in our annual STEM showcase.",
  arts:
    "Every student participates in visual art, music, and physical education each week. Students learn technique, explore their creativity, and share their work in seasonal performances and exhibitions. Library time builds a love of reading and the skills to evaluate information.",
};

const sampleDays = {
  elementary: [
    ["7:45", "Arrival & breakfast"],
    ["8:05", "Morning meeting"],
    ["8:30", "Literacy block"],
    ["10:15", "Recess"],
    ["10:35", "Mathematics"],
    ["11:45", "Lunch"],
    ["12:30", "Science or social studies"],
    ["1:30", "Specials: art, music, PE, or STEM lab"],
    ["2:20", "Small groups & intervention"],
    ["3:15", "Dismissal"],
  ],
  middle: [
    ["7:45", "Arrival"],
    ["8:00", "Advisory"],
    ["8:25", "English language arts"],
    ["9:25", "Mathematics"],
    ["10:25", "Science"],
    ["11:25", "Lunch & recess"],
    ["12:10", "Social studies"],
    ["1:10", "Elective or enrichment"],
    ["2:10", "Physical education"],
    ["3:15", "Dismissal & clubs"],
  ],
};

const supports = [
  {
    title: "Multi-tiered support",
    text: "Students who need extra help receive targeted small-group instruction, with progress monitored regularly.",
  },
  {
    title: "Exceptional Children services",
    text: "Students with disabilities receive services and accommodations outlined in their IEP or 504 plan.",
  },
  {
    title: "Advanced learners",
    text: "Students ready for more receive enrichment, acceleration, and extension opportunities.",
  },
  {
    title: "English learners",
    text: "Multilingual students receive language support that helps them access grade-level learning.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Academics"
        eyebrow="Academic Programs"
        title="Rigorous Learning, Joyfully Taught"
        description="From first sounds and numbers in kindergarten to algebra and research papers in eighth grade, every year at Elevate builds on the last."
        image={images.boyWriting}
      >
        <EnrollmentButton action="apply" variant="gold" size="lg" showArrow />
        <EnrollmentButton action="tour" variant="outline-light" size="lg" />
      </PageHero>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="principles-title"
              eyebrow="Our Academic Approach"
              title="How Learning Works at Elevate"
            />
          </div>
          <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {principles.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.08} className="border-t-2 border-gold pt-6">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Program sections */}
      {programs.map((program, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={program.id}
            id={program.id}
            aria-labelledby={`${program.id}-title`}
            className={cn("scroll-mt-28 py-20 sm:py-24 lg:py-28", index % 2 === 0 ? "bg-cream" : "bg-white")}
          >
            <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className={cn("lg:col-span-6", reversed && "lg:order-2")}>
                <Media
                  image={sectionImages[program.id]}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="aspect-[4/3] rounded-sm"
                />
              </Reveal>
              <Reveal delay={0.08} className={cn("lg:col-span-6", reversed && "lg:order-1")}>
                <Eyebrow>{program.grades ?? "Across All Grades"}</Eyebrow>
                <h2 id={`${program.id}-title`} className="mt-4 text-3xl leading-tight font-extrabold sm:text-[2.6rem]">
                  {program.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-body">{programDetail[program.id]}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[0.95rem] leading-snug text-navy">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-royal" strokeWidth={2.5} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* A day at Elevate */}
      <section aria-labelledby="day-title" className="surface-dark bg-navy py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="day-title"
              tone="dark"
              eyebrow="A Day at Elevate"
              title="What a School Day Looks Like"
              description="Schedules vary by grade and teacher. These sample days show the general rhythm."
            />
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {(
              [
                ["Elementary (sample)", sampleDays.elementary],
                ["Middle School (sample)", sampleDays.middle],
              ] as const
            ).map(([label, rows]) => (
              <Reveal key={label}>
                <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                  {label.replace(" (sample)", "")}
                  <SampleBadge label="Sample schedule" className="border-white/30 bg-transparent text-white/75" />
                </h3>
                <ol className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {rows.map(([time, activity]) => (
                    <li key={time} className="grid grid-cols-[4.5rem_1fr] gap-4 py-3.5">
                      <span className="font-display font-bold text-gold tabular-nums">{time}</span>
                      <span className="text-white/85">{activity}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supports */}
      <section aria-labelledby="support-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="support-title"
            eyebrow="Support for Every Learner"
            title="Meeting Students Where They Are"
            description="Every student deserves instruction that fits. Our teams work together to provide the right support at the right time."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {supports.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.06} className="bg-white p-7">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-body">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <EnrollmentCTA
        title="See Learning in Action."
        description="The best way to understand our classrooms is to visit. Schedule a tour or start your application today."
      />
    </>
  );
}
