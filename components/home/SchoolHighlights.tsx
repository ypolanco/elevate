import { FlaskConical, GraduationCap, HandCoins, Users } from "lucide-react";

const highlights = [
  {
    icon: HandCoins,
    title: "Tuition-Free Education",
    text: "A public school open to North Carolina families — no tuition, ever.",
  },
  {
    icon: GraduationCap,
    title: "Kindergarten–8th Grade",
    text: "One connected journey from first letters to high school readiness.",
  },
  {
    icon: FlaskConical,
    title: "STEM-Focused Learning",
    text: "Hands-on science, coding, and engineering woven through every grade.",
  },
  {
    icon: Users,
    title: "Supportive School Community",
    text: "Educators and families who know every child by name.",
  },
];

export function SchoolHighlights() {
  return (
    <section id="highlights" aria-label="School highlights" className="relative z-10 scroll-mt-24 bg-white">
      <div className="container-site">
        <ul className="grid border-b border-slate-200 sm:grid-cols-2 lg:-mt-14 lg:grid-cols-4 lg:rounded-sm lg:border lg:bg-white lg:shadow-[0_30px_60px_-30px_rgba(15,35,64,0.35)]">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className={[
                "flex gap-4 py-7 sm:px-6 lg:flex-col lg:gap-5 lg:px-7 lg:py-9",
                index > 0 ? "border-t border-slate-200 sm:border-t-0" : "",
                index % 2 === 1 ? "sm:border-l lg:border-l" : "",
                index >= 2 ? "sm:border-t lg:border-t-0" : "",
                index === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky text-royal">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <h2 className="text-[1.05rem] font-bold">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
