import Link from "next/link";
import { Clock, Mail } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { Logo } from "@/components/layout/Logo";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { footerNavigation, type NavItem } from "@/data/navigation";
import { school } from "@/data/school";

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  const id = `footer-${title.toLowerCase()}`;
  return (
    <nav aria-labelledby={id}>
      <h2 id={id} className="eyebrow text-gold">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="link-underline text-white/80 transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="surface-dark bg-navy-950 text-white/80">
      <div className="container-site grid gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:pt-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 font-display text-lg font-semibold text-white">{school.tagline}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-white/70">
            A {school.type.toLowerCase()} serving families in {school.gradesShort} across{" "}
            {school.state}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <EnrollmentButton action="apply" variant="gold" size="sm" />
            <EnrollmentButton action="inquire" variant="outline-light" size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:col-span-4 lg:pl-6">
          <FooterColumn title="Explore" items={footerNavigation.explore} />
          <FooterColumn title="Families" items={footerNavigation.families} />
        </div>

        <div className="lg:col-span-4">
          <h2 className="eyebrow text-gold">Connect</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href="/contact#inquiry"
                className="link-underline inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail aria-hidden="true" className="size-4 text-gold" />
                Contact Form
              </Link>
            </li>
          </ul>
          <SocialIcons className="mt-5" />
          <div className="mt-7">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
              <Clock aria-hidden="true" className="size-4 text-gold" />
              School Hours <span className="font-sans text-xs font-normal text-white/60">(sample schedule)</span>
            </h3>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm">
              {school.hours.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="text-white/60">{row.label}</dt>
                  <dd className="text-white/85">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6">
          <p className="max-w-4xl text-xs leading-relaxed text-white/60">
            <strong className="font-semibold text-white/80">Demo website:</strong> {school.demoDisclaimer}
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {school.name}. All rights reserved.</p>
            <ul className="flex gap-6">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
