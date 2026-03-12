'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const steps = [
    { num: '01', title: 'CONECTE', desc: 'Integre CRM e e-mail em minutos via conectores nativos.', icon: '🔌' },
    { num: '02', title: 'ANALISE', desc: 'Nossa IA mapeia todo o seu pipeline histórico em tempo real.', icon: '🧠' },
    { num: '03', title: 'RECUPERE', desc: 'Descubra a receita perdida e reative deals estagnados.', icon: '💰' }
];

export const HowItWorksAnimated = () => {
    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 lg:mb-32"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Processo Operacional</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white uppercase font-display leading-[0.9]">
                        ENGENHARIA DE <br />
                        <span className="text-gradient">RECUPERAÇÃO ATIVA</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line Desktop */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-px bg-white/5 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative z-10 group"
                        >
                            <GlassCard delay={i * 0.1} glowColor="rgba(255, 255, 255, 0.05)" className="!p-0 h-full">
                                <div className="p-8 pb-12 flex flex-col items-center text-center">
                                    <div className="size-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-3xl mb-10 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 shadow-2xl relative">
                                        <span className="absolute -top-1 -right-1 size-7 bg-primary text-white text-[9px] font-black flex items-center justify-center rounded-full border-4 border-black font-display">
                                            {step.num}
                                        </span>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tighter font-display leading-tight">{step.title}</h3>
                                    <p className="text-white/30 text-sm leading-relaxed max-w-[200px] font-medium font-display">{step.desc}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
