import React from 'react';

export default function Presentation() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-white pt-24">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">À propos de David PRIAM</h1>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <div className="bg-white/5 rounded-lg p-8 border border-green-500/30">
          <p className="opacity-90">
            Je suis <strong>David PRIAM</strong>, développeur passionné par la création d'applications mobiles et de jeux vidéo. 
            Acutellement en alternance chez <strong>TF1</strong>, j'applique mes compétences en développement React Native afin de devenir un expert dans le domaine.
          </p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Mon expertise</h2>
          <ul className="space-y-3">
            <li>• <strong>React Native</strong> - Développement d'applications mobiles iOS et Android (Dogout, Kodafit, CuistotResto)</li>
            <li>• <strong>React.js</strong> - Interfaces web modernes et performantes</li>
            <li>• <strong>TypeScript</strong> - Code type-safe et maintenable</li>
            <li>• <strong>Unreal Engine 5</strong> - Développement de jeux (Saga Cube disponible sur Steam)</li>
            <li>• <strong>Animation 3D</strong> - Production vidéo et contenu créatif</li>
            <li>• <strong>Git & GitHub</strong> - Collaboration et gestion de versions</li>
            <li>• <strong>HTML/CSS</strong> - Design responsive et accessibilité</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-green-500/20">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Localisation</h3>
            <p className="opacity-80">Seine et Marne, France 🇫🇷</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6 border border-blue-500/20">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Langues</h3>
            <p className="opacity-80">Français, Anglais 🌍</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <p className="opacity-90">
            Je suis toujours à la recherche de <strong>nouveaux défis</strong> et d'opportunités de collaboration. 
            Que ce soit une application mobile innovante, un jeu captivant ou un projet web créatif, 
            j'aime transformer des idées en réalité et repousser les limites de la technologie.
          </p>
        </div>
      </div>
    </div>
  );
}
