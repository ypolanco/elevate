import { CalendarCheck, MessagesSquare, ShieldCheck } from "lucide-react";

import { EnrollRiseInlineForm } from "@/components/enrollrise/EnrollRiseInlineForm";
import { FamilyInterestForm } from "@/components/forms/FamilyInterestForm";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";

const assurances = [
  {
    icon: MessagesSquare,
    title: "A real conversation",
    text: "Our admissions team follows up personally to answer your questions.",
  },
  {
    icon: CalendarCheck,
    title: "Invitations to visit",
    text: "Hear about tours, information sessions, and family events first.",
  },
  {
    icon: ShieldCheck,
    title: "Minimal information",
    text: "We never ask for sensitive student details on this form.",
  },
];

export function InquirySection({
  id = "inquiry",
  title = "Let's Start the Conversation",
  idPrefix = "interest",
  enrollRiseInlineId,
}: {
  id?: string;
  title?: string;
  idPrefix?: string;
  /** When set, renders the hosted EnrollRise inline form instead of the native form. */
  enrollRiseInlineId?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Request Information</Eyebrow>
          <h2 id={`${id}-title`} className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Tell us a little about your family and what you&apos;re looking for. We&apos;ll share
            information about the 2027–2028 school year and help you plan your next step.
          </p>
          <ul className="mt-10 space-y-6">
            {assurances.map(({ icon: Icon, title: itemTitle, text }) => (
              <li key={itemTitle} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky text-royal">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{itemTitle}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="lg:col-span-7">
          {enrollRiseInlineId ? (
            // EnrollRise switches to its split (blue hero panel) layout at 640px+;
            // keep the embed narrower so it uses the light-header layout.
            <EnrollRiseInlineForm formId={enrollRiseInlineId} className="mx-auto max-w-[600px]" />
          ) : (
            <FamilyInterestForm idPrefix={idPrefix} />
          )}
        </div>
      </div>
    </section>
  );
}
