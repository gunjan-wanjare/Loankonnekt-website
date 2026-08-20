"use client";

import { FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const [loanType, setLoanType] = useState("");

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
      setLoanType("");
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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.75fr)] lg:gap-10">
        <Reveal variants={fadeUpBlur} className="lg:-translate-y-3">
          <h1 className="heading-gradient max-w-none text-[2.15rem] font-bold leading-none tracking-normal sm:text-[2.75rem] lg:text-[64px]">
            <span className="block">{contactHero.headline[0]}</span>
            <span className="block">{contactHero.headline[1]}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[20px] font-normal leading-[30px] tracking-normal text-[#434657]">
            {contactHero.supporting}
          </p>

          <div className="mt-8">
            <p className="text-[20px] font-normal leading-[32px] tracking-normal text-[#000000CC]">
              {contactHero.askLabel}
            </p>
            <a
              href={`mailto:${contactHero.email}`}
              className="mt-1 block text-[30px] font-normal leading-[126%] tracking-normal text-[#000000] hover:text-[#0047FF]"
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
                <div className="relative">
                  <select
                    id="loanType"
                    name="loanType"
                    required
                    value={loanType}
                    onChange={(event) => setLoanType(event.target.value)}
                    disabled={isSubmitting}
                    className={cn(
                      fieldClassName,
                      "appearance-none pr-11",
                      loanType ? "text-[#111827]" : "text-[#9CA3AF]",
                    )}
                  >
                    <option value="" disabled>
                      {contactForm.fields.loanType.placeholder}
                    </option>
                    {contactForm.fields.loanType.options.map((option) => (
                      <option key={option} value={option} className="text-[#111827]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#000000]"
                    aria-hidden
                  />
                </div>
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
                  "cursor-pointer rounded-[12px] bg-[#0047FF] text-sm font-bold text-white",
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
