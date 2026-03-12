"use client";

import { Search, Bell, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Topbar() {
  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-16 flex items-center justify-between px-8 z-10 sticky top-0 glass-effect border-b border-white/[0.06]"
    >
      {/* Search */}
      <div className="w-1/3 max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
          <Input
            type="search"
            placeholder="Buscar leads, clientes ou campanhas..."
            className="pl-9 bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/25 text-sm h-9 focus-visible:ring-primary/30 rounded-xl"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        {/* AI Status Pill */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
        >
          <Sparkles className="size-3" />
          <span>IA Ativa</span>
        </motion.div>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative size-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] text-white/60 hover:text-white"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 size-1.5 rounded-full bg-primary animate-pulse" />
        </Button>
      </div>
    </motion.header>
  );
}
