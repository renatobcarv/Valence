'use client';

import React from 'react';

const steps = [
    { label: 'Conectar', desc: 'Integre seus dados em minutos.', icon: '🔌' },
    { label: 'Analisar', desc: 'IA identifica vazamentos.', icon: '🔍' },
    { label: 'Recuperar', desc: 'Receita volta para o caixa.', icon: '💰' }
];

export const HowItWorks = () => (
    <section className="py-24 lg:py-40 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 lg:mb-32">
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">Fluxo de Recuperação</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent -translate-y-1/2" />

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-xs group">
                        <div className="w-24 h-24 bg-black border border-[#2a2a2a] group-hover:border-[#e74c3c] rounded-full flex items-center justify-center text-3xl mb-8 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(231,76,60,0.2)]">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{step.label}</h3>
                        <p className="text-[#b3b3b3] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
