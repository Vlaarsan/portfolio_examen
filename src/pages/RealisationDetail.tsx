import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { realisations, competences } from '../data.ts';

export default function RealisationDetail() {
  const { id } = useParams<{ id: string }>();
  const proj = realisations.find((r) => r.id === id);

  if (!proj) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
          <Link to="/realisations" className="text-blue-400 hover:text-blue-300">
            Retour aux réalisations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/realisations" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Retour aux réalisations
        </Link>
        
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">{proj.nom}</h1>
        <p className="text-xl opacity-90 mb-8 leading-relaxed">{proj.description}</p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Compétences utilisées</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {proj.competences.map((compId) => {
              const comp = competences.find(c => c.id === compId);
              return comp ? (
                <Link key={compId} to={`/competence/${compId}`}>
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10 hover:border-white/30">
                    <h3 className="font-semibold text-purple-400">{comp.nom}</h3>
                    <p className="text-xs opacity-70 mt-1">{comp.niveau}</p>
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
