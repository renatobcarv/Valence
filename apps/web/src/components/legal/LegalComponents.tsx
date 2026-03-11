'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Section } from '@/components/ui/Section';

export const LegalTitle = ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase italic leading-[0.9]">
        {children}
    </h1>
);

export const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-12">
        <h2 className="text-xl font-black tracking-tighter text-[#e74c3c] mb-6 uppercase italic">
            {title}
        </h2>
        <div className="text-[#b3b3b3] leading-relaxed space-y-4 text-sm md:text-base">
            {children}
        </div>
    </div>
);

export const LegalLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatedBackground>
            <Navbar />
            <main className="pt-20">
                <Section containerSize="narrow">
                    <div className="mb-12 flex flex-wrap gap-4">
                        <Link href="/legal/terms" className="text-[10px] font-black uppercase tracking-widest text-[#555] hover:text-[#e74c3c] transition-colors">Termos de Uso</Link>
                        <Link href="/legal/privacy" className="text-[10px] font-black uppercase tracking-widest text-[#555] hover:text-[#e74c3c] transition-colors">Privacidade</Link>
                        <Link href="/legal/lgpd" className="text-[10px] font-black uppercase tracking-widest text-[#555] hover:text-[#e74c3c] transition-colors">LGPD</Link>
                    </div>
                    {children}
                </Section>
            </main>
            <Footer />
        </AnimatedBackground>
    );
};
