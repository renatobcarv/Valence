"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "Melhor Horário de Contato",
    description: "Detectamos que 72% das suas conversões de follow-up ocorrem entre 10h e 11h30 das terças-feiras.",
    tag: "Eficiência",
    icon: Brain,
    action: "Ajustar Agendamentos",
  },
  {
    title: "Oportunidade de Upsell Previsível",
    description: "8 clientes do plano Pro atingiram o limite de volume. Probabilidade de 78% para upgrade Enterprise.",
    tag: "Expansão",
    icon: Star,
    action: "Iniciar Campanha",
  },
];

export function AIStrategicInsights() {
  return (
    <GlassCard delay={0.35} glowColor="rgba(255,255,255,0.03)" className="mt-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <Brain className="size-4 text-primary" />
        </div>
        <h3 className="text-sm font-bold text-white tracking-tight">🤖 Insights da Valence</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  {insight.tag}
                </span>
                <CheckCircle2 className="size-3 text-white/10" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{insight.title}</h4>
              <p className="text-[11px] text-white/40 leading-relaxed mb-6">{insight.description}</p>
            </div>
            
            <Button variant="ghost" className="w-fit text-[10px] text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl px-4 group">
              {insight.action} <ArrowRight className="size-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
