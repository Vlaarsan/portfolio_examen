import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <h1 className="text-5xl font-bold mb-4">PRIAM David</h1>
      <p className="text-xl opacity-80 mb-6">Développeur React / React Native</p>
      <Link to="/realisations" className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
        Voir mes projets
      </Link>
    </div>
  );
}