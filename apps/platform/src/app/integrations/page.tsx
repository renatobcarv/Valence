import { IntegrationCards } from "@/components/integrations/cards";

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Fonte de Dados e Integrações</h2>
        <p className="text-muted-foreground mt-1">
          Conecte seu CRM, loja virtual ou faça upload manual para a IA começar a analisar.
        </p>
      </div>
      <IntegrationCards />
    </div>
  );
}
