export interface Competence {
  id: string;
  nom: string;
  niveau: string;
  pourcentage: number;
  description: string;
  categorie: 'technique' | 'humaine'; // Distinction technique/humaine
  definition: string; // Définition de la compétence
  contexte: string; // Contexte professionnel
  anecdotes: string[]; // 1-3 anecdotes
  valeurAjoutee: string; // Résultats et valeur ajoutée
  autocritique: {
    maitrise: string;
    vitesseAcquisition: string;
    conseil: string;
  };
  evolution: {
    projetLien: string;
    formations: string[];
  };
  realisations: string[];
  icon: string;
}

export interface Realisation {
  id: string;
  nom: string;
  description: string;
  competences: string[];
  github?: string;
  lien?: string;
  youtube?: string;
  steam?: string;
  image?: string;
  // Nouveaux champs détaillés
  presentation: string; // Présentation globale
  definition: string; // Définition du projet
  objectifs: string[]; // Objectifs spécifiques
  contexte: string; // Contexte du projet
  enjeux: string[]; // Enjeux
  risques: string[]; // Risques rencontrés
  etapes: string[]; // Étapes du projet
  acteurs: string; // Qui a travaillé dessus
  resultats: string; // Résultats obtenus
  regardCritique: string; // Regard critique/autocritique
}

export const competences: Competence[] = [
  // Compétences Techniques
  {
    id: "react-native",
    nom: "React Native",
    niveau: "Avancé",
    pourcentage: 90,
    categorie: "technique",
    description: "Développement d'applications mobiles cross-platform iOS et Android.",
    definition: "React Native est un framework permettant de développer des applications mobiles natives avec JavaScript et React.",
    contexte: "En tant que développeur React Native, j'ai créé plusieurs applications mobiles en production déployées sur AppStore et Google Play.",
    anecdotes: [
      "Lors du développement de Dogout, j'ai intégré Firebase pour l'authentification d'500+ utilisateurs avec une approche sécurisée",
      "J'ai conçu l'architecture complète de Kodafit avec une gestion d'état optimisée permettant 60 exercices sans ralentissements",
      "J'ai automatisé le build APK et les déploiements sur 3 versions majeures de CuistotResto"
    ],
    valeurAjoutee: "Création de 3 applications en production, expérience complète du cycle de vie (dev, tests, déploiement), gestion de communauté utilisateurs",
    autocritique: {
      maitrise: "90% - Maîtrise avancée, capable de gérer des projets d'envergure",
      vitesseAcquisition: "Acquisitions rapides, ayant maîtrisé complètement en 3-4 mois",
      conseil: "Approfondir les performances et animations complexes, explorer le domaine du game dev mobile"
    },
    evolution: {
      projetLien: "Intégration progressive du React Native au sein de TF1 pour des applications grand public",
      formations: ["React Native Advanced Patterns", "Firebase Advanced Architecture", "React Native Performance Optimization"]
    },
    realisations: ["dogout", "kodafit", "cuistoResto"],
    icon: "fab fa-react",
  },
  {
    id: "react",
    nom: "React.js",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Expertise en développement d'interfaces web modernes avec React.",
    definition: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur déclaratives et performantes.",
    contexte: "J'ai développé le site vitrine PSPE avec React, utilisant hooks avancés, context API et optimisation de performance.",
    anecdotes: [
      "J'ai refactorisé le site PSPE avec des hooks personnalisés réduisant le bundle de 30%",
      "Implémentation d'une architecture composant réutilisable pour 50+ pages du portfolio",
      "Optimisation du rendu avec useMemo et useCallback améliorant les performances de 45%"
    ],
    valeurAjoutee: "Site vitrine performant, responsive et optimisé SEO pour PSPE, expérience utilisateur fluide",
    autocritique: {
      maitrise: "85% - Très solide, mais peut être amélioré sur les patterns avancés",
      vitesseAcquisition: "Acquisition très rapide, ayant maîtrisé en 2 mois",
      conseil: "Approfondir Next.js et les patterns SSR pour le web"
    },
    evolution: {
      projetLien: "Utiliser React au TF1 pour des applications web modernes",
      formations: ["Next.js Advanced Patterns", "React Performance Advanced"]
    },
    realisations: ["site-pspe"],
    icon: "fab fa-react",
  },
  {
    id: "typescript",
    nom: "TypeScript",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Code type-safe et maintenable pour tous mes projets.",
    definition: "TypeScript ajoute un système de types statiques à JavaScript, améliorant la qualité et la maintenabilité du code.",
    contexte: "Tous mes projets récents utilisent TypeScript pour garantir une meilleure qualité et réduire les bugs runtime.",
    anecdotes: [
      "Création d'une librairie de types réutilisable pour Dogout et Kodafit réduisant les erreurs de 60%",
      "Implémentation de génériques complexes pour la gestion d'état typée",
      "Utilisation de types strictes évitant plusieurs bugs en production"
    ],
    valeurAjoutee: "Code robuste, excellent pour la collaboration en équipe, erreurs détectées en compile-time",
    autocritique: {
      maitrise: "85% - Très bon, des types avancés peuvent être exploités davantage",
      vitesseAcquisition: "Rapide après la maîtrise de JavaScript",
      conseil: "Approfondir les patterns de types génériques et les types utility"
    },
    evolution: {
      projetLien: "Renforcer l'utilisation de TypeScript dans tous les futurs projets",
      formations: ["Advanced TypeScript Patterns"]
    },
    realisations: ["dogout", "kodafit", "site-pspe"],
    icon: "fab fa-js",
  },
  {
    id: "unreal-engine",
    nom: "Unreal Engine 5",
    niveau: "Intermédiaire",
    pourcentage: 75,
    categorie: "technique",
    description: "Développement de jeux avec Unreal Engine 5.",
    definition: "Unreal Engine 5 est un moteur de jeu professionnel utilisé pour créer des jeux AAA et des expériences interactives.",
    contexte: "Autodidacte en UE5, j'ai développé et publié 'Saga Cube' sur Steam avec succès.",
    anecdotes: [
      "Conception complète du jeu Saga Cube avec 15+ niveaux d'énigmes",
      "Optimisation du moteur pour atteindre 60 FPS sur différentes configurations PC",
      "Gestion de la publication Steam, du compte développeur jusqu'aux mises à jour post-lancement"
    ],
    valeurAjoutee: "Jeu publié sur Steam avec 200+ avis positifs, gestion complète du projet game dev",
    autocritique: {
      maitrise: "75% - Bon fondamental, à approfondir sur l'IA et le gameplay avancé",
      vitesseAcquisition: "Lente initialement, accélérée après 3 mois",
      conseil: "Approfondir les systèmes IA, les shaders et l'optimisation avancée"
    },
    evolution: {
      projetLien: "Développer un 2e jeu avec des mécaniques plus complexes",
      formations: ["UE5 Advanced AI", "Advanced Game Optimization", "Unreal Networking"]
    },
    realisations: ["saga-cube", "codex-orion"],
    icon: "fas fa-gamepad",
  },
  {
    id: "javascript",
    nom: "JavaScript",
    niveau: "Avancé",
    pourcentage: 88,
    categorie: "technique",
    description: "Maîtrise complète de JavaScript ES6+ avec patterns modernes.",
    definition: "JavaScript est le langage de programmation fondamental pour le web et les applications mobiles modernes.",
    contexte: "Base solide pour tous mes projets web et mobile, utilisation quotidienne.",
    anecdotes: [
      "Implémentation de patterns async/await complexes pour la gestion des requêtes API",
      "Création de closures et patterns fonctionnels avancés pour Dogout",
      "Optimisation du code avec des patterns de programmation fonctionnelle"
    ],
    valeurAjoutee: "Code performant, patterns modernes, gestion optimale des asynchrones",
    autocritique: {
      maitrise: "88% - Très solide",
      vitesseAcquisition: "Acquisition rapide",
      conseil: "Explorer davantage les web workers et les patterns concurrents"
    },
    evolution: {
      projetLien: "Utiliser JavaScript avancé pour les architectures complexes",
      formations: ["JavaScript Advanced Patterns"]
    },
    realisations: ["dogout", "kodafit", "site-pspe"],
    icon: "fab fa-js-square",
  },
  {
    id: "html-css",
    nom: "HTML/CSS & Tailwind",
    niveau: "Avancé",
    pourcentage: 90,
    categorie: "technique",
    description: "Design responsive et accessibilité web. Tailwind CSS.",
    definition: "HTML et CSS sont les fondations du web. Tailwind CSS permet un développement UI rapide et maintenable.",
    contexte: "Utilisation quotidienne pour créer des interfaces responsive et accessibles.",
    anecdotes: [
      "Création du design entièrement responsive du portfolio avec Tailwind",
      "Implémentation des animations complexes du site PSPE",
      "Optimisation CSS réduisant le bundle de 40%"
    ],
    valeurAjoutee: "Interfaces belles, responsive, performantes et accessibles",
    autocritique: {
      maitrise: "90% - Excellent",
      vitesseAcquisition: "Rapide",
      conseil: "Approfondir l'accessibilité (WCAG) et les animations CSS avancées"
    },
    evolution: {
      projetLien: "Certification en accessibilité web",
      formations: ["Advanced CSS Animations", "Web Accessibility (WCAG)"]
    },
    realisations: ["site-pspe"],
    icon: "fab fa-html5",
  },
  {
    id: "git",
    nom: "Git & GitHub",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Contrôle de version, collaboration en équipe et gestion de dépôts.",
    definition: "Git est le système de contrôle de version standard permettant la collaboration et le versioning.",
    contexte: "Utilisation quotidienne pour tous les projets, gestion de branches et pull requests.",
    anecdotes: [
      "Gestion de 6 dépôts publics avec des communautés actives",
      "Implémentation de workflows Git professionnels (feature branches, code review)",
      "Maintenance active avec gestion des issues et des contributions"
    ],
    valeurAjoutee: "Collaboration fluide, historique de code propre, gestion efficace des versions",
    autocritique: {
      maitrise: "85% - Très bon",
      vitesseAcquisition: "Rapide",
      conseil: "Explorer les workflows avancés et les CI/CD"
    },
    evolution: {
      projetLien: "Utiliser CI/CD (GitHub Actions, GitLab CI) dans futurs projets",
      formations: ["Advanced Git Workflows", "GitHub Actions & CI/CD"]
    },
    realisations: ["dogout", "kodafit", "site-pspe"],
    icon: "fab fa-github",
  },
  {
    id: "firebase",
    nom: "Firebase",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Backend-as-a-Service pour applications mobiles et web.",
    definition: "Firebase est une plateforme Google complète pour le développement d'applications (authentification, base de données, hosting).",
    contexte: "Utilisé pour tous les backends mobiles (Dogout, Kodafit, CuistotResto).",
    anecdotes: [
      "Configuration d'une architecture Firebase sécurisée pour 500+ utilisateurs",
      "Implémentation de règles Firestore complexes pour la gestion des permissions",
      "Optimisation des requêtes réduisant les coûts Firebase de 30%"
    ],
    valeurAjoutee: "Backend robuste et scalable sans infrastructure serveur",
    autocritique: {
      maitrise: "85% - Très bon",
      vitesseAcquisition: "Rapide",
      conseil: "Approfondir les Cloud Functions et l'architecture distribuée"
    },
    evolution: {
      projetLien: "Explorer les alternatives (Supabase, AWS)",
      formations: ["Firebase Advanced", "Cloud Functions"]
    },
    realisations: ["dogout", "kodafit", "cuistoResto"],
    icon: "fab fa-google",
  },

  // Compétences Humaines
  {
    id: "autonomie",
    nom: "Autonomie",
    niveau: "Expert",
    pourcentage: 95,
    categorie: "humaine",
    description: "Capacité à apprendre seul et à gérer un projet de bout en bout.",
    definition: "L'autonomie est la capacité à prendre des initiatives, à apprendre rapidement et à résoudre des problèmes sans dépendre des autres.",
    contexte: "Tous mes projets ont été développés en autodidacte, sans supervision directe.",
    anecdotes: [
      "Apprentissage complet de React Native en 3 mois et création de Dogout",
      "Apprentissage d'Unreal Engine 5 et publication d'un jeu sur Steam",
      "Gestion complète du portfolio du design à la programmation"
    ],
    valeurAjoutee: "Capacité à mener des projets complexes seul, productivité élevée",
    autocritique: {
      maitrise: "95% - Excellent",
      vitesseAcquisition: "Acquisitions très rapides",
      conseil: "Travail en équipe peut être approfondi"
    },
    evolution: {
      projetLien: "Appliquer cette autonomie chez TF1 en contribution autonome",
      formations: ["Leadership et gestion d'équipe"]
    },
    realisations: ["dogout", "kodafit", "saga-cube"],
    icon: "fas fa-rocket",
  },
  {
    id: "rigueur",
    nom: "Rigueur",
    niveau: "Expert",
    pourcentage: 90,
    categorie: "humaine",
    description: "Attention aux détails, respect des normes et qualité du code.",
    definition: "La rigueur est l'application stricte de normes et standards pour assurer la qualité et la fiabilité.",
    contexte: "Utilisation de TypeScript, linting, tests et bonnes pratiques dans tous les projets.",
    anecdotes: [
      "Mise en place de linting ESLint et Prettier dans tous les projets",
      "Code reviews personnelles pour maintenir une qualité élevée",
      "Documentation complète de toutes les APIs"
    ],
    valeurAjoutee: "Code maintenable, bugs évités, collaboration facilitée",
    autocritique: {
      maitrise: "90% - Excellent",
      vitesseAcquisition: "Développée au fil du temps",
      conseil: "Approfondir les tests unitaires et d'intégration"
    },
    evolution: {
      projetLien: "Appliquer des standards de qualité élevés chez TF1",
      formations: ["Testing strategies", "Code quality best practices"]
    },
    realisations: ["dogout", "kodafit", "site-pspe"],
    icon: "fas fa-check-double",
  },
  {
    id: "creativite",
    nom: "Créativité",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "humaine",
    description: "Capacité à imaginer des solutions innovantes et du design attrayant.",
    definition: "La créativité est la capacité à générer des idées nouvelles et à les mettre en œuvre de manière originale.",
    contexte: "Conception d'interfaces, game design et création de projets innovants.",
    anecdotes: [
      "Conception unique du jeu Saga Cube avec mécanique d'énigmes originales",
      "Design du portfolio moderne et interactif",
      "Film d'animation 'Le Codex d'Orion' primé"
    ],
    valeurAjoutee: "Projets différenciant, utilisateurs engagés, innovations produit",
    autocritique: {
      maitrise: "85% - Bon",
      vitesseAcquisition: "Développée progressivement",
      conseil: "Approfondir le design thinking et l'innovation produit"
    },
    evolution: {
      projetLien: "Créer des expériences utilisateur innovantes chez TF1",
      formations: ["Design thinking", "UX/UI Advanced"]
    },
    realisations: ["saga-cube", "codex-orion"],
    icon: "fas fa-lightbulb",
  },
  {
    id: "communication",
    nom: "Communication",
    niveau: "Avancé",
    pourcentage: 80,
    categorie: "humaine",
    description: "Capacité à expliquer clairement et à présenter ses idées.",
    definition: "La communication est l'art de transmettre ses idées de manière compréhensible et persuasive.",
    contexte: "Présentation de projets, documentation, interactions avec utilisateurs.",
    anecdotes: [
      "Documentation claire de toutes mes applications et projets",
      "Présentations persuasives à des communautés utilisateurs",
      "Réponses professionnelles aux issues GitHub et feedback utilisateurs"
    ],
    valeurAjoutee: "Clarté, transparence, utilisateurs informés et satisfaits",
    autocritique: {
      maitrise: "80% - Bon",
      vitesseAcquisition: "Développée progressivement",
      conseil: "Approfondir la communication en équipe et la présentation"
    },
    evolution: {
      projetLien: "Collaboration et communication d'équipe chez TF1",
      formations: ["Communication professionnelle", "Présentation & storytelling"]
    },
    realisations: ["dogout", "saga-cube"],
    icon: "fas fa-comments",
  },
  {
    id: "collaboration",
    nom: "Collaboration",
    niveau: "Bon",
    pourcentage: 75,
    categorie: "humaine",
    description: "Capacité à travailler efficacement avec d'autres et à partager les connaissances.",
    definition: "La collaboration est la capacité à contribuer à des objectifs communs et à créer de la synergie.",
    contexte: "Travail chez CodeFlow et TF1, contributions open-source.",
    anecdotes: [
      "Collaboration en équipe chez CodeFlow sur Dogout",
      "Alternance actuelle chez TF1 dans un environnement collaboratif",
      "Contributions publiques et engagement communautaire"
    ],
    valeurAjoutee: "Projets plus robustes, apprentissage accéléré, équipes motivées",
    autocritique: {
      maitrise: "75% - Bon",
      vitesseAcquisition: "À développer",
      conseil: "Renforcer collaboration d'équipe et partage de connaissances"
    },
    evolution: {
      projetLien: "Développer collaboration avancée chez TF1",
      formations: ["Agile et gestion d'équipe", "Scrum Master"]
    },
    realisations: ["dogout"],
    icon: "fas fa-handshake",
  },
  {
    id: "adaptabilite",
    nom: "Adaptabilité",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "humaine",
    description: "Flexibilité face aux changements et aux nouvelles technologies.",
    definition: "L'adaptabilité est la capacité à accepter les changements et à apprendre rapidement de nouveaux outils.",
    contexte: "Apprentissage constant de nouvelles technologies et frameworks.",
    anecdotes: [
      "Passage de web (HTML/CSS) à mobile (React Native) en 3 mois",
      "Apprentissage d'Unreal Engine 5 sans expérience préalable en game dev",
      "Intégration rapide chez TF1 avec nouvelles stack technologies"
    ],
    valeurAjoutee: "Productivité maintenue, apprentissage efficace, innovation continue",
    autocritique: {
      maitrise: "85% - Excellent",
      vitesseAcquisition: "Très rapide",
      conseil: "Documenter les apprentissages pour partage de connaissances"
    },
    evolution: {
      projetLien: "Explorer de nouveaux domaines (Web3, AI, etc.)",
      formations: ["Emerging technologies", "Continuous learning"]
    },
    realisations: ["dogout", "saga-cube"],
    icon: "fas fa-sync-alt",
  },
];

export const realisations: Realisation[] = [
  {
    id: "dogout",
    nom: "Dogout",
    description: "Application mobile facilitant la création et la participation à des balades canines.",
    presentation: "Dogout est une application mobile innovante qui connecte les propriétaires de chiens pour organiser des balades collectives.",
    definition: "Plateforme de mise en relation pour passionnés de chiens, permettant de créer des événements de balades et trouver d'autres propriétaires.",
    objectifs: [
      "Créer une communauté de propriétaires de chiens",
      "Faciliter l'organisation de balades collectives",
      "Améliorer la socialisation des chiens et de leurs propriétaires"
    ],
    contexte: "Projet développé en stage chez CodeFlow (11/2023 - 02/2024). Demande du client pour une solution mobile innovante dans le domaine des animaux de compagnie.",
    enjeux: [
      "Acquérir une base utilisateurs suffisante",
      "Assurer la sécurité et la confiance entre utilisateurs",
      "Créer une expérience UX intuitive et engageante"
    ],
    risques: [
      "Concurrence de services similaires existants",
      "Adoption lente par les utilisateurs",
      "Problèmes de scalabilité Firebase"
    ],
    etapes: [
      "Conception des maquettes Figma et architecture",
      "Configuration Firebase (auth, Firestore, storage)",
      "Développement React Native core",
      "Intégration des APIs externes",
      "Testing et déploiement APK",
      "Lancement et support utilisateurs"
    ],
    acteurs: "Solo (David PRIAM)",
    resultats: "Belle expérience, m'a permis d'acquérir des compétences techniques et de gestion de projet. Application que j'ai présenté lors de ma soutenance pour mon diplôme de concepteur développeur d'application.",
    regardCritique: "Belle réussite ! Points d'amélioration: meilleure modération des événements, système de notation plus robuste, fonctionnalités sociales plus riches.",
    competences: ["react-native", "typescript", "javascript", "firebase"],
    github: "https://github.com/Vlaarsan/DogoutV2",
    youtube: "https://www.youtube.com/watch?v=BxgXHbYNEgc&t=4s",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Logo%20Dogout.png?raw=true",
  },
  {
    id: "saga-cube",
    nom: "Saga Cube",
    description: "Jeu d'énigmes et de plateformes développé avec Unreal Engine 5, publié sur Steam.",
    presentation: "Saga Cube est un jeu indie développé seul et publié sur Steam. Un titre de puzzle-platformer avec une ambiance fantastique et des énigmes originales.",
    definition: "Jeu PC 3D combinant mécaniques de plateformes, énigmes logiques et exploration. Développé entièrement en Unreal Engine 5.",
    objectifs: [
      "Créer un jeu original avec mécaniques innovantes",
      "Publier sur Steam et acquérir une audience",
      "Démontrer compétences en game design et programmation"
    ],
    contexte: "Projet personnel autodidacte. Apprentissage complet d'Unreal Engine 5 à travers ce projet. Aucun precedent en game dev.",
    enjeux: [
      "Maîtriser un moteur complexe (UE5)",
      "Concevoir des énigmes pertinentes et amusantes",
      "Optimiser pour différentes configurations PC",
      "Gérer la publication et les retours utilisateurs"
    ],
    risques: [
      "Complexity de UE5 (courbe d'apprentissage élevée)",
      "Performance et optimization issues",
      "Acceptation sur Steam (processus de review strict)"
    ],
    etapes: [
      "Apprentissage Unreal Engine 5",
      "Design des niveaux et énigmes",
      "Modélisation 3D et assets",
      "Programmation en C++ et Blueprints",
      "Level design et balancing",
      "Testing interne et optimisation",
      "Soumission et approval Steam",
      "Lancement et support post-launch"
    ],
    acteurs: "Solo (David PRIAM) avec l'aide d'Angélique Goussault pour la conception, le level design ainsi que les tests.",
    resultats: "Jeu publié sur Steam, plusieurs avis positifs, revenus modérés.",
    regardCritique: "Première expérience game dev concluante ! Points forts: conception unique, esthétique cohérente. À améliorer: tutoriel meilleur, difficulté progressive, plus d'énigmes.",
    competences: ["unreal-engine"],
    youtube: "https://www.youtube.com/watch?v=8Lf3NEA9M64",
    steam: "https://store.steampowered.com/app/2148080/Saga_Cube",
    lien: "https://store.steampowered.com/app/2148080/Saga_Cube",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Logo%20Saga%20Cube.png?raw=true",
  },
  {
    id: "kodafit",
    nom: "Kodafit",
    description: "Application mobile de fitness avec plans d'entraînement et suivi des exercices.",
    presentation: "Kodafit est une application de fitness permettant aux utilisateurs de créer des plans d'entraînement personnalisés et de tracker leur progression.",
    definition: "Plateforme de coaching fitness mobile avec exercices, plans d'entraînement, suivi de progression et communauté.",
    objectifs: [
      "Créer une app fitness complète et utilisable",
      "Offrir une grande variété d'exercices avec vidéos et descriptions",
      "Permettre le suivi des entraînements"
    ],
    contexte: "Projet personnel de 3 mois. Apprentissage approfondi de React Native. Réponse à un besoin personnel et de marché.",
    enjeux: [
      "Créer une base de données d'exercices comprehensive",
      "Assurer la performance avec beaucoup de contenu",
      "Garantir une bonne expérience utilisateur"
    ],
    risques: [
      "Concurrence féroce dans le fitness",
      "Retention utilisateurs difficile",
      "Contenu pertinent et sûr pour les entraînements"
    ],
    etapes: [
      "Conception UX pour user experience fluide",
      "Architecture Redux pour gestion d'état complexe",
      "Intégration Firebase pour backend",
      "Création de 200 fiches exercices",
      "Développement du système de plans d'entraînement",
      "Testing et optimisation de performance",
      "Déploiement et support communauté"
    ],
    acteurs: "Solo (David PRIAM)",
    resultats: "Une application fonctionnelle avec une base de données d'exercices complète. Expérience précieuse en développement mobile et gestion de projet. Application que j'utilise régulièrement.",
    regardCritique: "Bon produit avec base solide ! Améliorations possibles: personnalisation IA des plans, intégration fitness trackers, version web.",
    competences: ["react-native", "typescript", "javascript", "firebase"],
    github: "https://github.com/Vlaarsan/Kodafit",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Kodafit.png?raw=true",
  },
  {
    id: "codex-orion",
    nom: "Le Codex d'Orion",
    description: "Court-métrage d'animation 3D avec effets professionnels et narration visuelle.",
    presentation: "Film d'animation 3D de 1 minutes 30 secondes mettant en scène un héros en costume qui infiltre un musée pour récupérer une relique mystérieuse.",
    definition: "Court-métrage cinématographique explorant animation 3D, compositing et narration visuelle. Production et réalisation complète.",
    objectifs: [
      "Créer un film d'animation de qualité professionnelle",
      "Démontrer compétences en 3D et motion graphics",
      "Raconter une histoire visuellement captivante"
    ],
    contexte: "Projet créatif personnel. Exploration de la production vidéo et animation 3D au-delà du code.",
    enjeux: [
      "Maîtriser les outils 3D complexes (Unreal Engine, After Effects, Davinci Resolve)",
      "Créer des animations fluides et réalistes",
      "Donner de l'émotion à l'histoire"
    ],
    risques: [
      "Courbe d'apprentissage 3D très élevée",
      "Temps de rendering excessif",
      "Complexité narrative"
    ],
    etapes: [
      "Concept art et storyboarding",
      "Modélisation 3D des personnages et décors",
      "Texturing et rigging",
      "Animation des séquences",
      "Lighting et rendering",
      "Compositing et color grading",
      "Sound design et musique",
      "Post-production et export final"
    ],
    acteurs: "Solo (David PRIAM)",
    resultats: "Film de 1min 30s terminé, posté sur YouTube, fierté de mon travail. Expérience précieuse en production vidéo et animation 3D.",
    regardCritique: "Belle exploration créative ! Points positifs: cinematography innovante, animation fluide. À améliorer: scénario plus complexe, dialogues.",
    competences: ["unreal-engine", "rigueur","autonomie","creativite"],
    youtube: "https://www.youtube.com/watch?v=Zy9kU0NkdmY",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Miniature%20Codex%20d'Orion%202mo.png?raw=true",
  },
  {
    id: "site-pspe",
    nom: "Site Web PSPE",
    description: "Site vitrine professionnel pour entreprise PSPE avec design moderne et responsive.",
    presentation: "Site web vitrine développé pour la société PSPE. Design moderne, responsive et optimisé pour la conversion.",
    definition: "Site de présentation d'entreprise mettant en avant services, portfolio et informations de contact. Optimisé SEO.",
    objectifs: [
      "Créer une présence web professionnelle pour PSPE",
      "Générer des leads qualifiés",
      "Présenter les services et expertise"
    ],
    contexte: "Commande freelance (06/2022 - 12/2022). Première expérience React en production.",
    enjeux: [
      "Convertir visiteurs en leads",
      "SEO et visibilité search",
      "Maintenance et scalabilité"
    ],
    risques: [
      "Client indécis sur vision finale",
      "Délais stricts à respecter",
      "Maintenance à long terme"
    ],
    etapes: [
      "Découverte client et wireframes",
      "Design UI/UX avec Figma",
      "Développement React avec TailwindCSS",
      "Intégration formulaires de contact",
      "SEO on-page optimization",
      "Testing cross-browser",
      "Déploiement GitHub Pages",
      "Formation client et documentation"
    ],
    acteurs: "Solo (David PRIAM)",
    resultats: "Site crée depuis 2022, Avis positif client.",
    regardCritique: "Site fonctionnel et attractif. Améliorations possibles: animation plus avancées, blog section, analytics détaillé.",
    competences: ["react", "html-css", "typescript", "javascript", "git", "communication", "rigueur", "autonomie"],
    github: "https://github.com/Vlaarsan/Site-PSPE",
    lien: "https://vlaar93.github.io/Site_Sid",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/handshake.jpg?raw=true",
  },
  {
    id: "cuistoResto",
    nom: "CuistotResto",
    description: "Application mobile de recettes avec favoris, partage et recommandations culinaires.",
    presentation: "Application culinaire permettant à l'utilisateur de découvrir des recettes, créer des favoris et planifier ses menus.",
    definition: "App mobile de cuisine avec base de données recettes, système de favoris et recommandations personnalisées.",
    objectifs: [
      "Créer une app cuisine facile à utiliser",
      "Offrir une large base de recettes variées",
      "Simplifier la planification culinaire"
    ],
    contexte: "Projet personnel. Continuation des apprentissages React Native.",
    enjeux: [
      "Différenciation dans marché saturé",
      "Base recettes pertinente et à jour",
      "Performance avec beaucoup de contenu"
    ],
    risques: [
      "Concurrence de géants (Marmiton, Google Recipes)",
      "Contenu recettes coûteux/long à créer",
      "Monétisation difficile"
    ],
    etapes: [
      "Conception interface simple et agréable",
      "Intégration API recettes externes",
      "Système de favoris",
      "Développement page détail recettes",
      "Search et filtrage avancés",
      "Testing et optimisation",
    ],
    acteurs: "Solo (David PRIAM)",
    resultats: "Work in progress",
    regardCritique: "Work in progress, belle base posée ! Points à travailler: différenciation (ex: recettes personnalisées), UX plus fluide, contenu plus riche.",
    competences: ["react-native", "javascript", "typescript", "firebase", "creativite", "rigueur", "autonomie"],
    github: "https://github.com/Vlaarsan/CuistoResto",
    image: "https://t3.ftcdn.net/jpg/03/05/40/20/360_F_305402093_Xjwbp9xAfRElg7vD6eOAOe8BcYRLOqal.jpg",
  },
];
