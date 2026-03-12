'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
    return (
        <AnimatedBackground>
            <Navbar />
            <main className="pt-20">
                {/* Hero */}
                <Section className="text-center" containerSize="narrow">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase italic leading-[0.9]">
                        POR QUE A <span className="text-[#e74c3c]">VALENCE</span> EXISTE
                    </h1>
                    <p className="text-xl text-[#b3b3b3] leading-relaxed font-medium">
                        Empresas perdem bilhões todos os anos simplesmente porque leads são esquecidos, propostas são abandonadas e clientes de alto valor tornam-se inativos sem que ninguém perceba.
                    </p>
                </Section>

                {/* Missão */}
                <Section className="bg-[#111111] border-y border-[#2a2a2a]">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-black tracking-tighter text-white mb-6 uppercase">NOSSA MISSÃO</h2>
                            <p className="text-[#b3b3b3] text-lg leading-relaxed mb-8">
                                A Valence nasceu para construir a camada de inteligência que impede o vazamento de receita. Usamos IA e análise de dados em tempo real para detectar oportunidades que o olho humano ignora.
                            </p>
                            <div className="h-1 lg:w-32 bg-[#e74c3c]" />
                        </div>
                        <Card className="text-center p-12">
                            <p className="text-4xl font-black text-white italic tracking-tighter mb-4 italic">"RECUPERAR É O NOVO VENDER."</p>
                            <p className="text-[#e74c3c] font-bold text-xs uppercase tracking-widest">Filosofia Valence</p>
                        </Card>
                    </div>
                </Section>

                {/* Princípios */}
                <Section>
                    <h2 className="text-3xl font-black tracking-tighter text-white mb-16 text-center uppercase">FILOSOFIA DO PRODUTO</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Data-Driven', desc: 'Decisões baseadas em fatos reais extraídos do seu CRM, não em intuição.' },
                            { title: 'Automação sobre Manual', desc: 'Se pode ser automatizado, deve ser. Deixe seu time focado em fechar, não em procurar.' },
                            { title: 'Foco na Recuperação', desc: 'É muito mais barato recuperar um lead que já conhece você do que comprar um novo.' }
                        ].map((p, i) => (
                            <Card key={i}>
                                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">{p.title}</h3>
                                <p className="text-[#b3b3b3] text-sm leading-relaxed">{p.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Visão de Futuro */}
                <Section className="bg-black text-center" containerSize="narrow">
                    <h2 className="text-3xl font-black tracking-tighter text-white mb-6 uppercase">VISÃO DE FUTURO</h2>
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">
                        Estamos construindo o sistema operacional da inteligência de receita. Um futuro onde nenhuma empresa brasileira perca capital por falhas operacionais ou falta de visibilidade.
                    </p>
                </Section>
            </main>
            <Footer />
        </AnimatedBackground>
    );
}
