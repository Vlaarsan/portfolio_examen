import React from 'react';
import { Link } from 'react-router-dom';
import { formations, experiences } from '../data.ts';

export default function Parcours() {
  const formationsTriees = [...formations].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));
  const experiencesTriees = [...experiences].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-6xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">Mon Parcours</h1>
        <p className="opacity-70 mb-16 max-w-3xl leading-relaxed">
          Deux fils conducteurs se répondent dans mon parcours : ma formation, qui pose le cadre théorique et méthodologique, et mes expériences
          professionnelles, où ces bases sont mises à l'épreuve du réel. Chaque colonne se lit du plus récent en haut au plus ancien en bas.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Colonne Formations */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center gap-3">
              <i className="fas fa-graduation-cap"></i> Formations
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30"></div>
              <div className="space-y-8">
                {formationsTriees.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="absolute -left-8 top-2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-black shadow-lg"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-lg p-5 border border-white/10 hover:border-white/30 transition group">
                      <Link
                        to={`/formation/${item.id}`}
                        className="absolute inset-0 z-0 rounded-lg"
                        aria-label={`Voir le détail de la formation ${item.titre}`}
                      ></Link>
                      <div className="relative z-10 flex items-start gap-3 mb-2 pointer-events-none">
                        {item.lienEtablissement ? (
                          <a
                            href={item.lienEtablissement}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visiter ${item.etablissement}`}
                            className="relative z-20 pointer-events-auto hover:opacity-80 transition shrink-0 bg-white rounded-full p-1"
                          >
                            <img src={item.logo} alt={item.etablissement} className="w-6 h-6 object-contain" />
                          </a>
                        ) : (
                          <i className={`${item.icon} text-xl shrink-0`}></i>
                        )}
                        <div>
                          <h3 className="text-base font-semibold group-hover:text-cyan-300 transition">{item.titre}</h3>
                          <p className="text-sm opacity-70">{item.etablissement}</p>
                        </div>
                      </div>
                      <p className="relative z-10 text-xs opacity-60 mb-2 pointer-events-none">{item.periode} · {item.niveau}</p>
                      <p className="relative z-10 text-sm opacity-80 leading-relaxed pointer-events-none">{item.resume}</p>
                      <p className="relative z-10 text-xs text-cyan-400 mt-3 inline-flex items-center gap-1 pointer-events-none">
                        En savoir plus <i className="fas fa-arrow-right text-[10px]"></i>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Expériences */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-green-400 flex items-center gap-3">
              <i className="fas fa-briefcase"></i> Expériences
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-green-500 to-purple-600 opacity-30"></div>
              <div className="space-y-8">
                {experiencesTriees.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="absolute -left-8 top-2 w-4 h-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-full border-4 border-black shadow-lg"></div>
                    <div className="relative bg-gradient-to-br from-green-500/10 to-purple-600/10 rounded-lg p-5 border border-white/10 hover:border-white/30 transition group">
                      <Link
                        to={`/experience/${item.id}`}
                        className="absolute inset-0 z-0 rounded-lg"
                        aria-label={`Voir le détail de l'expérience ${item.poste} chez ${item.entreprise}`}
                      ></Link>
                      <div className="relative z-10 flex items-start gap-3 mb-2 pointer-events-none">
                        {item.lienEntreprise ? (
                          <a
                            href={item.lienEntreprise}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visiter ${item.entreprise}`}
                            className="relative z-20 pointer-events-auto hover:opacity-80 transition shrink-0 bg-white rounded-full p-1"
                          >
                            <img src={item.logo} alt={item.entreprise} className="w-6 h-6 object-contain" />
                          </a>
                        ) : (
                          <i className={`${item.icon} text-xl shrink-0`}></i>
                        )}
                        <div>
                          <h3 className="text-base font-semibold group-hover:text-green-300 transition">{item.poste}</h3>
                          <p className="text-sm opacity-70">{item.entreprise}</p>
                        </div>
                      </div>
                      <p className="relative z-10 text-xs opacity-60 mb-2 pointer-events-none">{item.periode}</p>
                      <span className="relative z-10 inline-block text-xs px-2 py-1 bg-white/10 rounded-full mb-2 pointer-events-none">{item.type}</span>
                      <p className="relative z-10 text-sm opacity-80 leading-relaxed pointer-events-none">{item.resume}</p>
                      <p className="relative z-10 text-xs text-green-400 mt-3 inline-flex items-center gap-1 pointer-events-none">
                        En savoir plus <i className="fas fa-arrow-right text-[10px]"></i>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
