'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => (
    <footer className="py-20 bg-black border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                <div className="col-span-2 lg:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <div className="w-6 h-6 bg-[#e74c3c] rounded-sm rotate-45" />
                        <span className="text-lg font-bold tracking-tighter text-white">VALENCE</span>
                    </Link>
                    <p className="text-sm text-[#b3b3b3] leading-relaxed max-w-xs uppercase font-bold tracking-tight">
                        A camada de inteligência para recuperação de receita empresarial.
                    </p>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Produto</h4>
                    <ul className="space-y-4 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">
                        <li><Link href="/#features" className="hover:text-[#e74c3c] transition-colors">Recursos</Link></li>
                        <li><Link href="/pricing" className="hover:text-[#e74c3c] transition-colors">Preços</Link></li>
                        <li><Link href="/integrations" className="hover:text-[#e74c3c] transition-colors">Integrações</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Recursos</h4>
                    <ul className="space-y-4 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">
                        <li><Link href="/docs" className="hover:text-[#e74c3c] transition-colors">Documentação</Link></li>
                        <li><Link href="/docs/api" className="hover:text-[#e74c3c] transition-colors">API</Link></li>
                        <li><Link href="/blog" className="hover:text-[#e74c3c] transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Empresa</h4>
                    <ul className="space-y-4 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">
                        <li><Link href="/about" className="hover:text-[#e74c3c] transition-colors">Sobre</Link></li>
                        <li><Link href="/support" className="hover:text-[#e74c3c] transition-colors">Suporte</Link></li>
                        <li><Link href="/company" className="hover:text-[#e74c3c] transition-colors">Carreiras</Link></li>
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
                    <Link href="/legal/terms" className="hover:text-[#e74c3c] transition-colors">TERMOS</Link>
                    <Link href="/legal/privacy" className="hover:text-[#e74c3c] transition-colors">PRIVACIDADE</Link>
                    <Link href="/legal/lgpd" className="hover:text-[#e74c3c] transition-colors">LGPD</Link>
                </div>
            </div>
        </div>
    </footer>
);
