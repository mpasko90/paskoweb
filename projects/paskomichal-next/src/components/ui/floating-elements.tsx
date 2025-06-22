"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementsProps {
  children: ReactNode;
}

export const FloatingElements = ({ children }: FloatingElementsProps) => {
  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={floatingVariants}
      animate="float"
      className="relative"
    >
      {children}
    </motion.div>
  );
};

interface GlowingOrbProps {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "pink";
  className?: string;
}

export const GlowingOrb = ({ 
  size = "md", 
  color = "blue", 
  className = "" 
}: GlowingOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  const colorClasses = {
    blue: "bg-blue-500/20 shadow-blue-500/50",
    purple: "bg-purple-500/20 shadow-purple-500/50",
    pink: "bg-pink-500/20 shadow-pink-500/50",
  };

  return (
    <motion.div
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        rounded-full blur-xl shadow-2xl
        ${className}
      `}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};
