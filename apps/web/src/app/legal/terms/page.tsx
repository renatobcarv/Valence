'use client';

import React from 'react';
import { LegalLayout, LegalSection, LegalTitle } from '@/components/legal/LegalComponents';

export default function TermsPage() {
    const today = new Date().toLocaleDateString('pt-BR');

    return (
        <LegalLayout>
            <p className="text-[10px] font-black text-[#555] uppercase tracking-widest mb-4">Última atualização: {today}</p>
            <LegalTitle>TERMOS DE <span className="text-[#e74c3c]">SERVIÇO</span></LegalTitle>

            <div className="text-[#b3b3b3] leading-relaxed mb-12 space-y-4 font-medium">
                <p>Estes Termos de Serviço regulam o acesso e o uso da plataforma Valence.</p>
                <p>Ao acessar ou utilizar a plataforma, o usuário declara que leu, compreendeu e concorda com estes Termos.</p>
                <p>Caso o usuário não concorde com qualquer parte destes Termos, não deverá utilizar a plataforma.</p>
            </div>

            <LegalSection title="1. SOBRE A PLATAFORMA">
                <p>A Valence é uma plataforma SaaS (Software as a Service) que utiliza análise de dados e inteligência artificial para identificar oportunidades de recuperação de receita em processos comerciais, sistemas de CRM, dados de vendas e interações com clientes.</p>
                <p>A plataforma fornece análises, insights e recomendações baseadas em dados fornecidos ou integrados pelo próprio usuário ou pela empresa contratante.</p>
            </LegalSection>

            <LegalSection title="2. ACEITAÇÃO DOS TERMOS">
                <p>Ao criar uma conta ou utilizar qualquer funcionalidade da plataforma Valence, o usuário concorda integralmente com estes Termos de Serviço.</p>
                <p>Caso o usuário esteja utilizando a plataforma em nome de uma empresa ou organização, ele declara possuir autoridade para aceitar estes Termos em nome dessa entidade.</p>
            </LegalSection>

            <LegalSection title="3. CRIAÇÃO DE CONTA">
                <p>Para utilizar determinadas funcionalidades da plataforma, poderá ser necessário criar uma conta.</p>
                <p>O usuário concorda em:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>fornecer informações verdadeiras e atualizadas</li>
                    <li>manter a confidencialidade de suas credenciais de acesso</li>
                    <li>notificar a plataforma imediatamente em caso de uso não autorizado</li>
                </ul>
                <p>O usuário é responsável por todas as atividades realizadas em sua conta.</p>
            </LegalSection>

            <LegalSection title="4. USO DA PLATAFORMA">
                <p>O usuário concorda em utilizar a plataforma apenas para fins legais e legítimos.</p>
                <p>É proibido:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>utilizar a plataforma para atividades ilegais</li>
                    <li>tentar acessar sistemas ou dados sem autorização</li>
                    <li>interferir na segurança ou no funcionamento da plataforma</li>
                    <li>utilizar a plataforma para violar direitos de terceiros</li>
                </ul>
                <p>A Valence reserva-se o direito de suspender ou encerrar contas que violem estes Termos.</p>
            </LegalSection>

            <LegalSection title="5. INTEGRAÇÕES E DADOS">
                <p>A plataforma pode permitir integração com sistemas externos como: CRM, plataformas de vendas, ferramentas de e-mail e sistemas de gestão empresarial.</p>
                <p>O usuário declara possuir autorização legal para conectar e utilizar os dados dessas plataformas.</p>
                <p>A Valence atua como ferramenta de análise e processamento de dados fornecidos pelo próprio usuário ou pela empresa contratante.</p>
            </LegalSection>

            <LegalSection title="6. LIMITAÇÃO DE RESPONSABILIDADE">
                <p>As análises e recomendações fornecidas pela plataforma são baseadas em dados disponíveis e modelos analíticos.</p>
                <p>A Valence não garante resultados financeiros específicos ou recuperação efetiva de receita.</p>
                <p>A empresa não se responsabiliza por decisões comerciais tomadas com base nas análises da plataforma.</p>
            </LegalSection>

            <LegalSection title="7. PROPRIEDADE INTELECTUAL">
                <p>Todos os direitos relacionados à plataforma, incluindo software, algoritmos, design, marca e estrutura da plataforma pertencem exclusivamente à Valence ou aos seus licenciadores.</p>
                <p>Nenhuma parte da plataforma pode ser copiada, modificada, distribuída ou explorada comercialmente sem autorização.</p>
            </LegalSection>

            <LegalSection title="8. PRIVACIDADE E PROTEÇÃO DE DADOS">
                <p>A Valence compromete-se a tratar dados pessoais e dados empresariais em conformidade com a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD).</p>
                <p>Detalhes sobre coleta, uso e armazenamento de dados estão descritos na Política de Privacidade da plataforma.</p>
            </LegalSection>

            <LegalSection title="9. SUSPENSÃO E ENCERRAMENTO DE CONTA">
                <p>A Valence pode suspender ou encerrar o acesso do usuário à plataforma caso haja: violação destes Termos, uso indevido da plataforma ou tentativa de exploração ou comprometimento da segurança do sistema.</p>
                <p>O usuário também pode encerrar sua conta a qualquer momento.</p>
            </LegalSection>

            <LegalSection title="10. MODIFICAÇÕES NOS TERMOS">
                <p>A Valence pode atualizar estes Termos periodicamente para refletir mudanças legais, técnicas ou operacionais.</p>
                <p>Quando alterações relevantes ocorrerem, os usuários serão informados por meio da plataforma ou por e-mail.</p>
                <p>O uso continuado da plataforma após alterações implica aceitação dos novos Termos.</p>
            </LegalSection>

            <LegalSection title="11. LEGISLAÇÃO APLICÁVEL">
                <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas relacionadas a estes Termos serão resolvidas conforme a legislação brasileira.</p>
            </LegalSection>

            <LegalSection title="12. CONTATO">
                <p>Para dúvidas ou solicitações relacionadas a estes Termos de Serviço, entre em contato com:</p>
                <p className="text-[#e74c3c] font-black text-xl">contato@valence.ai</p>
            </LegalSection>
        </LegalLayout>
    );
}
