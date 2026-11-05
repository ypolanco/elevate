import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Media } from "@/components/ui/media";
import type { SiteImage } from "@/data/images";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  image: SiteImage;
  breadcrumb: string;
  children?: React.ReactNode;
};

/** Interior page hero: navy editorial panel with an offset photograph. */
export function PageHero({ eyebrow, title, description, image, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="surface-dark relative overflow-hidden bg-navy" aria-labelledby="page-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_-10%_-20%,rgba(40,100,220,0.35),transparent_60%)]"
      />
      <div className="container-site relative grid items-center gap-10 pt-10 pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-20">
        <div className="lg:col-span-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/70">
              <li>
                <Link href="/" className="link-underline hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="text-white">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          <p className="eyebrow mt-8 flex items-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            {eyebrow}
          </p>
          <h1
            id="page-title"
            className="mt-4 text-[2.4rem] leading-[1.04] font-extrabold text-white sm:text-5xl lg:text-[3.6rem]"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        <div className="relative lg:col-span-6">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden h-2/3 w-2/3 border border-gold/60 lg:block"
          />
          <Media
            image={image}
            preload
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] rounded-sm shadow-2xl shadow-navy-950/40 lg:aspect-[5/4]"
          />
        </div>
      </div>
    </section>
  );
}
