import { Link } from "react-router-dom";
import { competences } from "../Data";

export function Competences() {
  return (
    <div className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Compétences</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {competences.map((c) => (
          <Link key={c.id} to={`/competence/${c.id}`}>
            <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10">
              <h2 className="text-xl font-semibold">{c.nom}</h2>
              <p className="text-sm opacity-70">{c.niveau}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}