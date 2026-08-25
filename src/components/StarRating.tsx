import React from "react";

interface StarRatingProps {
  pourcentage: number; // 0-100
  size?: string; // classe Tailwind de taille de texte, ex: "text-sm"
}

export default function StarRating({ pourcentage, size = "text-sm" }: StarRatingProps) {
  const rating = Math.round((pourcentage / 20) * 2) / 2; // arrondi au demi-point le plus proche, sur 5
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars === 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className={`inline-flex items-center gap-0.5 text-yellow-400 ${size}`} title={`${rating}/5`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i>
      ))}
    </span>
  );
}
