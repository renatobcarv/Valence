"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Target, ShieldAlert, TrendingUp, Users } from "lucide-react";

const metrics = [
  {
    label: "Oportunidades Ativas",
    value: 147,
    prefix: "",
    suffix: "",
    change: "+12",
    positive: true,
    icon: Target,
    description: "Detectadas pela IA",
    glow: "rgba(250,204,21,0.1)",
  },
  {
    label: "Receita em Risco",
    value: 540000,
    prefix: "R$ ",
    suffix: "",
    change: "-5.4%",
    positive: false,
    icon: ShieldAlert,
    description: "Vazamento mensal",
    glow: "rgba(239,68,68,0.1)",
  },
  {
    label: "Taxa de Recuperação",
    value: 68.4,
    prefix: "",
    suffix: "%",
    change: "+4.1%",
    positive: true,
    icon: TrendingUp,
    description: "Eficiência do motor",
    glow: "rgba(34,197,94,0.1)",
  },
  {
    label: "Clientes em Risco",
    value: 12,
    prefix: "",
    suffix: "",
    change: "+1",
    positive: false,
    icon: Users,
    description: "Alerta de Churn",
    glow: "rgba(239,68,68,0.15)",
  },
];

export function StrategicMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, i) => (
        <GlassCard key={metric.label} delay={i * 0.05} glowColor={metric.glow} className="!p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <metric.icon className="size-4 text-white/40" />
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              metric.positive 
                ? "bg-green-500/10 text-green-400 border-green-500/20" 
                : "bg-red-500/10 text-red-400 border-red-500/20"
            }`}>
              {metric.change}
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">{metric.label}</p>
            <div className="text-3xl font-bold text-white tracking-tight font-display">
              <AnimatedCounter to={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.label.includes("Taxa") ? 1 : 0} />
            </div>
            <p className="text-[10px] text-white/20">{metric.description}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
