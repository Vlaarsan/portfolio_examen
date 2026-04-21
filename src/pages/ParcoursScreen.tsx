import React from 'react';

export default function Parcours() {
  const experiences = [
    {
      titre: 'Développeur React Native (Alternance)',
      entreprise: 'TF1',
      periode: '2025 - Présent',
      description: 'Développement d\'applications React Native pour TF1. Participation à des projets d\'envergure avec une équipe professionnelle.'
    },
    {
      titre: 'Développeur Freelance',
      entreprise: 'Projets personnels',
      periode: '2023 - 2024',
      description: 'Création de 6 projets majeurs: applications mobiles (Dogout, Kodafit, CuistotResto), jeu Unreal Engine (Saga Cube), films d\'animation et site vitrine.'
    },
  ];

  const formations = [
    {
      titre: 'Formation React Native',
      lieu: 'Auto-formation & projets pratiques',
      annee: '2023 - 2024',
      details: 'Maîtrise complète de React Native à travers le développement de 3 applications mobiles en production.'
    },
    {
      titre: 'Unreal Engine 5',
      lieu: 'Auto-formation & développement de jeu',
      annee: '2024',
      details: 'Développement du jeu Saga Cube, apprentissage de UE5 et publication sur Steam.'
    },
    {
      titre: 'Développement Web',
      lieu: 'Auto-formation',
      annee: '2023',
      details: 'HTML, CSS, JavaScript, React.js et création du site vitrine PSPE.'
    },
    {
      titre: 'Animation 3D & Production Vidéo',
      lieu: 'Auto-formation',
      annee: '2024',
      details: 'Production du film d\'animation "Le Codex d\'Orion" avec effets 3D professionnels.'
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">Mon Parcours</h1>
        
        {/* Expérience Professionnelle */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
            <i className="fas fa-briefcase"></i>
            Expérience Professionnelle
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-lg border border-green-500/30 hover:border-green-500/60 transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-green-300">{exp.titre}</h3>
                    <p className="text-blue-400 font-medium text-lg">{exp.entreprise}</p>
                  </div>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">{exp.periode}</span>
                </div>
                <p className="opacity-80 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formations */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-400 flex items-center gap-3">
            <i className="fas fa-graduation-cap"></i>
            Formations & Apprentissages
          </h2>
          <div className="space-y-6">
            {formations.map((formation, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-blue-500/10 to-green-600/10 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300">{formation.titre}</h3>
                    <p className="text-green-400 font-medium text-lg">{formation.lieu}</p>
                  </div>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">{formation.annee}</span>
                </div>
                <p className="opacity-80">{formation.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">6</div>
            <p className="opacity-60 text-sm">Projets créés</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">3+</div>
            <p className="opacity-60 text-sm">Années d'expérience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">8</div>
            <p className="opacity-60 text-sm">Compétences maîtrisées</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">2</div>
            <p className="opacity-60 text-sm">Langues parlées</p>
          </div>
        </div>
      </div>
    </div>
  );
}
