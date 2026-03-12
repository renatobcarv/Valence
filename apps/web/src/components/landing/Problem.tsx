'use client';

import React from 'react';

const cards = [
    {
        title: "Leads sem acompanhamento",
        desc: "24% dos leads nunca são contatados pelas vendas. Isso é investimento de marketing jogado diretamente no lixo.",
        icon: "📨"
    },
    {
        title: "Propostas abandonadas",
        desc: "Propostas enviadas que nunca recebem um follow-up. Muitas vezes, um único lembrete recuperaria o negócio.",
        icon: "📄"
    },
    {
        title: "Clientes inativos",
        desc: "Clientes que compravam regularmente e pararam. Eles são a fonte de receita mais barata para recuperar.",
        icon: "👻"
    }
];

export const Problem = () => (
    <section id="problem" className="py-24 lg:py-40 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 lg:mb-24 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
                    A maioria das empresas está <span className="text-[#e74c3c]">vazando receita</span> sem saber.
                </h2>
                <p className="text-[#b3b3b3] text-lg leading-relaxed">
                    Pequenas falhas operacionais se acumulam em perdas massivas. A Valence identifica exatamente onde o dinheiro está fugindo.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, i) => (
                    <div key={i} className="group p-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl hover:border-[#e74c3c]/50 transition-all duration-500">
                        <div className="mb-6 text-4xl">{card.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-[#e74c3c] transition-colors">
                            {card.title}
                        </h3>
                        <p className="text-[#b3b3b3] leading-relaxed text-sm">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
