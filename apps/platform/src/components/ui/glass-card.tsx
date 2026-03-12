"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
  strong?: boolean;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  glowColor = "rgba(255, 255, 255, 0.05)",
  strong = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -2, boxShadow: `0 10px 40px ${glowColor}` }}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        strong ? "glass-effect-strong" : "glass-effect",
        className
      )}
    >
      {/* Internal subtle glow edge */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl border border-white/10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="relative z-10 w-full h-full p-6">{children}</div>
    </motion.div>
  );
}
