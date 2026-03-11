'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const RevenueLeakMap = () => {
    return (
        <section className="py-24 lg:py-40 bg-[#111111] relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                        MAPEAMENTO DE <span className="text-[#e74c3c]">VAZAMENTOS</span>
                    </h2>
                    <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto">
                        Veja exatamente onde sua operação comercial falha e como a Valence intercepta a perda financeira antes que seja tarde.
                    </p>
                </motion.div>

                {/* Conceptual Map Area */}
                <div className="relative max-w-4xl mx-auto h-[400px] lg:h-[500px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl flex items-center justify-center p-8">
                    {/* Placeholder for complex diagram. For the MVP, we use styled blocks to represent the flow */}

                    <div className="w-full h-full relative flex flex-col justify-between items-center">

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: 'spring', bounce: 0.5 }}
                            className="bg-[#2a2a2a] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-xl z-10"
                        >
                            CRM & Leads Entrantes
                        </motion.div>

                        <div className="absolute top-[15%] bottom-[15%] w-[2px] bg-[#2a2a2a] flex flex-col items-center justify-between py-10">
                            {/* Leak Points */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="relative left-[-150px] lg:left-[-250px] bg-black border border-[#e74c3c]/50 p-4 rounded-xl flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="absolute -right-[60px] lg:-right-[160px] top-1/2 w-[60px] lg:w-[160px] h-[1px] bg-[#e74c3c]/30 border-dashed border-b group-hover:bg-[#e74c3c] transition-colors" />
                                <span className="w-3 h-3 bg-[#e74c3c] rounded-full animate-ping" />
                                <div className="text-left">
                                    <p className="text-[9px] font-black text-[#e74c3c] uppercase tracking-widest mb-1">Ponto de Vazamento 1</p>
                                    <p className="text-sm font-bold text-white uppercase tracking-tight">Lead sem primeiro toque</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="relative right-[-150px] lg:right-[-250px] bg-black border border-[#e74c3c]/50 p-4 rounded-xl flex items-center gap-4 flex-row-reverse group cursor-pointer"
                            >
                                <div className="absolute -left-[60px] lg:-left-[160px] top-1/2 w-[60px] lg:w-[160px] h-[1px] bg-[#e74c3c]/30 border-dashed border-b group-hover:bg-[#e74c3c] transition-colors" />
                                <span className="w-3 h-3 bg-[#e74c3c] rounded-full animate-ping" />
                                <div className="text-right">
                                    <p className="text-[9px] font-black text-[#e74c3c] uppercase tracking-widest mb-1">Ponto de Vazamento 2</p>
                                    <p className="text-sm font-bold text-white uppercase tracking-tight">Proposta ignorada</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: 'spring', bounce: 0.5, delay: 1.5 }}
                            className="bg-black border border-[#e74c3c] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-xl z-10 shadow-[0_0_30px_rgba(231,76,60,0.3)]"
                        >
                            Receita Fechada
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2 }}
                            className="absolute bottom-8 left-8"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-[#e74c3c] rounded-sm flex items-center justify-center text-[8px] font-black text-white">V</span>
                                <span className="text-[10px] font-black text-[#555] uppercase tracking-widest">IA Intercepta Perdas</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
