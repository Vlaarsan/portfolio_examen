import React from 'react';

export default function Parcours() {
  const experiences = [
    {
      titre: 'Développeur React Native (Alternance)',
      entreprise: 'TF1',
      periode: '09/2024 - Présent',
      statut: 'Alternance',
      description: 'Développement d\'applications React Native pour TF1. Participation à des projets d\'envergure avec une équipe professionnelle dans un contexte de grande entreprise. Missions principales : développement feature, optimisation performance, code review.',
      icon: 'fab fa-react',
      logo: 'https://www.tf1.fr/favicon.ico',
      lienLogo: 'https://www.tf1.fr',
      color: 'from-purple-500 to-pink-600',
      type: 'experience'
    },
    {
      titre: 'Développeur React Native en Stage',
      entreprise: 'CodeFlow',
      periode: '11/2023 - 02/2024',
      statut: 'Stage (3 mois)',
      description: 'Développement de l\'application mobile Dogout. Réalisation de maquettes Figma, conception de la navigation avec React Navigation, configuration Firebase pour l\'authentification et le stockage des données, déploiement via APK.',
      icon: 'fas fa-code',
      color: 'from-green-500 to-emerald-600',
      type: 'experience'
    },
    {
      titre: 'Développement Web Freelance',
      entreprise: 'PSPE (Indépendant)',
      periode: '06/2022 - 12/2022',
      statut: 'Freelance',
      description: 'Création d\'un site web vitrine professionnel avec HTML, CSS et JavaScript. Design responsive et optimisé pour la conversion. Gestion complète du projet du design à la mise en production.',
      icon: 'fas fa-globe',
      color: 'from-blue-500 to-cyan-600',
      type: 'experience'
    },
  ];

  const formations = [
    {
      titre: 'Concepteur Développeur d\'Application',
      lieu: 'Formation Bac +3 (Niveau 6)',
      annee: '2023',
      details: 'Diplôme de niveau 6 en conception et développement d\'applications. Apprentissage complet du cycle de développement logiciel, architecture, et gestion de projet.',
      icon: 'fas fa-certificate',
      color: 'from-cyan-500 to-blue-600',
      colorKey: 'cyan'
    },
    {
      titre: 'Développeur React Native',
      lieu: 'Auto-formation & projets pratiques',
      annee: '2023 - 2024',
      details: 'Maîtrise complète de React Native à travers le développement de 3 applications mobiles en production: Dogout, Kodafit et CuistotResto.',
      icon: 'fas fa-graduation-cap',
      color: 'from-red-500 to-rose-600'
    },
    {
      titre: 'Game Designer - Unreal Engine 5',
      lieu: 'Auto-formation & développement de jeu',
      annee: '2022',
      details: 'Conception et développement du jeu PC "Saga Cube" sous Unreal Engine 5. Publication du jeu sur Steam avec une communauté active de joueurs.',
      icon: 'fas fa-gamepad',
      color: 'from-orange-500 to-amber-600'
    },
    {
      titre: 'Développement Web',
      lieu: 'Auto-formation',
      annee: '2023',
      details: 'Maîtrise de HTML, CSS, JavaScript et React.js. Création du site vitrine PSPE démontrant une compétence en développement web moderne.',
      icon: 'fas fa-laptop-code',
      color: 'from-yellow-500 to-lime-600'
    },
    {
      titre: 'Animation 3D & Production Vidéo',
      lieu: 'Auto-formation',
      annee: '2026',
      details: 'Production du film d\'animation "Le Codex d\'Orion" avec effets 3D professionnels. Apprentissage des outils de production vidéo et animation 3D.',
      icon: 'fas fa-film',
      color: 'from-indigo-500 to-violet-600',
      colorKey: 'indigo'
    },
  ];

  // Combinaison et tri chronologique (ancien au haut, récent au bas)
  const timeline = [
    { ...experiences[2], index: 0, colorKey: 'blue' },
    { ...formations[2], index: 1, colorKey: 'orange' },
    { ...formations[3], index: 2, colorKey: 'yellow' },
    { ...formations[0], index: 3, colorKey: 'cyan' },
    { ...formations[1], index: 4, colorKey: 'red' },
    { ...experiences[1], index: 5, colorKey: 'green' },
    { ...formations[4], index: 6, colorKey: 'indigo' },
    { ...experiences[0], index: 7, colorKey: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-5xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">Mon Parcours</h1>
        <p className="text-opacity-70 mb-12">Frise chronologique de mon évolution professionnelle</p>

        {/* Timeline visuelle */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-600 opacity-30"></div>

          {/* Événements */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const colorMap: {[key: string]: {bg: string, text: string}} = {
                purple: { bg: 'from-purple-500 to-pink-600', text: 'text-purple-400' },
                green: { bg: 'from-green-500 to-emerald-600', text: 'text-green-400' },
                blue: { bg: 'from-blue-500 to-cyan-600', text: 'text-blue-400' },
                red: { bg: 'from-red-500 to-rose-600', text: 'text-red-400' },
                orange: { bg: 'from-orange-500 to-amber-600', text: 'text-orange-400' },
                yellow: { bg: 'from-yellow-500 to-lime-600', text: 'text-yellow-400' },
                indigo: { bg: 'from-indigo-500 to-violet-600', text: 'text-indigo-400' },
                cyan: { bg: 'from-cyan-500 to-blue-600', text: 'text-cyan-400' },
              };
              const colorKey = (item as any).colorKey || 'purple';
              const colors = colorMap[colorKey];
              return (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Contenu */}
                  <div className={`w-5/12 ${index % 2 === 0 ? '' : 'text-right'}`}>
                    <div className={`bg-gradient-to-br ${colors.bg} bg-opacity-10 rounded-lg p-6 border border-white/10 hover:border-white/30 transition`}>
                      <div className="flex items-start gap-3 mb-2">
                        {(item as any).lienLogo ? (
                          <a 
                            href={(item as any).lienLogo}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visiter ${(item as any).entreprise}`}
                            className="hover:opacity-80 transition shrink-0"
                          >
                            <img 
                              src={(item as any).logo} 
                              alt={(item as any).entreprise}
                              className="w-6 h-6 object-contain"
                            />
                          </a>
                        ) : (
                          <i className={`${(item as any).icon} text-2xl ${colors.text}`}></i>
                        )}
                        <div className={index % 2 !== 0 ? 'text-right' : ''}>
                          <h3 className="text-lg font-semibold">{(item as any).titre}</h3>
                          <p className="text-sm opacity-70">{(item as any).entreprise || (item as any).lieu}</p>
                        </div>
                      </div>
                      <p className="text-xs opacity-60 mb-3">{(item as any).periode || (item as any).annee}</p>
                      {(item as any).statut && <span className="inline-block text-xs px-2 py-1 bg-white/10 rounded-full mb-3">{(item as any).statut}</span>}
                      <p className="text-sm opacity-80 leading-relaxed">{(item as any).description || (item as any).details}</p>
                    </div>
                  </div>

                  {/* Point central */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full border-4 border-black shadow-lg"></div>
                  </div>

                  {/* Espace vide */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
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
