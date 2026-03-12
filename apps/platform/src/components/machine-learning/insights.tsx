"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Clock, Users, ShieldAlert, AlertTriangle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const insights = [
  {
    title: "Recovery Score Global",
    value: 84,
    suffix: "/100",
    description: "Probabilidade geral de recuperar receita este mês está alta.",
    icon: Zap,
    progress: 84,
    accentColor: "#22c55e",
    glowColor: "rgba(34,197,94,0.1)",
  },
  {
    title: "Clientes em Risco de Churn",
    value: 12,
    suffix: " clientes",
    description: "Apresentam sinais críticos de abandono da plataforma.",
    icon: ShieldAlert,
    progress: 92,
    accentColor: "#ef4444",
    glowColor: "rgba(239,68,68,0.15)",
  },
  {
    title: "Melhor Horário de Contato",
    value: 42,
    suffix: "% + eficaz",
    description: "E-mails entre 14:30–16:00 têm 42% mais conversão no seu segmento.",
    icon: Clock,
    progress: 75,
    accentColor: "#e74c3c",
    glowColor: "rgba(231,76,60,0.1)",
  },
  {
    title: "Clusters de Comportamento",
    value: 3,
    suffix: " novos grupos",
    description: "A IA identificou novos padrões de compra na sua base de clientes.",
    icon: Users,
    progress: 100,
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.1)",
  },
];

const churnRisks = [
  { name: "Beta Consulting", risk: 92, reason: "Low Platform Usage" },
  { name: "TechCorp", risk: 71, reason: "Support Tickets Unresolved" },
  { name: "StartupXYZ", risk: 55, reason: "Contract Renewal Due" },
];

export function CentralDeInteligencia() {
  return (
    <div className="space-y-6">
      {/* AI Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 p-5 glass-effect rounded-2xl border border-primary/20"
      >
        <div className="relative p-3 rounded-xl bg-primary/10 border border-primary/20">
          <Brain className="size-6 text-primary" />
          <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md -z-10" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Valence AI Engine — Ativa</h3>
          <p className="text-xs text-white/40 mt-0.5">
            Analisando continuamente comportamentos de leads e clientes em tempo real.
          </p>
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="ml-auto flex items-center gap-1.5 text-xs text-green-400 font-medium"
        >
          <div className="size-1.5 rounded-full bg-green-400 animate-pulse" />
          Online
        </motion.div>
      </motion.div>

      {/* Insight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, i) => (
          <GlassCard key={insight.title} delay={i * 0.07} glowColor={insight.glowColor}>
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{insight.title}</span>
              <insight.icon className="size-4 text-white/30" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter to={insight.value} suffix={insight.suffix} duration={1.5 + i * 0.1} />
            </div>
            {/* Progress Bar */}
            <div className="h-1 rounded-full bg-white/[0.06] mb-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${insight.progress}%` }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: insight.accentColor }}
              />
            </div>
            <p className="text-[11px] text-white/35 leading-relaxed">{insight.description}</p>
          </GlassCard>
        ))}
      </div>

      {/* Termômetro de Risco */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="size-4 text-red-400" />
          <h3 className="text-sm font-semibold text-white">Termômetro de Risco — Clientes Críticos</h3>
        </div>
        <div className="space-y-4">
          {churnRisks.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-32 text-xs font-medium text-white/70 truncate">{client.name}</div>
              <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${client.risk}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: client.risk > 80 ? "linear-gradient(90deg, #ef4444, #dc2626)" : 
                                client.risk > 60 ? "linear-gradient(90deg, #f97316, #ea580c)" : "linear-gradient(90deg, #eab308, #ca8a04)"
                  }}
                />
              </div>
              <div className="w-12 text-right">
                <span className={`text-xs font-bold ${client.risk > 80 ? "text-red-400" : client.risk > 60 ? "text-orange-400" : "text-yellow-400"}`}>
                  {client.risk}%
                </span>
              </div>
              <span className="text-[10px] text-white/30 w-40 truncate">{client.reason}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
