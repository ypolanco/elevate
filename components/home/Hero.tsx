import Image from "next/image";
import Link from "next/link";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/images";
import { school } from "@/data/school";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="surface-dark relative isolate overflow-hidden bg-navy-950 lg:min-h-[min(46rem,calc(100svh-7.5rem))]"
    >
      {/* Photograph: stacked on mobile, full-bleed behind content on desktop */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-[85%_center]"
        />
        {/* Mobile: fade image into the navy content panel */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950 to-transparent lg:hidden"
        />
        {/* Desktop: directional scrim to keep text at AA contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(10,24,43,0.96)_0%,rgba(10,24,43,0.88)_34%,rgba(20,45,78,0.45)_58%,rgba(20,45,78,0)_78%)] lg:block"
        />
      </div>

      <div className="container-site relative -mt-16 pb-14 sm:-mt-24 lg:mt-0 lg:flex lg:min-h-[inherit] lg:items-center lg:py-24">
        <div className="max-w-xl xl:max-w-2xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/60 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
              {school.type}
            </p>
          </Reveal>

          <p className="eyebrow mt-7 text-gold">Now Enrolling for 2027–2028</p>

          <h1
            id="hero-title"
            className="mt-4 text-[2.65rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]"
          >
            Where Potential{" "}
            <span className="relative whitespace-nowrap">
              Rises
              <svg
                aria-hidden="true"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-[0.18em] w-full text-gold"
              >
                <path d="M2 10C50 3 140 1 198 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            and Futures Begin.
          </h1>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/85 sm:text-xl sm:leading-relaxed">
              At Elevate Charter Academy, we believe every child deserves an extraordinary
              education. Discover a tuition-free K–8 learning community built on academic
              excellence, creativity, and opportunity.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <EnrollmentButton action="apply" label="Apply for Enrollment" variant="gold" size="lg" showArrow />
              <Link href="/about" className={cn(buttonVariants({ variant: "outline-light", size: "lg" }))}>
                Explore Our School
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm font-medium text-white/80">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                Grades K–8
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                North Carolina
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                Tuition-Free
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#highlights"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white lg:flex"
      >
        <span>Scroll</span>
        <span aria-hidden="true" className="relative flex h-9 w-5 justify-center rounded-full border border-white/40">
          <span className="animate-scroll-cue mt-1.5 h-2 w-0.5 rounded-full bg-gold" />
        </span>
        <span className="sr-only">to explore highlights</span>
      </a>
    </section>
  );
}
