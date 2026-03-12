"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Brain, TrendingUp } from "lucide-react";

export function ExecutiveSummary() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-6">
      {/* SECTION 1: CENTRAL REVENUE DISPLAY */}
      <motion.div
        initial={{ opacity: 1, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">💰 Faturamento Total</p>
        <div className="text-7xl md:text-8xl font-black text-gradient tracking-tighter font-display">
          <AnimatedCounter to={1245890} prefix="R$ " duration={2} />
        </div>
        <div className="flex items-center justify-center gap-2 text-green-400 font-bold">
          <TrendingUp className="size-5" />
          <span className="text-lg">📈 +20.1% <span className="text-white/30 font-medium text-sm ml-1">nos últimos 30 dias</span></span>
        </div>
      </motion.div>

      {/* SECTION 2: VALENCE REVENUE HEALTH INDEX */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-6 p-1 pr-6 rounded-full glass-effect-strong border border-white/10"
      >
        <div className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 border border-white/10">
          <div className="relative">
            <Brain className="size-5 text-primary" />
            <div className="absolute inset-0 bg-primary/20 blur-md -z-10" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-white/50">🧠 Índice Valence</span>
        </div>
        
        <div className="flex items-baseline gap-2 font-display">
          <span className="text-3xl font-black text-white">92</span>
          <span className="text-sm text-white/30">/ 100</span>
        </div>

        <div className="h-4 w-px bg-white/10" />

        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase font-bold text-white/30 mb-1">Status da Operação</span>
          <span className="text-sm font-bold text-green-400">Saúde da Receita: Excelente</span>
        </div>
      </motion.div>
    </div>
  );
}
