'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileType, CheckCircle, Search, DollarSign, Activity, AlertCircle, TrendingUp, X } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/layout/Navbar';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

type DemoState = 'idle' | 'analyzing' | 'results';

const MOCK_MESSAGES = [
    "Importando dados comerciais...",
    "Estruturando pipeline histórico...",
    "Executando heurísticas de Revenue Recovery...",
    "Detectando padrões de estagnação de leads...",
    "Identificando contas inativas...",
    "Cruzando valores com histórico de compras...",
    "Finalizando análise de receita oculta..."
];

export const DataUploadDemo = () => {
    const [demoState, setDemoState] = useState<DemoState>('idle');
    const [loadingMessage, setLoadingMessage] = useState('');
    const [fileName, setFileName] = useState<string | null>(null);
    const [potentialRevenue, setPotentialRevenue] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            startAnalysis();
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.name.endsWith('.csv')) {
            setFileName(file.name);
            startAnalysis();
        }
    };

    const handleSampleData = () => {
        setFileName('dataset_exemplo_q3.csv');
        startAnalysis();
    };

    const startAnalysis = () => {
        setDemoState('analyzing');

        let messageIndex = 0;
        setLoadingMessage(MOCK_MESSAGES[0]);

        const messageInterval = setInterval(() => {
            messageIndex++;
            if (messageIndex < MOCK_MESSAGES.length) {
                setLoadingMessage(MOCK_MESSAGES[messageIndex]);
            } else {
                clearInterval(messageInterval);
                finishAnalysis();
            }
        }, 800);
    };

    const finishAnalysis = () => {
        setDemoState('results');
        setPotentialRevenue(104000);
    };

    const resetDemo = () => {
        setDemoState('idle');
        setFileName(null);
        setPotentialRevenue(0);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 overflow-hidden border-y border-white/5">
            {/* Background Effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Sandbox de Dados</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 font-display leading-[0.9]">
                            TESTE COM SEUS <br />
                            <span className="text-gradient">PRÓPRIOS DADOS.</span>
                        </h2>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                            Descubra em segundos as oportunidades de receita escondidas no seu pipeline. Faça upload de um CSV ou use nossos dados de exemplo.
                        </p>
                    </motion.div>
                </div>

                <GlassCard delay={0.2} glowColor="rgba(231, 76, 60, 0.1)" className="min-h-[500px] border-white/10 flex flex-col justify-center relative overflow-hidden !p-0">
                    <div className="p-8 lg:p-12 relative h-full">
                        <AnimatePresence mode="wait">

                            {/* IDLE STATE: UPLOAD */}
                            {demoState === 'idle' && (
                                <motion.div
                                    key="idle"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                                    className="flex flex-col items-center justify-center h-full w-full"
                                >
                                    <div
                                        onClick={handleUploadClick}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={handleDrop}
                                        className="w-full max-w-2xl border-2 border-dashed border-white/5 hover:border-primary/50 bg-white/[0.02] rounded-3xl p-16 text-center cursor-pointer transition-all group hover:bg-primary/[0.02] relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl" />

                                        <input
                                            type="file"
                                            accept=".csv"
                                            className="hidden"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                        />

                                        <div className="size-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-2xl relative z-10">
                                            <Upload className="size-8 text-white/20 group-hover:text-primary transition-colors" />
                                        </div>
                                        
                                        <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight font-display">Arraste seu CSV aqui</h3>
                                        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.25em] mb-10">formato: nome, email, status, valor, ultimo_contato</p>

                                        <Button variant="primary" className="px-12 py-5 font-display text-sm relative z-10">
                                            Selecionar Arquivo
                                        </Button>
                                    </div>

                                    <div className="mt-10 flex items-center gap-6 text-white/10 font-black uppercase tracking-[0.4em] text-[9px] font-display">
                                        <div className="w-16 h-px bg-white/5" />
                                        <span>OU</span>
                                        <div className="w-16 h-px bg-white/5" />
                                    </div>

                                    <button
                                        onClick={handleSampleData}
                                        className="mt-10 text-white/30 hover:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all border-b border-white/5 hover:border-primary pb-1 font-display"
                                    >
                                        Usar Dataset de Exemplo (77 Registros)
                                    </button>
                                </motion.div>
                            )}


                            {/* ANALYZING STATE */}
                            {demoState === 'analyzing' && (
                                <motion.div
                                    key="analyzing"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                                    className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                                >
                                    <div className="relative mb-16">
                                        <motion.div
                                            className="absolute -inset-4 border-2 border-primary/20 rounded-full"
                                            style={{ borderTopColor: '#e74c3c' }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                        />
                                        <div className="size-20 flex items-center justify-center glass-effect rounded-full relative z-10 border-white/10">
                                            <Activity className="size-8 text-primary animate-pulse" />
                                        </div>
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                                    </div>

                                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 font-display">Processando {fileName}</p>

                                    <div className="h-10">
                                        <AnimatePresence mode="wait">
                                            <motion.h3
                                                key={loadingMessage}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-2xl font-black text-white uppercase tracking-tighter font-display"
                                            >
                                                {loadingMessage}
                                            </motion.h3>
                                        </AnimatePresence>
                                    </div>

                                    <div className="w-80 h-1.5 bg-white/5 rounded-full mt-12 overflow-hidden border border-white/5">
                                        <motion.div
                                            className="h-full bg-primary shadow-[0_0_15px_rgba(231,76,60,1)]"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 5.6, ease: "linear" }}
                                        />
                                    </div>
                                </motion.div>
                            )}


                            {/* RESULTS STATE */}
                            {demoState === 'results' && (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                                                <CheckCircle className="size-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-white uppercase tracking-tight font-display">Análise Finalizada</h3>
                                                <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] font-display">{fileName}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={resetDemo}
                                            className="size-10 glass-effect border-white/10 rounded-xl flex items-center justify-center text-white/20 hover:text-white hover:border-white transition-all duration-300"
                                            title="Nova Análise"
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>

                                    <div className="grid lg:grid-cols-3 gap-6 mb-16">
                                        {[
                                            { title: 'Leads Inativos', value: '12.000', icon: AlertCircle, label: 'Urgência: Alta' },
                                            { title: 'Propostas Paradas', value: '61.000', icon: FileType, label: 'Urgência: Crítica' },
                                            { title: 'Churn Potencial', value: '31.000', icon: Search, label: 'Urgência: Média' }
                                        ].map((card, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
                                                className="glass-effect border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                                            >
                                                <div className="absolute -top-10 -right-10 size-24 bg-primary/5 rounded-full blur-xl transition-all group-hover:bg-primary/10 group-hover:scale-150 duration-700" />
                                                <card.icon className="size-5 text-primary mb-6 animate-pulse" />
                                                <p className="text-white font-black uppercase tracking-tight text-sm font-display mb-1">{card.title}</p>
                                                <p className="text-white/20 text-[9px] uppercase tracking-widest font-black mb-6 font-display">{card.label}</p>
                                                <p className="text-2xl font-black text-primary font-display tabular-nums tracking-tighter">R$ {card.value}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-auto glass-effect-strong border-primary/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 blur-3xl" />

                                        <div className="relative">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="size-2.5 bg-primary rounded-full animate-glow" />
                                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-display">Receita Recuperável Detectada</p>
                                            </div>
                                            <div className="text-6xl md:text-7xl font-black text-white font-display tracking-tighter tabular-nums drop-shadow-glow">
                                                <AnimatedCounter to={potentialRevenue} prefix="R$ " />
                                            </div>
                                        </div>

                                        <div className="relative flex flex-col gap-4 w-full md:w-auto">
                                            <Button variant="primary" className="px-12 py-6 text-sm">
                                                Ativar Recuperação
                                            </Button>
                                            <p className="text-[8px] text-white/10 text-center uppercase tracking-widest font-black">Análise baseada em ML Valence V2.4</p>
                                        </div>
                                    </div>

                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};
