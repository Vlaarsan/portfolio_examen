import React from "react";
import { useParams, Link } from "react-router-dom";
import { formations, competences } from "../data.ts";
import CircularNav from "../components/CircularNav.tsx";

export default function FormationDetail() {
  const { id } = useParams<{ id: string }>();
  const formation = formations.find((f) => f.id === id);

  if (!formation) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Formation non trouvée</h1>
          <Link to="/formations" className="text-cyan-400 hover:text-cyan-300 transition">
            ← Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  const timelineOrder = [...formations].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/formations" className="text-cyan-400 hover:text-cyan-300 transition mb-6 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux formations
        </Link>

        {/* Header */}
        <div className={`bg-gradient-to-br ${formation.color} bg-opacity-10 rounded-lg p-8 border border-white/10 mb-8 mt-6`}>
          <div className="flex items-start gap-6 mb-6">
            {formation.logo ? (
              <a
                href={formation.lienEtablissement}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visiter ${formation.etablissement}`}
                className="hover:opacity-80 transition shrink-0 bg-white rounded-xl p-3"
              >
                <img src={formation.logo} alt={formation.etablissement} className="w-10 h-10 object-contain" />
              </a>
            ) : (
              <i className={`${formation.icon} text-6xl shrink-0`}></i>
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{formation.titre}</h1>
              <p className="text-lg opacity-80 mb-3">
                {formation.lienEtablissement ? (
                  <a href={formation.lienEtablissement} target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300 transition">
                    {formation.etablissement}
                  </a>
                ) : (
                  formation.etablissement
                )}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 font-semibold text-sm">
                  <i className="far fa-calendar mr-2"></i>{formation.periode}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 font-semibold text-sm">
                  <i className="fas fa-graduation-cap mr-2"></i>{formation.niveau}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 font-semibold text-sm">
                  <i className="fas fa-map-marker-alt mr-2"></i>{formation.lieu}
                </span>
              </div>
            </div>
          </div>
          <p className="opacity-90 leading-relaxed text-lg">{formation.resume}</p>
        </div>

        {/* Contexte */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <i className="fas fa-briefcase"></i> Contexte
          </h2>
          <p className="opacity-90 leading-relaxed">{formation.contexte}</p>
        </div>

        {/* Programme */}
        <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
            <i className="fas fa-list-check"></i> Programme & Contenu
          </h2>
          <div className="space-y-3">
            {formation.programme.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <i className="fas fa-check text-blue-400 mt-1 shrink-0"></i>
                <p className="opacity-90">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Résultats & Anecdote */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-500/10 rounded-lg p-6 border border-emerald-500/20">
            <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <i className="fas fa-trophy"></i> Résultats
            </h3>
            <p className="opacity-90 leading-relaxed">{formation.resultats}</p>
          </div>
          <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
              <i className="fas fa-star"></i> Anecdote
            </h3>
            <p className="opacity-90 leading-relaxed">{formation.anecdote}</p>
          </div>
        </div>

        {/* Compétences acquises */}
        {formation.competencesAcquises.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-3">
              <i className="fas fa-tools"></i> Compétences développées
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {formation.competencesAcquises.map((compId) => {
                const comp = competences.find((c) => c.id === compId);
                return comp ? (
                  <Link key={compId} to={`/competence/${compId}`}>
                    <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-lg hover:from-cyan-500/20 hover:to-blue-600/20 transition border border-cyan-500/30 hover:border-cyan-500/60">
                      <div className="flex items-center gap-3 mb-3">
                        <i className={`${comp.icon} text-2xl text-cyan-400`}></i>
                        <h3 className="font-semibold text-cyan-400 text-lg">{comp.nom}</h3>
                      </div>
                      <p className="text-sm opacity-70">{comp.niveau}</p>
                    </div>
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        )}

        <CircularNav
          items={timelineOrder.map((f) => ({ id: f.id, label: f.titre }))}
          currentId={formation.id}
          basePath="/formation/"
        />

        <Link to="/formations" className="text-cyan-400 hover:text-cyan-300 transition inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux formations
        </Link>
      </div>
    </div>
  );
}
