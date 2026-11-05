import type { Metadata } from "next";
import { Bot, BookOpen, Brush, Crown, Leaf, Music, Newspaper, Trophy, Users } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { EnrollmentCTA } from "@/components/home/EnrollmentCTA";
import { Media } from "@/components/ui/media";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Clubs, athletics, the arts, leadership, and community traditions at Elevate Charter Academy.",
  alternates: { canonical: "/student-life" },
  openGraph: { title: "Student Life | Elevate Charter Academy", url: "/student-life" },
};

const clubs = [
  { icon: Bot, name: "Robotics Club", grades: "Grades 3–8" },
  { icon: Crown, name: "Student Council", grades: "Grades 5–8" },
  { icon: Brush, name: "Art Studio", grades: "Grades K–8" },
  { icon: Music, name: "Chorus & Ensemble", grades: "Grades 3–8" },
  { icon: BookOpen, name: "Battle of the Books", grades: "Grades 4–8" },
  { icon: Leaf, name: "Garden Club", grades: "Grades K–5" },
  { icon: Newspaper, name: "Yearbook & Media", grades: "Grades 6–8" },
  { icon: Trophy, name: "Running Club", grades: "Grades 2–8" },
];

const traditions = [
  {
    season: "Fall",
    title: "Family Literacy Night",
    text: "Families read, write, and play word games together in classrooms across campus.",
  },
  {
    season: "Winter",
    title: "STEM Discovery Day",
    text: "Students lead hands-on stations showing what they've designed, built, and tested.",
  },
  {
    season: "Spring",
    title: "Arts Showcase",
    text: "An evening gallery and performance celebrating student artists and musicians.",
  },
  {
    season: "Year-end",
    title: "Field Day & 8th Grade Promotion",
    text: "A day of friendly competition and a heartfelt send-off for our oldest students.",
  },
];

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        breadcrumb="Student Life"
        eyebrow="Student Life"
        title="Every Day Is an Opportunity to Grow."
        description="Beyond academics, students at Elevate discover passions, build friendships, and practice leadership through clubs, athletics, the arts, and community traditions."
        image={images.tugOfWar}
      >
        <EnrollmentButton action="tour" variant="gold" size="lg" />
      </PageHero>

      {/* Collage intro */}
      <section aria-labelledby="community-life-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="community-life-title"
              eyebrow="Belonging"
              title="A Community Where Students Thrive"
              description="Students learn best when they feel connected. Daily routines like morning meeting and advisory give every child a place where they're known, heard, and encouraged."
            />
          </div>
          <Reveal className="grid grid-cols-5 gap-4 lg:col-span-7">
            <Media
              image={images.readingTogether}
              sizes="(min-width: 1024px) 22vw, 40vw"
              className="col-span-2 aspect-[3/4] rounded-sm"
              imageClassName="object-[30%_center]"
            />
            <Media
              image={images.paintBrushes}
              sizes="(min-width: 1024px) 34vw, 60vw"
              className="col-span-3 aspect-[4/3] self-end rounded-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* Clubs */}
      <section aria-labelledby="clubs-title" className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="clubs-title"
            eyebrow="Clubs & Activities"
            title="Find Your Thing"
            description="Clubs meet after school and during enrichment blocks, and offerings grow with student interest each year."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {clubs.map(({ icon: Icon, name, grades }, index) => (
              <Reveal as="li" key={name} delay={(index % 4) * 0.05} className="flex items-center gap-4 bg-white p-6">
                <Icon aria-hidden="true" className="size-6 shrink-0 text-royal" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-base font-bold">{name}</h3>
                  <p className="text-sm text-slate-600">{grades}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Athletics & arts */}
      <section aria-labelledby="active-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Media image={images.outdoorPlay} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/10] rounded-sm" />
            <h2 id="active-title" className="mt-8 text-3xl font-extrabold">Movement & Athletics</h2>
            <p className="mt-4 leading-relaxed text-body">
              Daily movement is part of every student&apos;s schedule. Physical education builds
              skills, teamwork, and healthy habits, while recess and outdoor learning give students
              time to play and recharge. Middle schoolers can join intramural and club sports.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Media image={images.piano} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/10] rounded-sm" />
            <h2 className="mt-8 text-3xl font-extrabold">Arts & Expression</h2>
            <p className="mt-4 leading-relaxed text-body">
              Visual art and music classes give every student the chance to create, perform, and
              reflect. Student work fills our hallways, and seasonal showcases invite families to
              celebrate the creativity happening in our studios.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership-title" className="surface-dark bg-navy py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="leadership-title"
              tone="dark"
              eyebrow="Character & Leadership"
              title="Growing Leaders at Every Age"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {[
              ["K–2", "Classroom jobs, kindness challenges, and learning to work as a team."],
              ["3–5", "Reading buddies with younger students and service projects for the community."],
              ["6–8", "Student council, peer mentoring, and leading school-wide events."],
            ].map(([band, text], index) => (
              <Reveal key={band} delay={index * 0.07} className="border-t border-white/20 pt-6">
                <p className="font-display text-3xl font-extrabold text-gold">{band}</p>
                <p className="mt-3 leading-relaxed text-white/80">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section aria-labelledby="traditions-title" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="traditions-title"
              eyebrow="Traditions"
              title="Celebrating Together"
              description="Throughout the year, community traditions bring students, families, and staff together."
            />
            <Reveal className="mt-10">
              <Media image={images.joyfulGroup} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/3] rounded-sm" />
            </Reveal>
          </div>
          <ol className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-7">
            {traditions.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.06} className="grid gap-2 py-7 sm:grid-cols-[8rem_1fr] sm:gap-8">
                <p className="eyebrow pt-1.5 text-royal">{item.season}</p>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{item.text}</p>
                </div>
              </Reveal>
            ))}
            <li className="flex items-center gap-3 py-6 text-sm text-slate-600">
              <Users aria-hidden="true" className="size-4 text-royal" />
              Families are always welcome at school celebrations.
            </li>
          </ol>
        </div>
      </section>

      <EnrollmentCTA />
    </>
  );
}
