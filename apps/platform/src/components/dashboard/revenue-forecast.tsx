"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Sparkles, TrendingUp } from "lucide-react";

export function RevenueForecast() {
  return (
    <GlassCard delay={0.2} glowColor="rgba(231,76,60,0.1)">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <Sparkles className="size-4 text-primary" />
        </div>
        <h3 className="text-sm font-bold text-white tracking-tight">🔮 Previsão de Faturamento</h3>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Próximo mês estimado</p>
          <div className="flex items-baseline gap-2 font-display">
            <div className="text-4xl font-black text-white tracking-tighter">
              <AnimatedCounter to={1380000} prefix="R$ " duration={2} />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
              <TrendingUp className="size-3" />
              <span>+11.4% previsto</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
            <p className="text-[9px] uppercase font-bold text-white/20">Confiança da IA</p>
            <p className="text-lg font-bold text-white font-display">94%</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
            <p className="text-[9px] uppercase font-bold text-white/20">Novos Contratos</p>
            <p className="text-lg font-bold text-white font-display">22</p>
          </div>
        </div>

        <p className="text-[10px] text-white/30 leading-relaxed italic">
          *Baseado no pipeline ativo, taxas de conversão históricas e sinais de churn detectados.
        </p>
      </div>
    </GlassCard>
  );
}
