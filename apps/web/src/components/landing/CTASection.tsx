'use client';

import React from 'react';
import { Button } from './Navbar';

export const CTA = () => (
    <section className="py-32 lg:py-48 bg-black relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase">
                PARE DE DEIXAR <span className="text-[#e74c3c]">DINHEIRO</span> NA MESA HOJE.
            </h2>
            <p className="text-xl text-[#b3b3b3] mb-12 max-w-2xl mx-auto font-medium">
                Descubra em minutos quanta receita sua empresa está perdendo e comece o processo de recuperação automática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-12 py-6 text-lg">Analisar Meus Vazamentos</Button>
            </div>
        </div>
    </section>
);

export const Footer = () => (
    <footer className="py-20 bg-black border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                <div className="col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-6 h-6 bg-[#e74c3c] rounded-sm rotate-45" />
                        <span className="text-lg font-bold tracking-tighter text-white">VALENCE</span>
                    </div>
                    <p className="text-sm text-[#b3b3b3] leading-relaxed max-w-xs uppercase font-bold tracking-tight">
                        A camada de inteligência para recuperação de receita empresarial.
                    </p>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Produto</h4>
                    <ul className="space-y-4 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Recursos</a></li>
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Preços</a></li>
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Integrações</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Recursos</h4>
                    <ul className="space-y-4 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Documentação</a></li>
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">API</a></li>
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Empresa</h4>
                    <ul className="space-y-4 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Sobre</a></li>
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Contato</a></li>
                        <li><a href="#" className="hover:text-[#e74c3c] transition-colors">Carreiras</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Redes</h4>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#b3b3b3] hover:border-[#e74c3c] hover:text-[#e74c3c] transition-all cursor-pointer">
                            X
                        </div>
                        <div className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#b3b3b3] hover:border-[#e74c3c] hover:text-[#e74c3c] transition-all cursor-pointer">
                            IN
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-black text-[#555] uppercase tracking-widest">
                    © 2026 VALENCE INTELLIGENCE. TODOS OS DIREITOS RESERVADOS.
                </p>
                <div className="flex gap-8 text-[10px] font-black text-[#555] uppercase tracking-widest">
                    <a href="#" className="hover:text-[#e74c3c] transition-colors">TERMOS</a>
                    <a href="#" className="hover:text-[#e74c3c] transition-colors">PRIVACIDADE</a>
                </div>
            </div>
        </div>
    </footer>
);
