import React from 'react';
import { Link } from 'react-router-dom';
import { competences } from '../data.ts';

export default function Competences() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Mes Compétences</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {competences.map((c) => (
            <Link key={c.id} to={`/competence/${c.id}`}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 hover:from-blue-500/20 hover:to-purple-600/20 transition-all border border-white/10 hover:border-white/30 cursor-pointer h-full">
                <h2 className="text-2xl font-semibold mb-2">{c.nom}</h2>
                <p className="text-sm opacity-70 mb-4">Niveau: <span className="text-blue-400 font-semibold">{c.niveau}</span></p>
                <p className="text-sm opacity-80">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
