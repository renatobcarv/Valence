"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const timelineData = [
  { month: "Jul", lost: 380000, recovered: 120000 },
  { month: "Ago", lost: 420000, recovered: 145000 },
  { month: "Set", lost: 395000, recovered: 185000 },
  { month: "Out", lost: 445000, recovered: 215000 },
  { month: "Nov", lost: 520000, recovered: 248000 },
  { month: "Dez", lost: 485000, recovered: 285000 },
];

const funnelData = [
  { stage: "Leads", value: 1240 },
  { stage: "Qualificados", value: 856 },
  { stage: "Propostas", value: 412 },
  { stage: "Negociação", value: 183 },
  { stage: "Fechados", value: 68 },
];

interface TooltipProps {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-effect-strong rounded-xl p-3 text-xs border border-white/[0.1]">
        <p className="text-white/60 mb-2 font-medium">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.name === "recovered" ? "#22c55e" : "#e74c3c" }} className="font-semibold">
            {p.name === "recovered" ? "Recuperada" : "Perdida"}: R$ {(p.value / 1000).toFixed(0)}k
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const FunnelTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-effect-strong rounded-xl p-3 text-xs border border-white/[0.1]">
        <p className="text-white/60 mb-1">{label}</p>
        <p className="text-white font-bold">{payload[0].value.toLocaleString()} leads</p>
      </div>
    );
  }
  return null;
};

const ChartCard = ({ title, subtitle, children, delay = 0 }: { title: string; subtitle: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="glass-effect rounded-2xl p-6"
  >
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-white/40 mt-0.5">{subtitle}</p>
    </div>
    {children}
  </motion.div>
);

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Area Chart */}
      <ChartCard
        title="Mapa de Fuga de Receita"
        subtitle="Receita perdida vs recuperada nos últimos 6 meses"
        delay={0.1}
      >
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={timelineData}>
            <defs>
              <linearGradient id="gradLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e74c3c" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#e74c3c" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradRecovered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `R$${(v/1000).toFixed(0)}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="lost" stroke="#e74c3c" strokeWidth={2} fill="url(#gradLost)" name="lost" />
            <Area type="monotone" dataKey="recovered" stroke="#22c55e" strokeWidth={2} fill="url(#gradRecovered)" name="recovered" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Bar Chart */}
      <ChartCard
        title="Radar de Conversão"
        subtitle="Pipeline de leads por estágio de qualificação"
        delay={0.2}
      >
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={funnelData} barSize={32}>
            <defs>
              <linearGradient id="gradBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e74c3c" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#e74c3c" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="stage" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<FunnelTooltip />} />
            <Bar dataKey="value" fill="url(#gradBar)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
