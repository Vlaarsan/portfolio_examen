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

  const categoryColor = comp.categorie === 'technique' 
    ? { bg: 'from-green-500/10 to-blue-600/10', text: 'text-green-400', border: 'border-green-500/30' }
    : { bg: 'from-purple-500/10 to-pink-600/10', text: 'text-purple-400', border: 'border-purple-500/30' };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/competences" className="text-green-400 hover:text-green-300 transition mb-6 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux compétences
        </Link>
        
        {/* Header */}
        <div className={`bg-gradient-to-br ${categoryColor.bg} rounded-lg p-8 border ${categoryColor.border} mb-8`}>
          <div className="flex items-start gap-6 mb-6">
            <i className={`${comp.icon} text-6xl ${categoryColor.text}`}></i>
            <div className="flex-1">
              <h1 className={`text-5xl font-bold mb-2 ${categoryColor.text}`}>{comp.nom}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <span className={`px-4 py-2 bg-opacity-20 rounded-full border ${categoryColor.border} font-semibold`}>
                  {comp.categorie === 'technique' ? 'Compétence Technique' : 'Compétence Humaine'}
                </span>
                <span className={`px-4 py-2 bg-opacity-20 rounded-full border ${categoryColor.border} font-semibold`}>
                  Niveau: {comp.niveau}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Définition & Contexte */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="fas fa-book"></i> Définition
            </h2>
            <p className="opacity-90">{comp.definition}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <i className="fas fa-briefcase"></i> Contexte Professionnel
            </h2>
            <p className="opacity-90">{comp.contexte}</p>
          </div>
        </div>

        {/* Anecdotes & Éléments de preuve */}
        <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <i className="fas fa-star"></i> Éléments de Preuve & Anecdotes
          </h2>
          <div className="space-y-4">
            {comp.anecdotes.map((anecdote, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-lg p-4 border border-purple-500/20">
                <div className="flex gap-3">
                  <span className="text-lg font-bold text-purple-400 shrink-0">{index + 1}</span>
                  <p className="opacity-90">{anecdote}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-green-500/10 rounded-lg p-4 border border-green-500/20">
            <h3 className="font-bold text-green-400 mb-2">Valeur Ajoutée</h3>
            <p className="opacity-90">{comp.valeurAjoutee}</p>
          </div>
        </div>

        {/* Autocritique */}
        <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <i className="fas fa-microscope"></i> Autocritique & Réflexion
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
              <h3 className="font-bold text-yellow-400 mb-2">📊 Niveau de Maîtrise</h3>
              <p className="opacity-90 text-sm">{comp.autocritique.maitrise}</p>
            </div>
            <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
              <h3 className="font-bold text-orange-400 mb-2">⚡ Vitesse d'Acquisition</h3>
              <p className="opacity-90 text-sm">{comp.autocritique.vitesseAcquisition}</p>
            </div>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 mt-6">
            <h3 className="font-bold text-blue-400 mb-2">💡 Conseils pour m'Améliorer</h3>
            <p className="opacity-90">{comp.autocritique.conseil}</p>
          </div>
        </div>

        {/* Évolution & Formations */}
        <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
            <i className="fas fa-chart-line"></i> Évolution & Formations Prévues
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <h3 className="font-bold text-cyan-400 mb-3">🎯 Lien avec Projet Personnel/Professionnel</h3>
              <p className="opacity-90">{comp.evolution.projetLien}</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <h3 className="font-bold text-indigo-400 mb-3">📚 Formations Planifiées</h3>
              <ul className="space-y-2">
                {comp.evolution.formations.map((formation, idx) => (
                  <li key={idx} className="opacity-90 flex items-center gap-2">
                    <i className="fas fa-check text-green-400"></i>
                    {formation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Réalisations liées */}
        {comp.realisations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
              <i className="fas fa-rocket"></i>
              Réalisations utilisant cette compétence
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
