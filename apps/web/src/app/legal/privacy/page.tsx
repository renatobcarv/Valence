'use client';

import React from 'react';
import { LegalLayout, LegalSection, LegalTitle } from '@/components/legal/LegalComponents';

export default function PrivacyPage() {
    const today = new Date().toLocaleDateString('pt-BR');

    return (
        <LegalLayout>
            <p className="text-[10px] font-black text-[#555] uppercase tracking-widest mb-4">Última atualização: {today}</p>
            <LegalTitle>POLÍTICA DE <span className="text-[#e74c3c]">PRIVACIDADE</span></LegalTitle>

            <div className="text-[#b3b3b3] leading-relaxed mb-12 space-y-4 font-medium">
                <p>A Valence valoriza a privacidade e a proteção de dados de seus usuários e clientes. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos informações relacionadas ao uso da plataforma.</p>
                <p>Ao utilizar a plataforma Valence, o usuário concorda com as práticas descritas nesta Política.</p>
            </div>

            <LegalSection title="1. SOBRE A PLATAFORMA">
                <p>A Valence é uma plataforma SaaS (Software as a Service) que utiliza análise de dados e inteligência artificial para identificar oportunidades de recuperação de receita em processos comerciais, sistemas de CRM, dados de vendas e interações com clientes.</p>
                <p>Para fornecer seus serviços, a plataforma pode processar determinados dados fornecidos ou integrados pelos usuários.</p>
            </LegalSection>

            <LegalSection title="2. DADOS COLETADOS">
                <p>A Valence pode coletar os seguintes tipos de informações:</p>
                <ul className="list-disc pl-5 space-y-4">
                    <li><strong>Informações de conta:</strong> nome, endereço de e-mail, dados de autenticação e informações da empresa.</li>
                    <li><strong>Dados operacionais:</strong> dados relacionados ao uso da plataforma, registros de atividade e acesso, informações técnicas do dispositivo e navegador.</li>
                    <li><strong>Dados provenientes de integrações:</strong> dados de CRM, dados de vendas, registros de interações comerciais e dados relacionados ao pipeline de vendas.</li>
                </ul>
                <p>A coleta desses dados ocorre apenas quando necessária para funcionamento e melhoria da plataforma.</p>
            </LegalSection>

            <LegalSection title="3. FINALIDADE DO USO DOS DADOS">
                <p>Os dados coletados podem ser utilizados para:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>fornecer e operar os serviços da plataforma</li>
                    <li>analisar dados comerciais para identificar oportunidades de receita</li>
                    <li>melhorar funcionalidades e desempenho da plataforma</li>
                    <li>garantir segurança e prevenção de fraudes</li>
                    <li>prestar suporte ao usuário</li>
                </ul>
                <p>A Valence não utiliza dados para fins ilegais ou incompatíveis com os serviços oferecidos.</p>
            </LegalSection>

            <LegalSection title="4. COMPARTILHAMENTO DE DADOS">
                <p>A Valence não vende dados pessoais ou dados empresariais de seus usuários.</p>
                <p>Os dados poderão ser compartilhados apenas nas seguintes situações:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>com provedores de infraestrutura necessários para operação da plataforma</li>
                    <li>quando exigido por lei ou autoridade competente</li>
                    <li>para proteger direitos legais da empresa ou de terceiros</li>
                </ul>
                <p>Sempre que possível, o compartilhamento será limitado ao mínimo necessário.</p>
            </LegalSection>

            <LegalSection title="5. ARMAZENAMENTO E SEGURANÇA">
                <p>A Valence utiliza práticas de segurança adequadas para proteger dados contra acesso não autorizado, alteração, divulgação ou destruição.</p>
                <p>Medidas de segurança podem incluir: controle de acesso, criptografia de dados, monitoramento de sistemas e infraestrutura em provedores de nuvem confiáveis.</p>
                <p>Embora sejam adotadas boas práticas de segurança, nenhum sistema é completamente imune a riscos.</p>
            </LegalSection>

            <LegalSection title="6. RETENÇÃO DE DADOS">
                <p>Os dados serão armazenados apenas pelo tempo necessário para: cumprir as finalidades descritas nesta Política, atender obrigações legais ou regulatórias e manter o funcionamento da plataforma.</p>
                <p>Após esse período, os dados poderão ser removidos ou anonimizados.</p>
            </LegalSection>

            <LegalSection title="7. DIREITOS DOS TITULARES DE DADOS">
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), os usuários possuem direitos relacionados aos seus dados pessoais, incluindo:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>confirmação da existência de tratamento de dados</li>
                    <li>acesso aos dados pessoais</li>
                    <li>correção de dados incompletos ou desatualizados</li>
                    <li>eliminação de dados pessoais quando aplicável</li>
                    <li>informação sobre compartilhamento de dados</li>
                </ul>
                <p>Solicitações relacionadas a esses direitos podem ser feitas por meio dos canais de contato indicados nesta Política.</p>
            </LegalSection>

            <LegalSection title="8. DADOS DE TERCEIROS">
                <p>Usuários que conectarem sistemas externos à plataforma são responsáveis por garantir que possuem autorização legal para compartilhar esses dados com a Valence.</p>
                <p>A plataforma atua apenas como ferramenta de processamento e análise desses dados.</p>
            </LegalSection>

            <LegalSection title="9. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE">
                <p>Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças legais, técnicas ou operacionais.</p>
                <p>Quando alterações relevantes ocorrerem, os usuários poderão ser informados por meio da plataforma ou por e-mail.</p>
            </LegalSection>

            <LegalSection title="10. CONTATO">
                <p>Para dúvidas, solicitações ou questões relacionadas à privacidade e proteção de dados, entre em contato:</p>
                <p className="text-[#e74c3c] font-black text-xl">privacy@valence.ai</p>
            </LegalSection>
        </LegalLayout>
    );
}
