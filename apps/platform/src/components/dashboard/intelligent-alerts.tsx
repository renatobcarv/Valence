"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { AlertCircle, Clock, Zap, ArrowRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    type: "critical",
    title: "12 Propostas Sem Follow-up",
    description: "Clientes com propostas enviadas há mais de 7 dias sem interação.",
    value: "R$ 420.000 em risco",
    icon: Clock,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    type: "warning",
    title: "Anomalia de Churn Detetada",
    description: "Comportamento de uso caiu 40% em 5 contas Enterprise.",
    value: "Probabilidade: 85%",
    icon: AlertCircle,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export function IntelligentAlerts() {
  return (
    <GlassCard delay={0.4} glowColor="rgba(239,68,68,0.05)">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
            <Zap className="size-4 text-red-500" />
          </div>
          <h3 className="text-sm font-bold text-white tracking-tight">⚠️ Alertas da Valence</h3>
        </div>
        <Button variant="ghost" size="icon" className="size-8 text-white/20 hover:text-white hover:bg-white/5 rounded-lg">
          <Settings className="size-3.5" />
        </Button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <motion.div
            key={alert.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all"
          >
            <div className="flex gap-4">
              <div className={`mt-1 p-2 rounded-xl ${alert.bg} border border-white/5`}>
                <alert.icon className={`size-4 ${alert.color}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white">{alert.title}</h4>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${alert.color}`}>{alert.value}</span>
                </div>
                <p className="text-[10px] text-white/40 leading-relaxed pr-4">{alert.description}</p>
                
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                  <Button className="h-7 text-[9px] bg-white/5 hover:bg-white/10 text-white rounded-lg px-3 border border-white/10">
                    Resolver agora
                  </Button>
                  <Button variant="ghost" className="h-7 text-[9px] text-white/30 hover:text-white rounded-lg px-2">
                    Ver cliente
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Button variant="ghost" className="w-full mt-4 h-9 text-[10px] text-white/20 hover:text-white/40 group">
        Ver todos os alertas <ArrowRight className="size-3 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </GlassCard>
  );
}
