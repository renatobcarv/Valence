'use client';

import React from 'react';

const stats = [
    { label: 'Leads Abandonados', value: '214', prefix: '' },
    { label: 'Propostas Sem Resposta', value: '43', prefix: '' },
    { label: 'Clientes VIP Inativos', value: '17', prefix: '' },
    { label: 'Receita Recuperável', value: '86.000', prefix: 'R$' }
];

export const Stats = () => (
    <section className="py-24 bg-black border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                        <p className="text-[#b3b3b3] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                            {stat.label}
                        </p>
                        <div className="flex items-baseline justify-center lg:justify-start gap-1">
                            {stat.prefix && <span className="text-2xl font-black text-white">{stat.prefix}</span>}
                            <span className="text-5xl lg:text-7xl font-black text-[#e74c3c] tracking-tighter">
                                {stat.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
