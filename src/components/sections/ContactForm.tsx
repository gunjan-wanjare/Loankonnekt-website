"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { contactHero, contactForm } from "@/content/contact";
import { fadeUp, fadeUpBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { api } from "@/lib/api";
import { endpoints } from "@/services/api/endpoints";
import { getErrorMessage } from "@/lib/errors";

const fieldClassName = cn(
  "h-[52px] w-full rounded-[10px] border border-[#E5E7EB]",
  "bg-[#F9FAFB] px-4 text-sm text-[#111827]",
  "outline-none placeholder:text-[#9CA3AF]",
  "transition-[box-shadow,background-color,border-color] duration-200",
  "focus:border-brand/40 focus:bg-white focus:ring-2 focus:ring-brand/10",
);

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

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
      await api.post(endpoints.contact, payload);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFCFF] pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-[radial-gradient(ellipse_60%_50%_at_0%_45%,rgba(59,130,246,0.14),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-[radial-gradient(ellipse_60%_50%_at_100%_45%,rgba(59,130,246,0.14),transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal variants={fadeUpBlur} className="pt-2">
          <h1 className="heading-gradient max-w-2xl text-[1.9rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.65rem]">
            <span className="block">{contactHero.headline[0]}</span>
            <span className="block">{contactHero.headline[1]}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4B5563]">
            {contactHero.supporting}
          </p>

          <div className="mt-8">
            <p className="text-sm text-[#6B7280]">{contactHero.askLabel}</p>
            <a
              href={`mailto:${contactHero.email}`}
              className="mt-1 block text-xl font-bold tracking-tight text-[#111827] hover:text-brand sm:text-2xl"
            >
              {contactHero.email}
            </a>
          </div>
        </Reveal>

        <Reveal variants={fadeUp}>
          <div className="rounded-[1.5rem] border border-[#E2E8F0] bg-[#0047FF14] p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.28)] sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[#080808]">
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
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#080808]">
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
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="loanType" className="mb-2 block text-sm font-medium text-[#080808]">
                  {contactForm.fields.loanType.label}
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  required
                  defaultValue=""
                  disabled={isSubmitting}
                  className={cn(fieldClassName, "appearance-none")}
                >
                  <option value="" disabled>
                    {contactForm.fields.loanType.placeholder}
                  </option>
                  {contactForm.fields.loanType.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#080808]">
                  {contactForm.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={contactForm.fields.message.placeholder}
                  disabled={isSubmitting}
                  className={cn(fieldClassName, "h-auto min-h-[120px] resize-none py-3")}
                />
              </div>

              {errorMessage && (
                <p className="text-sm font-medium text-red-600" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex h-[52px] w-full items-center justify-center",
                  "cursor-pointer rounded-[12px] bg-brand text-sm font-bold text-white",
                  "transition-colors duration-200 hover:bg-[#003DE0]",
                  "focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:opacity-70",
                )}
              >
                {isSubmitting ? "Submitting..." : contactForm.submitLabel}
              </button>

              {submitted && (
                <p className="text-center text-sm font-medium text-[#16A34A]" role="status">
                  Thank you! We&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
