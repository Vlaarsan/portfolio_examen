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
            <div key={r.id} className="rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 hover:from-purple-500/20 hover:to-blue-600/20 transition-all border border-white/10 hover:border-white/30 overflow-hidden h-full flex flex-col">
              {/* Image */}
              <div className="w-full h-48 bg-black/50 overflow-hidden">
                <img 
                  src={r.image} 
                  alt={r.nom} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-3">{r.nom}</h2>
                <p className="text-sm opacity-80 mb-4 flex-grow">{r.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {r.competences.map((comp) => (
                    <span key={comp} className="text-xs px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full">
                      {comp}
                    </span>
                  ))}
                </div>
                
                {/* Direct Links */}
                <div className="flex gap-3 flex-wrap pt-4 border-t border-white/10">
                  {r.github && (
                    <a 
                      href={r.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded transition text-sm"
                      title="Code Source"
                    >
                      <i className="fab fa-github"></i>
                      GitHub
                    </a>
                  )}
                  {r.youtube && (
                    <a 
                      href={r.youtube} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 rounded transition text-sm text-red-300"
                      title="Vidéo YouTube"
                    >
                      <i className="fab fa-youtube"></i>
                      YouTube
                    </a>
                  )}
                  {r.steam && (
                    <a 
                      href={r.steam} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded transition text-sm text-blue-300"
                      title="Steam"
                    >
                      <i className="fab fa-steam"></i>
                      Steam
                    </a>
                  )}
                  {r.lien && !r.steam && (
                    <a 
                      href={r.lien} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 rounded transition text-sm text-green-300"
                      title="Voir en ligne"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Voir
                    </a>
                  )}
                  <Link 
                    to={`/realisation/${r.id}`}
                    className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded transition text-sm text-purple-300 ml-auto"
                  >
                    <i className="fas fa-arrow-right"></i>
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
