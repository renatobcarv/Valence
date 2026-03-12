"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Workflow, 
  Target, 
  MessageSquare, 
  Settings,
  BarChart3,
  BrainCircuit,
  FileText,
  Plug,
  Zap
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Integrações", href: "/integrations", icon: Plug },
  { label: "Radar de Oportunidades", href: "/opportunities", icon: Target },
  { label: "Engajamento Multicanal", href: "/engagement", icon: MessageSquare },
  { label: "Automação Inteligente", href: "/automation", icon: Workflow },
  { label: "Visão Estratégica", href: "/analytics", icon: BarChart3 },
  { label: "Central de Inteligência", href: "/machine-learning", icon: BrainCircuit },
  { label: "Relatórios", href: "/reports", icon: FileText },
  { label: "Configurações", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative w-64 flex-shrink-0 h-screen overflow-y-auto flex flex-col glass-effect border-r border-white/[0.06]">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="relative size-7 rounded-lg bg-primary flex items-center justify-center shadow-glow">
            <Zap className="size-4 text-white" />
            <div className="absolute inset-0 rounded-lg bg-primary/50 blur-md -z-10" />
          </div>
          <span className="text-gradient text-xl font-bold tracking-tight">Valence</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2 mt-2">Plataforma</p>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link key={item.href} href={item.href} className="block">
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 relative",
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r-full bg-primary shadow-[0_0_8px_rgba(231,76,60,0.8)]" />
                )}
                <item.icon className={cn("size-4 relative z-10 flex-shrink-0", isActive && "text-primary drop-shadow-glow")} />
                <span className="relative z-10 leading-tight">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User footer */}
      <div className="p-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl glass-effect-strong">
          <div className="size-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
            A
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-white truncate">Acme Corp</span>
            <span className="text-[10px] text-white/40">Plano Enterprise</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
