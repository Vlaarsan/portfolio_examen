import React from 'react';
import { Link } from 'react-router-dom';
import { formations } from '../data.ts';

export default function Formations() {
  // Tri anti-chronologique : la formation la plus récente en haut
  const timeline = [...formations].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-5xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Mes Formations</h1>
        <p className="opacity-70 mb-4 max-w-3xl leading-relaxed">
          Mon parcours de formation combine un diplôme académique et une grande part d'auto-formation menée à travers des projets concrets.
          Je crois profondément qu'apprendre en construisant un vrai projet, avec de vraies contraintes, ancre bien plus durablement une compétence
          qu'un simple exercice théorique. Voici, de la plus récente à la plus ancienne, les grandes étapes de cet apprentissage continu.
        </p>
        <p className="text-sm opacity-50 mb-12">Cliquez sur une formation pour en découvrir le programme détaillé et les compétences acquises.</p>

        {/* Timeline visuelle */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.id} className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? '' : 'text-right'}`}>
                  <div className={`relative bg-gradient-to-br ${item.color} bg-opacity-10 rounded-lg p-6 border border-white/10 hover:border-white/30 transition group`}>
                    {/* Lien étiré : couvre toute la carte pour la navigation, sans imbriquer d'ancres */}
                    <Link
                      to={`/formation/${item.id}`}
                      className="absolute inset-0 z-0 rounded-lg"
                      aria-label={`Voir le détail de la formation ${item.titre}`}
                    ></Link>
                    <div className={`relative z-10 flex items-start gap-3 mb-2 pointer-events-none ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
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
                        <i className={`${item.icon} text-2xl shrink-0`}></i>
                      )}
                      <div className={index % 2 !== 0 ? 'text-right' : ''}>
                        <h3 className="text-lg font-semibold group-hover:text-cyan-300 transition">{item.titre}</h3>
                        <p className="text-sm opacity-70">{item.etablissement}</p>
                      </div>
                    </div>
                    <p className="relative z-10 text-xs opacity-60 mb-3 pointer-events-none">{item.periode} · {item.niveau}</p>
                    <p className="relative z-10 text-sm opacity-80 leading-relaxed pointer-events-none">{item.resume}</p>
                    <p className={`relative z-10 text-xs text-cyan-400 mt-3 inline-flex items-center gap-1 pointer-events-none ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                      En savoir plus <i className="fas fa-arrow-right text-[10px]"></i>
                    </p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-black shadow-lg"></div>
                </div>

                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
