'use client';

import React from 'react';
import { Button } from './Navbar';

export const Hero = () => (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e74c3c]/10 border border-[#e74c3c]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#e74c3c] animate-pulse" />
                        <span className="text-[10px] font-bold text-[#e74c3c] uppercase tracking-[0.2em]">Revenue Discovery AI 2.0</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-8">
                        RECUPERE A <span className="text-[#e74c3c]">RECEITA</span> QUE VOCÊ ESTÁ PERDENDO.
                    </h1>

                    <p className="text-lg text-[#b3b3b3] leading-relaxed mb-10 max-w-lg">
                        A Valence analisa seu CRM e dados de vendas para detectar vazamentos invisíveis e automatizar a recuperação de receita perdida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="px-8 py-5 text-base">Começar Recuperação</Button>
                        <Button variant="secondary" className="px-8 py-5 text-base">Ver Demonstração</Button>
                    </div>
                </div>

                {/* Fintech Dashboard Mockup */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-[#e74c3c]/20 blur-2xl rounded-[3rem] opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-8 shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <p className="text-[10px] font-bold text-[#b3b3b3] uppercase tracking-widest mb-1">Total Recuperável</p>
                                <p className="text-3xl font-black text-white">$86,420.00</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#e74c3c]/10 border border-[#e74c3c]/30 flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-t-transparent border-[#e74c3c] rounded-full animate-spin" />
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { label: 'Leads Abandonados', value: '214', color: '#e74c3c' },
                                { label: 'Propostas Sem Resposta', value: '43', color: '#e74c3c' },
                                { label: 'Clientes Inativos', value: '17', color: '#3498db' }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#111111] p-4 rounded-xl border border-[#2a2a2a] flex items-center justify-between hover:border-[#e74c3c]/30 transition-colors">
                                    <div>
                                        <p className="text-[9px] font-bold text-[#b3b3b3] uppercase tracking-widest">{item.label}</p>
                                        <p className="text-xl font-bold text-white">{item.value}</p>
                                    </div>
                                    <div className="h-8 w-1 lg:w-20 bg-[#2a2a2a] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#e74c3c] transition-all duration-1000 delay-300"
                                            style={{ width: `${Math.random() * 60 + 20}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
