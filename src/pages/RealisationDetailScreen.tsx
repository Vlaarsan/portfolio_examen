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
          <Link to="/realisations" className="text-green-400 hover:text-green-300 transition">
            ← Retour aux réalisations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/realisations" className="text-green-400 hover:text-green-300 transition mb-6 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux réalisations
        </Link>
        
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">{proj.nom}</h1>
        
        <p className="text-xl opacity-90 mb-8 leading-relaxed">{proj.description}</p>

        {/* Liens vers GitHub, YouTube et démo */}
        <div className="flex flex-wrap gap-4 mb-12">
          {proj.github && (
            <a 
              href={proj.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/40 transition"
            >
              <i className="fab fa-github"></i>
              <span>Code Source</span>
            </a>
          )}
          {proj.youtube && (
            <a 
              href={proj.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/40 rounded-lg hover:bg-red-500/30 hover:border-red-500/60 transition text-red-300 hover:text-red-200"
            >
              <i className="fab fa-youtube"></i>
              <span>Vidéo YouTube</span>
            </a>
          )}
          {proj.lien && (
            <a 
              href={proj.lien} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/40 rounded-lg hover:bg-green-500/30 hover:border-green-500/60 transition text-green-300 hover:text-green-200"
            >
              <i className="fas fa-external-link-alt"></i>
              <span>Voir en ligne</span>
            </a>
          )}
        </div>

        {/* Compétences utilisées */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
            <i className="fas fa-tools"></i>
            Compétences utilisées
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {proj.competences.map((compId) => {
              const comp = competences.find(c => c.id === compId);
              return comp ? (
                <Link key={compId} to={`/competence/${compId}`}>
                  <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-lg hover:from-green-500/20 hover:to-blue-600/20 transition border border-green-500/30 hover:border-green-500/60">
                    <h3 className="font-semibold text-green-400 text-lg mb-2">{comp.nom}</h3>
                    <p className="text-sm opacity-70 mb-3">{comp.niveau}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-600 h-full rounded-full"
                          style={{ width: `${comp.pourcentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-green-400">{comp.pourcentage}%</span>
                    </div>
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
