/**
 * SAMPLE TESTIMONIALS — illustrative only.
 *
 * These quotes were written for this demonstration website. They are not
 * verified reviews and are not attributed to real people.
 */
export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  theme: string;
};

export const sampleTestimonials: Testimonial[] = [
  {
    id: "welcoming-teachers",
    theme: "Welcoming teachers",
    quote:
      "Our daughter was nervous on the first day, and her teacher had already learned her name and that she loves horses. By the end of the week she was asking to leave early so she wouldn't miss morning meeting.",
    attribution: "Sample perspective · Parent of a kindergartener",
  },
  {
    id: "academic-growth",
    theme: "Academic growth",
    quote:
      "Math used to be the subject he avoided. His teachers found where the gaps were, worked with him in a small group, and kept us in the loop. This year he's the one explaining fractions at dinner.",
    attribution: "Sample perspective · Parent of a 4th grader",
  },
  {
    id: "community-attention",
    theme: "Community & individual attention",
    quote:
      "It feels like a small town. Teachers know our kids, families help each other with pickups, and when our son needed a little extra support in 7th grade, the advisory team noticed before we did.",
    attribution: "Sample perspective · Parent of two students",
  },
];
