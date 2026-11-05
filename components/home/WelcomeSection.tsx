import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export function WelcomeSection() {
  return (
    <section aria-labelledby="welcome-title" className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          {/* Gold decorative frame */}
          <div aria-hidden="true" className="absolute -top-5 -left-5 h-40 w-40 border-t-4 border-l-4 border-gold sm:-top-6 sm:-left-6" />
          <Media
            image={images.teacherRaisedHands}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/3] rounded-sm lg:aspect-[5/6]"
          />
          <div className="absolute -right-2 -bottom-8 max-w-[15rem] bg-navy p-5 text-white shadow-xl sm:-right-6 sm:p-6">
            <p className="font-display text-3xl font-extrabold text-gold">K–8</p>
            <p className="mt-1 text-sm leading-snug text-white/85">
              One connected community, from kindergarten through eighth grade.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:pl-4">
          <Eyebrow>Our School</Eyebrow>
          <h2 id="welcome-title" className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
            A Place to Learn.
            <br />
            <span className="text-royal">A Community to Belong.</span>
          </h2>
          <div aria-hidden="true" className="mt-7 h-1 w-14 rounded-full bg-gold" />
          <p className="mt-7 text-lg leading-relaxed text-body">
            Elevate Charter Academy combines rigorous academics with meaningful relationships,
            hands-on discovery, and a commitment to helping every child thrive. Our educators
            create an environment where curiosity is encouraged, individuality is celebrated, and
            students are challenged to reach new heights.
          </p>
          <dl className="mt-9 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2">
            <div>
              <dt className="font-display font-bold text-navy">Rigorous & joyful</dt>
              <dd className="mt-1 text-sm leading-relaxed text-body">
                High expectations paired with lessons students look forward to.
              </dd>
            </div>
            <div>
              <dt className="font-display font-bold text-navy">Known by name</dt>
              <dd className="mt-1 text-sm leading-relaxed text-body">
                Advisors and teachers who partner closely with every family.
              </dd>
            </div>
          </dl>
          <Link
            href="/about#mission"
            className={cn(buttonVariants({ variant: "navy", size: "lg" }), "mt-10")}
          >
            Discover Our Mission
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover/button:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
