import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { LogoMark } from "@/components/layout/Logo";
import { Reveal } from "@/components/ui/reveal";

type EnrollmentCTAProps = {
  title?: string;
  description?: string;
};

export function EnrollmentCTA({
  title = "Big Dreams Begin with a Strong Foundation.",
  description = "Discover what's possible at Elevate Charter Academy. We're excited to welcome your family.",
}: EnrollmentCTAProps) {
  return (
    <section aria-labelledby="cta-title" className="surface-dark relative isolate overflow-hidden bg-navy py-20 sm:py-24 lg:py-28">
      {/* Gold rising-sun accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 300"
        className="pointer-events-none absolute -bottom-px left-1/2 -z-10 w-[56rem] max-w-none -translate-x-1/2 opacity-90"
      >
        <path d="M60 300a240 240 0 0 1 480 0" fill="none" stroke="#E9B44C" strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M120 300a180 180 0 0 1 360 0" fill="none" stroke="#E9B44C" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M180 300a120 120 0 0 1 240 0" fill="#E9B44C" fillOpacity="0.08" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(50rem_24rem_at_50%_110%,rgba(40,100,220,0.35),transparent_70%)]"
      />

      <Reveal className="container-site text-center">
        <LogoMark tone="light" className="mx-auto size-14" />
        <h2
          id="cta-title"
          className="mx-auto mt-6 max-w-3xl text-[2.3rem] leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">{description}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <EnrollmentButton action="apply" label="Start Your Application" variant="gold" size="lg" showArrow />
          <EnrollmentButton action="tour" label="Schedule a Visit" variant="outline-light" size="lg" />
        </div>
      </Reveal>
    </section>
  );
}
