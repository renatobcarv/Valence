'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/layout/Navbar';

const insights = [
    { label: 'Lead Inativo há 17 dias', value: '12.000', type: 'abandonado' },
    { label: 'Cliente VIP Dorminhoco', value: '34.000', type: 'reativacao' },
    { label: 'Proposta Estagnada', value: '18.000', type: 'estagnado' }
];

export const ProductInsights = () => {
    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Copy Side */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Inteligência Automática</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase leading-[0.85] font-display">
                                A VALENCE <br />
                                <span className="text-gradient">ENCONTRA A RECEITA</span> <br />
                                QUE VOCÊ ESQUECEU.
                            </h2>

                            <div className="text-white/40 text-lg leading-relaxed mb-10 space-y-6 max-w-md">
                                <p>Conectamos diretamente ao seu CRM para analisar o histórico de dados em tempo real através de modelos proprietários de IA.</p>
                                <p>Detectamos anomalias comportamentais e listamos oportunidades quentes prontas para recuperação estratégica.</p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {['Leads Abandonados', 'Negócios Perdidos', 'Clientes Inativos', 'Propostas Estagnadas'].map((pill, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest rounded-full font-display">
                                        {pill}
                                    </span>
                                ))}
                            </div>

                            <Button variant="secondary" className="px-10">Explorar Tecnologia</Button>
                        </motion.div>
                    </div>

                    {/* Dashboard Simulation Side */}
                    <div className="relative">
                        <GlassCard delay={0.3} glowColor="rgba(231, 76, 60, 0.2)" className="border-white/10 !p-0">
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                                    <div className="flex gap-2">
                                        <div className="size-2.5 rounded-full bg-white/10" />
                                        <div className="size-2.5 rounded-full bg-white/10" />
                                        <div className="size-2.5 rounded-full bg-white/10" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 font-display">Radar de Inteligência Valence</span>
                                </div>

                                <div className="space-y-4">
                                    {insights.map((insight, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 + (i * 0.2) }}
                                            className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 flex items-center justify-between group hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(231,76,60,0.8)] animate-glow" />
                                                <div>
                                                    <p className="text-white font-black uppercase tracking-tighter text-sm font-display mb-1">{insight.label}</p>
                                                    <p className="text-white/20 text-[9px] font-black uppercase tracking-widest">Potencial de Recuperação</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-black text-primary font-display tabular-nums tracking-tighter mb-1">
                                                    R$ {insight.value}
                                                </p>
                                                <button className="text-[8px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors cursor-pointer font-black border-b border-white/10 hover:border-primary">
                                                    RECUPERAR AGORA
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                        
                        {/* Decorative Blur Element */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    );
};
