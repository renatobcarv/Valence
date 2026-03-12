'use client';

import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerSize?: 'default' | 'narrow' | 'wide';
}

export const Section = ({ children, id, className = '', containerSize = 'default' }: SectionProps) => {
    const containerClasses = {
        default: 'max-w-7xl',
        narrow: 'max-w-4xl',
        wide: 'max-w-[1440px]'
    };

    return (
        <section id={id} className={`py-16 lg:py-32 ${className}`}>
            <div className={`mx-auto px-6 ${containerClasses[containerSize]}`}>
                {children}
            </div>
        </section>
    );
};
