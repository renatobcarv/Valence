'use client';

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [mounted, setMounted] = useState(false);
  
  const springValue = useSpring(from, {
    mass: 1,
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  const displayValue = useTransform(springValue, (current) => {
    return prefix + current.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  });

  useEffect(() => {
    setMounted(true);
    springValue.set(to);
  }, [springValue, to]);

  if (!mounted) {
    return <span className={className}>{prefix}{from.toLocaleString('pt-BR')}{suffix}</span>;
  }

  return <motion.span className={cn("tabular-nums", className)}>{displayValue}</motion.span>;
}
