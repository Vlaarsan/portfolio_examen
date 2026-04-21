import React from 'react';

export default function Presentation() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-white pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">À propos de David PRIAM</h1>
      
      <div className="space-y-8 text-lg leading-relaxed">
        {/* Introduction */}
        <div className="bg-white/5 rounded-lg p-8 border border-green-500/30">
          <p className="opacity-90">
            Je suis un <strong>développeur passionné</strong> par la création de solutions innovantes et l'apprentissage continu. 
            Actuellement en <strong>alternance chez TF1</strong>, j'applique mes compétences techniques et humaines pour créer des expériences utilisateur exceptionnelles.
            Avec une approche <strong>autonome et rigoureuse</strong>, j'ai développé plusieurs applications en production et un jeu publié sur Steam.
          </p>
        </div>

        {/* 1. Mes valeurs */}
        <div className="bg-white/5 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-green-400 flex items-center gap-3">
            <i className="fas fa-compass"></i> Mes Valeurs
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">Expertise en ingénierie humain</h3>
              <p className="opacity-80">
                Je crois que la technologie doit servir les humains. Chaque ligne de code est pensée pour améliorer l'expérience utilisateur, pas pour compliquer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">Responsabilité & Qualité</h3>
              <p className="opacity-80">
                Responsable de mes livrables, je pousse la qualité à chaque étape. Code rigoureux, tests approvisionnés, documentation claire.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">Innovation & Amélioration continue</h3>
              <p className="opacity-80">
                Toujours à la recherche de meilleures solutions. L'apprentissage n'est jamais terminé et j'embrace les défis technologiques.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Projet professionnel et personnel */}
        <div className="bg-white/5 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
            <i className="fas fa-target"></i> Mon Projet Professionnel & Personnel
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Vision professionnelle</h3>
              <p className="opacity-80">
                Devenir un <strong>développeur senior</strong> reconnu pour son expertise en React Native et web moderne, capable de mener des projets complexes et d'accompagner une équipe.
                Je vise à créer des solutions qui impactent positivement les utilisateurs finaux et contribuent à l'innovation chez TF1.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Projet personnel</h3>
              <p className="opacity-80">
                <strong>Créateur</strong> dans l'âme, je veux développer des produits innovants qui résolvent des problèmes réels. 
                Mon rêve est de créer une application mobile ou un jeu indie à impact, tout en contribuant à la tech française.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Trajectorire de croissance</h3>
              <p className="opacity-80">
                <strong>Court terme (1 an):</strong> Maîtriser les stacks de TF1, contribuer à 2-3 projects majeurs.
                <br />
                <strong>Moyen terme (2-3 ans):</strong> Leadership technique, mentorat d'autres développeurs.
                <br />
                <strong>Long terme:</strong> Entrepreneur ou architecte logiciel dans une grande tech company.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Principales qualités humaines */}
        <div className="bg-white/5 rounded-lg p-8 border border-purple-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-3">
            <i className="fas fa-star"></i> Mes Principales Qualités Humaines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg p-4 border border-purple-500/20">
              <h3 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                <i className="fas fa-rocket"></i> Autonomie
              </h3>
              <p className="text-sm opacity-80">
                Capable de mener des projets du début à la fin sans supervision, en apprenant les technologies nécessaires en route.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-lg p-4 border border-blue-500/20">
              <h3 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                <i className="fas fa-check-double"></i> Rigueur
              </h3>
              <p className="text-sm opacity-80">
                Attention obsessive aux détails, respect des standards et qualité de code irréprochable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-lg p-4 border border-green-500/20">
              <h3 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                <i className="fas fa-lightbulb"></i> Créativité
              </h3>
              <p className="text-sm opacity-80">
                Pensée innovante, capacité à imaginer des solutions uniques et des designs attrayants.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-lg p-4 border border-yellow-500/20">
              <h3 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                <i className="fas fa-sync-alt"></i> Adaptabilité
              </h3>
              <p className="text-sm opacity-80">
                Flexible face aux changements et apprentissage rapide de nouvelles technologies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-rose-600/10 rounded-lg p-4 border border-red-500/20">
              <h3 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                <i className="fas fa-comments"></i> Communication
              </h3>
              <p className="text-sm opacity-80">
                Clairement explicite ses idées, documentation complète, interaction transparente.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-600/10 rounded-lg p-4 border border-indigo-500/20">
              <h3 className="font-semibold text-indigo-300 mb-2 flex items-center gap-2">
                <i className="fas fa-handshake"></i> Collaboration
              </h3>
              <p className="text-sm opacity-80">
                Travail efficace en équipe, partage de connaissances et esprit collectif.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Principaux centres d'intérêt */}
        <div className="bg-white/5 rounded-lg p-8 border border-pink-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-pink-400 flex items-center gap-3">
            <i className="fas fa-heart"></i> Mes Principaux Centres d'Intérêt
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
                <i className="fas fa-gamepad"></i> Game Development
              </h3>
              <p className="opacity-80 mb-3">
                Passionné par la création de jeux vidéo. J'ai développé et publié 'Saga Cube' sur Steam, 
                et je continue à explorer les mécaniques de gameplay innovantes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
                <i className="fas fa-film"></i> Animation & Design
              </h3>
              <p className="opacity-80 mb-3">
                Création de contenu vidéo et animation 3D. Mon court-métrage 'Le Codex d'Orion' m'a permis d'explorer la narration visuelle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
                <i className="fas fa-code"></i> Open Source & Communauté
              </h3>
              <p className="opacity-80 mb-3">
                Engagé dans la communauté tech, je partage mes projets sur GitHub et contribue à l'écosystème React Native.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
                <i className="fas fa-graduation-cap"></i> Apprentissage Continu
              </h3>
              <p className="opacity-80 mb-3">
                Toujours à la recherche de nouvelles technologies. Actuellement intéressé par Web3, AI appliquée et performance.
              </p>
            </div>
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-lg p-8 border border-green-500/50 text-center">
          <p className="text-lg opacity-90">
            Vous cherchez un développeur <strong>autonome, rigoureux et innovant</strong> ? 
            Je serais ravi de discuter de comment je peux contribuer à votre projet.
          </p>
          <a 
            href="mailto:priamdavid@gmail.com"
            className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}
