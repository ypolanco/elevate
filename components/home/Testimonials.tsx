import { Reveal } from "@/components/ui/reveal";
import { DemoNotice } from "@/components/ui/demo-notice";
import { Eyebrow } from "@/components/ui/section-heading";
import { sampleTestimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 36" className={cn("h-9 w-12 text-gold", className)}>
      <path
        d="M0 36V22.4C0 9.6 6.4 2.1 19.2 0l2 5.2c-6.6 1.6-10 5.4-10.4 11.2H20V36H0Zm28 0V22.4C28 9.6 34.4 2.1 47.2 0l.8 5.2c-6.6 1.6-10 5.4-10.4 11.2H48V36H28Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Testimonials() {
  const [featured, ...rest] = sampleTestimonials;
  return (
    <section aria-labelledby="testimonials-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <Eyebrow>Family Perspectives</Eyebrow>
          <h2 id="testimonials-title" className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
            What Families Value Most
          </h2>
          <DemoNotice className="mt-5">
            These are sample testimonials written for this demonstration website to illustrate
            the family experience. They are not verified reviews from real parents.
          </DemoNotice>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="surface-dark flex h-full flex-col justify-between bg-navy p-8 sm:p-12">
              <div>
                <QuoteMark />
                <p className="mt-3 eyebrow text-[0.68rem] text-gold">{featured.theme}</p>
                <blockquote className="mt-5 font-display text-2xl leading-snug font-semibold text-white sm:text-[1.9rem] sm:leading-[1.3]">
                  <p>{featured.quote}</p>
                </blockquote>
              </div>
              <figcaption className="mt-10 border-t border-white/15 pt-6 text-sm text-white/75">
                {featured.attribution}
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            {rest.map((item, index) => (
              <Reveal key={item.id} delay={0.08 * (index + 1)}>
                <figure className="flex h-full flex-col justify-between border border-slate-200 bg-cream p-8">
                  <div>
                    <QuoteMark className="h-6 w-8" />
                    <p className="mt-3 eyebrow text-[0.68rem] text-royal">{item.theme}</p>
                    <blockquote className="mt-3 text-lg leading-relaxed text-navy">
                      <p>{item.quote}</p>
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 text-sm text-slate-600">{item.attribution}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
