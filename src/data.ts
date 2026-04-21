export interface Competence {
  id: string;
  nom: string;
  niveau: string;
  description: string;
  realisations: string[];
}

export interface Realisation {
  id: string;
  nom: string;
  description: string;
  competences: string[];
}

export const competences: Competence[] = [
  {
    id: "react",
    nom: "React.js",
    niveau: "Avancé",
    description: "Expertise en développement d'interfaces modernes avec React, hooks, contexte et gestion d'état.",
    realisations: ["portfolio", "app-mobile"],
  },
  {
    id: "react-native",
    nom: "React Native",
    niveau: "Intermédiaire",
    description: "Développement d'applications mobiles cross-platform pour iOS et Android.",
    realisations: ["app-mobile"],
  },
  {
    id: "typescript",
    nom: "TypeScript",
    niveau: "Avancé",
    description: "Maîtrise de TypeScript pour un code type-safe et maintenable.",
    realisations: ["portfolio", "app-mobile"],
  },
  {
    id: "tailwind",
    nom: "Tailwind CSS",
    niveau: "Avancé",
    description: "Création de designs modernes et responsifs avec Tailwind CSS.",
    realisations: ["portfolio"],
  },
];

export const realisations: Realisation[] = [
  {
    id: "portfolio",
    nom: "Portfolio React",
    description: "Site personnel dynamique présentant mes compétences et réalisations. Construit avec React, TypeScript et Tailwind CSS pour un design moderne et performant.",
    competences: ["react", "typescript", "tailwind"],
  },
  {
    id: "app-mobile",
    nom: "Application Mobile",
    description: "Application React Native cross-platform combinant les meilleures pratiques de développement mobile avec une UX intuitive.",
    competences: ["react-native", "react", "typescript"],
  },
  {
    id: "ecommerce",
    nom: "Plateforme E-commerce",
    description: "Plateforme d'e-commerce complète avec panier, paiements et gestion de compte utilisateur.",
    competences: ["react", "typescript"],
  },
];
