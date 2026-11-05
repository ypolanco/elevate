import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";

export const enrollmentSteps = [
  {
    step: "01",
    title: "Discover Elevate",
    text: "Explore our programs, attend an information session, or schedule a campus visit.",
  },
  {
    step: "02",
    title: "Submit Your Application",
    text: "Complete the online enrollment application.",
  },
  {
    step: "03",
    title: "Stay Connected",
    text: "Receive important admissions updates and next steps.",
  },
];

export function EnrollmentSteps() {
  return (
    <ol className="relative">
      {enrollmentSteps.map((item, index) => (
        <Reveal as="li" key={item.step} delay={index * 0.1} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
          {/* connector */}
          {index < enrollmentSteps.length - 1 ? (
            <span aria-hidden="true" className="absolute top-14 bottom-0 left-7 w-px bg-navy/15" />
          ) : null}
          <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white font-display text-lg font-extrabold text-navy">
            <span className="sr-only">Step </span>
            {item.step}
          </span>
          <div className="pt-2.5">
            <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
            <p className="mt-2 max-w-md leading-relaxed text-body">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function AdmissionsSection() {
  return (
    <section aria-labelledby="admissions-title" className="relative overflow-hidden bg-sky py-20 sm:py-24 lg:py-32">
      {/* Decorative rising-sun arcs */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 200"
        className="pointer-events-none absolute -right-24 -bottom-10 w-[34rem] text-royal/10 lg:w-[46rem]"
      >
        <path d="M20 200a180 180 0 0 1 360 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M70 200a130 130 0 0 1 260 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M120 200a80 80 0 0 1 160 0" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <Eyebrow>Admissions & Enrollment</Eyebrow>
          <h2 id="admissions-title" className="mt-4 text-[2.3rem] leading-[1.05] font-extrabold sm:text-5xl lg:text-[3.4rem]">
            Your Child&apos;s Next Chapter Starts Here.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            Joining the Elevate family is simple. Explore our admissions process, connect with our
            team, and take the first step toward an inspiring educational experience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <EnrollmentButton action="apply" size="lg" showArrow />
            <EnrollmentButton action="inquire" variant="outline" size="lg" />
            <EnrollmentButton action="tour" label="Schedule a Campus Tour" variant="ghost" size="lg" />
          </div>

          <div className="mt-10 max-w-xl border-l-4 border-gold bg-white/70 p-5">
            <p className="text-sm leading-relaxed text-body">
              <strong className="font-semibold text-navy">Open to every family.</strong> As a
              tuition-free public charter school, Elevate welcomes students from across North
              Carolina. If applications exceed available seats in a grade, admission is decided by
              a random lottery.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pt-4">
          <div className="rounded-sm bg-white p-7 shadow-[0_30px_60px_-30px_rgba(15,35,64,0.3)] sm:p-10">
            <p className="eyebrow text-royal">Three simple steps</p>
            <div className="mt-8">
              <EnrollmentSteps />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
