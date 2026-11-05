"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheck, FlaskConical, LoaderCircle, RotateCcw, Send, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select } from "@/components/ui/form-controls";
import { enrollRiseConfig, isInquiryEndpointConfigured } from "@/lib/enrollrise";
import {
  InquirySubmissionError,
  submitFamilyInquiry,
  type FamilyInquiry,
} from "@/lib/inquiry";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Options                                                             */
/* ------------------------------------------------------------------ */

export const gradeOptions = [
  { value: "K", label: "Kindergarten" },
  { value: "1", label: "1st Grade" },
  { value: "2", label: "2nd Grade" },
  { value: "3", label: "3rd Grade" },
  { value: "4", label: "4th Grade" },
  { value: "5", label: "5th Grade" },
  { value: "6", label: "6th Grade" },
  { value: "7", label: "7th Grade" },
  { value: "8", label: "8th Grade" },
];

const schoolYearOptions = [{ value: "2027-2028", label: "2027–2028" }];

const interestOptions = [
  { value: "stem", label: "STEM & Innovation" },
  { value: "arts", label: "Arts & Music" },
  { value: "athletics", label: "Physical Education & Athletics" },
  { value: "enrichment", label: "Clubs & Enrichment" },
  { value: "campus-tour", label: "Scheduling a campus tour" },
  { value: "info-session", label: "Attending an information session" },
];

const contactMethodOptions: { value: FamilyInquiry["contactMethod"]; label: string }[] = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone call" },
  { value: "text", label: "Text message" },
];

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

type FormValues = Omit<FamilyInquiry, "contactMethod"> & {
  contactMethod: FamilyInquiry["contactMethod"] | "";
};
type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const emptyValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  grade: "",
  schoolYear: "2027-2028",
  interests: [],
  contactMethod: "",
  consent: false,
};

const fieldOrder: FieldName[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "grade",
  "schoolYear",
  "contactMethod",
  "consent",
];

function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";

  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address, like name@example.com.";

  const digits = phoneDigits(values.phone);
  const needsPhone = values.contactMethod === "phone" || values.contactMethod === "text";
  if (needsPhone && !digits) errors.phone = "Please enter a phone number so we can reach you.";
  else if (digits && !(digits.length === 10 || (digits.length === 11 && digits.startsWith("1"))))
    errors.phone = "Please enter a 10-digit U.S. phone number.";

  if (!values.grade) errors.grade = "Please select your child's intended grade.";
  if (!values.schoolYear) errors.schoolYear = "Please select a school year.";
  if (!values.contactMethod) errors.contactMethod = "Please choose how you'd like us to contact you.";
  if (!values.consent) errors.consent = "Please confirm that we may contact you.";
  return errors;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type Status = "idle" | "submitting" | "sent" | "demo" | "error";

type FamilyInterestFormProps = {
  /** Unique prefix so ids stay unique if the form is rendered more than once. */
  idPrefix?: string;
  className?: string;
};

/**
 * Prospective-family lead capture form.
 *
 * - If NEXT_PUBLIC_ENROLLRISE_FORM_EMBED_URL is set, renders the hosted
 *   EnrollRise form instead (drop-in replacement).
 * - Otherwise renders this native form, which posts to the configured inquiry
 *   endpoint, or runs in a clearly labeled demo mode that sends nothing.
 */
export function FamilyInterestForm({ idPrefix = "interest", className }: FamilyInterestFormProps) {
  if (enrollRiseConfig.formEmbedUrl) {
    return (
      <iframe
        src={enrollRiseConfig.formEmbedUrl}
        title="Family interest form (EnrollRise)"
        className={cn("h-[52rem] w-full rounded-md border border-slate-200 bg-white", className)}
        loading="lazy"
      />
    );
  }
  return <NativeFamilyInterestForm idPrefix={idPrefix} className={className} />;
}

function NativeFamilyInterestForm({ idPrefix = "interest", className }: FamilyInterestFormProps) {
  const [values, setValues] = React.useState<FormValues>(emptyValues);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [submitError, setSubmitError] = React.useState("");
  const [submitted, setSubmitted] = React.useState<FormValues | null>(null);
  const resultHeadingRef = React.useRef<HTMLHeadingElement>(null);
  const errorSummaryRef = React.useRef<HTMLDivElement>(null);

  const demoMode = !isInquiryEndpointConfigured();
  const fid = (name: string) => `${idPrefix}-${name}`;
  const eid = (name: string) => `${idPrefix}-${name}-error`;

  React.useEffect(() => {
    if (status === "sent" || status === "demo") resultHeadingRef.current?.focus();
    if (status === "error") errorSummaryRef.current?.focus();
  }, [status]);

  function update<K extends FieldName>(name: K, value: FormValues[K]) {
    const next = { ...values, [name]: value };
    setValues(next);
    // Re-validate live only once a field has shown an error.
    if (errors[name] || (name === "contactMethod" && errors.phone)) {
      const nextErrors = validate(next);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: nextErrors[name],
        ...(name === "contactMethod" ? { phone: nextErrors.phone } : {}),
      }));
    }
  }

  function handleBlur(name: FieldName) {
    const message = validate(values)[name];
    // Only surface blur errors for fields the user has filled in incorrectly,
    // not for fields they simply tabbed past.
    const value = values[name];
    if (message && typeof value === "string" && value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: message }));
    }
  }

  function toggleInterest(value: string, checked: boolean) {
    update(
      "interests",
      checked ? [...values.interests, value] : values.interests.filter((v) => v !== value),
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = fieldOrder.find((name) => nextErrors[name]);
    if (firstInvalid) {
      const target =
        firstInvalid === "contactMethod"
          ? document.getElementById(fid("contactMethod-email"))
          : document.getElementById(fid(firstInvalid));
      target?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError("");
    try {
      const result = await submitFamilyInquiry({
        ...values,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        phone: phoneDigits(values.phone),
        contactMethod: values.contactMethod as FamilyInquiry["contactMethod"],
      });
      setSubmitted(values);
      setStatus(result.status);
    } catch (error) {
      setSubmitError(
        error instanceof InquirySubmissionError
          ? error.message
          : "Something unexpected happened. Please try again.",
      );
      setStatus("error");
    }
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(null);
    setStatus("idle");
    requestAnimationFrame(() => document.getElementById(fid("firstName"))?.focus());
  }

  /* ---------- Result states ---------- */

  if ((status === "sent" || status === "demo") && submitted) {
    const grade = gradeOptions.find((g) => g.value === submitted.grade)?.label;
    const method = contactMethodOptions.find((m) => m.value === submitted.contactMethod)?.label;
    const interests = submitted.interests
      .map((v) => interestOptions.find((o) => o.value === v)?.label)
      .filter(Boolean);

    return (
      <div className={cn("rounded-md border border-slate-200 bg-white p-6 sm:p-10", className)}>
        {status === "demo" ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-gold-100 px-2 py-1 text-xs font-bold tracking-wider text-navy uppercase">
              <FlaskConical aria-hidden="true" className="size-3.5" />
              Demo submission
            </span>
            <h3
              ref={resultHeadingRef}
              tabIndex={-1}
              className="mt-4 text-2xl font-bold focus:outline-none sm:text-3xl"
            >
              Thanks for trying the form, {submitted.firstName}.
            </h3>
            <p className="mt-3 leading-relaxed text-body">
              This website is a demonstration, and this form isn&apos;t connected to an enrollment
              system. <strong className="font-semibold text-navy">Your information was not saved or
              sent anywhere.</strong>
            </p>
            <p className="mt-3 leading-relaxed text-body">
              When connected to EnrollRise, this step would create a prospective family record and
              start admissions follow-up. Here&apos;s the non-sensitive summary that record would
              include:
            </p>
          </>
        ) : (
          <>
            <CircleCheck aria-hidden="true" className="size-10 text-royal" />
            <h3
              ref={resultHeadingRef}
              tabIndex={-1}
              className="mt-4 text-2xl font-bold focus:outline-none sm:text-3xl"
            >
              Thank you, {submitted.firstName}! We&apos;ve received your information.
            </h3>
            <p className="mt-3 leading-relaxed text-body">
              A member of our admissions team will follow up by {method?.toLowerCase()} with next
              steps for the {schoolYearOptions[0].label} school year.
            </p>
          </>
        )}

        <dl className="mt-6 grid gap-x-8 gap-y-3 border-t border-slate-200 pt-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-navy">Intended grade</dt>
            <dd className="text-body">{grade}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">School year</dt>
            <dd className="text-body">{schoolYearOptions[0].label}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Preferred contact</dt>
            <dd className="text-body">{method}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Interests</dt>
            <dd className="text-body">{interests.length ? interests.join(", ") : "None selected"}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" variant="outline" onClick={reset}>
            <RotateCcw aria-hidden="true" className="size-4" />
            {status === "demo" ? "Try the form again" : "Submit another inquiry"}
          </Button>
          <Button asChild variant="ghost">
            <Link href="/admissions">Explore admissions</Link>
          </Button>
        </div>
      </div>
    );
  }

  /* ---------- Form ---------- */

  const submitting = status === "submitting";
  const describedBy = (name: FieldName, hint?: string) =>
    [errors[name] ? eid(name) : null, hint].filter(Boolean).join(" ") || undefined;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby={fid("title")}
      aria-busy={submitting}
      className={cn("rounded-md border border-slate-200 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(15,35,64,0.25)] sm:p-9", className)}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 id={fid("title")} className="text-2xl font-bold">
            Family Interest Form
          </h3>
          <p className="mt-1.5 text-sm text-slate-600">
            Fields marked with <span className="font-semibold text-red-700">*</span> are required.
          </p>
        </div>
        {demoMode ? (
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-gold-100 px-2 py-1 text-xs font-bold tracking-wider text-navy uppercase">
            <FlaskConical aria-hidden="true" className="size-3.5" />
            Demo mode
          </span>
        ) : null}
      </div>

      {status === "error" ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 focus:outline-none"
        >
          <TriangleAlert aria-hidden="true" className="size-5 shrink-0" />
          <p>{submitError}</p>
        </div>
      ) : null}

      {/* Parent / guardian */}
      <fieldset className="mt-8">
        <legend className="eyebrow text-royal">Parent or Guardian</legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor={fid("firstName")} required>
              First name
            </Label>
            <Input
              id={fid("firstName")}
              name="firstName"
              autoComplete="given-name"
              required
              value={values.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              onBlur={() => handleBlur("firstName")}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={describedBy("firstName")}
            />
            <FieldError id={eid("firstName")} message={errors.firstName} />
          </div>
          <div>
            <Label htmlFor={fid("lastName")} required>
              Last name
            </Label>
            <Input
              id={fid("lastName")}
              name="lastName"
              autoComplete="family-name"
              required
              value={values.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={describedBy("lastName")}
            />
            <FieldError id={eid("lastName")} message={errors.lastName} />
          </div>
          <div>
            <Label htmlFor={fid("email")} required>
              Email address
            </Label>
            <Input
              id={fid("email")}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
            />
            <FieldError id={eid("email")} message={errors.email} />
          </div>
          <div>
            <Label
              htmlFor={fid("phone")}
              required={values.contactMethod === "phone" || values.contactMethod === "text"}
            >
              Phone number
            </Label>
            <Input
              id={fid("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="(555) 555-0123"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone", fid("phone-hint"))}
            />
            <p id={fid("phone-hint")} className="mt-1.5 text-xs text-slate-600">
              Required if you prefer a call or text.
            </p>
            <FieldError id={eid("phone")} message={errors.phone} />
          </div>
        </div>
      </fieldset>

      {/* Student */}
      <fieldset className="mt-8">
        <legend className="eyebrow text-royal">Student</legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor={fid("grade")} required>
              Intended grade
            </Label>
            <Select
              id={fid("grade")}
              name="grade"
              required
              value={values.grade}
              onChange={(e) => update("grade", e.target.value)}
              aria-invalid={Boolean(errors.grade)}
              aria-describedby={describedBy("grade")}
            >
              <option value="" disabled>
                Select a grade
              </option>
              {gradeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <FieldError id={eid("grade")} message={errors.grade} />
          </div>
          <div>
            <Label htmlFor={fid("schoolYear")} required>
              Intended school year
            </Label>
            <Select
              id={fid("schoolYear")}
              name="schoolYear"
              required
              value={values.schoolYear}
              onChange={(e) => update("schoolYear", e.target.value)}
              aria-invalid={Boolean(errors.schoolYear)}
              aria-describedby={describedBy("schoolYear")}
            >
              {schoolYearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <FieldError id={eid("schoolYear")} message={errors.schoolYear} />
          </div>
        </div>
      </fieldset>

      {/* Interests */}
      <fieldset className="mt-8">
        <legend className="eyebrow text-royal">
          Areas of Interest <span className="font-sans text-xs font-normal tracking-normal text-slate-500 normal-case">(optional)</span>
        </legend>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {interestOptions.map((option) => {
            const id = fid(`interest-${option.value}`);
            const checked = values.interests.includes(option.value);
            return (
              <label
                key={option.value}
                htmlFor={id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-md border px-3.5 py-3 text-sm transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-royal/30",
                  checked ? "border-royal bg-sky text-navy" : "border-slate-200 text-body hover:border-slate-300",
                )}
              >
                <input
                  id={id}
                  type="checkbox"
                  name="interests"
                  value={option.value}
                  checked={checked}
                  onChange={(e) => toggleInterest(option.value, e.target.checked)}
                  className="size-4 shrink-0 accent-royal focus-visible:outline-none"
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Contact method */}
      <fieldset
        className="mt-8"
        aria-describedby={errors.contactMethod ? eid("contactMethod") : undefined}
      >
        <legend className="eyebrow text-royal">
          Preferred Contact Method{" "}
          <span className="text-red-700" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {contactMethodOptions.map((option) => {
            const id = fid(`contactMethod-${option.value}`);
            const checked = values.contactMethod === option.value;
            return (
              <label
                key={option.value}
                htmlFor={id}
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-royal/30",
                  checked ? "border-royal bg-sky text-navy" : "border-slate-200 text-body hover:border-slate-300",
                )}
              >
                <input
                  id={id}
                  type="radio"
                  name="contactMethod"
                  value={option.value}
                  checked={checked}
                  onChange={() => update("contactMethod", option.value)}
                  className="size-4 accent-royal focus-visible:outline-none"
                />
                {option.label}
              </label>
            );
          })}
        </div>
        <FieldError id={eid("contactMethod")} message={errors.contactMethod} />
      </fieldset>

      {/* Consent */}
      <div className="mt-8 rounded-md bg-cream p-4 sm:p-5">
        <div className="flex gap-3">
          <input
            id={fid("consent")}
            type="checkbox"
            name="consent"
            required
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy("consent")}
            className="mt-1 size-4 shrink-0 accent-royal"
          />
          <label htmlFor={fid("consent")} className="text-sm leading-relaxed text-body">
            <span className="font-semibold text-navy">
              I agree to be contacted about enrollment.
              <span className="text-red-700" aria-hidden="true">
                {" "}*
              </span>
            </span>{" "}
            Elevate Charter Academy may contact me about admissions, events, and next steps using
            my preferred method. Standard message and data rates may apply to texts. I can opt out
            at any time.
          </label>
        </div>
        <FieldError id={eid("consent")} message={errors.consent} />
      </div>

      <p className="mt-5 text-xs leading-relaxed text-slate-600">
        <strong className="font-semibold text-navy">Your privacy matters.</strong> We only ask for
        what we need to follow up. Please don&apos;t share your child&apos;s name, birthdate, or
        other personal details here — those are collected securely during the application. See
        our{" "}
        <Link href="/privacy" className="font-semibold text-royal underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={submitting} className="sm:min-w-56">
          {submitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Send My Information
              <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </Button>
        {demoMode ? (
          <p className="text-xs leading-relaxed text-slate-600 sm:max-w-64">
            Demo mode: this form isn&apos;t connected to an enrollment system. Nothing you enter is
            saved or sent.
          </p>
        ) : null}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {submitting ? "Submitting your information…" : ""}
      </p>
    </form>
  );
}
