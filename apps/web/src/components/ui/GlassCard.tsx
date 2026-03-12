'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  glowColor = "rgba(231, 76, 60, 0.1)",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={cn(
        "glass-effect rounded-3xl relative overflow-hidden group",
        className
      )}
    >
      {/* Decorative inner glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)` }}
      />
      
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}
