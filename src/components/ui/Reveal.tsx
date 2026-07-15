"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp, easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.25,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === "object" ? variants.visible : {}),
          transition: {
            duration: 0.9,
            ease: easeOutExpo,
            delay,
            ...(typeof variants.visible === "object" &&
            variants.visible &&
            "transition" in variants.visible
              ? (variants.visible.transition as object)
              : {}),
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  variants,
  once = true,
  amount = 0.18,
}: {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
