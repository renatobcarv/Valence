import { WorkflowBuilder } from "@/components/automation/workflow-builder";

export default function AutomationPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gradient">Automação Inteligente</h2>
        <p className="text-white/40 text-sm mt-1">
          Crie fluxos visuais SE/ENTÃO para recuperar receita automaticamente com base no comportamento do cliente.
        </p>
      </div>
      <WorkflowBuilder />
    </div>
  );
}
