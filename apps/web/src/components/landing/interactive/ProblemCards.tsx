'use client';

import React from 'react';
import { motion } from 'framer-motion';

const problems = [
    { title: 'Leads sem Follow-up', desc: 'O time de vendas focou nos leads mais quentes e esqueceu dos demais.', icon: '📨' },
    { title: 'Propostas Esquecidas', desc: 'O cliente não respondeu na primeira tentativa e o negócio estacionou.', icon: '📄' },
    { title: 'Negócios Estagnados', desc: 'Oportunidades paradas no pipeline há mais de 30 dias sem nova interação.', icon: '🛑' },
    { title: 'Clientes Inativos', desc: 'Compradores recorrentes que pararam de comprar sem nenhum alerta ao time.', icon: '👻' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export const ProblemCards = () => {
    return (
        <section className="py-24 lg:py-40 bg-[#111111] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
                        ISSO PARECE <span className="text-[#e74c3c]">FAMILIAR</span>?
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {problems.map((prob, i) => (
                        <motion.div key={i} variants={itemVariants} className="group p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl hover:border-[#e74c3c]/50 hover:bg-[#111111] transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#e74c3c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <div className="text-4xl mb-6">{prob.icon}</div>
                                <h3 className="text-lg font-black text-white mb-3 uppercase tracking-tight group-hover:text-[#e74c3c] transition-colors">
                                    {prob.title}
                                </h3>
                                <p className="text-[#b3b3b3] text-sm leading-relaxed">
                                    {prob.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
