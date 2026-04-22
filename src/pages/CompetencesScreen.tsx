import React from 'react';
import { Link } from 'react-router-dom';
import { competences } from '../data.ts';

export default function Competences() {
  const competencesTechniques = competences.filter(c => c.categorie === 'technique');
  const competencesHumaines = competences.filter(c => c.categorie === 'humaine');

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="max-w-6xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Mes Compétences</h1>
        <p className="text-opacity-70 mb-12">15 compétences : 7 techniques + 8 humaines</p>

        {/* Comparaison visuelle des compétences techniques */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center gap-3">
            <i className="fas fa-code"></i> Compétences Techniques
          </h2>
          <div className="bg-gradient-to-br from-green-500/5 to-blue-600/5 rounded-lg p-8 border border-green-500/20">
            <div className="space-y-6">
              {competencesTechniques.map((c) => (
                <Link key={c.id} to={`/competence/${c.id}`}>
                  <div className="hover:bg-white/5 p-4 rounded transition">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <i className={`${c.icon} text-2xl text-green-400`}></i>
                        <div>
                          <h3 className="text-lg font-semibold text-green-300">{c.nom}</h3>
                          <p className="text-sm opacity-60">{c.niveau}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs opacity-60 mt-2">{c.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Compétences humaines */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-purple-400 flex items-center gap-3">
            <i className="fas fa-heart"></i> Compétences Humaines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {competencesHumaines.map((c) => (
              <Link key={c.id} to={`/competence/${c.id}`}>
                <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 hover:from-purple-500/20 hover:to-pink-600/20 transition-all border border-white/10 hover:border-white/30 cursor-pointer h-full">
                  <div className="flex items-start gap-4 mb-3">
                    <i className={`${c.icon} text-3xl text-purple-400`}></i>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold">{c.nom}</h2>
                      <p className="text-sm opacity-70">Niveau: <span className="text-purple-400 font-semibold">{c.niveau}</span></p>
                    </div>
                  </div>
                  <p className="text-sm opacity-80">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
