import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** On dark backgrounds: white + brand blue. On light: navy + brand blue. */
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-semibold tracking-tight select-none",
        className,
      )}
      aria-label="LoanKonnekt"
    >
      <span className={tone === "dark" ? "text-white" : "text-navy"}>Loan</span>
      <span className="text-brand">Konnekt</span>
    </span>
  );
}
