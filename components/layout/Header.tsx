"use client";

import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { Logo } from "@/components/layout/Logo";
import { buttonVariants } from "@/components/ui/button";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { mainNavigation, utilityNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="surface-dark hidden bg-navy-950 text-white/85 md:block">
        <div className="container-site flex h-10 items-center justify-between text-[0.8rem]">
          <p className="flex items-center gap-2 font-medium">
            <GraduationCap aria-hidden="true" className="size-4 text-gold" />
            Tuition-Free K–8 Education
            <span aria-hidden="true" className="mx-2 h-3 w-px bg-white/25" />
            <span className="text-white/65">Now enrolling for 2027–2028</span>
          </p>
          <nav aria-label="Utility">
            <ul className="flex items-center gap-6">
              {utilityNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Primary header */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300 supports-[backdrop-filter]:bg-white/85",
          scrolled ? "border-slate-200 shadow-[0_6px_24px_-12px_rgba(15,35,64,0.25)]" : "border-transparent",
        )}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {mainNavigation.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block rounded-md px-2.5 py-2 font-display text-[0.92rem] font-semibold transition-colors xl:px-3",
                        active ? "text-navy" : "text-slate-600 hover:text-navy",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300 xl:inset-x-3",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Opens the EnrollRise "General interest" form in a modal (bound by embed/v1.js). */}
            <button
              type="button"
              data-enrollrise-experience="hRIfvTRLemci"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden h-10 md:inline-flex lg:hidden xl:inline-flex")}
            >
              Request information
            </button>
            <Script src="https://enrollrise.com/embed/v1.js" strategy="afterInteractive" />
            <EnrollmentButton action="apply" size="sm" className="hidden h-10 sm:inline-flex" />
            <MobileNavigation pathname={pathname} />
          </div>
        </div>
      </header>
    </>
  );
}
