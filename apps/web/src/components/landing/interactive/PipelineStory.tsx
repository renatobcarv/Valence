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

                <div className="relative">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/20 via-[#e74c3c]/50 to-[#e74c3c] z-0"
                    />

                    <div className="space-y-8 relative z-10">
                        {steps.map((step, i) => {
                            const isLost = step.status === 'error' || step.status === 'lost';
                            const isWarning = step.status === 'warning';

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: i * 0.3 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-black shrink-0 transition-colors duration-500
                                        ${isLost ? 'bg-[#e74c3c] shadow-[0_0_20px_rgba(231,76,60,0.5)]' :
                                            isWarning ? 'bg-orange-500' : 'bg-[#2a2a2a] group-hover:bg-white'}`}
                                    >
                                        <div className={`w-3 h-3 rounded-full ${isLost ? 'bg-white animate-pulse' : 'bg-black'}`} />
                                    </div>

                                    <div className="flex-1 bg-[#111111] border border-[#2a2a2a] p-6 rounded-2xl flex justify-between items-center group-hover:border-[#e74c3c]/30 transition-colors">
                                        <h3 className={`text-lg font-bold tracking-tight uppercase ${isLost ? 'text-[#e74c3c]' : 'text-white'}`}>
                                            {step.label}
                                        </h3>
                                        <span className="text-[10px] font-black text-[#555] uppercase tracking-[0.2em] bg-[#1a1a1a] px-3 py-1 rounded-full">
                                            {step.time}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="mt-20 text-center"
                >
                    <p className="inline-block px-4 py-2 bg-[#e74c3c]/10 text-[#e74c3c] rounded-full text-xs font-black tracking-widest uppercase border border-[#e74c3c]/20 mb-6">
                        A Dura Realidade
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        A MAIORIA DAS EMPRESAS NUNCA <span className="text-[#e74c3c]">DETECTA</span> ISSO.
                    </h2>
                </motion.div>

            </div>
        </section>
    );
};
