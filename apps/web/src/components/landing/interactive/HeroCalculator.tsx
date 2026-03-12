'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Button } from '@/components/layout/Navbar';

export const HeroCalculator = () => {
    const [leads, setLeads] = useState(850);
    const [dealValue, setDealValue] = useState(4200);
    const [lostRevenue, setLostRevenue] = useState(0);

    useEffect(() => {
        const lostLeads = leads * 0.24;
        const potentialRevenue = lostLeads * dealValue;
        setLostRevenue(Math.floor(potentialRevenue));
    }, [leads, dealValue]);

    return (
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Análise de Receita via IA Ativa</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85] font-display uppercase">
                            RECUPERE <br />
                            <span className="text-gradient">RECEITA PERDIDA</span> <br />
                            COM INTELIGÊNCIA.
                        </h1>
                        <p className="text-xl text-white/40 mb-10 leading-relaxed font-medium max-w-xl">
                            A Valence analisa silenciosamente seu funil de vendas, detecta vazamentos de receita em tempo real e automatiza a recuperação estratégica.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" className="px-10 py-5 text-sm">
                                Começar Recuperação Grátis
                            </Button>
                            <Button variant="secondary" className="px-10 py-5 text-sm">
                                Ver Demonstração
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Premium Calculator */}
                    <div className="lg:col-span-5">
                        <GlassCard delay={0.2} glowColor="rgba(231, 76, 60, 0.15)" className="border-white/10 px-0 py-0">
                            <div className="p-8 space-y-10">
                                <div className="text-center">
                                    <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 font-display">Simulador de Impacto Valence</h3>
                                    <div className="h-px w-12 bg-primary/30 mx-auto" />
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Leads Mensais</label>
                                            <span className="text-2xl font-black text-white font-display tabular-nums tracking-tighter">{leads}</span>
                                        </div>
                                        <div className="relative group/slider">
                                            <input
                                                type="range"
                                                min="100" max="5000" step="50"
                                                value={leads}
                                                onChange={(e) => setLeads(Number(e.target.value))}
                                                className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary group-hover/slider:bg-white/10 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Ticket Médio (R$)</label>
                                            <span className="text-2xl font-black text-white font-display tabular-nums tracking-tighter">R$ {dealValue.toLocaleString('pt-BR')}</span>
                                        </div>
                                        <div className="relative group/slider">
                                            <input
                                                type="range"
                                                min="500" max="50000" step="500"
                                                value={dealValue}
                                                onChange={(e) => setDealValue(Number(e.target.value))}
                                                className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary group-hover/slider:bg-white/10 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center relative overflow-hidden group/result">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/result:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative space-y-2">
                                        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Receita Recuperável Estimada</p>
                                        <div className="text-5xl lg:text-6xl font-black text-primary font-display tracking-tighter tabular-nums drop-shadow-glow">
                                            <AnimatedCounter to={lostRevenue} prefix="R$ " />
                                        </div>
                                        <div className="pt-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                                                *Média Valence: +18% de eficácia anual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                </div>
            </div>
        </section>
    );
};
