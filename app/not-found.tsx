import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { LogoMark } from "@/components/layout/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site max-w-2xl text-center">
        <LogoMark className="mx-auto size-14" />
        <p className="eyebrow mt-8 text-royal">Page not found</p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">This page took a different path.</h1>
        <p className="mt-5 text-lg leading-relaxed text-body">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={cn(buttonVariants({ variant: "navy", size: "lg" }))}>
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to home
          </Link>
          <EnrollmentButton action="inquire" variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
