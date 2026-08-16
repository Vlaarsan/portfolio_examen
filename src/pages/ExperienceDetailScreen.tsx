import React from "react";
import { useParams, Link } from "react-router-dom";
import { experiences, competences } from "../data.ts";
import CircularNav from "../components/CircularNav.tsx";

export default function ExperienceDetail() {
  const { id } = useParams<{ id: string }>();
  const exp = experiences.find((e) => e.id === id);

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Expérience non trouvée</h1>
          <Link to="/experiences" className="text-green-400 hover:text-green-300 transition">
            ← Retour aux expériences
          </Link>
        </div>
      </div>
    );
  }

  const timelineOrder = [...experiences].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <Link to="/experiences" className="text-green-400 hover:text-green-300 transition mb-6 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux expériences
        </Link>

        {/* Header */}
        <div className={`bg-gradient-to-br ${exp.color} bg-opacity-10 rounded-lg p-8 border border-white/10 mb-8 mt-6`}>
          <div className="flex items-start gap-6 mb-6">
            {exp.logo ? (
              <a
                href={exp.lienEntreprise}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visiter ${exp.entreprise}`}
                className="hover:opacity-80 transition shrink-0 bg-white rounded-xl p-3"
              >
                <img src={exp.logo} alt={exp.entreprise} className="w-10 h-10 object-contain" />
              </a>
            ) : (
              <i className={`${exp.icon} text-6xl shrink-0`}></i>
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{exp.poste}</h1>
              <p className="text-lg opacity-80 mb-3">
                {exp.lienEntreprise ? (
                  <a href={exp.lienEntreprise} target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300 transition">
                    {exp.entreprise}
                  </a>
                ) : (
                  exp.entreprise
                )}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 font-semibold text-sm">
                  <i className="far fa-calendar mr-2"></i>{exp.periode}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 font-semibold text-sm">
                  <i className="fas fa-briefcase mr-2"></i>{exp.type}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 font-semibold text-sm">
                  <i className="fas fa-map-marker-alt mr-2"></i>{exp.lieu}
                </span>
              </div>
            </div>
          </div>
          <p className="opacity-90 leading-relaxed text-lg">{exp.resume}</p>
        </div>

        {/* Contexte */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="fas fa-info-circle"></i> Contexte
          </h2>
          <p className="opacity-90 leading-relaxed">{exp.contexte}</p>
        </div>

        {/* Missions */}
        <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
            <i className="fas fa-list-check"></i> Missions Principales
          </h2>
          <div className="space-y-3">
            {exp.missions.map((mission, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <span className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-500/50 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="opacity-90">{mission}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <i className="fas fa-layer-group"></i> Technologies utilisées
          </h2>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Résultats & Anecdote */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-500/10 rounded-lg p-6 border border-emerald-500/20">
            <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <i className="fas fa-trophy"></i> Résultats
            </h3>
            <p className="opacity-90 leading-relaxed">{exp.resultats}</p>
          </div>
          <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
            <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
              <i className="fas fa-star"></i> Anecdote
            </h3>
            <p className="opacity-90 leading-relaxed">{exp.anecdote}</p>
          </div>
        </div>

        {/* Compétences acquises */}
        {exp.competencesAcquises.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
              <i className="fas fa-tools"></i> Compétences mobilisées
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {exp.competencesAcquises.map((compId) => {
                const comp = competences.find((c) => c.id === compId);
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
        )}

        <CircularNav
          items={timelineOrder.map((e) => ({ id: e.id, label: `${e.poste} — ${e.entreprise}` }))}
          currentId={exp.id}
          basePath="/experience/"
        />

        <Link to="/experiences" className="text-green-400 hover:text-green-300 transition inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Retour aux expériences
        </Link>
      </div>
    </div>
  );
}
