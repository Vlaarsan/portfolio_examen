import React from 'react';
import { Link } from 'react-router-dom';
import { realisations } from '../data.ts';

export default function Realisations() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Mes Réalisations</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {realisations.map((r) => (
            <Link key={r.id} to={`/realisation/${r.id}`}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 hover:from-purple-500/20 hover:to-blue-600/20 transition-all border border-white/10 hover:border-white/30 cursor-pointer h-full">
                <h2 className="text-2xl font-semibold mb-3">{r.nom}</h2>
                <p className="text-sm opacity-80 mb-4">{r.description}</p>
                <div className="flex flex-wrap gap-2">
                  {r.competences.map((comp) => (
                    <span key={comp} className="text-xs px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
