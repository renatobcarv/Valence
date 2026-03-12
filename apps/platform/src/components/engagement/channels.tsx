"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Smartphone, Send, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function EngagementChannels() {
  const emailTemplates = [
    { title: "Recuperação de Proposta (Dia 7)", openRate: "42%", replyRate: "12%", active: true },
    { title: "Reativação — Cliente Inativo 90 dias", openRate: "28%", replyRate: "5%", active: true },
    { title: "Upsell Plano Enterprise", openRate: "55%", replyRate: "18%", active: false },
  ];

  return (
    <Tabs defaultValue="email" className="w-full">
      <TabsList className="glass-effect border border-white/[0.08] rounded-xl p-1 h-auto mb-6">
        <TabsTrigger value="email" className="flex gap-2 items-center rounded-lg text-xs data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/40">
          <Mail className="size-3.5" /> E-mail
        </TabsTrigger>
        <TabsTrigger value="whatsapp" className="flex gap-2 items-center rounded-lg text-xs data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/40">
          <MessageSquare className="size-3.5" /> WhatsApp
        </TabsTrigger>
        <TabsTrigger value="sms" className="flex gap-2 items-center rounded-lg text-xs data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/40">
          <Smartphone className="size-3.5" /> SMS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="email" className="space-y-3">
        <div className="flex justify-end mb-4">
          <Button className="bg-primary hover:bg-primary/90 text-white text-xs rounded-xl gap-2">
            <Send className="size-3.5" /> Criar Template
          </Button>
        </div>
        {emailTemplates.map((template, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between p-4 glass-effect rounded-xl group hover:bg-white/[0.03] transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-white">{template.title}</p>
              <div className="flex gap-4 mt-1">
                <span className="text-[10px] text-white/30">Abertura: <strong className="text-white/60">{template.openRate}</strong></span>
                <span className="text-[10px] text-white/30">Respostas: <strong className="text-white/60">{template.replyRate}</strong></span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${
                template.active
                  ? "text-green-400 bg-green-500/10 border-green-500/20"
                  : "text-white/30 bg-white/[0.03] border-white/[0.08]"
              }`}>
                {template.active ? "Ativo" : "Pausado"}
              </span>
              <Button variant="ghost" size="icon" className="size-8 rounded-xl text-white/30 hover:text-white hover:bg-white/[0.05]">
                <History className="size-3.5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </TabsContent>

      {["whatsapp", "sms"].map((channel) => (
        <TabsContent key={channel} value={channel}>
          <div className="glass-effect rounded-2xl min-h-[300px] flex items-center justify-center border-dashed">
            <div className="text-center">
              {channel === "whatsapp" ? <MessageSquare className="size-10 text-white/20 mx-auto mb-3" /> : <Smartphone className="size-10 text-white/20 mx-auto mb-3" />}
              <p className="text-sm font-medium text-white/50">
                {channel === "whatsapp" ? "WhatsApp Business API" : "Integração SMS"}
              </p>
              <p className="text-xs text-white/25 mt-1 max-w-xs">
                {channel === "whatsapp" ? "Conecte seu número para enviar mensagens aprovadas pela Meta." : "Configure Twilio ou Zenvia para enviar alertas por SMS."}
              </p>
              <Button className="mt-5 text-xs bg-white/[0.06] hover:bg-white/10 border border-white/[0.1] text-white rounded-xl">
                {channel === "whatsapp" ? "Conectar WhatsApp" : "Configurar SMS"}
              </Button>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
