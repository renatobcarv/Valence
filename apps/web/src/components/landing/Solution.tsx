'use client';

import React from 'react';

const steps = [
    {
        id: '01',
        title: 'CONECTE SEUS SISTEMAS',
        desc: 'Integração nativa com CRM, E-mail e Dashboards de Venda em minutos.',
        items: ['CRM', 'e-mail', 'dados de venda', 'histórico']
    },
    {
        id: '02',
        title: 'IA DETECTA OPORTUNIDADES',
        desc: 'Nosso motor analisa padrões históricos para encontrar receita oculta.',
        items: ['leads parados', 'churn previdível', 'upsell', 'follow-ups']
    },
    {
        id: '03',
        title: 'RECUPERAÇÃO AUTOMÁTICA',
        desc: 'Ações imediatas para trazer o cliente de volta sem esforço humano.',
        items: ['reativação', 'ofertas', 'alertas', 'smart follow-up']
    }
];

export const Solution = () => (
    <section id="solution" className="py-24 lg:py-40 bg-black">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:sticky lg:top-32 max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase italic">
                        VALENCE ENCONTRA O DINHEIRO <span className="text-[#e74c3c]">ESCONDIDO</span>.
                    </h2>
                    <p className="text-[#b3b3b3] text-lg mb-8">
                        Processos automatizados para garantir que nenhuma oportunidade seja esquecida pelo seu time comercial.
                    </p>
                </div>

                <div className="flex-1 space-y-8">
                    {steps.map((step, i) => (
                        <div key={i} className="p-8 lg:p-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl relative overflow-hidden group hover:border-[#e74c3c]/30 transition-all duration-700">
                            <div className="text-[120px] font-black absolute -right-4 -bottom-8 text-white/[0.02] group-hover:text-[#e74c3c]/[0.05] transition-colors tracking-tighter leading-none pointer-events-none">
                                {step.id}
                            </div>

                            <p className="text-[#e74c3c] font-black text-sm mb-4 tracking-[0.2em]">{step.id} — ETAPA</p>
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{step.title}</h3>
                            <p className="text-[#b3b3b3] mb-8 max-w-md">{step.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {step.items.map((item, j) => (
                                    <span key={j} className="px-3 py-1 bg-[#2a2a2a] text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/5">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
