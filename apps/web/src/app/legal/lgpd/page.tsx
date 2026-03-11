'use client';

import React from 'react';
import { LegalLayout, LegalSection, LegalTitle } from '@/components/legal/LegalComponents';

export default function LGPDPage() {
    const today = new Date().toLocaleDateString('pt-BR');

    return (
        <LegalLayout>
            <p className="text-[10px] font-black text-[#555] uppercase tracking-widest mb-4">Última atualização: {today}</p>
            <LegalTitle>CONFORMIDADE COM A <span className="text-[#e74c3c]">LGPD</span></LegalTitle>

            <div className="text-[#b3b3b3] leading-relaxed mb-12 space-y-4 font-medium">
                <p>A Valence está comprometida com a proteção da privacidade e com o tratamento responsável de dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).</p>
                <p>Esta página explica como a plataforma Valence se posiciona em relação à LGPD e quais medidas são adotadas para proteger dados tratados em nossos sistemas.</p>
            </div>

            <LegalSection title="1. O QUE É A LGPD">
                <p>A Lei Geral de Proteção de Dados Pessoais (LGPD) estabelece regras para a coleta, uso, armazenamento e compartilhamento de dados pessoais no Brasil.</p>
                <p>O objetivo da lei é garantir mais transparência, segurança e controle para os titulares de dados pessoais.</p>
                <p>A LGPD se aplica a qualquer organização que realize tratamento de dados pessoais, inclusive plataformas digitais e serviços online.</p>
            </LegalSection>

            <LegalSection title="2. PAPEL DA VALENCE NO TRATAMENTO DE DADOS">
                <p>A Valence atua principalmente como operadora de dados, processando informações fornecidas por empresas que utilizam a plataforma.</p>
                <p>Nessa relação:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>A empresa cliente é considerada a controladora dos dados</li>
                    <li>A Valence atua como operadora responsável pelo processamento e análise desses dados</li>
                </ul>
                <p>Isso significa que a empresa cliente decide quais dados serão compartilhados ou integrados à plataforma, e a Valence processa essas informações exclusivamente para fornecer suas funcionalidades analíticas e operacionais.</p>
            </LegalSection>

            <LegalSection title="3. TIPOS DE DADOS PROCESSADOS">
                <p>Dependendo das integrações realizadas pelo cliente, a plataforma pode processar dados como:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>informações de contas de usuários</li>
                    <li>dados de CRM</li>
                    <li>registros de vendas e pipeline comercial</li>
                    <li>interações com clientes</li>
                    <li>dados operacionais relacionados ao uso da plataforma</li>
                </ul>
                <p>A Valence não coleta dados além do necessário para fornecer os serviços oferecidos.</p>
            </LegalSection>

            <LegalSection title="4. MEDIDAS DE SEGURANÇA">
                <p>A Valence adota medidas técnicas e organizacionais para proteger os dados tratados na plataforma. Essas medidas podem incluir:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>controle de acesso aos sistemas</li>
                    <li>criptografia de dados em trânsito e em repouso</li>
                    <li>monitoramento de atividades e registros de acesso</li>
                    <li>infraestrutura em provedores de nuvem confiáveis</li>
                    <li>proteção contra acessos não autorizados</li>
                </ul>
                <p>Nosso objetivo é garantir integridade, confidencialidade e disponibilidade das informações.</p>
            </LegalSection>

            <LegalSection title="5. DIREITOS DOS TITULARES DE DADOS">
                <p>De acordo com a LGPD, titulares de dados pessoais possuem direitos que incluem:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>confirmação da existência de tratamento de dados</li>
                    <li>acesso aos dados pessoais</li>
                    <li>correção de dados incompletos ou desatualizados</li>
                    <li>anonimização ou eliminação de dados quando aplicável</li>
                    <li>informação sobre compartilhamento de dados</li>
                </ul>
                <p>Solicitações relacionadas a esses direitos devem ser feitas diretamente à empresa responsável pelos dados (controladora). Quando necessário, a Valence poderá auxiliar seus clientes no atendimento dessas solicitações.</p>
            </LegalSection>

            <LegalSection title="6. RESPONSABILIDADE DAS EMPRESAS CLIENTES">
                <p>Empresas que utilizam a plataforma Valence são responsáveis por garantir que possuem base legal para coletar e processar os dados que integram ao sistema.</p>
                <p>Isso inclui garantir que os dados foram obtidos de forma legítima e em conformidade com a legislação aplicável. A Valence não se responsabiliza pela coleta original de dados realizada por terceiros.</p>
            </LegalSection>

            <LegalSection title="7. RETENÇÃO E EXCLUSÃO DE DADOS">
                <p>Os dados processados pela plataforma são mantidos apenas pelo tempo necessário para fornecer os serviços contratados ou cumprir obrigações legais.</p>
                <p>Caso uma conta seja encerrada, os dados poderão ser removidos ou anonimizados conforme políticas internas de retenção.</p>
            </LegalSection>

            <LegalSection title="8. CONTATO PARA QUESTÕES DE PRIVACIDADE">
                <p>Para dúvidas ou solicitações relacionadas à proteção de dados e conformidade com a LGPD, entre em contato:</p>
                <p className="text-[#e74c3c] font-black text-xl">privacy@valence.ai</p>
            </LegalSection>
        </LegalLayout>
    );
}
