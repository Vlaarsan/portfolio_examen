import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Ne pas empêcher la soumission - laisser Formspree la gérer
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">Me Contacter</h1>
        <p className="text-lg opacity-70 mb-12">N'hésitez pas à me contacter pour discuter de projets, collaborations ou toute autre opportunité !</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8 text-green-400 flex items-center gap-3">
              <i className="fas fa-info-circle"></i>
              Informations de Contact
            </h2>

            {/* Email */}
            <a href="mailto:priamdavid@gmail.com" className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-lg border border-green-500/30 hover:border-green-500/60 transition group">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition shrink-0">
                <i className="fas fa-envelope text-xl text-green-400"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-green-300 mb-1">Email</h3>
                <p className="opacity-70">priamdavid@gmail.com</p>
              </div>
            </a>

            {/* Téléphone */}
            <a href="tel:+33787384470" className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition shrink-0">
                <i className="fas fa-phone text-xl text-blue-400"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-300 mb-1">Téléphone</h3>
                <p className="opacity-70">07 87 38 44 70</p>
              </div>
            </a>

            {/* Localisation */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg border border-purple-500/30">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                <i className="fas fa-map-marker-alt text-xl text-purple-400"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-purple-300 mb-1">Localisation</h3>
                <p className="opacity-70">Seine et Marne, France</p>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-lg border border-orange-500/30">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                <i className="fas fa-calendar-alt text-xl text-orange-400"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-orange-300 mb-1">Disponibilité</h3>
                <p className="opacity-70">Ouvert à nouvelles opportunités</p>
                <p className="text-sm opacity-60 mt-1">Réponses généralement dans les 24-48h</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
              <i className="fas fa-paper-plane"></i>
              Envoyez un Message
            </h2>
            <form 
              action="https://formspree.io/f/mvzdwrld"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="nom" className="block text-sm font-medium mb-2 text-gray-300">Votre Nom *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-500 focus:outline-none transition text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Votre Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-500 focus:outline-none transition text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-medium mb-2 text-gray-300">Sujet *</label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  required
                  placeholder="Quel est le sujet ?"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-500 focus:outline-none transition text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Votre message ici..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-500 focus:outline-none transition text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <i className="fas fa-send"></i>
                Envoyer le Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center animate-pulse">
                  <i className="fas fa-check mr-2"></i> Message envoyé ! Je vous recontacterai bientôt.
                </div>
              )}
            </form>

            <p className="text-xs opacity-50 mt-4">* Champs obligatoires</p>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-400">Retrouvez-moi sur les Réseaux</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Vlaarsan" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/david-priam-508652251/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 transition">
              <i className="fab fa-linkedin text-2xl text-blue-300"></i>
            </a>
            <a href="https://www.youtube.com/@TheVlaar93/videos" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 transition">
              <i className="fab fa-youtube text-2xl text-red-300"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-blue-400/20 border border-blue-400/40 hover:bg-blue-400/30 transition">
              <i className="fab fa-twitter text-2xl text-blue-200"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-purple-600/20 border border-purple-600/40 hover:bg-purple-600/30 transition">
              <i className="fab fa-discord text-2xl text-purple-300"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
