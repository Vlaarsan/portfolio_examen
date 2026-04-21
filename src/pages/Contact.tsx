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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-2xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Me Contacter</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-6">Informations de Contact</h2>
            <div className="space-y-4">
              <div>
                <p className="text-blue-400 font-semibold">Email</p>
                <p className="opacity-80">contact@primdavid.com</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">Téléphone</p>
                <p className="opacity-80">+33 X XX XX XX XX</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">Localisation</p>
                <p className="opacity-80">France</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {submitted && (
          <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center">
            ✓ Message envoyé avec succès!
          </div>
        )}
      </div>
    </div>
  );
}
