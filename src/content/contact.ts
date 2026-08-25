/** Contact page content — sourced from Figma "LoanKonnect - Contact" */

export const contactHero = {
  headline: ["How can we help", "you today?"],
  supporting:
    "Share a few details about your legal requirement and our team will help you understand what comes next.",
  askLabel: "Or just wanna say hi?",
  email: "hello@loankonnekt.com",
} as const;

export const contactForm = {
  submitLabel: "Submit Request",
  fields: {
    fullName: { label: "Full Name", placeholder: "Enter your full name" },
    email: { label: "Email Address", placeholder: "Enter your email address" },
    loanType: {
      label: "Loan Type Query",
      placeholder: "Select loan type",
      options: [
        "Personal Loan",
        "Business Loan",
        "Home Loan",
        "Property Loan",
        "Education Loan",
        "Car Loan",
        "Other",
      ],
    },
    message: { label: "Your Message", placeholder: "Write details of your loan query here..." },
  },
} as const;
