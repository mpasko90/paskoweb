"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGradientProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedGradient = ({ children, className = "" }: AnimatedGradientProps) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 ${className}`}
      animate={{
        background: [
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #1e3c72 100%)",
          "linear-gradient(135deg, #764ba2 0%, #1e3c72 50%, #667eea 100%)",
          "linear-gradient(135deg, #1e3c72 0%, #667eea 50%, #764ba2 100%)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
