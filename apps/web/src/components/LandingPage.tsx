import React from 'react';

// --- Shared UI Components ---

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center inline-block';
    const variants: any = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30',
        secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Valence
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-blue-600">Produto</a>
                    <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">Recursos</a>
                    <a href="/pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600">Preços</a>
                    <Button variant="ghost" className="text-sm py-2">Entrar</Button>
                    <Button variant="primary" className="text-sm py-2 px-4">Começar Grátis</Button>
                </div>
            </div>
        </div>
    </nav>
);

export const Hero = () => (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 !leading-[1.1]">
                    Recupere a receita que sua empresa está <span className="text-blue-600 italic">deixando para trás.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    A Valence analisa seu CRM, funil de vendas e dados de clientes para detectar oportunidades perdidas e automatizar a recuperação de receita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button variant="primary" className="px-8 py-4 text-lg">
                        Começar a detectar receita perdida
                    </Button>
                    <Button variant="secondary" className="px-8 py-4 text-lg">
                        Veja como funciona
                    </Button>
                </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative mt-12 max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full" />
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="flex-1 text-center text-xs text-gray-400 font-medium">valence-dashboard-v1.app</div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { label: 'Leads Perdidos', value: '214', trend: '+12%', color: 'text-red-600' },
                                { label: 'Propostas Abandonadas', value: '43', trend: '+5%', color: 'text-orange-600' },
                                { label: 'Clientes Inativos', value: '17', trend: '-2%', color: 'text-blue-600' }
                            ].map((stat) => (
                                <div key={stat.label} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                    <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-64 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-4 flex items-center justify-center">
                            <div className="text-center text-gray-400">
                                <p className="text-sm font-medium">Visualização de Insights de Recuperação</p>
                                <div className="w-full h-2 mt-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="w-[65%] h-full bg-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const Problem = () => (
    <section id="problem" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    A maioria das empresas está perdendo receita sem perceber
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Pequenas falhas no processo de vendas criam vazamentos massivos de receita ao longo do tempo.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Leads sem acompanhamento",
                        desc: "24% dos leads nunca são contatados pelas vendas, representando milhares em investimento de marketing desperdiçado.",
                        icon: "📨"
                    },
                    {
                        title: "Propostas abandonadas",
                        desc: "Propostas enviadas mas nunca respondidas muitas vezes precisam apenas de um único follow-up para converter.",
                        icon: "📄"
                    },
                    {
                        title: "Clientes inativos",
                        desc: "Clientes que costumavam comprar regularmente mas pararam são a receita mais fácil de recuperar.",
                        icon: "👻"
                    }
                ].map((card) => (
                    <div key={card.title} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-6">{card.icon}</div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const Solution = () => (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        A Valence encontra o dinheiro escondido nos seus dados
                    </h2>
                    <div className="space-y-12">
                        {[
                            { id: '1', title: 'Conecte seus sistemas', content: 'CRM, E-mail e histórico de vendas integrados em minutos.' },
                            { id: '2', title: 'IA detecta oportunidades de receita', content: 'Identificando leads travados no funil, clientes inativos e upsells.' },
                            { id: '3', title: 'Recuperação automatizada', content: 'Follow-ups inteligentes, campanhas de reativação e ofertas personalizadas.' }
                        ].map((step) => (
                            <div key={step.id} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                                    {step.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-100 rounded-3xl aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 opacity-5" />
                    <div className="p-8 text-center">
                        <div className="text-8xl mb-8 animate-pulse">🔍</div>
                        <p className="text-blue-600 font-bold text-2xl">Motor de IA Escaneando...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const Features = () => (
    <section id="features" className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Capacidades da Plataforma</h2>
                <p className="text-gray-400">Tudo o que você precisa para parar o vazamento de receita.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Detecção de Vazamento de Receita", desc: "Sistemas modulares e inteligentes projetados para identificar perdas." },
                    { title: "Reativação de Clientes", desc: "IA que identifica padrões de churn e sugere ações de retenção." },
                    { title: "Automação de Follow-up", desc: "Acompanhamento inteligente de leads e propostas sem intervenção manual." },
                    { title: "Pontuação de Oportunidades", desc: "Priorização automática das oportunidades com maior chance de conversão." },
                    { title: "Campanhas de Recuperação", desc: "Fluxos automatizados de e-mail e SMS personalizados para cada caso." },
                    { title: "Dashboard de Análise", desc: "Visão em tempo real de quanto foi recuperado e onde estão os gargalos." }
                ].map((feat) => (
                    <div key={feat.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            ✨
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const Stats = () => (
    <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Oportunidades de receita que a maioria das empresas nunca vê</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { label: 'Leads Abandonados', value: '214' },
                    { label: 'Propostas Sem Resposta', value: '43' },
                    { label: 'Clientes VIP Inativos', value: '17' },
                    { label: 'Receita Recuperável', value: 'R$ 86.000', highlight: true }
                ].map((s) => (
                    <div key={s.label} className={`p-8 rounded-2xl text-center ${s.highlight ? 'bg-white text-blue-600' : 'bg-blue-500'}`}>
                        <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wider">{s.label}</p>
                        <p className="text-4xl font-bold">{s.value}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const CTASection = () => (
    <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comece a recuperar receita perdida hoje</h2>
            <p className="text-xl text-gray-600 mb-10">Veja quanto dinheiro sua empresa está deixando na mesa.</p>
            <Button variant="primary" className="px-10 py-5 text-xl font-bold">
                Analisar meus vazamentos de receita
            </Button>
        </div>
    </section>
);

export const Footer = () => (
    <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                <div className="col-span-2 lg:col-span-1">
                    <span className="text-2xl font-bold text-blue-600 mb-4 block">Valence</span>
                    <p className="text-sm text-gray-500 max-w-xs">Construindo a camada de inteligência para recuperação de receita.</p>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-gray-900">Produto</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Recursos</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Preços</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Integrações</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-gray-900">Recursos</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Documentação</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-gray-900">Empresa</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Contato</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Legal</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                © 2026 Valence Inteligência. Feito com 🇧🇷 no coração.
            </div>
        </div>
    </footer>
);
