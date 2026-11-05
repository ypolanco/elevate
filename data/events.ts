/**
 * MOCK EVENT DATA — for demonstration only.
 *
 * These are clearly fictional sample events. In production this module would be
 * replaced by an EnrollRise event feed; each event's `id` is passed to the RSVP
 * CTA so it can map to an EnrollRise event registration.
 *
 * Dates are stored as display strings (no runtime date math) so rendering is
 * deterministic and timezone-safe.
 */

export type EventType =
  | "Information Session"
  | "Open House"
  | "Family Event"
  | "Student Showcase";

export type SchoolEvent = {
  id: string;
  title: string;
  type: EventType;
  month: string;
  day: string;
  weekday: string;
  year: string;
  time: string;
  format: "On Campus" | "Virtual";
  description: string;
  details: string;
};

export const upcomingEvents: SchoolEvent[] = [
  {
    id: "family-information-session",
    title: "Family Information Session",
    type: "Information Session",
    month: "Jan",
    day: "14",
    weekday: "Thursday",
    year: "2027",
    time: "6:00 – 7:00 p.m.",
    format: "Virtual",
    description:
      "An overview of our academic program, school day, and the 2027–2028 enrollment process, with time for questions.",
    details:
      "Hear from our admissions team about what makes Elevate different, how the application and lottery process works, and what families can expect in the months ahead.",
  },
  {
    id: "campus-open-house",
    title: "Campus Open House",
    type: "Open House",
    month: "Jan",
    day: "30",
    weekday: "Saturday",
    year: "2027",
    time: "10:00 a.m. – 12:00 p.m.",
    format: "On Campus",
    description:
      "Walk our hallways, visit classrooms, and meet teachers and staff. Children are welcome to join.",
    details:
      "Self-guided and staff-led tours run throughout the morning. Stop by STEM, arts, and library spaces, and meet educators from every grade band.",
  },
  {
    id: "kindergarten-readiness-night",
    title: "Kindergarten Readiness Night",
    type: "Family Event",
    month: "Feb",
    day: "11",
    weekday: "Thursday",
    year: "2027",
    time: "5:30 – 7:00 p.m.",
    format: "On Campus",
    description:
      "Practical guidance for families of rising kindergarteners — routines, early literacy, and what a day in K looks like.",
    details:
      "Our kindergarten team shares simple ways to build readiness at home and walks through a typical kindergarten day, from morning meeting to dismissal.",
  },
  {
    id: "stem-discovery-day",
    title: "STEM Discovery Day",
    type: "Student Showcase",
    month: "Mar",
    day: "6",
    weekday: "Saturday",
    year: "2027",
    time: "9:00 a.m. – 12:00 p.m.",
    format: "On Campus",
    description:
      "Hands-on stations led by students and teachers: robotics, engineering challenges, and science experiments for all ages.",
    details:
      "Prospective families can try hands-on activities alongside current students and see how inquiry and design thinking show up in every grade.",
  },
];
