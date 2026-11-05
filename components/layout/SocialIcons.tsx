import Link from "next/link";

import { socialLinks, type SocialLink } from "@/data/school";
import { cn } from "@/lib/utils";

const paths: Record<SocialLink["platform"], React.ReactNode> = {
  facebook: (
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" fill="currentColor" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <path d="M21.2 8.2a2.6 2.6 0 0 0-1.8-1.8C17.8 6 12 6 12 6s-5.8 0-7.4.4a2.6 2.6 0 0 0-1.8 1.8C2.4 9.8 2.4 12 2.4 12s0 2.2.4 3.8a2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-3.8.4-3.8s0-2.2-.4-3.8Z" fill="currentColor" />
      <path d="m10.1 14.9 4.8-2.9-4.8-2.9v5.8Z" fill="#0a182b" />
    </>
  ),
  linkedin: (
    <path d="M6.6 8.8H3.7V20h2.9V8.8ZM5.1 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.3 13.6c0-3-1.6-4.9-4.2-4.9-1.4 0-2.4.8-2.8 1.5V8.8h-2.8V20h2.9v-5.6c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h2.9v-6.4Z" fill="currentColor" />
  ),
};

/**
 * Social icons. Because this is a fictional school, no real accounts are linked:
 * entries with `href: null` route to the Contact page instead of a dead link.
 */
export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((social) => {
        const iconClasses =
          "flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold";
        const svg = (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[18px]">
            {paths[social.platform]}
          </svg>
        );
        return (
          <li key={social.platform}>
            {social.href ? (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClasses}
                aria-label={`${social.label} (opens in a new tab)`}
              >
                {svg}
              </a>
            ) : (
              <Link
                href="/contact#stay-connected"
                className={iconClasses}
                aria-label={`${social.label} — not active on this demo site; see how to stay connected`}
                title={`${social.label} account not active on this demo site`}
              >
                {svg}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
