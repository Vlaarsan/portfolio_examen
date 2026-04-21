import { Link } from "react-router-dom";
import { realisations } from "../Data";

export function Realisations() {
  return (
    <div className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Réalisations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {realisations.map((r) => (
          <Link key={r.id} to={`/realisation/${r.id}`}>
            <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10">
              <h2 className="text-xl font-semibold">{r.nom}</h2>
              <p className="text-sm opacity-70">{r.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}