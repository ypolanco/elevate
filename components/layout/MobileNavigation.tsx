"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Menu, X } from "lucide-react";

import { EnrollmentButton } from "@/components/enrollrise/EnrollmentButton";
import { Logo } from "@/components/layout/Logo";
import { mainNavigation, utilityNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Slide-out navigation for small screens. Built on Radix Dialog for focus
 * trapping, Escape-to-close, scroll locking, and focus restoration.
 */
export function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);

  // Close the panel whenever the route changes (e.g. hash links on the same page).
  const [lastPath, setLastPath] = React.useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 px-3 font-display text-sm font-semibold text-navy transition-colors hover:bg-sky lg:hidden"
          aria-label="Open menu"
        >
          <Menu aria-hidden="true" className="size-5" />
          <span className="hidden min-[400px]:inline">Menu</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-[2px]" />
        <Dialog.Content
          className="sheet-content fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl focus:outline-none"
          aria-describedby={undefined}
          onClick={(event) => {
            // Close after choosing any link, including same-page hash links.
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <div className="flex h-[4.5rem] items-center justify-between border-b border-slate-200 px-5">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-md text-navy hover:bg-sky"
                aria-label="Close menu"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Site menu</Dialog.Title>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul>
              {mainNavigation.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-slate-100 last:border-0">
                    <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex items-center justify-between py-3.5 font-display text-lg font-bold",
                          active ? "text-royal" : "text-navy",
                        )}
                      >
                        <span>
                          {item.label}
                          {item.description ? (
                            <span className="mt-0.5 block font-sans text-sm font-normal text-slate-600">
                              {item.description}
                            </span>
                          ) : null}
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-royal"
                        />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
              {utilityNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-3 border-t border-slate-200 bg-sky/60 p-5">
            <p className="text-sm text-slate-600">
              Tuition-free K–8 · Now enrolling for 2027–2028
            </p>
            <EnrollmentButton action="apply" size="lg" className="w-full" showArrow />
            <EnrollmentButton action="tour" variant="outline" size="lg" className="w-full" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
