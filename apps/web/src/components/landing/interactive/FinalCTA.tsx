'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/layout/Navbar';

export const FinalCTA = () => {
    return (
        <section className="py-32 lg:py-48 bg-black relative z-10 overflow-hidden border-t border-white/5">

            {/* Glowing background influence */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Decisão Estratégica</span>
                    </div>
                    
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-10 leading-[0.85] uppercase font-display">
                        PARE DE DEIXAR <br />
                        <span className="text-gradient">RECEITA EVAPORAR.</span>
                    </h2>

                    <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Conecte a camada de inteligência Valence hoje mesmo e recupere o valor financeiro que está oculto no seu CRM.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button variant="primary" className="px-12 py-6 text-base shadow-[0_0_50px_rgba(231,76,60,0.3)]">
                            Solicitar Acesso Antecipado
                        </Button>
                        <Button variant="secondary" className="px-12 py-6 text-base">
                            Falar com um Especialista
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
