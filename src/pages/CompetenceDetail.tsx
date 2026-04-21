import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { competences, realisations } from '../data.ts';

export default function CompetenceDetail() {
  const { id } = useParams<{ id: string }>();
  const comp = competences.find((c) => c.id === id);

  if (!comp) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Compétence non trouvée</h1>
          <Link to="/competences" className="text-blue-400 hover:text-blue-300">
            Retour aux compétences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/competences" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Retour aux compétences
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">{comp.nom}</h1>
        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/50">
            Niveau: {comp.niveau}
          </span>
        </div>

        <p className="text-lg opacity-90 mb-8 leading-relaxed">{comp.description}</p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Projets utilisant cette compétence</h2>
          <div className="space-y-4">
            {comp.realisations.map((rId) => {
              const realisation = realisations.find(r => r.id === rId);
              return realisation ? (
                <Link key={rId} to={`/realisation/${rId}`}>
                  <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10 hover:border-white/30">
                    <h3 className="text-xl font-semibold text-blue-400">{realisation.nom}</h3>
                    <p className="text-sm opacity-70 mt-2">{realisation.description}</p>
                  </div>
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
