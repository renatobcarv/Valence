'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'CONECTE', desc: 'Integre CRM e e-mail em minutos.', icon: '🔌' },
    { num: '02', title: 'ANALISE', desc: 'A IA mapeia todo o seu pipeline histórico.', icon: '🧠' },
    { num: '03', title: 'RECUPERE', desc: 'Descubra a receita perdida e reative deals.', icon: '💰' }
];

export const HowItWorksAnimated = () => {
    return (
        <section className="py-24 lg:py-40 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 lg:mb-32"
                >
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white uppercase italic">
                        COMO A VALENCE <span className="text-[#e74c3c]">FUNCIONA</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line Desktop */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-[120px] h-[120px] bg-[#111111] border border-[#2a2a2a] rounded-full flex items-center justify-center text-4xl mb-8 group-hover:border-[#e74c3c] group-hover:bg-[#1a1a1a] transition-all duration-500 shadow-2xl relative">
                                <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#e74c3c] text-white text-[10px] font-black flex items-center justify-center rounded-full border-4 border-black">
                                    {step.num}
                                </span>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">{step.title}</h3>
                            <p className="text-[#b3b3b3] text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
