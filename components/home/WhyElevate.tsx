import {
  Compass,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";

import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { images } from "@/data/images";

type Benefit = { icon: LucideIcon; title: string; text: string };

const benefits: Benefit[] = [
  {
    icon: Compass,
    title: "Personalized Learning",
    text: "Small-group instruction and regular check-ins help each student move at the right pace — with support when they need it and stretch when they're ready.",
  },
  {
    icon: UserRoundCheck,
    title: "Dedicated Educators",
    text: "Teachers who plan together, learn together, and take the time to understand how each child thinks.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supportive Environment",
    text: "Clear routines, kind expectations, and adults who notice — so students feel secure enough to take risks in their learning.",
  },
  {
    icon: Cpu,
    title: "STEM & Technology Integration",
    text: "Coding, robotics, and lab science are part of the regular week, not an occasional extra.",
  },
  {
    icon: Sprout,
    title: "Character & Leadership Development",
    text: "From classroom jobs in kindergarten to student council in middle school, students practice responsibility every day.",
  },
  {
    icon: HeartHandshake,
    title: "Strong Family Partnerships",
    text: "Regular conferences, open communication, and many ways for families to be part of school life.",
  },
];

export function WhyElevate() {
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Why Families Choose Elevate</Eyebrow>
              <h2 id="why-title" className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
                More Than a School.{" "}
                <span className="text-royal">A Foundation for Life.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                Families choose Elevate for strong academics — and stay for the way their children
                grow as people. Here is what shapes the experience.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="relative mt-10">
              <Media
                image={images.classroomRug}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/3] rounded-sm"
              />
              <div aria-hidden="true" className="absolute -right-3 -bottom-3 -z-10 h-full w-full bg-sky" />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={(index % 2) * 0.08}
                className="border-t border-slate-200 py-8 sm:py-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold tracking-widest text-gold-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon aria-hidden="true" className="size-6 text-royal" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2.5 leading-relaxed text-body">{text}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-6 grid gap-4 sm:grid-cols-5">
            <Media
              image={images.middleSchoolClass}
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="aspect-[16/10] rounded-sm sm:col-span-3"
            />
            <Media
              image={images.studentSmiling}
              sizes="(min-width: 1024px) 22vw, 100vw"
              className="aspect-[16/10] rounded-sm sm:col-span-2 sm:aspect-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
