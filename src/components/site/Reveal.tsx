import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

/**
 * Content is always in the DOM. Motion is an enhancement: if the observer
 * never fires (fast scroll, no JS, reduced motion) the element stays visible.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      className={cn("reveal", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
