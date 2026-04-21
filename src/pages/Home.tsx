import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-4xl font-bold">PD</span>
        </div>
      </div>
      <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">PRIAM David</h1>
      <p className="text-2xl opacity-80 mb-2">Développeur React / React Native</p>
      <p className="text-lg opacity-60 mb-8 max-w-2xl">Créateur d'applications web et mobiles modernes avec React et React Native</p>
      
      <div className="flex gap-4">
        <Link 
          to="/realisations" 
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform font-semibold shadow-lg"
        >
          Voir mes projets
        </Link>
        <Link 
          to="/presentation" 
          className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition border border-white/20 font-semibold"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
