import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../data.ts';

export default function Experiences() {
  // Tri anti-chronologique : l'expérience la plus récente en haut
  const timeline = [...experiences].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-5xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600">Mes Expériences</h1>
        <p className="opacity-70 mb-4 max-w-3xl leading-relaxed">
          Du premier site vitrine livré en freelance jusqu'à mon alternance actuelle chez TF1 sur les environnements TV connectées,
          chaque expérience professionnelle m'a fait progresser sur un aspect différent du métier : la technique bien sûr, mais aussi
          la gestion de projet, la relation client et le travail en équipe. Voici, de la plus récente à la plus ancienne, ces différentes étapes.
        </p>
        <p className="text-sm opacity-50 mb-12">Cliquez sur une expérience pour découvrir les missions détaillées et les résultats obtenus.</p>

        {/* Timeline visuelle */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-purple-600 opacity-30"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.id} className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? '' : 'text-right'}`}>
                  <div className={`relative bg-gradient-to-br ${item.color} bg-opacity-10 rounded-lg p-6 border border-white/10 hover:border-white/30 transition group`}>
                    {/* Lien étiré : couvre toute la carte pour la navigation, sans imbriquer d'ancres */}
                    <Link
                      to={`/experience/${item.id}`}
                      className="absolute inset-0 z-0 rounded-lg"
                      aria-label={`Voir le détail de l'expérience ${item.poste} chez ${item.entreprise}`}
                    ></Link>
                    <div className={`relative z-10 flex items-start gap-3 mb-2 pointer-events-none ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
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
                        <i className={`${item.icon} text-2xl shrink-0`}></i>
                      )}
                      <div className={index % 2 !== 0 ? 'text-right' : ''}>
                        <h3 className="text-lg font-semibold group-hover:text-green-300 transition">{item.poste}</h3>
                        <p className="text-sm opacity-70">{item.entreprise}</p>
                      </div>
                    </div>
                    <p className="relative z-10 text-xs opacity-60 mb-3 pointer-events-none">{item.periode}</p>
                    <span className="relative z-10 inline-block text-xs px-2 py-1 bg-white/10 rounded-full mb-3 pointer-events-none">{item.type}</span>
                    <p className="relative z-10 text-sm opacity-80 leading-relaxed pointer-events-none">{item.resume}</p>
                    <p className={`relative z-10 text-xs text-green-400 mt-3 inline-flex items-center gap-1 pointer-events-none ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                      En savoir plus <i className="fas fa-arrow-right text-[10px]"></i>
                    </p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-full border-4 border-black shadow-lg"></div>
                </div>

                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-4 mt-20 pt-12 border-t border-white/10">
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-lg border border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600 mb-2">6</div>
            <p className="opacity-60 text-sm">Projets créés</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg border border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">3</div>
            <p className="opacity-60 text-sm">Apps mobiles</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg border border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">1</div>
            <p className="opacity-60 text-sm">Jeu Steam</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-red-600/10 rounded-lg border border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-600 mb-2">2+</div>
            <p className="opacity-60 text-sm">Ans d'expérience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
