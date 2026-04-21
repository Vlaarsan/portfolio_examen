import { useParams, Link } from "react-router-dom";
import { competences } from "../Data";

export function CompetenceDetail() {
  const { id } = useParams();
  const comp = competences.find((c) => c.id === id);

  return (
    <div className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">{comp?.nom}</h1>
      <p className="mb-6">{comp?.description}</p>

      <h2 className="text-xl mb-3">Réalisations liées</h2>
      <div className="flex gap-4 flex-wrap">
        {comp?.realisations.map((r) => (
          <Link key={r} to={`/realisation/${r}`}>
            <div className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
              {r}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}