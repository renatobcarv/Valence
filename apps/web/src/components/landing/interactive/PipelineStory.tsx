'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { label: 'Lead entra no pipeline', status: 'active', time: 'Dia 1' },
    { label: 'Primeiro Contato', status: 'active', time: 'Dia 2' },
    { label: 'Negociação Iniciada', status: 'active', time: 'Dia 5' },
    { label: 'Follow-up falha (Ocupação do vendedor)', status: 'warning', time: 'Dia 12' },
    { label: 'Oportunidade esquecida', status: 'error', time: 'Dia 20' },
    { label: 'Receita perdida ($$$)', status: 'lost', time: 'Dia 45' }
];

export const PipelineStory = () => {
    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter font-display leading-[0.9]">
                        A JORNADA DA <br />
                        <span className="text-gradient">RECEITA EVAPORANDO</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line with Glow */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-white/5 z-0"
                    >
                        <motion.div 
                            className="w-full bg-gradient-to-b from-primary via-primary/50 to-primary h-full"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </motion.div>

                    <div className="space-y-12 relative z-10">
                        {steps.map((step, i) => {
                            const isLost = step.status === 'error' || step.status === 'lost';
                            const isWarning = step.status === 'warning';

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    className="flex items-center gap-8 group"
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border border-white/10 shrink-0 transition-all duration-500 glass-effect relative
                                        ${isLost ? 'border-primary/50 text-primary shadow-[0_0_15px_rgba(231,76,60,0.3)]' :
                                            isWarning ? 'border-orange-500/50 text-orange-500' : 'text-white/20 group-hover:text-white group-hover:border-white/30'}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${isLost ? 'bg-primary animate-pulse' : isWarning ? 'bg-orange-500' : 'bg-current'}`} />
                                    </div>

                                    <div className="flex-1 glass-effect p-6 rounded-2xl flex justify-between items-center group-hover:border-white/20 transition-all duration-500">
                                        <h3 className={`text-sm md:text-base font-black tracking-tight uppercase font-display ${isLost ? 'text-primary' : 'text-white/60 group-hover:text-white'}`}>
                                            {step.label}
                                        </h3>
                                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] bg-white/5 px-3 py-1.5 rounded-full border border-white/5 font-display tabular-nums">
                                            {step.time}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-24 p-8 rounded-3xl glass-effect-strong text-center border-primary/20 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-primary/5 blur-3xl" />
                    <div className="relative">
                        <p className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-primary/20">
                            Fator de Risco Crítico
                        </p>
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter font-display leading-tight mb-4">
                            Sua empresa <br /> <span className="text-primary italic">evapora lucro</span> <br /> que a Valence detecta.
                        </h2>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
