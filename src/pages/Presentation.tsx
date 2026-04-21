import React from 'react';

export default function Presentation() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-white pt-24">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">À propos de moi</h1>
      
      <div className="space-y-6 text-lg leading-relaxed opacity-90">
        <p>
          Je suis Priam David, développeur passionné par la création d'expériences utilisateur exceptionnelles. 
          Avec plusieurs années d'expérience en React et React Native, je crée des applications modernes et performantes.
        </p>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Mon expertise</h2>
          <ul className="space-y-3">
            <li>• <strong>React.js</strong> - Développement d'interfaces web dynamiques et réactives</li>
            <li>• <strong>React Native</strong> - Création d'applications mobiles cross-platform</li>
            <li>• <strong>TypeScript</strong> - Code typé et maintenable</li>
            <li>• <strong>Tailwind CSS</strong> - Styling moderne et responsive</li>
            <li>• <strong>REST API</strong> - Intégration avec des services backend</li>
          </ul>
        </div>

        <p>
          Je suis toujours à la recherche de nouveaux défis et de la meilleure façon de résoudre les problèmes. 
          Que ce soit un site web personnel, une application mobile ou une refonte complète, 
          j'aime transformer des idées en réalité.
        </p>
      </div>
    </div>
  );
}
