"use client";

import { motion, Variants, Transition } from "framer-motion";

interface MotionDivProps {
  children: React.ReactNode;
  initial?: Variants | boolean;
  whileInView?: Variants;
  transition?: Transition;
  viewport?: { once?: boolean; amount?: number };
  className?: string;
}

export const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};
