'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Footer = () => (
    <footer className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                <div className="col-span-2 lg:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-8 group">
                        <div className="w-6 h-6 bg-primary rounded-sm rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                            <div className="w-2 h-2 bg-white -rotate-45" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white font-display uppercase">VALENCE</span>
                    </Link>
                    <p className="text-[11px] text-white/30 leading-relaxed max-w-xs uppercase font-black tracking-[0.1em] font-display">
                        A camada de inteligência para recuperação de receita empresarial de alto impacto.
                    </p>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8 font-display">Produto</h4>
                    <ul className="space-y-4 text-[10px] font-black text-white/40 uppercase tracking-widest font-display">
                        <li><Link href="/#features" className="hover:text-primary transition-colors">Recursos</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">Preços</Link></li>
                        <li><Link href="/integrations" className="hover:text-primary transition-colors">Integrações</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8 font-display">Recursos</h4>
                    <ul className="space-y-4 text-[10px] font-black text-white/40 uppercase tracking-widest font-display">
                        <li><Link href="/docs" className="hover:text-primary transition-colors">Documentação</Link></li>
                        <li><Link href="/docs/api" className="hover:text-primary transition-colors">API</Link></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8 font-display">Empresa</h4>
                    <ul className="space-y-4 text-[10px] font-black text-white/40 uppercase tracking-widest font-display">
                        <li><Link href="/about" className="hover:text-primary transition-colors">Sobre</Link></li>
                        <li><Link href="/support" className="hover:text-primary transition-colors">Suporte</Link></li>
                        <li><Link href="/company" className="hover:text-primary transition-colors">Carreiras</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8 font-display">Conectar</h4>
                    <div className="flex gap-3">
                        {['X', 'IN'].map((social) => (
                            <div key={social} className="size-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[10px] font-black text-white/40 hover:border-primary/50 hover:text-primary transition-all cursor-pointer font-display">
                                {social}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.3em] font-display">
                    © 2026 VALENCE INTELLIGENCE. TODOS OS DIREITOS RESERVADOS.
                </p>
                <div className="flex gap-8 text-[10px] font-black text-white/10 uppercase tracking-[0.3em] font-display">
                    <Link href="/legal/terms" className="hover:text-primary transition-colors">TERMOS</Link>
                    <Link href="/legal/privacy" className="hover:text-primary transition-colors">PRIVACIDADE</Link>
                    <Link href="/legal/lgpd" className="hover:text-primary transition-colors">LGPD</Link>
                </div>
            </div>
        </div>
    </footer>
);
