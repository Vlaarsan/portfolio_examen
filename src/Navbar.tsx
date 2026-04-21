import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <span className="font-bold">PRIAM David</span>
        <div className="flex gap-6 text-sm">
          <Link to="/">Accueil</Link>
          <Link to="/presentation">Présentation</Link>
          <Link to="/competences">Compétences</Link>
          <Link to="/realisations">Réalisations</Link>
          <Link to="/parcours">Parcours</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}