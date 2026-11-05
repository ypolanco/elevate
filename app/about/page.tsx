import type { Metadata } from "next";
import { BookOpenCheck, HeartHandshake, Lightbulb, Scale, Sparkles, Users } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { EnrollmentCTA } from "@/components/home/EnrollmentCTA";
import { Media } from "@/components/ui/media";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/data/images";
import { school } from "@/data/school";

export const metadata: Metadata = {
  title: "About Elevate",
  description:
    "Learn about Elevate Charter Academy's mission, values, and approach to tuition-free K–8 public education in North Carolina.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Elevate Charter Academy", url: "/about" },
};

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    text: "We hold high expectations for every student and give them the support to meet them.",
  },
  {
    icon: Users,
    title: "Belonging",
    text: "Every child and family should feel known, welcomed, and valued from the first day.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    text: "Questions drive learning. We design lessons that invite students to wonder and investigate.",
  },
  {
    icon: Scale,
    title: "Integrity",
    text: "We teach and model honesty, responsibility, and respect — in the classroom and beyond.",
  },
];

const approach = [
  {
    title: "Know every child",
    text: "Teachers use regular check-ins, conferences, and classroom observation to understand each student's strengths and next steps.",
  },
  {
    title: "Teach for understanding",
    text: "Students explain their thinking, apply ideas to real problems, and revisit concepts until they truly stick.",
  },
  {
    title: "Grow the whole child",
    text: "Arts, movement, character, and community are part of the core experience — not extras.",
  },
];

const charterFacts = [
  {
    term: "Tuition-free",
    detail: "Elevate is a public school. There is no tuition and no cost to apply.",
  },
  {
    term: "Open to all",
    detail:
      "Any child eligible to attend public school in North Carolina may apply. When applications exceed available seats, admission is decided by a random lottery.",
  },
  {
    term: "Accountable",
    detail:
      "Charter schools operate under a charter with the State of North Carolina, are governed by a nonprofit board, and are accountable for student outcomes like all public schools.",
  },
  {
    term: "Free to innovate",
    detail:
      "Charter flexibility allows Elevate to design its own schedule, curriculum emphases, and enrichment programs around student needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About Elevate"
        title={school.tagline}
        description="Elevate Charter Academy is a tuition-free K–8 public charter school where rigorous academics and genuine relationships help every child reach new heights."
        image={images.libraryWindows}
      >
        <EnrollmentButton action="tour" variant="gold" size="lg" />
        <EnrollmentButton action="inquire" variant="outline-light" size="lg" />
      </PageHero>

      {/* Mission & vision */}
      <section id="mission" aria-labelledby="mission-title" className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Our Mission</Eyebrow>
            <h2 id="mission-title" className="sr-only">
              Mission and vision
            </h2>
            <blockquote className="mt-6 font-display text-[1.75rem] leading-[1.3] font-semibold text-navy sm:text-[2.2rem]">
              <span aria-hidden="true" className="mr-1 text-gold">
                &ldquo;
              </span>
              {school.mission}
              <span aria-hidden="true" className="text-gold">
                &rdquo;
              </span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-12">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-6 text-lg leading-relaxed text-body">{school.vision}</p>
            <p className="mt-5 leading-relaxed text-body">
              We believe that a great school is built on two things working together: teaching that
              challenges students to think deeply, and a community where every child feels safe
              enough to try.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="values-title"
            eyebrow="Our Values"
            title="What We Stand For"
            description="Four commitments guide decisions in our classrooms, hallways, and family partnerships."
          />
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map(({ icon: Icon, title, text }, index) => (
              <Reveal as="li" key={title} delay={index * 0.07} className="border-t-2 border-gold pt-7">
                <Icon aria-hidden="true" className="size-7 text-royal" strokeWidth={1.5} />
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-body">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-6">
            <Media
              image={images.educatorsTeam}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/3] rounded-sm"
            />
            <div aria-hidden="true" className="absolute -right-4 -bottom-4 -z-10 hidden h-full w-full border border-gold sm:block" />
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading
              id="approach-title"
              eyebrow="Our Approach"
              title="Great Teaching, Close Relationships"
              description="Our educators collaborate across grade levels so that each year builds on the last — and no student slips through the cracks."
            />
            <ol className="mt-10 space-y-7">
              {approach.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 0.08} className="flex gap-5">
                  <span className="font-display text-sm font-bold tracking-widest text-gold-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-body">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Charter explainer */}
      <section aria-labelledby="charter-title" className="surface-dark bg-navy py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="charter-title"
              tone="dark"
              eyebrow="Public Charter School"
              title="What Does “Charter School” Mean?"
              description="Charter schools are independently operated public schools. Here's what that means for families considering Elevate."
            />
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {charterFacts.map((fact, index) => (
              <Reveal key={fact.term} delay={index * 0.07} className="border-t border-white/20 pt-6">
                <dt className="font-display text-xl font-bold text-white">{fact.term}</dt>
                <dd className="mt-2 leading-relaxed text-white/80">{fact.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Community */}
      <section aria-labelledby="community-title" className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:order-2 lg:col-span-6">
            <Media
              image={images.loveToLearn}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/3] rounded-sm"
            />
          </div>
          <div className="lg:order-1 lg:col-span-6">
            <SectionHeading
              id="community-title"
              eyebrow="Our Community"
              title="Built Together with Families"
              description="From the first tour to eighth-grade promotion, families are partners in everything we do."
            />
            <ul className="mt-9 space-y-5">
              <li className="flex gap-4">
                <HeartHandshake aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-royal" strokeWidth={1.5} />
                <p className="leading-relaxed text-body">
                  <strong className="font-semibold text-navy">Family partnership.</strong> Regular
                  conferences, family workshops, and volunteer opportunities keep families connected
                  to classroom life.
                </p>
              </li>
              <li className="flex gap-4">
                <BookOpenCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-royal" strokeWidth={1.5} />
                <p className="leading-relaxed text-body">
                  <strong className="font-semibold text-navy">Clear communication.</strong> Families
                  receive regular updates on learning goals, progress, and upcoming events.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <EnrollmentCTA />
    </>
  );
}
