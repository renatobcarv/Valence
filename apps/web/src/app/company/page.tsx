'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function CompanyPage() {
    return (
        <AnimatedBackground>
            <Navbar />
            <main className="pt-20">
                {/* Overview */}
                <Section className="text-center" containerSize="narrow">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase italic leading-[0.9]">
                        A <span className="text-[#e74c3c]">COMPANHIA</span>
                    </h1>
                    <p className="text-xl text-[#b3b3b3] leading-relaxed font-medium">
                        VALENCE INTELLIGENCE — Construindo o futuro da eficiência comercial através da inteligência artificial e dados de alta precisão.
                    </p>
                </Section>

                {/* Princípios */}
                <Section className="bg-[#111111] border-y border-[#2a2a2a]">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'INTELIGÊNCIA DE DADOS', desc: 'Transformamos ruído em sinal claro para o seu time de vendas.' },
                            { title: 'AUTOMAÇÃO', desc: 'Aceleramos ciclos de venda através de automações inteligentes.' },
                            { title: 'EFICIÊNCIA', desc: 'Foco total em ROI e recuperação de ativos financeiros.' }
                        ].map((p, i) => (
                            <div key={i} className="text-left">
                                <div className="h-1 lg:w-16 bg-[#e74c3c] mb-6" />
                                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">{p.title}</h3>
                                <p className="text-[#b3b3b3] text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Legal / Contato */}
                <Section>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-black text-white mb-8 uppercase italic tracking-tighter">JURÍDICO</h2>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[#b3b3b3] hover:text-[#e74c3c] transition-colors font-bold uppercase tracking-widest text-xs">Termos de Serviço</a></li>
                                <li><a href="#" className="text-[#b3b3b3] hover:text-[#e74c3c] transition-colors font-bold uppercase tracking-widest text-xs">Política de Privacidade</a></li>
                                <li><a href="#" className="text-[#b3b3b3] hover:text-[#e74c3c] transition-colors font-bold uppercase tracking-widest text-xs">Compliance LGPD</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white mb-8 uppercase italic tracking-tighter">CONTATO</h2>
                            <div className="space-y-4">
                                <p className="text-[#b3b3b3] text-sm font-bold uppercase tracking-widest">E-mail: <span className="text-white">business@valence.ai</span></p>
                                <p className="text-[#b3b3b3] text-sm font-bold uppercase tracking-widest">Sede: <span className="text-white">São Paulo, Brasil — Global Operations</span></p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </AnimatedBackground>
    );
}
