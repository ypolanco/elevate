"use client";

import * as React from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in px before reveal. */
  y?: number;
  as?: "div" | "li";
};

/**
 * Subtle fade-and-rise on scroll. Users who prefer reduced motion see content
 * immediately — a global CSS rule on [data-reveal] neutralizes the transform
 * and opacity, which also keeps server and client markup identical.
 */
export function Reveal({ children, className, delay = 0, y = 18, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
