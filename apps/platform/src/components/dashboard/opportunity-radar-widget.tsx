"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Compass, Zap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const opportunities = [
  { name: "Nexus Innovations", value: "R$ 45.000", prob: 92, color: "text-green-400" },
  { name: "Beta Consulting", value: "R$ 12.500", prob: 84, color: "text-green-400" },
  { name: "Alpha Systems", value: "R$ 28.000", prob: 65, color: "text-yellow-400" },
];

export function OpportunityRadarWidget() {
  return (
    <GlassCard delay={0.5} glowColor="rgba(255,255,255,0.02)">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
          <Compass className="size-4 text-white/60" />
        </div>
        <h3 className="text-sm font-bold text-white tracking-tight">🧭 Radar de Oportunidades</h3>
      </div>

      <div className="space-y-3">
        {opportunities.map((opp, i) => (
          <motion.div
            key={opp.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors group"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-white tracking-tight">{opp.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{opp.value}</span>
                <span className={`text-[10px] font-black ${opp.color} font-display`}>{opp.prob}% prob.</span>
              </div>
            </div>
            
            <Button size="icon" className="size-7 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg border border-primary/20 transition-all">
              <Zap className="size-3" />
            </Button>
          </motion.div>
        ))}
      </div>

      <Button variant="ghost" className="w-full mt-4 h-9 text-[10px] text-white/20 hover:text-white/40 group">
        Ver radar completo <ArrowUpRight className="size-3 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </Button>
    </GlassCard>
  );
}
