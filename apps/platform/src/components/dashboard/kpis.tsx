"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, Target, ShieldAlert, Activity } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const kpis = [
  {
    label: "Receita Total",
    value: 1245890,
    prefix: "R$ ",
    suffix: "",
    decimals: 0,
    change: "+20.1%",
    positive: true,
    icon: DollarSign,
    description: "Últimos 30 dias",
    glow: "rgba(34,197,94,0.1)",
  },
  {
    label: "Receita Recuperada",
    value: 285320,
    prefix: "R$ ",
    suffix: "",
    decimals: 0,
    change: "+15.2%",
    positive: true,
    icon: TrendingUp,
    description: "Período atual vs anterior",
    glow: "rgba(231,76,60,0.15)",
  },
  {
    label: "Receita em Risco",
    value: 540000,
    prefix: "R$ ",
    suffix: "",
    decimals: 0,
    change: "-5.4%",
    positive: false,
    icon: ShieldAlert,
    description: "Detectada como perdida",
    glow: "rgba(239,68,68,0.1)",
  },
  {
    label: "Oportunidades Ativas",
    value: 147,
    prefix: "",
    suffix: "",
    decimals: 0,
    change: "+12",
    positive: true,
    icon: Target,
    description: "Em análise pela IA",
    glow: "rgba(250,204,21,0.1)",
  },
  {
    label: "Taxa de Recuperação",
    value: 68.4,
    prefix: "",
    suffix: "%",
    decimals: 1,
    change: "+4.1%",
    positive: true,
    icon: Activity,
    description: "Eficiência do pipeline",
    glow: "rgba(34,197,94,0.1)",
  },
  {
    label: "Risco de Churn",
    value: 12,
    prefix: "",
    suffix: " clientes",
    decimals: 0,
    change: "+0.8%",
    positive: false,
    icon: TrendingDown,
    description: "Monitorados pela IA",
    glow: "rgba(239,68,68,0.1)",
  },
];

export function DashboardKPIs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {kpis.map((kpi, i) => (
        <GlassCard key={kpi.label} delay={i * 0.07} glowColor={kpi.glow}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-widest text-white/40 font-semibold">
                {kpi.label}
              </span>
              <span className="text-[10px] text-white/25">{kpi.description}</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
              <kpi.icon className="size-4 text-white/50" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="text-4xl font-bold text-gradient leading-none tracking-tight">
              <AnimatedCounter
                from={0}
                to={kpi.value}
                prefix={kpi.prefix}
                suffix={kpi.suffix}
                decimals={kpi.decimals}
                duration={1.5 + i * 0.1}
              />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                kpi.positive
                  ? "text-green-400 bg-green-500/10 border border-green-500/20"
                  : "text-red-400 bg-red-500/10 border border-red-500/20"
              }`}
            >
              {kpi.change}
            </motion.span>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
