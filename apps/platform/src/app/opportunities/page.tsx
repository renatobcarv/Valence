import { OpportunitiesTable } from "@/components/opportunities/table";

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gradient">Radar de Oportunidades</h2>
        <p className="text-white/40 text-sm mt-1">
          Oportunidades rankeadas por IA com maior potencial de recuperação de receita.
        </p>
      </div>
      <OpportunitiesTable />
    </div>
  );
}
