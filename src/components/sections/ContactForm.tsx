"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Check, CheckCircle2, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { contactHero, contactForm } from "@/content/contact";
import { fadeUp, fadeUpBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { endpoints } from "@/services/api/endpoints";

const fieldClassName = cn(
  "h-[52px] w-full rounded-[10px] border border-[#E5E7EB] dark:border-white/10",
  "bg-white px-4 text-sm dark:bg-[#0B1220]",
  "outline-none placeholder:text-[#9CA3AF] dark:placeholder:text-[#94A3B8]",
  "transition-[box-shadow,background-color,border-color] duration-200",
  "focus:border-[#0047FF]/40 focus:ring-2 focus:ring-[#0047FF]/10",
);

const fieldFilledTextClassName = "text-[#111827] dark:text-white";
const fieldPlaceholderTextClassName = "text-[#9CA3AF] dark:text-[#94A3B8]";

/**
 * Native <select> popups render their <option> list with browser/OS-native
 * styling that ignores CSS `color` on the options (verified in Chromium —
 * options rendered in a default color regardless of className), so it can
 * never be made to match the other fields' placeholder/text colors. This is
 * a fully custom dropdown instead — same trigger look as the other fields,
 * but the open list is real styled markup we control end to end.
 */
function LoanTypeSelect({
  id,
  name,
  value,
  onChange,
  disabled,
  placeholder,
  options,
  error,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder: string;
  options: readonly string[];
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          fieldClassName,
          "flex items-center justify-between text-left",
          value ? fieldFilledTextClassName : fieldPlaceholderTextClassName,
          error && "border-[#EF4444] focus:border-[#EF4444]/60 focus:ring-[#EF4444]/10",
        )}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={cn("shrink-0 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={placeholder}
          className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-[10px] border border-[#E5E7EB] bg-white py-1.5 shadow-lg dark:border-white/10 dark:bg-[#0B1220]"
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-[#111827] hover:bg-[#F3F6FF] dark:text-white dark:hover:bg-white/5"
              >
                {option}
                {value === option ? (
                  <Check size={16} strokeWidth={2.5} className="text-[#0047FF]" aria-hidden />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function getContactUrl() {
  const base = (
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    ""
  ).replace(/\/$/, "");
  return `${base}${endpoints.contact}`;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [loanTypeError, setLoanTypeError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // The visible control is a custom dropdown (not a native <select>), so
    // its "required" behavior — unlike the other native fields — has to be
    // checked explicitly rather than relying on the browser.
    if (!loanType) {
      setLoanTypeError(true);
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("loanType") ?? "").trim(),
      description: String(formData.get("message") ?? "").trim(),
      brand: "loankonnekt",
    };

    try {
      await fetch(getContactUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Always show success to the user, even if the request fails.
    }

    form.reset();
    setLoanType("");
    setLoanTypeError(false);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[#FCFCFF] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pb-20 dark:bg-[#0A0F1E]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-[radial-gradient(ellipse_60%_50%_at_0%_45%,rgba(59,130,246,0.14),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-[radial-gradient(ellipse_60%_50%_at_100%_45%,rgba(59,130,246,0.14),transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1340px] items-center gap-10 px-4 sm:px-5 md:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-12">
        <Reveal variants={fadeUpBlur}>
          <h1 className="heading-gradient text-[2.15rem] font-bold leading-[1.08] tracking-normal sm:text-[2.75rem] lg:text-[64px]">
            <span className="block">{contactHero.headline[0]}</span>
            <span className="block">{contactHero.headline[1]}</span>
          </h1>
          <p className="mt-5 max-w-[38rem] text-base font-normal leading-7 tracking-normal text-[#434657] sm:mt-6 sm:text-[20px] sm:leading-[30px] dark:text-[#94A3B8]">
            {contactHero.supporting}
          </p>

          <div className="mt-10 sm:mt-12">
            <p className="text-[18px] font-normal leading-8 tracking-normal text-[#000D26] sm:text-[20px] dark:text-[#94A3B8]">
              {contactHero.askLabel}
            </p>
            <a
              href={`mailto:${contactHero.email}`}
              className="mt-1 block break-words text-[clamp(1.15rem,6.5vw,1.875rem)] font-normal leading-[126%] tracking-normal text-[#000000] lg:text-[30px] dark:text-[#E2E8F0]"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              {contactHero.email}
            </a>
          </div>
        </Reveal>

        <Reveal variants={fadeUp}>
          <div className="rounded-[1.75rem] bg-[#E8EEFB] p-6 sm:p-8 md:p-10 dark:bg-white/5">
            {submitted ? (
              <div
                className="flex min-h-[22rem] flex-col items-center justify-center gap-3 px-2 py-8 text-center"
                role="status"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-[#111A2E]">
                  <CheckCircle2 className="h-8 w-8 text-[#0047FF]" strokeWidth={2} />
                </span>
                <p className="text-lg font-bold tracking-tight text-[#051325] dark:text-white">
                  Form submitted successfully
                </p>
                <p className="max-w-xs text-sm leading-6 text-[#434657] dark:text-[#94A3B8]">
                  Thank you! We&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-medium text-[#0047FF] hover:text-[#003DE0]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-bold text-[#000D26] dark:text-[#E2E8F0]"
                  >
                    {contactForm.fields.fullName.label}
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={contactForm.fields.fullName.placeholder}
                    disabled={isSubmitting}
                    className={cn(fieldClassName, fieldFilledTextClassName)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#000D26] dark:text-[#E2E8F0]"
                  >
                    {contactForm.fields.email.label}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={contactForm.fields.email.placeholder}
                    disabled={isSubmitting}
                    className={cn(fieldClassName, fieldFilledTextClassName)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="loanType"
                    className="mb-2 block text-sm font-bold text-[#000D26] dark:text-[#E2E8F0]"
                  >
                    {contactForm.fields.loanType.label}
                  </label>
                  <LoanTypeSelect
                    id="loanType"
                    name="loanType"
                    value={loanType}
                    onChange={(next) => {
                      setLoanType(next);
                      setLoanTypeError(false);
                    }}
                    disabled={isSubmitting}
                    placeholder={contactForm.fields.loanType.placeholder}
                    options={contactForm.fields.loanType.options}
                    error={loanTypeError}
                  />
                  {loanTypeError ? (
                    <p className="mt-1.5 text-xs font-medium text-[#EF4444]">
                      Please select a loan type.
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#000D26] dark:text-[#E2E8F0]"
                  >
                    {contactForm.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={contactForm.fields.message.placeholder}
                    disabled={isSubmitting}
                    className={cn(fieldClassName, fieldFilledTextClassName, "h-auto min-h-[120px] resize-none py-3")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "flex h-[52px] w-full items-center justify-center",
                    "cursor-pointer rounded-[16px] bg-[#0047FF] text-[16px] font-medium leading-none text-white",
                    "transition-colors duration-200 hover:bg-[#003DE0]",
                    "focus:outline-none focus:ring-2 focus:ring-[#0047FF]/30 focus:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-70",
                  )}
                >
                  {isSubmitting ? "Submitting..." : contactForm.submitLabel}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
