import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="mb-8">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center border-4 border-white/20 shadow-2xl overflow-hidden">
          <img 
            src="https://via.placeholder.com/400?text=Votre+Photo" 
            alt="David PRIAM" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">David PRIAM</h1>
      <p className="text-3xl font-semibold mb-2 text-green-400">Développeur React Native</p>
      <p className="text-lg opacity-70 mb-1">En alternance chez TF1</p>
      <p className="text-base opacity-60 mb-8 max-w-2xl">Créateur d'applications mobiles React Native et de jeux vidéo Unreal Engine</p>
      
      <div className="flex gap-4 flex-wrap justify-center">
        <Link 
          to="/realisations" 
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform font-semibold shadow-lg"
        >
          Découvrir mes projets
        </Link>
        <Link 
          to="/presentation" 
          className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition border border-white/20 font-semibold"
        >
          À propos de moi
        </Link>
        <a 
          href="https://github.com/Vlaarsan" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 transition border border-white/10 font-semibold flex items-center gap-2"
        >
          <i className="fab fa-github"></i>
          GitHub
        </a>
      </div>
    </div>
  );
}
