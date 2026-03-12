"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Rocket, Send, Settings2, UserPlus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickActions = [
  { label: "Iniciar Campanha de Recuperação", icon: Send, glow: "hover:shadow-[0_0_20px_rgba(231,76,60,0.15)]" },
  { label: "Criar Automação de Follow-up", icon: Settings2, glow: "" },
  { label: "Reativar Clientes Inativos", icon: UserPlus, glow: "" },
  { label: "Priorizar Oportunidades por IA", icon: Zap, glow: "text-primary" },
];

export function ActionCommandCenter() {
  return (
    <GlassCard delay={0.6} glowColor="rgba(231,76,60,0.05)">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <Rocket className="size-4 text-primary" />
        </div>
        <h3 className="text-sm font-bold text-white tracking-tight">🚀 Central de Ação</h3>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {quickActions.map((action, i) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.05 }}
          >
            <Button
              variant="outline"
              className={`w-full justify-start gap-3 h-12 bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.06] hover:border-white/10 text-white/70 hover:text-white rounded-2xl transition-all group ${action.glow}`}
            >
              <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <action.icon className="size-3.5" />
              </div>
              <span className="text-[11px] font-bold tracking-tight">{action.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.05]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Sessão de Comando</span>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold text-green-500/60 uppercase">Motor Ativo</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
