'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

export const RevenueLeakMap = () => {
    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Visão Estratégica</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter font-display leading-[0.9] mb-8">
                        MAPEAMENTO DE <br />
                        <span className="text-gradient">VAZAMENTOS OPERACIONAIS</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">
                        Identificamos onde sua operação comercial falha e como a Valence intercepta a perda financeira antes que ela atinja o seu bottom-line.
                    </p>
                </motion.div>

                {/* Conceptual Map Area */}
                <div className="relative max-w-5xl mx-auto h-[500px] lg:h-[600px] rounded-[40px] flex items-center justify-center p-8 overflow-hidden">
                    {/* Background Grid for the Map */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(circle_at_center,#000_50%,transparent_100%)] opacity-50" />

                    <div className="w-full h-full relative flex flex-col justify-between items-center py-10">

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', bounce: 0.5 }}
                            className="glass-effect-strong text-white font-black uppercase tracking-[0.2em] text-[10px] px-10 py-5 rounded-2xl z-10 border-white/10 font-display"
                        >
                            CRM & LEADS ENTRANTES
                        </motion.div>

                        {/* Central Flow Line */}
                        <div className="absolute top-[20%] bottom-[20%] w-px bg-gradient-to-b from-white/10 via-primary/50 to-primary/20 flex flex-col items-center justify-around py-10">
                            
                            {/* Leak Points */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="relative left-[-160px] lg:left-[-280px] glass-effect p-6 rounded-3xl flex items-center gap-5 group cursor-pointer border-primary/20 hover:border-primary/50 transition-all duration-500"
                            >
                                <div className="absolute -right-[80px] lg:-right-[200px] top-1/2 w-[80px] lg:w-[200px] h-px bg-gradient-to-r from-transparent to-primary/30 border-dashed border-b group-hover:to-primary transition-all duration-500" />
                                <div className="size-3 bg-primary rounded-full shadow-[0_0_15px_rgba(231,76,60,0.8)] animate-pulse" />
                                <div className="text-left">
                                    <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-1 font-display">Vazamento Detectado</p>
                                    <p className="text-sm font-black text-white uppercase tracking-tighter font-display">Lead Sem Primeiro Toque</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="relative right-[-160px] lg:right-[-280px] glass-effect p-6 rounded-3xl flex items-center gap-5 flex-row-reverse group cursor-pointer border-primary/20 hover:border-primary/50 transition-all duration-500"
                            >
                                <div className="absolute -left-[80px] lg:-left-[200px] top-1/2 w-[80px] lg:w-[200px] h-px bg-gradient-to-l from-transparent to-primary/30 border-dashed border-b group-hover:to-primary transition-all duration-500" />
                                <div className="size-3 bg-primary rounded-full shadow-[0_0_15px_rgba(231,76,60,0.8)] animate-pulse" />
                                <div className="text-right">
                                    <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-1 font-display">Anomalia de Pipeline</p>
                                    <p className="text-sm font-black text-white uppercase tracking-tighter font-display">Proposta Ignorada</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', bounce: 0.5, delay: 1.5 }}
                            className="glass-effect-strong text-primary font-black uppercase tracking-[0.2em] text-[10px] px-10 py-5 rounded-2xl z-10 border-primary/30 shadow-[0_0_40px_rgba(231,76,60,0.2)] font-display"
                        >
                            RECEITA RECUPERADA
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2 }}
                            className="absolute bottom-4 left-4 flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
                        >
                            <div className="size-2 bg-primary rounded-full animate-glow" />
                            <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] font-display">Proteção Ativa Valence AI</span>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
