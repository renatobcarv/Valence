'use client';

import React from 'react';
import Link from 'next/link';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
    const baseStyles = 'px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center inline-block text-sm uppercase tracking-tighter cursor-pointer';
    const variants: any = {
        primary: 'bg-[#e74c3c] text-white hover:bg-[#c0392b] shadow-[0_0_20px_rgba(231,76,60,0.2)] hover:shadow-[0_0_30px_rgba(231,76,60,0.4)]',
        secondary: 'bg-transparent text-white border border-[#2a2a2a] hover:border-[#e74c3c] hover:bg-[#e74c3c]/5',
        ghost: 'text-[#b3b3b3] hover:text-white',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const Navbar = () => (
    <nav className="fixed top-0 w-full z-[100] border-b border-[#2a2a2a] bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#e74c3c] rounded-sm rotate-45 flex items-center justify-center transform transition-transform hover:rotate-90 duration-500">
                    <div className="w-3 h-3 bg-white -rotate-45" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">VALENCE</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                <Link href="/#problem" className="text-xs font-bold text-[#b3b3b3] hover:text-white transition-colors tracking-widest uppercase">Problema</Link>
                <Link href="/about" className="text-xs font-bold text-[#b3b3b3] hover:text-white transition-colors tracking-widest uppercase">Sobre</Link>
                <Link href="/support" className="text-xs font-bold text-[#b3b3b3] hover:text-white transition-colors tracking-widest uppercase">Suporte</Link>
                <Link href="/company" className="text-xs font-bold text-[#b3b3b3] hover:text-white transition-colors tracking-widest uppercase">Empresa</Link>
                <div className="h-4 w-[1px] bg-[#2a2a2a]" />
                <Link href="/login">
                    <Button variant="ghost" className="px-4 py-2">Login</Button>
                </Link>
                <Link href="/login">
                    <Button variant="primary" className="px-5 py-2">Testar Agora</Button>
                </Link>
            </div>
        </div>
    </nav>
);
