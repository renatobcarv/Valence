'use client';

import React from 'react';

const features = [
    { title: "Revenue Leak Detection", desc: "Varredura inteligente no funil para identificar leads estagnados." },
    { title: "Customer Reactivation", desc: "IA que detecta padrões de inatividade e sugere ofertas de retorno." },
    { title: "Follow-up Automation", desc: "Fluxos de cadência inteligentes que nunca esquecem de um contato." },
    { title: "Opportunity Scoring", desc: "Priorização em tempo real baseada na probabilidade de recuperação." },
    { title: "Recovery Campaigns", desc: "Automação de e-mail e SMS focada em converter propostas paradas." },
    { title: "Intelligence Dashboard", desc: "Visibilidade total do ROI e da receita recuperada pela plataforma." }
];

export const Features = () => (
    <section id="features" className="py-24 lg:py-40 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
                    CAPACIDADES DA <span className="text-[#e74c3c]">PLATAFORMA</span>
                </h2>
                <p className="text-[#b3b3b3] uppercase tracking-[0.1em] text-sm font-bold">Tudo o que você precisa para estancar o vazamento de capital.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                {features.map((feat, i) => (
                    <div key={i} className="group flex flex-col items-start text-left">
                        <div className="mb-8 w-14 h-14 bg-[#1a1a1a] border border-[#2a2a2a] group-hover:border-[#e74c3c] group-hover:bg-[#e74c3c]/5 rounded-xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-4">
                            <span className="text-[#e74c3c] font-black text-xl">#</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">
                            {feat.title}
                        </h3>
                        <p className="text-[#b3b3b3] text-sm leading-relaxed max-w-xs">
                            {feat.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
