import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EventList } from "@/components/shared/EventList";
import { DemoNotice } from "@/components/ui/demo-notice";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { upcomingEvents } from "@/data/events";

export function UpcomingEvents() {
  return (
    <section aria-labelledby="events-title" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Visit & Connect</Eyebrow>
            <h2 id="events-title" className="mt-4 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl">
              Upcoming Events
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              The best way to know if Elevate is right for your family is to see it for yourself.
              Join us for an information session, open house, or family event.
            </p>
            <DemoNotice className="mt-6">
              Events shown are sample listings for this demonstration site — they are not
              scheduled real-world events.
            </DemoNotice>
            <Link
              href="/admissions#events"
              className="group mt-8 inline-flex items-center gap-2 font-display font-bold text-navy"
            >
              <span className="border-b-2 border-gold pb-0.5 group-hover:text-royal">
                All admissions events
              </span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="lg:col-span-8">
          <EventList events={upcomingEvents} />
        </div>
      </div>
    </section>
  );
}
