import type { Metadata } from "next";
import Link from "next/link";

import { DemoNotice } from "@/components/ui/demo-notice";
import { Eyebrow } from "@/components/ui/section-heading";
import { school } from "@/data/school";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Elevate Charter Academy demonstration website handles information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site max-w-3xl">
        <Eyebrow>Policies</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <DemoNotice className="mt-6 rounded-sm bg-gold-100 p-4 text-navy">
          {school.name} is a fictional school, and this is a demonstration website. This policy
          describes how this demo site behaves; it is not the policy of a real institution.
        </DemoNotice>

        <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-body [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          <section>
            <h2>Information we ask for</h2>
            <p>
              The Family Interest Form asks only for what is needed to follow up with a prospective
              family:
            </p>
            <ul>
              <li>Parent or guardian first and last name</li>
              <li>Email address and, optionally, a phone number</li>
              <li>The student&apos;s intended grade and school year</li>
              <li>Optional areas of interest and a preferred contact method</li>
            </ul>
            <p>
              We intentionally do not ask for a student&apos;s name, date of birth, or other
              sensitive information on this form.
            </p>
          </section>

          <section>
            <h2>How form submissions are handled</h2>
            <p>
              When the site is not connected to an enrollment system, the form runs in{" "}
              <strong className="font-semibold text-navy">demo mode</strong>: information you enter
              stays in your browser and is not saved, stored, or sent anywhere.
            </p>
            <p>
              When a school connects the form to the EnrollRise platform, submissions are sent
              securely to create a prospective family record, used only to respond to your inquiry
              and share admissions information.
            </p>
          </section>

          <section>
            <h2>Communication consent</h2>
            <p>
              Submitting the form requires your consent to be contacted about enrollment using your
              preferred method. You can opt out of communications at any time.
            </p>
          </section>

          <section>
            <h2>Cookies and analytics</h2>
            <p>This demonstration site does not use advertising cookies or third-party trackers.</p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              Questions about this policy can be submitted through the{" "}
              <Link href="/contact" className="font-semibold text-royal underline underline-offset-2">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
