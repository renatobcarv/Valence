'use client';

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
    return (
        <div className={`
            bg-[#1a1a1a] 
            border border-[#2a2a2a] 
            rounded-2xl 
            p-8 
            transition-all 
            duration-500
            ${hover ? 'hover:border-[#e74c3c]/50 group' : ''}
            ${className}
        `}>
            {children}
        </div>
    );
};
