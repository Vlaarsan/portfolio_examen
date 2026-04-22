import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const photoUrl =
    "https://github.com/Vlaarsan/Portfolio/blob/main/img/PP3.jpg?raw=true";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <div className="flex items-center gap-3">
          {/* Photo circulaire */}
          <img
            src={photoUrl}
            alt="David PRIAM"
            className="w-12 h-12 rounded-full object-cover object-[50%_20%] border-2 border-green-400 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-300"
          />
          <Link
            to="/"
            className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            PRIAM David
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-blue-400 transition">
            Accueil
          </Link>
          <Link to="/presentation" className="hover:text-blue-400 transition">
            Présentation
          </Link>
          <Link to="/competences" className="hover:text-blue-400 transition">
            Compétences
          </Link>
          <Link to="/realisations" className="hover:text-blue-400 transition">
            Réalisations
          </Link>
          <Link to="/parcours" className="hover:text-blue-400 transition">
            Parcours
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-white/10 p-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <Link
                to="/"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/presentation"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Présentation
              </Link>
              <Link
                to="/competences"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Compétences
              </Link>
              <Link
                to="/realisations"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Réalisations
              </Link>
              <Link
                to="/parcours"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Parcours
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
