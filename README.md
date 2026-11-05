# Elevate Charter Academy — EnrollRise demo site

A production-quality website for **Elevate Charter Academy**, a _fictional_ tuition-free K–8 public charter school in North Carolina, built to demonstrate the EnrollRise enrollment platform.

Built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS v4, shadcn-style UI primitives (Radix + CVA), Lucide icons, and Motion.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build
```

Copy `.env.example` to `.env.local` to configure integrations. Every variable is optional.

## Project structure

```text
app/                      Routes: /, /about, /academics, /admissions, /student-life,
                          /families, /contact, /privacy, /accessibility, sitemap, robots
components/
  layout/                 Header, MobileNavigation (Radix Dialog), Footer, Logo, SocialIcons
  home/                   Home page sections (Hero … EnrollmentCTA)
  forms/                  FamilyInterestForm + InquirySection wrapper
  enrollrise/             EnrollmentButton — the single reusable enrollment CTA
  shared/                 EventList, JsonLd
  ui/                     Button, form controls, Media, Reveal, PageHero, headings, notices
data/                     Mock content: school profile, navigation, events, programs,
                          testimonials, image library
lib/
  enrollrise.ts           EnrollRise adapter — resolves every CTA destination from config
  inquiry.ts              Family inquiry submission adapter (endpoint or demo mode)
  utils.ts                cn(), JSON-LD serializer
public/images/            Locally stored photography (Unsplash License)
```

## EnrollRise integration

| Interaction | Action key | Env variable | Demo fallback |
| --- | --- | --- | --- |
| Apply Now → Enrollment Application | `apply` | `NEXT_PUBLIC_ENROLLRISE_APPLY_URL` | `/admissions#apply` |
| Request Information → Lead Capture | `inquire` | `NEXT_PUBLIC_ENROLLRISE_INQUIRY_URL` | `/contact#inquiry` |
| Schedule a Tour → Campus Tour Registration | `tour` | `NEXT_PUBLIC_ENROLLRISE_TOUR_URL` | `/admissions#tour` |
| RSVP → Event Registration | `rsvp` | `NEXT_PUBLIC_ENROLLRISE_EVENT_URL` | `/contact#inquiry` |
| Family Interest Form → Prospective Family Record | — | `NEXT_PUBLIC_ENROLLRISE_INQUIRY_ENDPOINT` or `NEXT_PUBLIC_ENROLLRISE_FORM_EMBED_URL` | Labeled demo mode |

- URLs support `{schoolId}` and `{eventId}` tokens; event IDs come from `data/events.ts`.
- All CTAs render `data-enrollrise-action` (and `data-enrollrise-event`) attributes so an embed script can intercept them later.
- With no endpoint configured, the form validates, shows a loading state, and then a clearly labeled **demo submission** screen stating nothing was saved or sent.
- Setting `NEXT_PUBLIC_ENROLLRISE_FORM_EMBED_URL` swaps the native form for the hosted EnrollRise form.

## Content honesty

- The school, events, schedules, calendar, and testimonials are fictional and labeled as samples on the page.
- No real address, phone number, email, or social account is published.
- The site is `noindex` by default; set `NEXT_PUBLIC_ALLOW_INDEXING=true` to change that.

## Accessibility

Skip link, landmark structure, one `h1` per page, keyboard-operable menu with focus trap and restore, visible focus rings (gold on dark surfaces), AA color contrast, labeled form fields with announced errors, and `prefers-reduced-motion` support.
