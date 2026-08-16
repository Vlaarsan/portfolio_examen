import React from 'react';
import { Link } from 'react-router-dom';

export default function Presentation() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-white pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">À propos de David PRIAM</h1>
      
      <div className="space-y-8 text-lg leading-relaxed">
        {/* Introduction */}
        <div className="bg-white/5 rounded-lg p-8 border border-green-500/30">
          <p className="opacity-90 mb-4">
            Je m'appelle David PRIAM, je suis un <strong>développeur passionné</strong> par la création de solutions innovantes et par l'apprentissage continu.
            Actuellement en <strong>alternance chez TF1</strong> en tant que développeur React Native, je travaille sur les environnements de télévision connectée
            de l'application TF1+ : un univers technique exigeant, où l'utilisateur navigue à la télécommande plutôt qu'au doigt, et où chaque interface doit
            rester lisible à plusieurs mètres de l'écran.
          </p>
          <p className="opacity-90 mb-4">
            Mon parcours n'est pas linéaire au sens classique du terme : entre un diplôme de Concepteur Développeur d'Applications, une mission freelance de
            développement web, un stage centré sur une application mobile, la publication en solo d'un jeu vidéo sur Steam et la réalisation d'un court-métrage
            d'animation 3D, je me suis construit un profil de développeur curieux, capable de sortir de sa zone de confort technique dès que l'occasion se présente.
            Vous pouvez d'ailleurs retrouver le détail de chacune de ces étapes dans les pages <Link to="/formations" className="text-green-400 hover:text-green-300 underline">Formations</Link> et <Link to="/experiences" className="text-green-400 hover:text-green-300 underline">Expériences</Link> de ce portfolio.
          </p>
          <p className="opacity-90">
            Avec une approche <strong>autonome et rigoureuse</strong>, j'ai développé plusieurs applications mobiles complètes ainsi qu'un jeu publié sur Steam,
            toujours en cherchant à comprendre en profondeur les technologies que j'utilise plutôt qu'à les employer superficiellement.
          </p>
        </div>

        {/* 1. Mes valeurs */}
        <div className="bg-white/5 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-green-400 flex items-center gap-3">
            <i className="fas fa-compass"></i> Mes Valeurs
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">Une technologie centrée sur l'humain</h3>
              <p className="opacity-80">
                Je crois que la technologie doit avant tout servir les personnes qui l'utilisent. Chaque ligne de code que j'écris est pensée en fonction de
                l'expérience de l'utilisateur final, pas seulement en fonction de sa faisabilité technique. Sur les interfaces TV, ce principe prend un relief
                particulier : un menu mal pensé n'est pas juste inesthétique, il devient littéralement inutilisable à la télécommande.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">Responsabilité & Qualité</h3>
              <p className="opacity-80">
                Je me sens pleinement responsable de mes livrables, du premier commit jusqu'à la mise en production. Cela se traduit concrètement par un code
                rigoureux, une couverture de tests que je cherche à systématiser, et une documentation claire pensée pour que n'importe quel développeur puisse
                reprendre mon travail sans avoir à me solliciter à chaque question.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">Innovation & Amélioration continue</h3>
              <p className="opacity-80">
                Je suis toujours à la recherche de meilleures solutions, quitte à remettre en question une approche qui fonctionne déjà si j'identifie une
                façon plus propre ou plus performante de faire les choses. L'apprentissage n'est jamais terminé à mes yeux, et j'aborde chaque nouveau défi
                technologique comme une occasion de progresser plutôt que comme une contrainte.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Projet professionnel et personnel */}
        <div className="bg-white/5 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
            <i className="fas fa-briefcase"></i> Mon Projet Professionnel & Personnel
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Vision professionnelle</h3>
              <p className="opacity-80">
                Mon ambition est de devenir un <strong>développeur senior</strong> reconnu pour son expertise en React Native moderne, capable de mener des
                projets complexes de bout en bout et d'accompagner une équipe dans ses choix techniques. Je souhaite continuer à créer des solutions qui ont
                un impact positif concret sur les utilisateurs finaux, et contribuer activement à l'innovation au sein des équipes techniques de TF1.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Projet personnel</h3>
              <p className="opacity-80">
                Je suis un <strong>créateur</strong> dans l'âme, et je veux continuer à développer des produits qui résolvent des problèmes réels plutôt que
                de simples exercices techniques. Mon rêve serait de faire aboutir une application mobile ou un jeu indépendant à réel impact, tout en
                continuant, à mon échelle, à contribuer à la vitalité de l'écosystème tech français.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Trajectoire de croissance</h3>
              <p className="opacity-80 mb-2">
                <strong>À court terme (1 an) :</strong> je souhaite continuer à monter en compétence sur les stacks techniques utilisées chez TF1 et contribuer
                de façon significative à deux ou trois projets majeurs de l'équipe, en particulier sur les problématiques spécifiques aux interfaces TV.
              </p>
              <p className="opacity-80 mb-2">
                <strong>À moyen terme (2 à 3 ans) :</strong> j'ambitionne de prendre progressivement des responsabilités de leadership technique, en accompagnant
                et en formant d'autres développeurs moins expérimentés, comme j'ai commencé à le faire ponctuellement avec d'autres alternants.
              </p>
              <p className="opacity-80">
                <strong>À long terme :</strong> mon objectif est de devenir un développeur senior reconnu pour son expertise en React Native, capable de
                concevoir l'architecture de projets complexes et de faire des choix techniques structurants pour une équipe entière.
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
                Savoir clairement expliquer ses idées, faire des documentations complètes, ainsi qu'avoir une interaction transparente.
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
                et je continue à explorer le monde merveilleux du jeu vidéo.
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
                Je suis toujours à la recherche de nouvelles technologies à explorer. Je m'intéresse actuellement de près à l'intelligence artificielle, tout
                en continuant à développer mon application culinaire personnelle, CuistoResto.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Ma méthode de travail */}
        <div className="bg-white/5 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center gap-3">
            <i className="fas fa-diagram-project"></i> Ma Méthode de Travail
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Comprendre avant de coder</h3>
              <p className="opacity-80">
                Avant d'écrire la moindre ligne de code, je prends le temps de bien cerner le besoin réel : à qui s'adresse la fonctionnalité, dans quel
                contexte sera-t-elle utilisée, quelles sont les contraintes techniques déjà en place. Cette habitude, héritée de ma formation de Concepteur
                Développeur d'Applications, m'évite de nombreux allers-retours inutiles une fois le développement lancé.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Itérer par petites étapes</h3>
              <p className="opacity-80">
                Je préfère avancer par incréments courts et testables plutôt que de développer une fonctionnalité entière avant de la tester pour la première
                fois. Cette approche, que j'ai particulièrement affinée en travaillant en équipe chez TF1 avec des revues de code régulières, réduit le risque
                de devoir remettre en question une architecture déjà largement développée.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Documenter et transmettre</h3>
              <p className="opacity-80">
                Que ce soit sur mes projets personnels ou dans un contexte professionnel, je prends l'habitude de documenter mes choix techniques : pourquoi
                telle librairie plutôt qu'une autre, pourquoi telle architecture. Cette rigueur documentaire facilite la maintenance du projet et permet à
                d'autres développeurs de comprendre rapidement mes décisions, même longtemps après qu'elles ont été prises.
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
          <Link 
            to="/contact"
            className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
