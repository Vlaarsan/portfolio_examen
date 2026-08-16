import React from "react";
import { Link } from "react-router-dom";

interface CircularNavItem {
  id: string;
  label: string;
}

interface CircularNavProps {
  items: CircularNavItem[];
  currentId: string;
  basePath: string; // ex: "/competence/"
}

export default function CircularNav({ items, currentId, basePath }: CircularNavProps) {
  if (items.length < 2) return null;

  const currentIndex = items.findIndex((item) => item.id === currentId);
  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;
  const prev = items[prevIndex];
  const next = items[nextIndex];

  return (
    <div className="flex items-stretch justify-between gap-4 mt-10 mb-6 border-t border-white/10 pt-8">
      <Link
        to={`${basePath}${prev.id}`}
        className="flex-1 flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition group"
      >
        <i className="fas fa-arrow-left text-lg opacity-60 group-hover:opacity-100 transition shrink-0"></i>
        <div className="text-left overflow-hidden">
          <p className="text-xs opacity-50 uppercase tracking-wide">Précédent</p>
          <p className="font-semibold truncate">{prev.label}</p>
        </div>
      </Link>
      <Link
        to={`${basePath}${next.id}`}
        className="flex-1 flex items-center justify-end gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition group text-right"
      >
        <div className="overflow-hidden">
          <p className="text-xs opacity-50 uppercase tracking-wide">Suivant</p>
          <p className="font-semibold truncate">{next.label}</p>
        </div>
        <i className="fas fa-arrow-right text-lg opacity-60 group-hover:opacity-100 transition shrink-0"></i>
      </Link>
    </div>
  );
}
