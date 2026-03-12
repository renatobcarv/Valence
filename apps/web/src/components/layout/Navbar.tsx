'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
    const baseStyles = 'px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-center inline-block text-[11px] uppercase tracking-[0.15em] cursor-pointer active:scale-95';
    const variants: any = {
        primary: 'bg-primary text-white hover:shadow-[0_0_25px_rgba(231,76,60,0.4)] border border-primary/20',
        secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
        ghost: 'text-white/50 hover:text-white',
    };

    return (
        <button className={cn(baseStyles, variants[variant], className)} {...props}>
            {children}
        </button>
    );
};

export const Navbar = () => (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-5xl px-4">
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl px-8 h-16 flex items-center justify-between"
        >
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-6 h-6 bg-primary rounded-sm rotate-45 flex items-center justify-center transform transition-all group-hover:rotate-90 duration-500">
                    <div className="w-2 h-2 bg-white -rotate-45" />
                </div>
                <span className="text-lg font-black tracking-tighter text-white font-display uppercase group-hover:tracking-widest transition-all duration-500">VALENCE</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                <Link href="#problem" className="text-[10px] font-black text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase">Problema</Link>
                <Link href="/about" className="text-[10px] font-black text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase">Sobre</Link>
                <Link href="/company" className="text-[10px] font-black text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase">Empresa</Link>
                
                <div className="h-4 w-[1px] bg-white/10" />
                
                <div className="flex items-center gap-3">
                    <Link href="/login">
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="primary">Testar Agora</Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    </nav>
);
