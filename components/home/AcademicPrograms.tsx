import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

export function AcademicPrograms() {
  return (
    <section aria-labelledby="programs-title" className="bg-cream py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Academics</Eyebrow>
            <h2 id="programs-title" className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
              Learning That Goes Beyond the Classroom
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-body">
              An engaging, well-rounded academic experience designed to nurture confident
              thinkers, creative problem-solvers, and lifelong learners.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pb-12">
          {programs.map((program, index) => (
            <Reveal
              as="li"
              key={program.id}
              delay={index * 0.08}
              className={cn(index % 2 === 1 && "lg:translate-y-12")}
            >
              <article className="group relative flex h-full flex-col">
                <Media
                  image={program.image}
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
                  className="aspect-[4/5] rounded-sm"
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="flex flex-1 flex-col pt-6">
                  <p className="eyebrow text-[0.7rem] text-royal">{program.grades ?? "All Grades"}</p>
                  <h3 className="mt-2 text-xl font-bold">{program.title}</h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-body">{program.summary}</p>
                  <Link
                    href={program.href}
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-navy after:absolute after:inset-0 after:content-['']"
                    aria-label={`Learn more about ${program.title}`}
                  >
                    <span className="border-b-2 border-gold pb-0.5 transition-colors group-hover:text-royal">
                      Learn More
                    </span>
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
