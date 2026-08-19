"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "outlineBrand" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const variants = {
  primary:
    "bg-[#0047FF] text-white hover:bg-[#003DE0] border border-[#0047FF] shadow-none",
  light: "bg-white text-navy hover:bg-white/90 border border-white",
  secondary:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70",
  outline:
    "bg-transparent text-navy border border-navy/20 hover:border-brand hover:text-brand",
  outlineBrand:
    "bg-white text-[#0066FF] border border-[#0066FF] hover:bg-[#0066FF]/5",
  ghost: "bg-transparent text-navy border border-transparent hover:text-brand",
};

const sizes = {
  sm: "min-h-10 px-5 py-2 text-sm rounded-[16px]",
  md: "min-h-11 px-6 py-3 text-sm sm:px-7 rounded-[16px]",
  lg: "min-h-12 px-7 py-3.5 text-sm sm:px-9 sm:text-base rounded-[16px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-colors duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
            return;
          }
          if (href.startsWith("#")) {
            e.preventDefault();
            scrollToSection(href);
          }
        }}
        className={classes}
        whileHover={{ scale: 1.035, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.035, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      {content}
    </motion.button>
  );
}
