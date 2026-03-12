'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    { id: 1, text: 'Você utiliza um CRM atualmente?' },
    { id: 2, text: '100% dos seus leads recebem follow-up?' },
    { id: 3, text: 'Você tem clientes inativos que pararam de comprar?' },
    { id: 4, text: 'Existem negócios estagnados no seu pipeline hoje?' }
];

export const InteractiveChecklist = () => {
    const [checkedState, setCheckedState] = useState(new Array(questions.length).fill(false));

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    const isLeaking = checkedState[2] || checkedState[3] || (!checkedState[1] && checkedState[0]);

    return (
        <section className="py-24 lg:py-40 bg-black relative z-10">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">
                        DIAGNÓSTICO <span className="text-[#e74c3c]">RÁPIDO</span>
                    </h2>
                    <p className="text-[#b3b3b3] text-sm uppercase tracking-widest font-bold">Descubra se sua empresa possui receita oculta.</p>
                </div>

                <div className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <div className="space-y-6 mb-12">
                        {questions.map((q, index) => (
                            <label key={q.id} className="flex items-center gap-6 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                        className="appearance-none w-8 h-8 md:w-10 md:h-10 border-2 border-[#2a2a2a] rounded-lg group-hover:border-[#e74c3c] transition-colors checked:bg-[#e74c3c] checked:border-[#e74c3c] cursor-pointer"
                                    />
                                    {checkedState[index] && (
                                        <svg className="absolute w-5 h-5 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-lg md:text-xl font-bold text-[#b3b3b3] group-hover:text-white transition-colors uppercase tracking-tight">
                                    {q.text}
                                </span>
                            </label>
                        ))}
                    </div>

                    <AnimatePresence>
                        {isLeaking && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-[#e74c3c]/10 border border-[#e74c3c]/30 rounded-2xl p-6 lg:p-8 text-center"
                            >
                                <p className="text-[#e74c3c] font-black text-xl mb-2 uppercase tracking-tight">
                                    ALERTA DE VAZAMENTO
                                </p>
                                <p className="text-white text-sm leading-relaxed mb-6 font-medium">
                                    Com base nas suas respostas, é altamente provável que sua empresa possua milhares de reais em oportunidades ocultas e não exploradas no seu processo comercial atual.
                                </p>
                                <button className="px-8 py-3 bg-[#e74c3c] text-white font-black uppercase tracking-widest text-xs rounded-md shadow-[0_0_20px_rgba(231,76,60,0.3)] hover:shadow-[0_0_30px_rgba(231,76,60,0.5)] transition-all">
                                    Inslalar Valence
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
