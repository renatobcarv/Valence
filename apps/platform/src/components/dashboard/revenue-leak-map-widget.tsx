"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Search } from "lucide-react";

const funnelStages = [
  { stage: "Leads", value: 1240, leak: "R$ 140k", color: "bg-white/20" },
  { stage: "Propostas", value: 412, leak: "R$ 400k", color: "bg-primary/40" },
  { stage: "Negociação", value: 183, leak: "R$ 600k", color: "bg-primary/60" },
  { stage: "Fechamento", value: 68, leak: "R$ 120k", color: "bg-green-500/40" },
];

export function RevenueLeakMapWidget() {
  return (
    <GlassCard delay={0.3} glowColor="rgba(255,255,255,0.02)">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
          <Search className="size-4 text-white/60" />
        </div>
        <h3 className="text-sm font-bold text-white tracking-tight">🔎 Mapa de Fuga de Receita</h3>
      </div>

      <div className="space-y-3">
        {funnelStages.map((item, i) => (
          <div key={item.stage} className="relative group">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.stage}</span>
              <span className="text-[10px] font-bold text-red-400">-{item.leak}</span>
            </div>
            
            <div className="h-6 w-full bg-white/[0.03] rounded-lg overflow-hidden border border-white/[0.05] relative flex items-center px-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / 1240) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                className={`h-full ${item.color} absolute left-0 top-0`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              </motion.div>
              
              <span className="text-[10px] font-black text-white relative z-10 font-display tabular-nums">
                {item.value.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.05]">
         <p className="text-[10px] text-white/20 leading-tight">
            Gargalo crítico detectado entre <strong className="text-white/40">Propostas</strong> e <strong className="text-white/40">Negociação</strong>.
         </p>
      </div>
    </GlassCard>
  );
}
