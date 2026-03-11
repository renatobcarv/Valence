'use client';

import React, { useEffect, useState } from 'react';

export const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-red-500/30">
            {/* Interactive Glow */}
            <div
                className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(231, 76, 60, 0.08), transparent 80%)`,
                }}
            />

            {/* Ambient Background Glows */}
            <div className="pointer-events-none fixed -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-600/5 blur-[120px] rounded-full" />
            <div className="pointer-events-none fixed -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-red-600/5 blur-[120px] rounded-full" />

            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
};
