"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps {
  children: ReactNode;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  viewport?: MotionProps["viewport"];
  className?: string;
}

export const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};
