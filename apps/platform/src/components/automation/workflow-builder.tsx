"use client";

import { motion } from "framer-motion";
import { Plus, Play, Pause, ArrowRight, GitBranch, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

const workflows = [
  {
    id: "wf-1",
    name: "Recuperação de Proposta",
    status: "active",
    trigger: "Proposta sem resposta ≥ 7 dias",
    condition: "Segmento: Enterprise",
    actions: ["Enviar E-mail Template: Follow-up Dia 7"],
    recovered: "R$ 14.500",
  },
  {
    id: "wf-2",
    name: "Reativação de Cliente B2B",
    status: "active",
    trigger: "Última interação > 90 dias",
    condition: "Valor do cliente > R$ 5.000",
    actions: ["Criar tarefa para SDR", "Enviar WhatsApp: Reengajamento"],
    recovered: "R$ 42.000",
  },
  {
    id: "wf-3",
    name: "Upsell Pós-Compra",
    status: "paused",
    trigger: "Compra finalizada",
    condition: "Produto: Plano Básico",
    actions: ["Aguardar 14 dias", "Enviar E-mail: Upgrade Pro"],
    recovered: "R$ 0",
  },
];

export function WorkflowBuilder() {
  return (
    <div className="space-y-6">
      {/* Create New workflow CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-5 glass-effect rounded-2xl border border-primary/20"
      >
        <div className="flex items-center gap-4">
          <div className="relative p-3 rounded-xl bg-primary/10 border border-primary/20">
            <GitBranch className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Novo Fluxo de Automação</h3>
            <p className="text-xs text-white/40 mt-0.5">Crie regras de recuperação visual: SE / ENTÃO</p>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2 text-xs rounded-xl">
          <Plus className="size-3.5" /> Criar Fluxo
        </Button>
      </motion.div>

      {/* Workflow cards grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflows.map((wf, i) => (
          <GlassCard key={wf.id} delay={i * 0.08}>
            {/* Header */}
            <div className="flex items-start justify-between mb-5 -mt-1">
              <h3 className="text-sm font-semibold text-white leading-tight">{wf.name}</h3>
              <span className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg border ${
                wf.status === "active"
                  ? "text-green-400 bg-green-500/10 border-green-500/20"
                  : "text-white/30 bg-white/[0.03] border-white/[0.08]"
              }`}>
                {wf.status === "active" ? <Play className="size-2.5" /> : <Pause className="size-2.5" />}
                {wf.status === "active" ? "Ativo" : "Pausado"}
              </span>
            </div>

            {/* IF */}
            <div className="space-y-2 text-[11px]">
              <div className="px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300">
                <span className="text-blue-400/60 font-bold uppercase tracking-wider text-[9px]">SE (Trigger)</span>
                <p className="mt-1 font-medium">{wf.trigger}</p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="size-3 text-white/20 rotate-90" />
              </div>
              <div className="px-3 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300">
                <span className="text-yellow-400/60 font-bold uppercase tracking-wider text-[9px]">E (Condição)</span>
                <p className="mt-1 font-medium">{wf.condition}</p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="size-3 text-white/20 rotate-90" />
              </div>
              {wf.actions.map((act, j) => (
                <div key={j} className="px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-white/80">
                  <span className="text-primary/60 font-bold uppercase tracking-wider text-[9px]">ENTÃO (Ação)</span>
                  <p className="mt-1 font-medium text-[11px] flex items-center gap-2">
                    <Zap className="size-3 text-primary flex-shrink-0" />
                    {act}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex justify-between items-center text-[11px]">
              <span className="text-white/30">Receita Recuperada</span>
              <span className={`font-bold ${wf.recovered !== "R$ 0" ? "text-green-400" : "text-white/20"}`}>
                {wf.recovered}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
