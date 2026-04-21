import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Message to send:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">Me Contacter</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Informations de contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-8">Informations de Contact</h2>
            
            <div className="bg-white/5 rounded-lg p-6 border border-green-500/20 hover:border-green-500/50 transition">
              <div className="flex items-center gap-4 mb-2">
                <i className="fas fa-envelope text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <a href="mailto:priamdavid@gmail.com" className="text-green-300 hover:text-green-200 transition">
                priamdavid@gmail.com
              </a>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-green-500/20 hover:border-green-500/50 transition">
              <div className="flex items-center gap-4 mb-2">
                <i className="fas fa-phone text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold">Téléphone</h3>
              </div>
              <a href="tel:+33787384470" className="text-green-300 hover:text-green-200 transition">
                07 87 38 44 70
              </a>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-green-500/20 hover:border-green-500/50 transition">
              <div className="flex items-center gap-4 mb-2">
                <i className="fas fa-map-marker-alt text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold">Localisation</h3>
              </div>
              <p className="text-opacity-80">Seine et Marne, France</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/50 transition">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Réseaux sociaux</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Vlaarsan" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.youtube.com/@TheVlaar93/videos" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/david-priam-508652251/" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl font-semibold text-green-400 mb-8">Envoyez-moi un message</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">Votre nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white/10 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">Votre email</label>
              <input
                type="email"
                name="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white/10 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">Votre message</label>
              <textarea
                name="message"
                placeholder="Décrivez votre projet ou votre message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white/10 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition shadow-lg"
            >
              Envoyer le message
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center animate-pulse">
                ✓ Message reçu! Je vous recontacterai bientôt.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
