'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/layout/Navbar';

export default function SupportPage() {
    return (
        <AnimatedBackground>
            <Navbar />
            <main className="pt-20">
                {/* Intro */}
                <Section className="text-center" containerSize="narrow">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase italic leading-[0.9]">
                        PRECISA DE <span className="text-[#e74c3c]">AJUDA</span>?
                    </h1>
                    <p className="text-xl text-[#b3b3b3] leading-relaxed font-medium">
                        Nosso time de especialistas está pronto para ajudar sua empresa a integrar sistemas e começar a recuperar receita imediatamente.
                    </p>
                </Section>

                {/* Opções */}
                <Section className="bg-[#111111] border-y border-[#2a2a2a]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-6">✉️</div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase">SUPORTE POR E-MAIL</h3>
                            <p className="text-[#b3b3b3] text-sm mb-6">Resposta em até 2 horas para clientes Enterprise.</p>
                            <p className="text-[#e74c3c] font-black text-xl">support@valence.ai</p>
                        </Card>
                        <Card className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-6">📚</div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase">DOCUMENTAÇÃO</h3>
                            <p className="text-[#b3b3b3] text-sm mb-6">Guias completos de integração e uso da API.</p>
                            <Button variant="secondary">Acessar Docs</Button>
                        </Card>
                    </div>
                </Section>

                {/* FAQ */}
                <Section containerSize="narrow">
                    <h2 className="text-3xl font-black tracking-tighter text-white mb-16 text-center uppercase italic">FAQ — PERGUNTAS FREQUENTES</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'Como a Valence se conecta aos meus sistemas?', a: 'Integramos via API nativa com Salesforce, Hubspot, Pipedrive e RD Station. Também suportamos webhooks personalizados.' },
                            { q: 'Os dados da minha empresa estão seguros?', a: 'Utilizamos criptografia ponta a ponta e estamos em conformidade com a LGPD. Seus dados de venda nunca saem de um ambiente controlado.' },
                            { q: 'Quanto tempo leva para detectar oportunidades?', a: 'Após a conexão, nossa IA processa os dados históricos e apresenta os primeiros insights de vazamento em menos de 10 minutos.' },
                            { q: 'Quais sistemas são suportados?', a: 'Apoiamos a maioria dos CRMs de mercado e ferramentas de e-mail marketing (Mailchimp, ActiveCampaign, etc).' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-[#2a2a2a] pb-6 group">
                                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter group-hover:text-[#e74c3c] transition-colors">{item.q}</h3>
                                <p className="text-[#b3b3b3] leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </AnimatedBackground>
    );
}
