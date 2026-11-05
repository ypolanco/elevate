import Link from "next/link";
import { Clock, MapPin, MonitorPlay } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { SampleBadge } from "@/components/ui/demo-notice";
import { Reveal } from "@/components/ui/reveal";
import type { SchoolEvent } from "@/data/events";
import { cn } from "@/lib/utils";

type EventListProps = {
  events: SchoolEvent[];
  /** Show the longer description (used on the Admissions page). */
  detailed?: boolean;
  headingLevel?: "h3" | "h4";
};

export function EventList({ events, detailed = false, headingLevel = "h3" }: EventListProps) {
  const Heading = headingLevel;
  return (
    <ol className="divide-y divide-slate-200 border-y border-slate-200">
      {events.map((event, index) => (
        <Reveal as="li" key={event.id} delay={index * 0.06}>
          <article
            id={`event-${event.id}`}
            className="group grid scroll-mt-32 gap-5 py-7 sm:grid-cols-[6.5rem_1fr] lg:grid-cols-[7.5rem_1fr_auto] lg:items-center lg:gap-10"
          >
            <div className="flex items-baseline gap-3 sm:block">
              <p className="font-display text-sm font-bold tracking-[0.16em] text-royal uppercase">
                {event.month}
              </p>
              <p className="font-display text-5xl leading-none font-extrabold text-navy sm:mt-1 sm:text-6xl">
                {event.day}
              </p>
              <p className="text-sm text-slate-600 sm:mt-2">
                {event.weekday}, {event.year}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold tracking-wider text-navy-600 uppercase">
                  {event.type}
                </span>
                <span aria-hidden="true" className="text-slate-300">
                  /
                </span>
                <SampleBadge label="Sample event" />
              </div>
              <Heading className="mt-2 text-xl font-bold sm:text-2xl">{event.title}</Heading>
              <p className="mt-2 max-w-2xl leading-relaxed text-body">
                {detailed ? event.details : event.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
                <li className="flex items-center gap-1.5">
                  <Clock aria-hidden="true" className="size-4 text-royal" />
                  {event.time}
                </li>
                <li className="flex items-center gap-1.5">
                  {event.format === "Virtual" ? (
                    <MonitorPlay aria-hidden="true" className="size-4 text-royal" />
                  ) : (
                    <MapPin aria-hidden="true" className="size-4 text-royal" />
                  )}
                  {event.format}
                </li>
              </ul>
            </div>

            <div className={cn("flex flex-wrap items-center gap-4 sm:col-start-2 lg:col-start-auto lg:justify-end")}>
              <EnrollmentButton
                action="rsvp"
                eventId={event.id}
                size="sm"
                variant="navy"
                ariaLabel={`RSVP for ${event.title}`}
              />
              {!detailed ? (
                <Link
                  href={`/admissions#event-${event.id}`}
                  className="link-underline text-sm font-semibold text-royal"
                  aria-label={`Learn more about ${event.title}`}
                >
                  Learn More
                </Link>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
