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
          <Link to="/competences" className="text-green-400 hover:text-green-300 transition">
            ← Retour aux compétences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/competences" className="text-green-400 hover:text-green-300 transition mb-6 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux compétences
        </Link>
        
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">{comp.nom}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/50 font-semibold">
            Niveau: {comp.niveau}
          </span>
          <div className="w-64">
            <div className="flex justify-between text-sm mb-1">
              <span>Maîtrise</span>
              <span className="text-green-400 font-bold">{comp.pourcentage}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-600 h-full transition-all"
                style={{ width: `${comp.pourcentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-8 border border-green-500/30 mb-8">
          <p className="text-lg opacity-90 leading-relaxed">{comp.description}</p>
        </div>

        {comp.realisations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
              <i className="fas fa-rocket"></i>
              Projets utilisant cette compétence
            </h2>
            <div className="grid gap-6">
              {comp.realisations.map((rId) => {
                const realisation = realisations.find(r => r.id === rId);
                return realisation ? (
                  <Link key={rId} to={`/realisation/${rId}`}>
                    <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-lg hover:from-white/10 hover:to-white/5 transition border border-white/10 hover:border-green-500/50">
                      <h3 className="text-2xl font-semibold text-green-400 mb-2">{realisation.nom}</h3>
                      <p className="text-opacity-80 mb-4">{realisation.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {realisation.competences.map((comp) => (
                          <span key={comp} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
