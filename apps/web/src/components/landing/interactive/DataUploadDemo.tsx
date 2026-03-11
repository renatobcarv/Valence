'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Papa from 'papaparse';
import { Upload, FileType, CheckCircle, Search, DollarSign, Activity, AlertCircle, TrendingUp, X } from 'lucide-react';

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

        // Counter Animation for Revenue
        const targetRevenue = 104000;
        let current = 0;
        const increment = targetRevenue / 50;

        const counterInterval = setInterval(() => {
            current += increment;
            if (current >= targetRevenue) {
                setPotentialRevenue(targetRevenue);
                clearInterval(counterInterval);
            } else {
                setPotentialRevenue(Math.floor(current));
            }
        }, 20);
    };

    const resetDemo = () => {
        setDemoState('idle');
        setFileName(null);
        setPotentialRevenue(0);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <section className="py-24 lg:py-40 bg-black relative z-10 overflow-hidden border-y border-[#2a2a2a]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e74c3c]/5 via-black to-black pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">
                            TESTE COM SEUS <span className="text-[#e74c3c]">DADOS</span>
                        </h2>
                        <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                            Descubra em segundos oportunidades de receita escondidas no seu pipeline. Faça upload de um CSV ou use nossos dados de exemplo.
                        </p>
                    </motion.div>
                </div>

                <div className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-8 lg:p-12 shadow-2xl min-h-[500px] flex flex-col justify-center relative overflow-hidden">

                    <AnimatePresence mode="wait">

                        {/* IDLE STATE: UPLOAD */}
                        {demoState === 'idle' && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center h-full w-full"
                            >
                                <div
                                    onClick={handleUploadClick}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                    className="w-full max-w-2xl border-2 border-dashed border-[#2a2a2a] hover:border-[#e74c3c]/50 bg-[#1a1a1a] rounded-2xl p-12 text-center cursor-pointer transition-all group hover:bg-[#e74c3c]/5 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-[#e74c3c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                                    <input
                                        type="file"
                                        accept=".csv"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />

                                    <Upload className="w-12 h-12 text-[#555] group-hover:text-[#e74c3c] mx-auto mb-6 transition-colors" />
                                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Arraste seu CSV de CRM aqui</h3>
                                    <p className="text-[#555] text-sm font-medium mb-8">formato esperado: nome, email, status, valor, ultimo_contato</p>

                                    <button className="px-8 py-3 bg-[#e74c3c] text-white font-black uppercase tracking-widest text-xs rounded-md shadow-[0_0_20px_rgba(231,76,60,0.2)] hover:shadow-[0_0_30px_rgba(231,76,60,0.4)] transition-all">
                                        Fazer Upload
                                    </button>
                                </div>

                                <div className="mt-8 flex items-center gap-4 text-[#555] font-black uppercase tracking-widest text-[10px]">
                                    <div className="w-12 h-[1px] bg-[#2a2a2a]" />
                                    <span>OU</span>
                                    <div className="w-12 h-[1px] bg-[#2a2a2a]" />
                                </div>

                                <button
                                    onClick={handleSampleData}
                                    className="mt-8 px-6 py-3 border border-[#2a2a2a] text-[#b3b3b3] hover:text-white hover:border-white font-black uppercase tracking-widest text-xs rounded-md transition-all"
                                >
                                    Usar Dataset de Exemplo (77 Registros)
                                </button>
                            </motion.div>
                        )}


                        {/* ANALYZING STATE */}
                        {demoState === 'analyzing' && (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center text-center h-full"
                            >
                                <div className="relative mb-12">
                                    <motion.div
                                        className="absolute inset-0 border-4 border-[#e74c3c]/20 rounded-full"
                                        style={{ borderTopColor: '#e74c3c', width: '80px', height: '80px' }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <div className="w-[80px] h-[80px] flex items-center justify-center bg-black rounded-full border border-[#2a2a2a] relative z-10">
                                        <Activity className="w-8 h-8 text-[#e74c3c]" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#e74c3c]/20 rounded-full blur-xl animate-pulse" />
                                </div>

                                <p className="text-[10px] font-black text-[#555] uppercase tracking-[0.3em] mb-4">Processando {fileName}</p>

                                <AnimatePresence mode="wait">
                                    <motion.h3
                                        key={loadingMessage}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-2xl font-black text-white uppercase tracking-tighter"
                                    >
                                        {loadingMessage}
                                    </motion.h3>
                                </AnimatePresence>

                                <div className="w-64 h-1 bg-[#1a1a1a] rounded-full mt-8 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#e74c3c]"
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <div className="flex justify-between items-center mb-10 border-b border-[#2a2a2a] pb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <h3 className="text-xl font-black text-white uppercase tracking-tight">Análise Concluída</h3>
                                        </div>
                                        <p className="text-[#555] text-[10px] font-black uppercase tracking-widest">{fileName}</p>
                                    </div>
                                    <button
                                        onClick={resetDemo}
                                        className="p-2 border border-[#2a2a2a] rounded-md text-[#555] hover:text-white hover:border-white transition-colors"
                                        title="Nova Análise"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                                    {/* Insight 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#e74c3c]/10 rounded-bl-full blur-xl transition-colors group-hover:bg-[#e74c3c]/20" />
                                        <AlertCircle className="w-5 h-5 text-[#e74c3c] mb-4" />
                                        <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">Lead sem contato há 14 dias</p>
                                        <p className="text-[#555] text-[10px] uppercase tracking-widest font-black mb-4">Urgência: Alta</p>
                                        <p className="text-lg font-black text-[#e74c3c]">R$ 12.000</p>
                                    </motion.div>

                                    {/* Insight 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#e74c3c]/10 rounded-bl-full blur-xl transition-colors group-hover:bg-[#e74c3c]/20" />
                                        <FileType className="w-5 h-5 text-[#e74c3c] mb-4" />
                                        <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">Proposta sem follow-up</p>
                                        <p className="text-[#555] text-[10px] uppercase tracking-widest font-black mb-4">Urgência: Crítica</p>
                                        <p className="text-lg font-black text-[#e74c3c]">R$ 58.000</p>
                                    </motion.div>

                                    {/* Insight 3 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#e74c3c]/10 rounded-bl-full blur-xl transition-colors group-hover:bg-[#e74c3c]/20" />
                                        <Search className="w-5 h-5 text-[#e74c3c] mb-4" />
                                        <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">Cliente inativo (7 meses)</p>
                                        <p className="text-[#555] text-[10px] uppercase tracking-widest font-black mb-4">Urgência: Média</p>
                                        <p className="text-lg font-black text-[#e74c3c]">R$ 31.000</p>
                                    </motion.div>
                                </div>

                                <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#e74c3c]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#e74c3c]/10 rounded-full blur-3xl pointer-events-none" />

                                    <div>
                                        <p className="text-[10px] font-black text-[#e74c3c] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                            <TrendingUp className="w-3 h-3" />
                                            Receita Potencial Detectada
                                        </p>
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="text-5xl md:text-6xl font-black text-white tracking-tighter"
                                        >
                                            R$ {potentialRevenue.toLocaleString('pt-BR')}
                                        </motion.div>
                                    </div>

                                    <motion.button
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="px-8 py-4 bg-[#e74c3c] text-white font-black uppercase tracking-widest text-xs rounded-md shadow-[0_0_20px_rgba(231,76,60,0.3)] hover:shadow-[0_0_30px_rgba(231,76,60,0.5)] transition-all whitespace-nowrap"
                                    >
                                        Solicitar Acesso Completo
                                    </motion.button>
                                </div>

                            </motion.div>
                        )}

                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};
