'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const problems = [
    { title: 'Leads sem Follow-up', desc: 'O time de vendas focou nos leads mais quentes e esqueceu dos demais.', icon: '📨', glow: 'rgba(231, 76, 60, 0.1)' },
    { title: 'Propostas Esquecidas', desc: 'O cliente não respondeu na primeira tentativa e o negócio estacionou.', icon: '📄', glow: 'rgba(255, 255, 255, 0.05)' },
    { title: 'Negócios Estagnados', desc: 'Oportunidades paradas no pipeline há mais de 30 dias sem nova interação.', icon: '🛑', glow: 'rgba(231, 76, 60, 0.1)' },
    { title: 'Clientes Inativos', desc: 'Compradores recorrentes que pararam de comprar sem nenhum alerta ao time.', icon: '👻', glow: 'rgba(255, 255, 255, 0.05)' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export const ProblemCards = () => {
    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 overflow-hidden" id="problem">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Sinais de Alerta</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase font-display leading-[0.9]">
                        POR QUE VOCÊ ESTÁ <br />
                        <span className="text-gradient">PERDENDO DINHEIRO?</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {problems.map((prob, i) => (
                        <GlassCard key={i} delay={i * 0.1} glowColor={prob.glow} className="!p-0 h-full">
                            <div className="p-8 h-full flex flex-col items-start">
                                <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {prob.icon}
                                </div>
                                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tighter font-display leading-tight">
                                    {prob.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {prob.desc}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
