"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedShimmerProps {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedShimmer = ({
  className,
  children,
}: AnimatedShimmerProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent",
        className
      )}
      initial={{ backgroundPosition: "-200% 0%" }}
      animate={{ backgroundPosition: "200% 0%" }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 1,
      }}
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </motion.div>
  );
};

interface BorderBeamProps {
  className?: string;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  duration = 15,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#2563eb",
  colorTo = "#3b82f6",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
          background: `conic-gradient(from ${anchor}deg, ${colorFrom}, ${colorTo}, transparent, transparent, ${colorFrom})`,
          maskImage:
            "radial-gradient(farthest-side at 50% 50%, white, transparent)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          delay: delay,
        }}
      />
    </div>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
}

export const GradientText = ({
  children,
  className,
  from = "#2563eb",
  to = "#3b82f6",
  via,
}: GradientTextProps) => {
  const gradientClass = via
    ? `bg-gradient-to-r from-[${from}] via-[${via}] to-[${to}]`
    : `bg-gradient-to-r from-[${from}] to-[${to}]`;

  return (
    <span
      className={cn("bg-clip-text text-transparent", gradientClass, className)}
    >
      {children}
    </span>
  );
};
