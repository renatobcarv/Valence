"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GlassCard } from "@/components/ui/glass-card";
import { BarChart3 } from "lucide-react";

const rawData = {
  "30d": [
    { name: "Sem 1", total: 240000, recovered: 80000, risk: 40000 },
    { name: "Sem 2", total: 320000, recovered: 110000, risk: 35000 },
    { name: "Sem 3", total: 280000, recovered: 95000, risk: 50000 },
    { name: "Sem 4", total: 345000, recovered: 125000, risk: 30000 },
  ],
  "90d": [
    { name: "Jan", total: 850000, recovered: 280000, risk: 120000 },
    { name: "Fev", total: 920000, recovered: 310000, risk: 105000 },
    { name: "Mar", total: 1045000, recovered: 345000, risk: 95000 },
  ],
  "6m": [
    { name: "Out", total: 720000, recovered: 210000, risk: 150000 },
    { name: "Nov", total: 845000, recovered: 255000, risk: 135000 },
    { name: "Dez", total: 910000, recovered: 295000, risk: 110000 },
    { name: "Jan", total: 850000, recovered: 280000, risk: 120000 },
    { name: "Fev", total: 920000, recovered: 310000, risk: 105000 },
    { name: "Mar", total: 1045000, recovered: 345000, risk: 95000 },
  ],
};

export function RevenuePulseChart() {
  const [filter, setFilter] = useState<keyof typeof rawData>("6m");

  return (
    <GlassCard delay={0.1} glowColor="rgba(255,255,255,0.03)">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <BarChart3 className="size-4 text-white/60" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">📊 Pulso da Receita</h3>
            <p className="text-[10px] text-white/30">Faturamento vs Recuperação vs Risco</p>
          </div>
        </div>

        <div className="flex p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl">
          {[
            { id: "30d", label: "30D" },
            { id: "90d", label: "90D" },
            { id: "6m", label: "6M" },
            { id: "12m", label: "12M" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => f.id !== "12m" && setFilter(f.id as keyof typeof rawData)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                filter === f.id
                  ? "bg-white/10 text-white shadow-lg shadow-white/5"
                  : "text-white/30 hover:text-white/60"
              } ${f.id === "12m" ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={rawData[filter as keyof typeof rawData] || rawData["6m"]}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }}
              tickFormatter={(v) => `R$${v / 1000}k`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-effect-strong p-3 rounded-xl border border-white/10 shadow-2xl">
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-2">{label}</p>
                      <div className="space-y-1">
                        {payload.map((p) => (
                          <div key={p.name as string} className="flex items-center justify-between gap-4">
                            <span className="text-[10px] text-white/60">{p.name === "total" ? "Total" : p.name === "recovered" ? "Recuperado" : "Em Risco"}</span>
                            <span className="text-xs font-bold" style={{ color: p.color }}>R$ {((p.value as number) / 1000).toFixed(0)}k</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTotal)"
              name="total"
            />
            <Area
              type="monotone"
              dataKey="recovered"
              stroke="#22c55e"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRecovered)"
              name="recovered"
            />
             <Area
              type="monotone"
              dataKey="risk"
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={1}
              fill="url(#colorRisk)"
              name="risk"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        {[
          { label: "Faturamento Total", color: "rgba(255,255,255,0.4)" },
          { label: "Receita Recuperada", color: "#22c55e" },
          { label: "Receita em Risco", color: "#ef4444" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="size-1.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
