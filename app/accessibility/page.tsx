import type { Metadata } from "next";
import Link from "next/link";

import { DemoNotice } from "@/components/ui/demo-notice";
import { Eyebrow } from "@/components/ui/section-heading";
import { school } from "@/data/school";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Elevate Charter Academy's commitment to an accessible website for every family.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <article className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site max-w-3xl">
        <Eyebrow>Policies</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Accessibility Statement</h1>
        <DemoNotice className="mt-6 rounded-sm bg-gold-100 p-4 text-navy">
          {school.name} is a fictional school; this statement describes the design goals of this
          demonstration website.
        </DemoNotice>

        <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-body [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          <section>
            <h2>Our commitment</h2>
            <p>
              Every family deserves equal access to information about their child&apos;s education.
              This website is designed to meet the Web Content Accessibility Guidelines (WCAG) 2.2
              Level AA.
            </p>
          </section>

          <section>
            <h2>Features of this site</h2>
            <ul>
              <li>A &ldquo;Skip to main content&rdquo; link and logical heading structure on every page</li>
              <li>Full keyboard navigation, including the mobile menu, with visible focus indicators</li>
              <li>Text and interface colors chosen to meet AA contrast ratios</li>
              <li>Descriptive alternative text for meaningful images</li>
              <li>Form fields with visible labels, clear required indicators, and announced errors</li>
              <li>Animations that respect your device&apos;s reduced-motion setting</li>
              <li>Layouts that reflow for small screens and browser zoom up to 400%</li>
            </ul>
          </section>

          <section>
            <h2>Feedback</h2>
            <p>
              If you encounter a barrier on this site, please let us know through the{" "}
              <Link href="/contact" className="font-semibold text-royal underline underline-offset-2">
                contact page
              </Link>{" "}
              and describe the page and the issue so it can be addressed.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
