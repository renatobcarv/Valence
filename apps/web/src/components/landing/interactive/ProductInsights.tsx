'use client';

import React from 'react';
import { motion } from 'framer-motion';

const insights = [
    { label: 'Lead Inativo há 17 dias', value: '12.000', type: 'abandonado' },
    { label: 'Cliente VIP Dorminhoco', value: '34.000', type: 'reativacao' },
    { label: 'Proposta Estagnada', value: '18.000', type: 'estagnado' }
];

export const ProductInsights = () => {
    return (
        <section className="py-24 lg:py-40 bg-[#111111] relative z-10 border-y border-[#2a2a2a]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Copy Side */}
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase leading-[0.9]"
                        >
                            A VALENCE <span className="text-[#e74c3c]">ENCONTRA</span> A RECEITA QUE VOCÊ ESQUECEU.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#b3b3b3] text-lg leading-relaxed mb-8 space-y-4"
                        >
                            <p>Conectamos diretamente ao seu CRM e sistemas de vendas. Nossa IA analisa o histórico de dados em tempo real.</p>
                            <p>Detectamos e listamos oportunidades quentes prontas para recuperação imediata.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-2"
                        >
                            {['Leads Abandonados', 'Negócios Perdidos', 'Clientes Inativos', 'Propostas Estagnadas'].map((pill, i) => (
                                <span key={i} className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {pill}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dashboard Simulation Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-black/50 backdrop-blur-md border border-[#2a2a2a] rounded-3xl p-6 lg:p-10 shadow-2xl relative"
                    >
                        <div className="flex items-center justify-between mb-8 border-b border-[#2a2a2a] pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#333]" />
                                <div className="w-3 h-3 rounded-full bg-[#333]" />
                                <div className="w-3 h-3 rounded-full bg-[#333]" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#555]">Insights da IA</span>
                        </div>

                        <div className="space-y-4">
                            {insights.map((insight, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.3) }}
                                    className="bg-[#1a1a1a] p-5 rounded-2xl border border-[#2a2a2a] flex items-center justify-between group hover:border-[#e74c3c]/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#e74c3c] animate-pulse" />
                                        <div>
                                            <p className="text-white font-bold uppercase tracking-tight text-sm lg:text-base">{insight.label}</p>
                                            <p className="text-[#555] text-[10px] font-black uppercase tracking-widest mt-1">Potencial Recuperação</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl lg:text-2xl font-black text-[#e74c3c]">
                                            R$ {insight.value}
                                        </p>
                                        <button className="text-[9px] uppercase tracking-widest text-[#b3b3b3] hover:text-white mt-1 underline underline-offset-4 decoration-[#2a2a2a] hover:decoration-[#e74c3c] transition-colors cursor-pointer">
                                            Adicionar à Campanha
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute -inset-4 bg-[#e74c3c]/10 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
