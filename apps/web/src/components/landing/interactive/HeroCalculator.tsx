'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HeroCalculator = () => {
    const [leads, setLeads] = useState(500);
    const [dealValue, setDealValue] = useState(2500);
    const [lostRevenue, setLostRevenue] = useState(0);

    // Assuming average 24% of leads are lost without follow-up (from previous copy)
    useEffect(() => {
        const lostLeads = leads * 0.24;
        const potentialRevenue = lostLeads * dealValue;

        // Simple animation logic for the number could be added, but relying on quick React updates for now
        setLostRevenue(Math.floor(potentialRevenue));
    }, [leads, dealValue]);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Copy Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9]">
                            Quanta receita sua empresa perde sem <span className="text-[#e74c3c]">perceber</span>?
                        </h1>
                        <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed font-medium">
                            A Valence analisa seus dados de vendas e revela oportunidades de receita ocultas dentro do seu próprio funil.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-[#e74c3c] text-white font-bold uppercase tracking-widest text-sm rounded-md shadow-[0_0_20px_rgba(231,76,60,0.2)] hover:shadow-[0_0_30px_rgba(231,76,60,0.4)] transition-all hover:-translate-y-1">
                                Descobrir Receita Oculta
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-[#2a2a2a] text-white font-bold uppercase tracking-widest text-sm rounded-md hover:border-[#e74c3c] hover:bg-[#e74c3c]/5 transition-all">
                                Ver como funciona
                            </button>
                        </div>
                    </motion.div>

                    {/* Calculator Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e74c3c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            <h3 className="text-sm font-black text-[#555] uppercase tracking-[0.2em] mb-8 text-center">Simulador de Perda de Receita</h3>

                            <div className="space-y-8 mb-10">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">Leads Mensais</label>
                                        <span className="text-white font-bold">{leads}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="50" max="5000" step="10"
                                        value={leads}
                                        onChange={(e) => setLeads(Number(e.target.value))}
                                        className="w-full h-1 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-[#e74c3c]"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">Ticket Médio (R$)</label>
                                        <span className="text-white font-bold">R$ {dealValue.toLocaleString('pt-BR')}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100" max="20000" step="100"
                                        value={dealValue}
                                        onChange={(e) => setDealValue(Number(e.target.value))}
                                        className="w-full h-1 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-[#e74c3c]"
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-black border border-[#2a2a2a] rounded-xl text-center relative overflow-hidden">
                                <motion.div
                                    className="absolute -inset-1 bg-[#e74c3c]/20 blur-xl rounded-xl"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="relative">
                                    <p className="text-[10px] font-bold text-[#b3b3b3] uppercase tracking-[0.2em] mb-2">Estimativa de Receita Perdida (Mês)</p>
                                    <motion.p
                                        key={lostRevenue}
                                        initial={{ scale: 0.9, opacity: 0.8 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-4xl lg:text-5xl font-black text-[#e74c3c] tracking-tighter"
                                    >
                                        R$ {lostRevenue.toLocaleString('pt-BR')}
                                    </motion.p>
                                    <p className="text-[9px] text-[#555] uppercase mt-4 tracking-widest">* Baseado na média de mercado de 24% de leads sem follow-up</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
