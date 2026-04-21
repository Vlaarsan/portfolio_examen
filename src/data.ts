export interface Competence {
  id: string;
  nom: string;
  niveau: string;
  description: string;
  pourcentage: number;
  realisations: string[];
}

export interface Realisation {
  id: string;
  nom: string;
  description: string;
  competences: string[];
  github?: string;
  lien?: string;
  youtube?: string;
}

export const competences: Competence[] = [
  {
    id: "react-native",
    nom: "React Native",
    niveau: "Avancé",
    pourcentage: 90,
    description: "Développement d'applications mobiles cross-platform iOS et Android. Expérience avec Dogout, Kodafit et CuistotResto.",
    realisations: ["dogout", "kodafit", "cuistoResto"],
  },
  {
    id: "react",
    nom: "React.js",
    niveau: "Avancé",
    pourcentage: 85,
    description: "Expertise en développement d'interfaces web modernes avec React, hooks et gestion d'état avancée.",
    realisations: ["site-pspe"],
  },
  {
    id: "typescript",
    nom: "TypeScript",
    niveau: "Avancé",
    pourcentage: 85,
    description: "Code type-safe et maintenable pour tous mes projets React et React Native.",
    realisations: ["dogout", "kodafit", "site-pspe"],
  },
  {
    id: "unreal-engine",
    nom: "Unreal Engine 5",
    niveau: "Intermédiaire",
    pourcentage: 75,
    description: "Développement de jeux avec Unreal Engine 5, notamment Saga Cube disponible sur Steam.",
    realisations: ["saga-cube"],
  },
  {
    id: "animation",
    nom: "Animation & 3D",
    niveau: "Intermédiaire",
    pourcentage: 70,
    description: "Production de contenu vidéo et animation 3D pour Le Codex d'Orion et d'autres projets créatifs.",
    realisations: ["codex-orion"],
  },
  {
    id: "javascript",
    nom: "JavaScript",
    niveau: "Avancé",
    pourcentage: 88,
    description: "Maîtrise complète de JavaScript ES6+ avec patterns modernes et bonnes pratiques.",
    realisations: ["dogout", "kodafit", "site-pspe"],
  },
  {
    id: "html-css",
    nom: "HTML/CSS",
    niveau: "Avancé",
    pourcentage: 90,
    description: "Design responsive et accessibilité web. Tailwind CSS et CSS personnalisé.",
    realisations: ["site-pspe"],
  },
  {
    id: "git",
    nom: "Git & GitHub",
    niveau: "Avancé",
    pourcentage: 85,
    description: "Contrôle de version, collaboration en équipe et gestion de dépôts GitHub.",
    realisations: ["dogout", "kodafit", "site-pspe"],
  },
];

export const realisations: Realisation[] = [
  {
    id: "dogout",
    nom: "Dogout",
    description: "Application mobile facilitant la création et la participation à des balades canines. Plateforme innovante pour les propriétaires de chiens.",
    competences: ["react-native", "typescript", "javascript"],
    github: "https://github.com/Vlaarsan/DogoutV2",
    youtube: "https://www.youtube.com/watch?v=BxgXHbYNEgc&t=4s",
  },
  {
    id: "saga-cube",
    nom: "Saga Cube",
    description: "Jeu d'énigmes et de plateformes sur PC développé avec Unreal Engine 5. Disponible sur Steam avec une communauté active.",
    competences: ["unreal-engine"],
    youtube: "https://www.youtube.com/watch?v=8Lf3NEA9M64",
    lien: "https://store.steampowered.com/app/2148080/Saga_Cube",
  },
  {
    id: "kodafit",
    nom: "Kodafit",
    description: "Application mobile dédiée à la musculation et au fitness. Offre une variété d'exercices, de plans d'entraînement et de conseils pour les adeptes du fitness.",
    competences: ["react-native", "typescript", "javascript"],
    github: "https://github.com/Vlaarsan/Kodafit",
  },
  {
    id: "codex-orion",
    nom: "Le Codex d'Orion",
    description: "Mini film d'animation 3D mettant en scène un héros en costume qui infiltre un musée pour récupérer le Codex d'Orion. Projet créatif et cinématographique.",
    competences: ["animation"],
    youtube: "https://www.youtube.com/watch?v=Zy9kU0NkdmY",
  },
  {
    id: "site-pspe",
    nom: "Site Web PSPE",
    description: "Site vitrine professionnel créé pour la société PSPE. Design moderne, responsive et optimisé pour la conversion.",
    competences: ["react", "html-css", "typescript", "javascript"],
    github: "https://github.com/Vlaarsan/Site-PSPE",
    lien: "https://vlaar93.github.io/Site_Sid",
  },
  {
    id: "cuistoResto",
    nom: "CuistotResto",
    description: "Application mobile dédiée à la restauration et aux recettes. Offre une variété de recettes et de conseils culinaires pour les amateurs de cuisine.",
    competences: ["react-native", "javascript"],
    github: "https://github.com/Vlaarsan/CuistoResto",
  },
];
