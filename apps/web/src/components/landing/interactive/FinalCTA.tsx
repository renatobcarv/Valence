'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
    return (
        <section className="py-32 lg:py-48 bg-black relative z-10 overflow-hidden border-t border-[#2a2a2a]">

            {/* Soft grid background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase">
                        PARE DE DEIXAR <span className="text-[#e74c3c]">RECEITA</span> DESAPARECER.
                    </h2>

                    <p className="text-xl text-[#b3b3b3] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Conecte a Valence hoje mesmo e descubra exatamente o valor financeiro que está oculto no seu CRM.
                    </p>

                    <div className="relative inline-block group cursor-pointer">
                        <div className="absolute -inset-2 bg-[#e74c3c] rounded-lg blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                        <button className="relative px-12 py-6 bg-black border border-[#e74c3c] text-white font-black uppercase tracking-[0.2em] text-sm rounded-lg hover:bg-[#e74c3c] transition-colors duration-300 shadow-2xl">
                            Solicitar Acesso Antecipado
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
