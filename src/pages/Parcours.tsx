import React from 'react';

export default function Parcours() {
  const experiences = [
    {
      titre: 'Développeur React Senior',
      entreprise: 'Tech Company',
      periode: '2023 - Présent',
      description: 'Développement et maintenance d\'applications React d\'envergure'
    },
    {
      titre: 'Développeur React',
      entreprise: 'Startup Digital',
      periode: '2021 - 2023',
      description: 'Création d\'applications web modernes avec React et TypeScript'
    },
  ];

  const formations = [
    {
      titre: 'Formation React Avancée',
      lieu: 'Online Academy',
      annee: '2023'
    },
    {
      titre: 'Formation React Native',
      lieu: 'Tech Institute',
      annee: '2022'
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Mon Parcours</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Expérience Professionnelle</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition">
                <h3 className="text-xl font-semibold text-blue-400">{exp.titre}</h3>
                <p className="text-purple-400 font-medium">{exp.entreprise}</p>
                <p className="text-sm opacity-70 mb-3">{exp.periode}</p>
                <p className="opacity-80">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Formations</h2>
          <div className="space-y-6">
            {formations.map((formation, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition">
                <h3 className="text-xl font-semibold text-purple-400">{formation.titre}</h3>
                <p className="text-blue-400 font-medium">{formation.lieu}</p>
                <p className="text-sm opacity-70">{formation.annee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
