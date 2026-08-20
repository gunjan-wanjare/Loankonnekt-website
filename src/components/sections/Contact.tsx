"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { landingContact, landingContactInfo } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { api } from "@/lib/api";
import { endpoints } from "@/services/api/endpoints";
import { getErrorMessage } from "@/lib/errors";

const CONTACT_ICONS = {
  email: Mail,
  phone: Phone,
  office: MapPin,
} as const;

const fieldClassName = cn(
  "h-[52px] w-full rounded-[10px] border border-transparent",
  "bg-[#F5F5F5] px-5 py-3 text-sm text-[#111827] sm:text-[15px]",
  "outline-none placeholder:text-[#64748B]",
  "transition-[box-shadow,background-color,border-color] duration-200",
  "focus:border-[#16A34A]/40 focus:bg-white",
  "focus:ring-2 focus:ring-[#16A34A]/10",
);

export function Contact() {
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

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();

    const payload = {
      fullName: `${firstName} ${lastName}`.trim(),
      email,
      subject,
      description,
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
    <section
      id={landingContact.id}
      className="bg-[#F5F5F7] py-12 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Left: Contact information */}
          <Reveal variants={fadeUpBlur} className="pt-0 lg:pt-1">
            <div className="max-w-xl">
              <h2
                id="contact-heading"
                className="text-[1.9rem] font-medium leading-[1.15] tracking-[-0.03em] text-[#050505] sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.5rem] xl:text-[2.65rem]"
              >
                {landingContact.heading}
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-[#111827] sm:mt-6 sm:text-base sm:leading-7">
                {landingContact.supporting}
              </p>

              <Stagger
                className="mt-8 space-y-6 sm:mt-9 sm:space-y-7"
                variants={staggerContainer}
              >
                {landingContactInfo.map((item) => {
                  const Icon = CONTACT_ICONS[item.id];

                  const content = (
                    <>
                      <span className="block text-lg font-semibold tracking-tight text-[#050505] sm:text-xl">
                        {item.label}
                      </span>

                      <span className="mt-1.5 block text-sm leading-5 text-[#475569] sm:text-base sm:leading-6">
                        {item.value}
                      </span>
                    </>
                  );

                  return (
                    <StaggerItem key={item.id} variants={fadeUp}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="group flex items-center gap-4"
                        >
                          <span
                            className={cn(
                              "flex h-[68px] w-[68px] shrink-0 items-center justify-center",
                              "rounded-[20px] border border-[#E1E1E1] bg-white",
                              "transition-all duration-200",
                              "group-hover:border-brand group-hover:shadow-sm",
                            )}
                          >
                            <Icon
                              className="h-7 w-7 text-brand"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </span>

                          <span className="min-w-0">{content}</span>
                        </a>
                      ) : (
                        <div className="group flex items-center gap-4">
                          <span
                            className={cn(
                              "flex h-[68px] w-[68px] shrink-0 items-center justify-center",
                              "rounded-[20px] border border-[#E1E1E1] bg-white",
                              "transition-all duration-200",
                              "group-hover:border-brand group-hover:shadow-sm",
                            )}
                          >
                            <Icon
                              className="h-7 w-7 text-brand"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </span>

                          <div className="min-w-0">{content}</div>
                        </div>
                      )}
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal variants={fadeUpBlur}>
            <div className="rounded-[20px] border border-[#DEDEDE] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] sm:rounded-[22px] sm:p-6 md:p-7 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name + Last Name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2.5 block text-sm font-medium text-[#080808]"
                    >
                      {landingContact.fields.firstName.label}
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder={landingContact.fields.firstName.placeholder}
                      disabled={isSubmitting}
                      className={fieldClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2.5 block text-sm font-medium text-[#080808]"
                    >
                      {landingContact.fields.lastName.label}
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder={landingContact.fields.lastName.placeholder}
                      disabled={isSubmitting}
                      className={fieldClassName}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2.5 block text-sm font-medium text-[#080808]"
                  >
                    {landingContact.fields.email.label}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={landingContact.fields.email.placeholder}
                    disabled={isSubmitting}
                    className={fieldClassName}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2.5 block text-sm font-medium text-[#080808]"
                  >
                    {landingContact.fields.subject.label}
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder={landingContact.fields.subject.placeholder}
                    disabled={isSubmitting}
                    className={fieldClassName}
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="mb-2.5 block text-sm font-medium text-[#080808]"
                  >
                    {landingContact.fields.description.label}
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder={landingContact.fields.description.placeholder}
                    disabled={isSubmitting}
                    className={cn(
                      fieldClassName,
                      "min-h-[130px] resize-none py-4",
                    )}
                  />
                </div>

                {/* Error */}
                {errorMessage && (
                  <p
                    className="text-sm font-medium text-red-600"
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                )}

                {/* Submit */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "flex h-14 w-full items-center justify-center",
                      "cursor-pointer rounded-[13px] bg-brand",
                      "px-6 text-sm font-bold uppercase tracking-normal text-white",
                      "transition-all duration-200",
                      "hover:bg-brand",
                      "focus:outline-none focus:ring-2 focus:ring-[#159947]/30 focus:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-70",
                    )}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : landingContact.submitLabel}
                  </button>
                </div>

                {/* Success */}
                {submitted && (
                  <p
                    className="text-center text-sm font-medium text-[#159947]"
                    role="status"
                  >
                    Thank you! We&apos;ll get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}