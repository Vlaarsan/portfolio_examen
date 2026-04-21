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
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/realisations" className="text-green-400 hover:text-green-300 transition mb-6 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux réalisations
        </Link>
        
        {/* Image du projet */}
        {proj.image && (
          <div className="w-full h-96 rounded-lg overflow-hidden mb-8 border border-white/10 shadow-lg">
            <img 
              src={proj.image} 
              alt={proj.nom} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">{proj.nom}</h1>
        
        {/* Liens directs vers GitHub, YouTube, Steam et démo */}
        <div className="flex flex-wrap gap-4 mb-12">
          {proj.github && (
            <a 
              href={proj.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/40 transition"
            >
              <i className="fab fa-github text-lg"></i>
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
              <i className="fab fa-youtube text-lg"></i>
              <span>Vidéo YouTube</span>
            </a>
          )}
          {proj.steam && (
            <a 
              href={proj.steam} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg hover:bg-blue-500/30 hover:border-blue-500/60 transition text-blue-300 hover:text-blue-200"
            >
              <i className="fab fa-steam text-lg"></i>
              <span>Voir sur Steam</span>
            </a>
          )}
          {proj.lien && !proj.steam && (
            <a 
              href={proj.lien} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/40 rounded-lg hover:bg-green-500/30 hover:border-green-500/60 transition text-green-300 hover:text-green-200"
            >
              <i className="fas fa-external-link-alt text-lg"></i>
              <span>Voir en ligne</span>
            </a>
          )}
        </div>

        {/* Présentation & Définition */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="fas fa-book"></i> Présentation
            </h2>
            <p className="opacity-90 leading-relaxed">{proj.presentation}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <i className="fas fa-file-alt"></i> Définition
            </h2>
            <p className="opacity-90 leading-relaxed">{proj.definition}</p>
          </div>
        </div>

        {/* Contexte */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <i className="fas fa-briefcase"></i> Contexte Professionnel
          </h2>
          <p className="opacity-90 leading-relaxed">{proj.contexte}</p>
        </div>

        {/* Objectifs, Enjeux, Risques */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="fas fa-target"></i> Objectifs
            </h3>
            <ul className="space-y-2">
              {proj.objectifs.map((obj, idx) => (
                <li key={idx} className="opacity-90 flex items-start gap-2">
                  <i className="fas fa-check text-green-400 mt-1 shrink-0"></i>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i> Enjeux
            </h3>
            <ul className="space-y-2">
              {proj.enjeux.map((enjeu, idx) => (
                <li key={idx} className="opacity-90 flex items-start gap-2">
                  <i className="fas fa-bolt text-yellow-400 mt-1 shrink-0"></i>
                  <span>{enjeu}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <i className="fas fa-fire"></i> Risques
            </h3>
            <ul className="space-y-2">
              {proj.risques.map((risque, idx) => (
                <li key={idx} className="opacity-90 flex items-start gap-2">
                  <i className="fas fa-exclamation-circle text-red-400 mt-1 shrink-0"></i>
                  <span>{risque}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Étapes */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <i className="fas fa-stream"></i> Étapes du Projet
          </h2>
          <div className="space-y-4">
            {proj.etapes.map((etape, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 border border-cyan-500/50 flex items-center justify-center text-sm font-bold text-cyan-400">
                  {idx + 1}
                </div>
                <p className="opacity-90 pt-1">{etape}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Acteurs, Résultats, Regard critique */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-500/10 rounded-lg p-6 border border-indigo-500/20">
            <h3 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
              <i className="fas fa-users"></i> Acteurs
            </h3>
            <p className="opacity-90">{proj.acteurs}</p>
          </div>

          <div className="bg-emerald-500/10 rounded-lg p-6 border border-emerald-500/20">
            <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <i className="fas fa-trophy"></i> Résultats Obtenus
            </h3>
            <p className="opacity-90">{proj.resultats}</p>
          </div>
        </div>

        {/* Regard critique */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
            <i className="fas fa-microscope"></i> Regard Critique & Autocritique
          </h2>
          <p className="opacity-90 leading-relaxed">{proj.regardCritique}</p>
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
                    <div className="flex items-center gap-3 mb-3">
                      <i className={`${comp.icon} text-2xl text-green-400`}></i>
                      <h3 className="font-semibold text-green-400 text-lg">{comp.nom}</h3>
                    </div>
                    <p className="text-sm opacity-70">{comp.niveau}</p>
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
