import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { images, type SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";

type Tile = { image: SiteImage; caption: string; className: string; sizes: string };

const tiles: Tile[] = [
  {
    image: images.collaboration,
    caption: "Classroom collaboration",
    className: "col-span-2 aspect-[4/3] lg:col-span-6 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    image: images.engineeringPlans,
    caption: "STEM & engineering",
    className: "col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-square lg:col-span-6 lg:aspect-auto",
    sizes: "(min-width: 1024px) 50vw, 50vw",
  },
  {
    image: images.paintedSmile,
    caption: "Arts & creativity",
    className: "aspect-[3/4] sm:aspect-square lg:col-span-3 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    image: images.soccer,
    caption: "Physical education",
    className: "aspect-[3/4] sm:aspect-square lg:col-span-3 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    image: images.parachute,
    caption: "Community celebrations",
    className: "col-span-2 aspect-[16/9] lg:col-span-6 lg:aspect-auto",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
];

export function SchoolLife() {
  return (
    <section aria-labelledby="life-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>Student Life</Eyebrow>
            <h2 id="life-title" className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
              Every Day Is an Opportunity to Grow.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Between lessons, labs, studios, and fields, students find their voice, their people,
              and the confidence to try something new.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/student-life"
              className="group inline-flex items-center gap-2 font-display font-bold text-navy"
            >
              <span className="border-b-2 border-gold pb-0.5 group-hover:text-royal">
                Explore Student Life
              </span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[15rem_15rem_15rem]">
            {tiles.map((tile, index) => (
              <li
                key={tile.caption}
                className={cn(
                  "group relative overflow-hidden rounded-sm",
                  tile.className,
                  // explicit desktop placement for the editorial collage
                  index === 0 && "lg:col-start-1 lg:row-start-1",
                  index === 1 && "lg:col-start-7 lg:row-start-1",
                  index === 2 && "lg:col-start-7 lg:row-start-2",
                  index === 3 && "lg:col-start-10 lg:row-start-2",
                  index === 4 && "lg:col-start-1 lg:row-start-3",
                )}
              >
                <figure className="h-full">
                  <Media
                    image={tile.image}
                    sizes={tile.sizes}
                    className="absolute inset-0"
                    imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/85 to-transparent" />
                  <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 font-display text-sm font-semibold text-white sm:bottom-4 sm:left-4 sm:text-base">
                    <span aria-hidden="true" className="h-0.5 w-4 bg-gold" />
                    {tile.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
