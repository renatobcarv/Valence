import { CentralDeInteligencia } from "@/components/machine-learning/insights";

export default function MachineLearningPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gradient">Central de Inteligência Valence</h2>
        <p className="text-white/40 text-sm mt-1">
          Insights proativos e preditivos gerados pela IA sobre sua base de clientes e receita.
        </p>
      </div>
      <CentralDeInteligencia />
    </div>
  );
}
