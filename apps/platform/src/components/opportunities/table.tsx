"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, ArrowUpRight, Zap, Phone, CheckCircle, AlertCircle, Clock } from "lucide-react";

const opportunities = [
  {
    id: "1",
    customer: "Acme Corp",
    type: "Proposta sem Follow-up",
    value: 45000,
    probability: 85,
    urgency: "Alta",
    status: "pending",
    daysAgo: 7,
  },
  {
    id: "2",
    customer: "Global Solutions",
    type: "Oportunidade de Upsell",
    value: 15000,
    probability: 92,
    urgency: "Alta",
    status: "active",
    daysAgo: 2,
  },
  {
    id: "3",
    customer: "TechCorp",
    type: "Cliente Inativo",
    value: 80000,
    probability: 45,
    urgency: "Média",
    status: "at_risk",
    daysAgo: 90,
  },
  {
    id: "4",
    customer: "Startup XYZ",
    type: "Lead Abandonado",
    value: 22000,
    probability: 63,
    urgency: "Média",
    status: "pending",
    daysAgo: 14,
  },
  {
    id: "5",
    customer: "Beta Consulting",
    type: "Risco de Churn",
    value: 120000,
    probability: 30,
    urgency: "Crítica",
    status: "at_risk",
    daysAgo: 30,
  },
];

const statusConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  active: { label: "Ativa", icon: Zap, color: "text-green-400 bg-green-500/10 border-green-500/20" },
  pending: { label: "Aguardando", icon: Clock, color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
  at_risk: { label: "Em Risco", icon: AlertCircle, color: "text-red-400 bg-red-500/10 border-red-500/20" },
  resolved: { label: "Resolvida", icon: CheckCircle, color: "text-white/40 bg-white/5 border-white/10" },
};

const urgencyColor: Record<string, string> = {
  "Alta": "text-yellow-400",
  "Crítica": "text-red-400",
  "Média": "text-blue-400",
};

export function OpportunitiesTable() {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {["Cliente", "Tipo", "Valor Potencial", "Probabilidade", "Urgência", "Status", "Ação"].map((h) => (
                <th key={h} className="px-6 py-4 text-left text-[10px] uppercase tracking-widest text-white/30 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {opportunities.map((opp, i) => {
              const statusConf = statusConfig[opp.status];
              const StatusIcon = statusConf.icon;
              return (
                <motion.tr
                  key={opp.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-bold text-white/60">
                        {opp.customer.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-white">{opp.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white/50">{opp.type}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-white">
                      R$ {opp.value.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[80px] h-1.5 rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                          style={{ width: `${opp.probability}%` }}
                        />
                      </div>
                      <span className="text-xs text-white/60">{opp.probability}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold ${urgencyColor[opp.urgency]}`}>
                      {opp.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={`text-[10px] border rounded-lg gap-1.5 ${statusConf.color}`}>
                      <StatusIcon className="size-3" />
                      {statusConf.label}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon" className="size-8 text-white/30 hover:text-white hover:bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-effect-strong border border-white/[0.1] text-white">
                        <DropdownMenuItem className="hover:bg-white/[0.05] cursor-pointer gap-2 text-xs">
                          <ArrowUpRight className="size-3 text-primary" /> Priorizar oportunidade
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-white/[0.05] cursor-pointer gap-2 text-xs">
                          <Zap className="size-3 text-yellow-400" /> Criar automação
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-white/[0.05] cursor-pointer gap-2 text-xs">
                          <Phone className="size-3 text-blue-400" /> Entrar em contato
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-white/[0.05] cursor-pointer gap-2 text-xs">
                          <CheckCircle className="size-3 text-green-400" /> Marcar como resolvida
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
