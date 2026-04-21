import { useParams, Link } from "react-router-dom";
import { realisations } from "../Data";



export function RealisationDetail() {
  const { id } = useParams();
  const proj = realisations.find((r) => r.id === id);

  return (
    <div className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">{proj?.nom}</h1>
      <p className="mb-6">{proj?.description}</p>

      <h2 className="text-xl mb-3">Compétences liées</h2>
      <div className="flex gap-4 flex-wrap">
        {proj?.competences.map((c) => (
          <Link key={c} to={`/competence/${c}`}>
            <div className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
              {c}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}