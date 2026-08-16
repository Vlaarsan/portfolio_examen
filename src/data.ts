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
  technologies?: string[];
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

export interface Experience {
  id: string;
  poste: string;
  entreprise: string;
  periode: string;
  dateDebut: string; // AAAA-MM, utilisé pour le tri chronologique
  type: string; // Alternance, Stage, Freelance...
  lieu: string;
  logo?: string;
  lienEntreprise?: string;
  resume: string;
  contexte: string;
  missions: string[];
  technologies: string[];
  competencesAcquises: string[]; // ids référençant "competences"
  resultats: string;
  anecdote: string;
  icon: string;
  color: string;
}

export interface Formation {
  id: string;
  titre: string;
  etablissement: string;
  periode: string;
  dateDebut: string; // AAAA-MM, utilisé pour le tri chronologique
  niveau: string;
  lieu: string;
  logo?: string;
  lienEtablissement?: string;
  resume: string;
  contexte: string;
  programme: string[];
  competencesAcquises: string[]; // ids référençant "competences"
  resultats: string;
  anecdote: string;
  icon: string;
  color: string;
}

export const competences: Competence[] = [
  // Compétences Techniques
  {
    id: "html-css",
    nom: "HTML/CSS & Tailwind",
    niveau: "Avancé",
    pourcentage: 90,
    categorie: "technique",
    description: "Design responsive et accessibilité web. Tailwind CSS.",
    definition: "HTML et CSS constituent les fondations de toute interface web : structure sémantique du contenu d'un côté, mise en forme visuelle de l'autre. Tailwind CSS est un framework CSS dit \"utility-first\" qui permet de construire une interface directement dans le balisage grâce à des classes utilitaires, sans écrire de feuille de style séparée, tout en conservant un design cohérent grâce à un système de tokens (espacements, couleurs, typographies).",
    contexte: "J'utilise HTML/CSS et Tailwind de façon ponctuelle, principalement pour des projets web personnels ou freelance, en complément de mon activité principale sur mobile. Ce portfolio ainsi que le site vitrine PSPE ont été entièrement construits avec cette stack.",
    anecdotes: [
      "J'ai conçu l'intégralité du design responsive de ce portfolio avec Tailwind CSS, en partant d'une page blanche jusqu'à un rendu cohérent sur mobile, tablette et desktop, en réfléchissant à chaque breakpoint plutôt qu'en adaptant une version desktop après coup.",
      "J'ai mis en place les animations et transitions CSS du site (dégradés animés, effets de survol, apparitions progressives) afin de donner une impression de fluidité et de modernité, tout en gardant des temps de chargement réduits.",
      "J'ai recommencé ce portfolio à deux reprises avec des stacks techniques différentes avant de me fixer sur Tailwind. Ce choix, motivé par sa rapidité de développement et sa flexibilité, m'a permis d'aller beaucoup plus loin dans le détail du design que ce que j'avais imaginé au départ, sans jamais être bloqué par des feuilles de style qui deviennent ingérables au fil du temps."
    ],
    valeurAjoutee: "Cette compétence me permet de livrer des interfaces à la fois esthétiques, responsives, performantes et accessibles, sans dépendre d'un designer ou d'un intégrateur pour les projets de petite ou moyenne envergure, ce qui accélère considérablement le cycle de développement de bout en bout.",
    autocritique: {
      maitrise: "Excellente sur les fondamentaux (flexbox, grid, responsive design) et sur l'écosystème Tailwind, que j'utilise désormais avec beaucoup d'aisance et de rapidité.",
      vitesseAcquisition: "Rapide : Tailwind repose sur des concepts CSS classiques que je maîtrisais déjà, la prise en main de la syntaxe utilitaire n'a demandé que quelques jours de pratique.",
      conseil: "Je gagnerais à approfondir l'accessibilité web (normes WCAG) de façon plus systématique, ainsi que les animations CSS avancées (keyframes complexes, scroll-driven animations) pour aller encore plus loin dans le raffinement visuel."
    },
    evolution: {
      projetLien: "Ce portfolio, tout comme le site vitrine PSPE, a été entièrement conçu et intégré avec HTML/CSS et Tailwind, ce qui en fait une vitrine directe de cette compétence.",
      formations: ["Formation \"Advanced CSS Animations\"", "Formation \"Web Accessibility (WCAG 2.1)\""]
    },
    realisations: ["site-pspe"],
    icon: "fab fa-html5",
  },
  {
    id: "react",
    nom: "React.js",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Expertise en développement d'interfaces web modernes avec React.",
    definition: "React est une bibliothèque JavaScript développée par Meta qui permet de construire des interfaces utilisateur déclaratives, découpées en composants réutilisables. Elle repose sur un DOM virtuel qui optimise les mises à jour de l'affichage et sur un système de hooks qui structure la gestion d'état et des effets de bord.",
    contexte: "J'ai développé ce portfolio de A à Z avec React, ce qui m'a permis de mettre en pratique sur le web des réflexes que j'ai principalement acquis côté mobile avec React Native. Le web n'est pas mon terrain de prédilection, mais la proximité entre React et React Native me permet d'y être rapidement productif.",
    anecdotes: [
      "Je me suis entraîné à React en réalisant plusieurs petits projets personnels ludiques (un pierre-feuille-ciseaux, un jeu de memory, un compteur avec état partagé) pour bien intégrer les concepts de props, d'état local et de cycle de vie des composants avant de m'attaquer à un projet plus ambitieux.",
      "J'ai mis en place une architecture de composants réutilisables pour l'ensemble des pages de ce portfolio (cartes de compétences, cartes de réalisations, frises chronologiques, navigation) afin d'éviter la duplication de code et de faciliter les évolutions futures.",
      "Chez TF1, en travaillant côté React Native, j'ai appris à me familiariser avec les optimisations de rendu comme useMemo et useCallback, des réflexes que j'ai directement réutilisés sur ce portfolio pour éviter les re-rendus inutiles des listes de compétences et de réalisations."
    ],
    valeurAjoutee: "Grâce à React, je suis capable de concevoir des interfaces web modernes et maintenables même si ce n'est pas mon domaine de prédilection au quotidien : je suis parfaitement à l'aise pour reprendre un projet web, comprendre son architecture et y contribuer efficacement.",
    autocritique: {
      maitrise: "Solide sur les fondamentaux et les patterns courants (composition, context API, hooks personnalisés), avec encore une marge de progression sur des patterns plus avancés (render props, compound components).",
      vitesseAcquisition: "Assez rapide, en particulier après avoir déjà maîtrisé React Native : la logique de composants et de hooks est directement transposable d'un environnement à l'autre.",
      conseil: "Je souhaite approfondir Next.js (rendu serveur, routing par fichiers) ainsi que les optimisations de performance côté web, deux sujets que je n'ai pas encore eu l'occasion de pratiquer en conditions réelles."
    },
    evolution: {
      projetLien: "J'ai utilisé React pour concevoir l'intégralité de ce portfolio, de la structure des routes jusqu'aux composants d'interface.",
      formations: ["Formation \"Next.js Advanced Patterns\"", "Formation \"React Performance Advanced\""]
    },
    realisations: [],
    icon: "fab fa-react",
  },
  {
    id: "react-native",
    nom: "React Native",
    niveau: "Maîtrisé",
    pourcentage: 90,
    categorie: "technique",
    description: "Développement d'applications mobiles cross-platform iOS, Android et univers TV connectées.",
    definition: "React Native est un framework développé par Meta qui permet de créer des applications mobiles et TV réellement natives (et non de simples web-views) à partir d'une seule base de code écrite en JavaScript/TypeScript et React. Sur les plateformes TV (Android TV, Fire TV, tvOS, ...), il impose des contraintes supplémentaires spécifiques : gestion du focus à la télécommande, navigation au D-pad, interfaces lisibles à distance (\"10-foot UI\").",
    contexte: "React Native est mon cœur de métier. C'est la technologie que j'utilise au quotidien en alternance chez TF1, où je développe des fonctionnalités pour l'application TF1+ sur les environnements TV connectées, ainsi que sur mes trois applications mobiles personnelles (Dogout, Kodafit, CuistoResto).",
    anecdotes: [
      "Lors du développement de Dogout, j'ai intégré Firebase pour l'authentification des utilisateurs, en réfléchissant particulièrement à la sécurisation des flux (validation des tokens, règles d'accès) plutôt qu'à une simple implémentation fonctionnelle.",
      "J'ai conçu l'architecture complète de Kodafit avec une gestion d'état optimisée, permettant d'afficher et de filtrer plus de 200 fiches d'exercices sans ralentissement perceptible, même sur des appareils d'entrée de gamme.",
      "J'ai eu, comme beaucoup de développeurs je pense, des difficultés à appréhender Redux à mes débuts. Aujourd'hui encore, je ne prétends pas le maîtriser à 100 %, mais je sais désormais quand il est pertinent de l'utiliser et quand un état local ou le Context API suffit amplement.",
      "À mon arrivée chez TF1, j'ai découvert une base de code nettement plus complexe et structurée que mes projets personnels (architecture modulaire, conventions d'équipe, tests, CI/CD). J'ai dû m'adapter rapidement pour comprendre cette architecture et devenir autonome sur mes tickets en quelques semaines seulement.",
      "Travailler sur des interfaces destinées à la télévision m'a obligé à repenser des réflexes acquis sur mobile : sur TV, l'utilisateur ne touche pas l'écran, il navigue à la télécommande. J'ai donc appris à gérer finement le focus visuel entre les éléments, à anticiper les déplacements haut/bas/gauche/droite du curseur, et à concevoir des grilles de contenus lisibles à plusieurs mètres de l'écran."
    ],
    valeurAjoutee: "J'ai participé à la création de trois applications mobiles en production et je contribue aujourd'hui à une application diffusée à grande échelle sur de multiples environnements TV. Cela m'a donné une expérience complète du cycle de vie d'un produit : conception, développement, tests, déploiement et maintenance, sur des contextes aussi différents qu'un projet solo et une équipe de grande entreprise.",
    autocritique: {
      maitrise: "Avancée, je suis capable de gérer des projets d'envergure de bout en bout, de la conception de l'architecture jusqu'au déploiement, et je commence à être à l'aise sur les problématiques spécifiques aux interfaces TV.",
      vitesseAcquisition: "Progressive et constante, construite projet après projet plutôt que d'un seul bloc, ce qui m'a permis de vraiment ancrer chaque nouvelle notion avant de passer à la suivante.",
      conseil: "Je veux continuer à approfondir les animations complexes et les performances sur les appareils bas de gamme (fréquents dans le monde de la TV connectée), ainsi qu'explorer davantage le lien entre React Native et le développement de jeux mobiles."
    },
    evolution: {
      projetLien: "J'utilise React Native quotidiennement dans le cadre de mon alternance chez TF1, sur l'application TF1+ pour les environnements TV connectées.",
      formations: ["Formation \"React Native Advanced Patterns\"", "Formation \"Firebase Advanced Architecture\"", "Formation \"React Native Performance Optimization\""]
    },
    realisations: ["dogout", "kodafit", "cuistoResto"],
    icon: "fab fa-react",
  },
  {
    id: "javascript",
    nom: "JavaScript",
    niveau: "Maîtrisé",
    pourcentage: 88,
    categorie: "technique",
    description: "Maîtrise complète de JavaScript ES6+ avec patterns modernes.",
    definition: "JavaScript est le langage de programmation qui fait tourner la quasi-totalité du web et, via React Native, une grande partie des applications mobiles modernes. Sa maîtrise inclut la manipulation asynchrone (promesses, async/await), la programmation fonctionnelle (closures, fonctions d'ordre supérieur) et une bonne compréhension de son moteur d'exécution.",
    contexte: "JavaScript est le socle de tous mes projets, qu'ils soient web ou mobile. Je l'utilise quotidiennement, que ce soit chez TF1, sur mes projets personnels ou pour ce portfolio, avant même d'y ajouter la couche de typage de TypeScript.",
    anecdotes: [
      "J'ai implémenté des patterns async/await imbriqués pour gérer des séquences d'appels API dépendants les uns des autres (récupération d'un profil utilisateur, puis de ses données associées, puis mise en cache) tout en gérant proprement les erreurs à chaque étape.",
      "J'ai utilisé des closures et des patterns fonctionnels avancés dans Dogout, notamment pour créer des hooks personnalisés réutilisables qui encapsulent une logique métier complexe (gestion des invitations aux balades, calcul de disponibilité).",
      "J'ai pris l'habitude d'optimiser mon code avec des patterns de programmation fonctionnelle (fonctions pures, immutabilité des données) qui, au-delà de la performance, rendent le code beaucoup plus simple à tester et à faire évoluer."
    ],
    valeurAjoutee: "Cette maîtrise se traduit par un code performant, écrit avec des patterns modernes et une gestion propre de l'asynchrone, ce qui limite fortement les bugs liés aux effets de bord ou aux appels réseau mal séquencés.",
    autocritique: {
      maitrise: "Très solide sur l'ensemble du langage moderne (ES6+), aussi bien sur la syntaxe que sur les subtilités du moteur (event loop, closures, prototypes).",
      vitesseAcquisition: "Rapide, car c'est le tout premier langage sur lequel j'ai construit mes bases de programmation, avant de me spécialiser.",
      conseil: "Je souhaite explorer davantage les possibilités offertes par les patterns concurrents (Web Workers, génération de flux de données) et les dernières évolutions du langage, que je ne pratique pas encore au quotidien."
    },
    evolution: {
      projetLien: "J'utilise JavaScript avancé dès que la complexité d'une fonctionnalité l'exige, que ce soit sur mes projets personnels ou professionnels.",
      formations: ["Formation \"JavaScript Advanced Patterns\""]
    },
    realisations: ["dogout", "kodafit", "site-pspe"],
    icon: "fab fa-js-square",
  },
  {
    id: "typescript",
    nom: "TypeScript",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Code type-safe et maintenable pour tous mes projets.",
    definition: "TypeScript est un sur-ensemble de JavaScript qui ajoute un système de typage statique. Il permet de détecter une grande partie des erreurs dès la compilation plutôt qu'à l'exécution, et rend le code auto-documenté grâce aux interfaces et aux types explicites, ce qui facilite énormément le travail en équipe.",
    contexte: "Tous mes projets récents, y compris ce portfolio, utilisent TypeScript pour garantir une meilleure qualité de code et réduire le nombre de bugs découverts en production plutôt qu'en développement.",
    anecdotes: [
      "Quand je suis arrivé chez TF1, TypeScript m'impressionnait presque : je le voyais comme une contrainte supplémentaire plutôt que comme un outil. J'ai rapidement compris que c'était en réalité un filet de sécurité puissant qui évite des bugs et améliore la maintenabilité du code sur le long terme.",
      "Depuis cette prise de conscience, j'ai décidé de l'utiliser systématiquement dans tous mes nouveaux projets, y compris personnels, là où j'aurais auparavant utilisé du JavaScript classique par simplicité apparente.",
      "On connaît tous ce moment où l'on termine de coder une fonctionnalité, fier du résultat, avant de voir apparaître une multitude de soulignements rouges dans l'éditeur : c'est exactement ce qui m'est arrivé à mes débuts avec TypeScript. Aujourd'hui, je ne pourrais plus m'en passer, car ces mêmes erreurs signalées en amont m'évitent des heures de débogage en aval."
    ],
    valeurAjoutee: "TypeScript me permet de produire un code robuste, particulièrement adapté au travail en équipe puisque les interfaces documentent implicitement les données manipulées, avec des erreurs détectées dès la compilation plutôt que découvertes par les utilisateurs.",
    autocritique: {
      maitrise: "Très bonne sur l'usage quotidien (interfaces, types génériques simples, typage des props et des réponses API) ; les types avancés (types conditionnels, mapped types) restent une piste de progression.",
      vitesseAcquisition: "Rapide dès lors que JavaScript est déjà maîtrisé, car TypeScript s'apprend par couches successives sans tout remettre en question.",
      conseil: "Je veux approfondir les patterns de types génériques avancés et les types utilitaires (Partial, Pick, Record, etc.) pour exploiter tout le potentiel du système de types sur des architectures plus complexes."
    },
    evolution: {
      projetLien: "J'ai utilisé TypeScript pour l'ensemble de mes projets récents, y compris pour la structure de données et les composants de ce portfolio.",
      formations: ["Formation \"Advanced TypeScript Patterns\""]
    },
    realisations: ["cuistoResto"],
    icon: "fab fa-js",
  },
  {
    id: "unreal-engine",
    nom: "Unreal Engine 5",
    niveau: "Bon fondamental",
    pourcentage: 75,
    categorie: "technique",
    description: "Développement de jeux vidéo et d'animation 3D avec Unreal Engine 5.",
    definition: "Unreal Engine 5 est un moteur de jeu professionnel développé par Epic Games, utilisé aussi bien pour des productions AAA que pour des expériences interactives indépendantes. Il combine un système visuel de programmation (Blueprints), du C++, et des outils avancés de rendu (Lumen, Nanite) permettant des rendus graphiques impressionnants avec un temps de développement réduit.",
    contexte: "Autodidacte sur Unreal Engine 5, je m'y suis formé entièrement seul, sans formation initiale en game design ni en 3D. J'ai développé et publié le jeu \"Saga Cube\" sur Steam, puis réutilisé ces compétences pour réaliser un court-métrage d'animation 3D, \"Le Codex d'Orion\".",
    anecdotes: [
      "J'ai conçu l'intégralité du jeu Saga Cube, de la première esquisse de niveau jusqu'aux dernières énigmes, en itérant constamment sur la difficulté et la lisibilité des mécaniques pour qu'un joueur non averti puisse comprendre chaque puzzle sans tutoriel explicite.",
      "J'ai travaillé l'optimisation du moteur pour obtenir un nombre de FPS acceptable sur des configurations PC très variées, ce qui m'a appris à surveiller les coûts de rendu (nombre de draw calls, résolution des textures, occlusion culling) plutôt que de me reposer uniquement sur la puissance de la machine de développement.",
      "J'ai géré la publication du jeu sur Steam de bout en bout : création du compte développeur, remplissage de la fiche produit, configuration du build, puis suivi et publication des mises à jour post-lancement en fonction des retours des joueurs."
    ],
    valeurAjoutee: "Ce projet a débouché sur un jeu réellement publié sur Steam, avec plusieurs avis positifs de joueurs, et m'a permis de démontrer ma capacité à gérer un projet de game development dans son intégralité, de la conception à la commercialisation.",
    autocritique: {
      maitrise: "Bonne sur les fondamentaux (Blueprints, level design, lighting de base, gestion de projet Unreal), avec une marge de progression significative sur l'intelligence artificielle des ennemis/PNJ et le gameplay avancé.",
      vitesseAcquisition: "Lente au départ, car Unreal Engine est un moteur particulièrement complexe avec une courbe d'apprentissage élevée, mais j'ai fait des progrès rapides une fois les bases posées, grâce à une pratique intensive.",
      conseil: "Je souhaite approfondir les systèmes d'intelligence artificielle de jeu (Behavior Trees), les shaders personnalisés, ainsi que les techniques avancées d'optimisation, en particulier sur les scènes riches en détails."
    },
    evolution: {
      projetLien: "Mon objectif est de développer un second jeu avec des mécaniques plus ambitieuses, en capitalisant sur les erreurs identifiées lors du développement de Saga Cube.",
      formations: ["Formation \"UE5 Advanced AI\"", "Formation \"Advanced Game Optimization\"", "Formation \"Unreal Networking\""]
    },
    realisations: ["saga-cube", "codex-orion"],
    icon: "fas fa-gamepad",
  },
  {
    id: "git",
    nom: "Git & GitHub",
    niveau: "Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Contrôle de version, collaboration en équipe et gestion de dépôts.",
    definition: "Git est le système de contrôle de version standard de l'industrie, qui permet de suivre l'historique des modifications d'un code source et de collaborer à plusieurs sans écraser le travail des autres. GitHub en est l'hébergeur le plus répandu, avec des outils de collaboration comme les pull requests et les revues de code.",
    contexte: "J'utilise Git quotidiennement sur l'ensemble de mes projets, aussi bien en solo que dans un contexte professionnel d'équipe chez TF1, où la rigueur sur les branches et les messages de commit est particulièrement suivie.",
    anecdotes: [
      "Je gère plusieurs dépôts publics sur GitHub et j'utilise Git de façon intensive chez TF1, avec des centaines de commits sur des branches de fonctionnalités suivies de revues de code par mes collègues.",
      "J'ai mis en place des workflows Git professionnels sur mes projets personnels (branches de fonctionnalités, conventions de nommage, messages de commit structurés) afin de me rapprocher des standards que j'ai découverts en entreprise.",
      "Je me souviens qu'au début, un simple rebase avec conflits déclenchait une vraie panique chez moi, de même qu'un git reset dont j'avais peur qu'il ne fasse perdre du code ou casse l'application. Avec la pratique, ces commandes sont devenues des réflexes que je maîtrise sereinement, y compris pour nettoyer un historique avant une pull request."
    ],
    valeurAjoutee: "Cette maîtrise me permet une collaboration fluide en équipe, un historique de code propre et compréhensible, et une gestion efficace des versions, ce qui limite les régressions et facilite la relecture par mes pairs.",
    autocritique: {
      maitrise: "Très bonne sur l'usage quotidien (branches, merges, rebases, résolution de conflits) et sur les bonnes pratiques de collaboration en équipe.",
      vitesseAcquisition: "Assez rapide une fois le modèle mental de Git compris (l'historique comme un graphe plutôt qu'une simple liste de sauvegardes), même si les premiers mois ont nécessité beaucoup de pratique.",
      conseil: "Je veux explorer davantage les workflows avancés (Git Flow, trunk-based development) ainsi que l'intégration continue et le déploiement continu (CI/CD), que je maîtrise encore assez peu."
    },
    evolution: {
      projetLien: "Mon objectif est d'intégrer des pipelines CI/CD (GitHub Actions, GitLab CI) dans mes futurs projets personnels, en m'inspirant des pratiques observées chez TF1.",
      formations: ["Formation \"Advanced Git Workflows\"", "Formation \"GitHub Actions & CI/CD\""]
    },
    realisations: ["dogout", "kodafit", "site-pspe"],
    icon: "fab fa-github",
  },
  {
    id: "firebase",
    nom: "Firebase",
    niveau: "Intermédiaire/Avancé",
    pourcentage: 85,
    categorie: "technique",
    description: "Backend-as-a-Service pour applications mobiles et web.",
    definition: "Firebase est une plateforme de développement d'applications proposée par Google, regroupant authentification, base de données temps réel (Firestore), stockage de fichiers et hébergement, sans avoir à gérer soi-même une infrastructure serveur.",
    contexte: "J'utilise Firebase comme backend pour l'ensemble de mes applications mobiles personnelles (Dogout, Kodafit, CuistoResto), ce qui m'a permis de me concentrer sur l'expérience utilisateur plutôt que sur la gestion d'un serveur.",
    anecdotes: [
      "J'ai configuré une architecture Firebase sécurisée pour la gestion des comptes utilisateurs, avec une attention particulière portée à la validation des données côté serveur plutôt que de faire confiance uniquement au client.",
      "J'ai mis en place des règles Firestore complexes pour gérer finement les permissions (un utilisateur ne peut modifier que ses propres données, certaines informations restent publiques en lecture seule, etc.), un exercice qui demande une vraie rigueur pour ne rien laisser de faille ouverte.",
      "J'avais commencé le développement d'un jeu multijoueur avec un classement en temps réel via Firebase, et j'ai dû le connecter à Unreal Engine. Faire communiquer un moteur de jeu C++ avec une base de données cloud pensée pour le web fut un vrai défi technique, mais j'ai réussi à obtenir un classement mis à jour en temps réel directement dans le jeu."
    ],
    valeurAjoutee: "Firebase me permet de livrer un backend robuste et scalable sans avoir à gérer d'infrastructure serveur, ce qui réduit considérablement le temps de mise sur le marché de mes projets personnels tout en gardant un niveau de sécurité satisfaisant.",
    autocritique: {
      maitrise: "Très bonne sur l'authentification, Firestore et le stockage ; les fonctions cloud (Cloud Functions) restent un domaine que je pratique moins.",
      vitesseAcquisition: "Progressive : le modèle de données \"orienté documents\" de Firestore, assez différent d'une base relationnelle classique, a demandé un vrai temps d'adaptation au départ.",
      conseil: "Je veux continuer à approfondir les règles de sécurité avancées ainsi que les fonctions cloud, et explorer des alternatives comme Supabase ou AWS Amplify pour comparer les approches."
    },
    evolution: {
      projetLien: "J'ai utilisé Firebase pour Kodafit ainsi que pour Dogout. À l'avenir, je souhaite explorer des alternatives comme Supabase ou AWS pour élargir ma culture backend.",
      formations: ["Formation \"Firebase Advanced\"", "Formation \"Cloud Functions\""]
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
    definition: "L'autonomie est la capacité à prendre des initiatives, à apprendre rapidement de nouveaux outils et à résoudre des problèmes de façon indépendante, sans attendre une validation ou une aide extérieure à chaque étape.",
    contexte: "La grande majorité de mes projets a été développée en autodidacte, sans supervision directe ni mentor dédié : j'ai dû identifier moi-même les ressources d'apprentissage, structurer mon travail et tenir mes propres délais.",
    anecdotes: [
      "J'ai appris React Native de façon autonome en quelques mois, en combinant documentation officielle, tutoriels et surtout pratique directe sur un vrai projet, ce qui a abouti à la création de Dogout.",
      "J'ai appris Unreal Engine 5 sans aucune base préalable en game development ni en 3D, jusqu'à publier un jeu complet sur Steam, une plateforme avec des exigences de qualité bien réelles.",
      "J'ai géré ce portfolio de bout en bout, du choix du design jusqu'à la programmation de chaque page, en assumant seul l'ensemble des décisions techniques et créatives."
    ],
    valeurAjoutee: "Cette autonomie me permet de mener des projets complexes seul avec une productivité élevée, et de m'intégrer rapidement dans un nouvel environnement technique sans nécessiter un accompagnement permanent.",
    autocritique: {
      maitrise: "Excellente : je suis à l'aise pour structurer seul un projet du début à la fin, identifier les priorités et résoudre les blocages techniques par moi-même.",
      vitesseAcquisition: "Très rapide, cette qualité s'est développée naturellement au fil de mes projets personnels menés seul.",
      conseil: "Le travail en équipe reste un axe que je veux continuer à renforcer, car comme le dit l'adage, \"seul on va plus vite, ensemble on va plus loin\" : mon autonomie doit se conjuguer avec plus de collaboration pour être pleinement efficace en entreprise."
    },
    evolution: {
      projetLien: "J'applique cette autonomie au quotidien chez TF1, en étant rapidement capable de prendre en charge des tickets de façon indépendante après une phase d'intégration courte.",
      formations: ["Formation \"Leadership et gestion d'équipe\""]
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
    definition: "La rigueur, dans mon métier, c'est l'application stricte de normes, de conventions et de bonnes pratiques pour garantir la qualité, la fiabilité et la maintenabilité d'un projet, même quand personne ne vérifie le résultat dans l'immédiat.",
    contexte: "J'utilise TypeScript, le linting automatique et des bonnes pratiques de structuration de code sur l'ensemble de mes projets, qu'ils soient personnels ou professionnels.",
    anecdotes: [
      "J'ai mis en place ESLint et Prettier sur tous mes projets afin d'imposer un style de code cohérent et de détecter automatiquement les erreurs évidentes avant même de lancer l'application.",
      "Je pratique une forme de revue de code personnelle avant chaque mise en production, en relisant systématiquement mes changements avec un œil critique, comme si un collègue allait les examiner.",
      "Quand j'ai commencé à développer Saga Cube, j'avais tendance à écrire du code rapide et \"sale\" pour avancer vite. Je me suis vite rendu compte que cette approche me ralentissait sur le long terme, à cause du temps perdu à déboguer un code désorganisé. J'ai alors décidé de bien faire les choses dès le début, ce qui, contre-intuitivement, m'a permis d'avancer plus vite par la suite, avec un code bien plus propre et plus simple à faire évoluer."
    ],
    valeurAjoutee: "Cette rigueur se traduit par un code maintenable, des bugs évités en amont, et une collaboration facilitée avec d'autres développeurs qui peuvent reprendre mon travail sans difficulté.",
    autocritique: {
      maitrise: "Excellente sur le respect des standards de code et l'attention portée aux détails, que je considère comme un des piliers de mon travail.",
      vitesseAcquisition: "Développée progressivement, notamment en constatant concrètement le coût d'un code peu rigoureux sur mes propres projets.",
      conseil: "Je veux approfondir les tests unitaires et d'intégration, une pratique que j'applique encore trop rarement de façon systématique sur mes projets personnels."
    },
    evolution: {
      projetLien: "J'applique des standards de qualité élevés au quotidien chez TF1, où la rigueur est indispensable sur un produit utilisé par un très grand nombre d'utilisateurs.",
      formations: ["Formation \"Testing strategies\"", "Formation \"Code quality best practices\""]
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
    definition: "La créativité est la capacité à générer des idées originales et à les concrétiser, que ce soit dans la conception d'une interface, l'invention d'une mécanique de jeu ou la construction d'un scénario visuel.",
    contexte: "Cette compétence intervient dans la conception d'interfaces, le game design de mes projets Unreal Engine, et la création de contenus plus artistiques comme mon court-métrage d'animation.",
    anecdotes: [
      "J'ai conçu les mécaniques d'énigmes originales de Saga Cube en cherchant systématiquement à éviter les schémas déjà vus dans d'autres jeux du genre, quitte à recommencer plusieurs fois la conception d'un niveau qui ne me satisfaisait pas.",
      "J'ai imaginé et réalisé le design moderne et interactif de ce portfolio, en cherchant un équilibre entre esthétique soignée et clarté de navigation.",
      "Imaginer le scénario du film d'animation \"Le Codex d'Orion\" n'a pas été simple : il fallait une histoire suffisamment intéressante pour capter l'attention en 1 minute 30, mais aussi techniquement réalisable avec mes compétences du moment. J'ai finalement réussi à trouver un compromis qui tenait la route sur les deux plans."
    ],
    valeurAjoutee: "Cette créativité me permet de me démarquer, de créer des expériences originales plutôt que de simples copies de l'existant, et d'aborder les problèmes techniques sous des angles différents lorsque les solutions évidentes ne fonctionnent pas.",
    autocritique: {
      maitrise: "Bonne, en particulier sur la conception de mécaniques et d'interfaces ; je gagnerais à structurer davantage ma démarche créative avec des méthodes éprouvées.",
      vitesseAcquisition: "Développée progressivement, au fil de projets qui m'ont chacun poussé à sortir de ma zone de confort créative.",
      conseil: "Je souhaite approfondir le design thinking et les méthodologies d'innovation produit pour rendre ma créativité plus structurée et plus facilement réutilisable en contexte professionnel."
    },
    evolution: {
      projetLien: "Mon objectif est de contribuer à des expériences utilisateur innovantes chez TF1, en particulier sur les interfaces TV où l'expérience d'usage diffère fortement du mobile.",
      formations: ["Formation \"Design thinking\"", "Formation \"UX/UI Advanced\""]
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
    definition: "La communication est la capacité à transmettre des idées, souvent techniques, de manière claire et compréhensible pour des interlocuteurs qui n'ont pas nécessairement le même niveau d'expertise, que ce soit à l'écrit ou à l'oral.",
    contexte: "Cette compétence intervient lors de la présentation de mes projets, dans la rédaction de documentation technique, et dans mes échanges quotidiens avec les autres membres de l'équipe chez TF1.",
    anecdotes: [
      "J'ai documenté clairement l'ensemble de mes applications personnelles (README, choix techniques, instructions d'installation), en pensant à un lecteur qui découvre le projet pour la première fois.",
      "En travaillant chez TF1, j'ai réalisé qu'être un bon développeur ne se limite pas à écrire du bon code : c'est aussi savoir communiquer efficacement avec les autres membres de l'équipe (développeurs, chefs de produit, designers) pour s'assurer que tout le monde partage la même compréhension d'un sujet et que le projet avance dans la bonne direction.",
      "J'ai pris l'habitude de répondre de façon professionnelle et détaillée aux retours utilisateurs et aux issues GitHub sur mes projets, en expliquant les choix techniques plutôt que de me contenter d'un correctif silencieux."
    ],
    valeurAjoutee: "Cette communication apporte de la clarté et de la transparence dans mon travail, que ce soit pour des utilisateurs finaux informés et satisfaits ou pour des collègues qui comprennent rapidement le contexte d'une décision technique.",
    autocritique: {
      maitrise: "Bonne à l'écrit, en particulier dans la documentation et les échanges asynchrones ; l'oral, notamment devant un public plus large, reste un axe de progression.",
      vitesseAcquisition: "Développée progressivement, notamment grâce à l'expérience du travail en entreprise qui impose des échanges réguliers avec des profils variés.",
      conseil: "Je veux être plus à l'aise lors de présentations en public et de prises de parole devant un groupe, un exercice que je pratique encore trop rarement."
    },
    evolution: {
      projetLien: "Je mets cette compétence en pratique au quotidien dans la collaboration et la communication d'équipe chez TF1, notamment lors des points de synchronisation et des revues de code.",
      formations: ["Formation \"Communication professionnelle\"", "Formation \"Présentation & storytelling\""]
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
    definition: "La collaboration est la capacité à contribuer à des objectifs communs au sein d'une équipe, à partager ses connaissances et à créer une véritable synergie plutôt que de travailler en silo.",
    contexte: "J'ai développé cette compétence chez CodeFlow puis chez TF1, ainsi qu'à travers quelques contributions publiques sur des projets open-source.",
    anecdotes: [
      "J'ai collaboré en équipe pour le développement de l'application Dogout durant mon stage chez CodeFlow, en partageant régulièrement mes avancées et mes points de blocage avec les autres développeurs.",
      "Mon alternance actuelle chez TF1 se déroule dans un environnement collaboratif structuré, avec des rituels d'équipe réguliers (points quotidiens, revues de code, rétrospectives) qui m'ont appris à mieux articuler mon travail avec celui des autres.",
      "J'ai réalisé quelques contributions publiques sur GitHub et je m'implique dans la communauté technique, ce qui m'a habitué à recevoir et à donner des retours constructifs sur du code qui n'est pas le mien."
    ],
    valeurAjoutee: "La collaboration rend mes projets plus robustes grâce à des regards croisés, accélère mon apprentissage au contact d'autres développeurs, et contribue à des équipes plus motivées et plus efficaces collectivement.",
    autocritique: {
      maitrise: "Bonne, notamment dans un contexte d'équipe structuré comme celui de TF1 ; c'est une compétence que j'ai moins eu l'occasion de pratiquer sur mes projets personnels, majoritairement réalisés seul.",
      vitesseAcquisition: "À développer davantage, car mon parcours très autodidacte m'a plus souvent placé en solo qu'en équipe jusqu'à présent.",
      conseil: "Je veux renforcer la collaboration d'équipe et le partage de connaissances, par exemple en accompagnant plus activement d'autres développeurs juniors ou en participant davantage aux revues de code de mes collègues."
    },
    evolution: {
      projetLien: "Je développe une collaboration plus avancée chez TF1, dans un contexte de projet à grande échelle impliquant de nombreuses parties prenantes.",
      formations: ["Formation \"Agile et gestion d'équipe\"", "Certification \"Scrum Master\""]
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
    definition: "L'adaptabilité est la capacité à accepter le changement et à apprendre rapidement de nouveaux outils, de nouvelles méthodes ou de nouveaux contextes de travail, sans que cela ne freine significativement la productivité.",
    contexte: "Cette compétence s'est construite au fil d'un apprentissage constant de nouvelles technologies et de contextes professionnels très différents les uns des autres.",
    anecdotes: [
      "Je suis passé du développement web (HTML/CSS) au développement mobile (React Native) en quelques mois seulement, en réutilisant les concepts transférables et en identifiant rapidement les vraies différences entre les deux mondes.",
      "J'ai appris Unreal Engine 5 sans aucune expérience préalable en game development, un changement de domaine radical par rapport à mes projets web et mobile.",
      "Mon intégration chez TF1 a demandé une adaptation rapide à une nouvelle stack technique, à des processus de travail bien plus formalisés et à une échelle de projet très différente de mes projets personnels solo."
    ],
    valeurAjoutee: "Cette adaptabilité me permet de maintenir ma productivité face au changement, d'apprendre efficacement de nouveaux outils, et de contribuer à une innovation continue plutôt que de me reposer uniquement sur des acquis figés.",
    autocritique: {
      maitrise: "Excellente : je considère le changement de contexte technique comme une opportunité plutôt que comme une contrainte.",
      vitesseAcquisition: "Très rapide, cette qualité s'est renforcée à chaque nouveau domaine exploré (web, mobile, jeu vidéo, animation 3D).",
      conseil: "Je veux mieux documenter mes apprentissages au fil de l'eau, pour pouvoir les partager plus facilement avec d'autres et capitaliser dessus plus efficacement à l'avenir."
    },
    evolution: {
      projetLien: "Mon objectif est d'explorer de nouveaux domaines techniques (backend, intelligence artificielle) pour continuer à élargir mon champ de compétences.",
      formations: ["Formation \"Emerging technologies\"", "Formation \"Continuous learning\""]
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
    presentation: "Dogout est une application mobile qui connecte les propriétaires de chiens entre eux afin d'organiser des balades collectives. L'idée est née d'un constat simple : de nombreux propriétaires souhaitent socialiser leur animal et rencontrer d'autres passionnés, sans toujours savoir comment s'y prendre ni qui contacter près de chez eux.",
    definition: "Il s'agit d'une plateforme de mise en relation pour passionnés de chiens, permettant de créer des événements de balade géolocalisés, de les rejoindre en quelques taps, et d'échanger avec les autres participants avant, pendant et après la sortie.",
    objectifs: [
      "Créer une véritable communauté de propriétaires de chiens autour d'un usage régulier de l'application",
      "Faciliter l'organisation de balades collectives grâce à un système d'événements géolocalisés",
      "Améliorer la socialisation des chiens et de leurs propriétaires en simplifiant la mise en relation entre inconnus partageant une même passion"
    ],
    contexte: "Ce projet a été développé lors de mon stage chez CodeFlow, sur une période de trois mois (11/2023 - 02/2024). Il s'agissait de mon premier projet React Native mené dans un cadre professionnel, encadré par une équipe restreinte.",
    enjeux: [
      "Acquérir une base d'utilisateurs suffisante pour que les événements créés trouvent réellement des participants",
      "Assurer la sécurité et la confiance entre utilisateurs qui ne se connaissent pas au préalable",
      "Créer une expérience UX intuitive et engageante malgré un périmètre fonctionnel large pour une première version"
    ],
    risques: [
      "Concurrence de services de socialisation canine déjà existants sur le marché",
      "Adoption lente par les utilisateurs, un risque classique pour toute application communautaire naissante",
      "Problèmes de scalabilité potentiels liés à l'architecture Firebase à mesure que le nombre d'utilisateurs augmente"
    ],
    etapes: [
      "Conception des maquettes sur Figma et définition de l'architecture technique de l'application",
      "Configuration de Firebase (authentification, base Firestore, stockage des images de profil)",
      "Développement du cœur applicatif en React Native (navigation, écrans principaux, gestion d'état)",
      "Intégration d'API externes, notamment Google Maps, pour la géolocalisation des balades",
      "Phase de tests fonctionnels et déploiement d'un build APK pour les premiers testeurs",
      "Lancement de l'application et accompagnement des premiers utilisateurs"
    ],
    acteurs: "Projet réalisé en solo (David PRIAM), dans le cadre d'un stage encadré chez CodeFlow.",
    resultats: "Une belle expérience professionnelle qui m'a permis d'acquérir à la fois des compétences techniques concrètes (React Native, Firebase, intégration d'API tierces) et des compétences de gestion de projet en conditions réelles. J'ai présenté cette application lors de ma soutenance pour l'obtention de mon diplôme de Concepteur Développeur d'Applications, avec un retour très positif du jury.",
    regardCritique: "Une belle réussite pour un premier projet professionnel ! Avec le recul, plusieurs axes d'amélioration se dégagent : une meilleure modération des événements créés par les utilisateurs, un système de notation des participants plus robuste pour renforcer la confiance, ainsi que des fonctionnalités sociales plus riches (messagerie intégrée, historique des balades partagées).",
    competences: ["react-native", "typescript", "javascript", "firebase", "autonomie", "rigueur"],
    technologies: ["React Native", "TypeScript", "Firebase Auth", "Firestore", "Google Maps API", "Figma"],
    github: "https://github.com/Vlaarsan/DogoutV2",
    youtube: "https://www.youtube.com/watch?v=BxgXHbYNEgc&t=4s",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Logo%20Dogout.png?raw=true",
  },
  {
    id: "saga-cube",
    nom: "Saga Cube",
    description: "Jeu d'énigmes et de plateformes développé avec Unreal Engine 5, publié sur Steam.",
    presentation: "Saga Cube est un jeu vidéo indépendant que j'ai développé seul et publié sur la plateforme Steam. C'est un puzzle-platformer à l'ambiance fantastique, pensé autour d'énigmes originales que le joueur doit résoudre en explorant chaque niveau.",
    definition: "Il s'agit d'un jeu PC en 3D combinant des mécaniques de plateformes, des énigmes logiques et de l'exploration, entièrement développé sous Unreal Engine 5, du prototype initial jusqu'à la version publiée sur Steam.",
    objectifs: [
      "Créer un jeu original doté de mécaniques de gameplay réellement innovantes plutôt qu'une simple redite du genre",
      "Publier le jeu sur Steam et parvenir à toucher une première audience de joueurs",
      "Démontrer, à travers un projet complet, mes compétences en game design et en programmation, au-delà du développement d'applications classiques"
    ],
    contexte: "Projet personnel entièrement autodidacte, mené sans aucun précédent en game development. Ce projet a également constitué mon terrain d'apprentissage complet d'Unreal Engine 5, appris en parallèle du développement lui-même.",
    enjeux: [
      "Maîtriser un moteur de jeu particulièrement complexe (Unreal Engine 5) en un temps limité",
      "Concevoir des énigmes à la fois pertinentes, cohérentes et réellement amusantes à résoudre",
      "Optimiser le jeu pour qu'il tourne correctement sur des configurations PC très variées",
      "Gérer seul l'ensemble du processus de publication et les retours des joueurs une fois le jeu en ligne"
    ],
    risques: [
      "Complexité intrinsèque d'Unreal Engine 5, avec une courbe d'apprentissage particulièrement élevée pour un développeur venant du mobile",
      "Problèmes de performance et d'optimisation, un défi classique en développement de jeux 3D",
      "Incertitude autour de l'acceptation du jeu sur Steam, dont le processus de validation reste strict"
    ],
    etapes: [
      "Apprentissage intensif d'Unreal Engine 5 à partir de tutoriels et de la documentation officielle",
      "Conception du level design et des énigmes de chaque niveau du jeu",
      "Modélisation 3D et création des assets visuels nécessaires à l'univers du jeu",
      "Programmation en C++ et en Blueprints des mécaniques de gameplay",
      "Phase de level design fin et d'équilibrage de la difficulté",
      "Tests internes répétés et optimisation des performances",
      "Soumission du jeu et validation par le processus de review de Steam",
      "Lancement officiel du jeu et suivi post-lancement (correctifs, mises à jour)"
    ],
    acteurs: "Projet développé en solo (David PRIAM), avec l'aide précieuse d'Angélique Goussault pour la conception, le level design ainsi que les phases de test utilisateur.",
    resultats: "Le jeu a été publié avec succès sur Steam et a reçu plusieurs avis positifs de joueurs, avec des revenus modérés mais bien réels pour un tout premier projet de ce type. Au-delà des chiffres, ce projet reste l'un de mes plus grands accomplissements personnels, tant sur le plan technique que créatif.",
    regardCritique: "Une première expérience en game development réellement concluante ! Les points forts que je retiens sont la conception unique du jeu et la cohérence de son esthétique générale. Les axes d'amélioration identifiés sont un tutoriel plus progressif pour mieux accompagner les nouveaux joueurs, une courbe de difficulté mieux dosée, et davantage d'énigmes pour prolonger la durée de vie du jeu.",
    competences: ["unreal-engine", "creativite", "autonomie"],
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Steamworks SDK"],
    youtube: "https://www.youtube.com/watch?v=8Lf3NEA9M64",
    steam: "https://store.steampowered.com/app/2148080/Saga_Cube",
    lien: "https://store.steampowered.com/app/2148080/Saga_Cube",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Logo%20Saga%20Cube.png?raw=true",
  },
  {
    id: "kodafit",
    nom: "Kodafit",
    description: "Application mobile de fitness avec entraînement et suivi des exercices.",
    presentation: "Kodafit est une application mobile de fitness que j'ai conçue pour répondre à un besoin très personnel : disposer d'une bibliothèque d'exercices claire et complète, avec un vrai suivi de progression, sans la surcharge publicitaire des applications grand public.",
    definition: "Il s'agit d'une plateforme mobile de fitness proposant plus de 200 exercices détaillés, des plans d'entraînement structurés et un système de suivi de la progression de l'utilisateur au fil des séances.",
    objectifs: [
      "Créer une application de fitness réellement complète et agréable à utiliser au quotidien",
      "Offrir une large variété d'exercices accompagnés de descriptions claires et de supports visuels",
      "Permettre à l'utilisateur de suivre concrètement sa progression dans le temps"
    ],
    contexte: "Projet personnel né d'un besoin que j'avais moi-même identifié en tant que pratiquant, doublé d'une volonté d'approfondir sérieusement React Native au-delà de mon premier projet.",
    enjeux: [
      "Constituer une base de données d'exercices suffisamment complète pour couvrir la majorité des besoins d'entraînement",
      "Garantir de bonnes performances malgré un volume de contenu important à afficher et à filtrer",
      "Assurer une expérience utilisateur fluide, en particulier sur les écrans de navigation entre exercices"
    ],
    risques: [
      "Concurrence particulièrement forte sur le marché des applications de fitness, dominé par de grands acteurs",
      "Difficulté à fidéliser les utilisateurs sur le long terme, un enjeu classique pour ce type d'application",
      "Nécessité de garantir un contenu pertinent et sûr sur le plan de la pratique sportive"
    ],
    etapes: [
      "Conception de l'expérience utilisateur pour un parcours d'entraînement fluide et intuitif",
      "Mise en place d'une architecture Redux pour gérer un état applicatif complexe (filtres, favoris, progression)",
      "Intégration de Firebase comme backend pour les comptes utilisateurs et la persistance des données",
      "Création de plus de 200 fiches d'exercices détaillées, avec descriptions et supports visuels",
      "Développement du système de plans d'entraînement personnalisés",
      "Tests approfondis et optimisation des performances d'affichage",
      "Déploiement de l'application et accompagnement de la communauté d'utilisateurs"
    ],
    acteurs: "Projet réalisé en solo (David PRIAM), de la conception jusqu'au déploiement.",
    resultats: "Une application pleinement fonctionnelle, dotée d'une base de données d'exercices complète, que j'utilise moi-même régulièrement dans le cadre de ma pratique sportive. Ce projet m'a apporté une expérience précieuse en développement mobile avancé et en gestion de projet de bout en bout.",
    regardCritique: "Un bon produit avec une base solide et fonctionnelle. Les axes d'amélioration que j'identifie sont l'ajout d'une personnalisation des plans d'entraînement assistée par intelligence artificielle, une intégration avec les trackers de fitness du marché, ainsi qu'une déclinaison web de l'application.",
    competences: ["react-native", "typescript", "javascript", "firebase", "autonomie", "rigueur", "creativite"],
    technologies: ["React Native", "Redux", "TypeScript", "Firebase"],
    github: "https://github.com/Vlaarsan/Kodafit",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Kodafit.png?raw=true",
  },
  {
    id: "codex-orion",
    nom: "Le Codex d'Orion",
    description: "Court-métrage d'animation 3D avec effets professionnels et narration visuelle.",
    presentation: "\"Le Codex d'Orion\" est un film d'animation 3D d'environ une minute trente, mettant en scène un héros en costume qui infiltre un musée pour récupérer une relique mystérieuse. C'est un projet à part dans mon parcours, davantage tourné vers la production audiovisuelle que vers le développement logiciel.",
    definition: "Il s'agit d'un court-métrage cinématographique explorant l'animation 3D, le compositing et la narration visuelle, dont j'ai assuré la production et la réalisation dans leur intégralité.",
    objectifs: [
      "Créer un film d'animation d'un niveau de qualité proche du professionnel malgré des moyens de production limités",
      "Démontrer des compétences en animation 3D et en motion design, en complément de mon profil de développeur",
      "Raconter une histoire visuellement captivante en un temps très court"
    ],
    contexte: "Projet créatif personnel, mené en dehors de tout cadre professionnel, comme une exploration volontaire de la production vidéo et de l'animation 3D au-delà du code.",
    enjeux: [
      "Maîtriser des outils de production 3D exigeants (Unreal Engine, After Effects, DaVinci Resolve) sans formation initiale dans ce domaine",
      "Produire des animations fluides et crédibles sur le plan visuel",
      "Réussir à transmettre une véritable émotion malgré un format très court"
    ],
    risques: [
      "Courbe d'apprentissage très élevée sur l'ensemble des outils 3D et de post-production mobilisés",
      "Temps de rendu particulièrement longs, un facteur limitant fort en production 3D indépendante",
      "Complexité à construire une narration cohérente sur une durée aussi courte"
    ],
    etapes: [
      "Écriture du concept et réalisation d'un storyboard",
      "Modélisation 3D des personnages et des décors du musée",
      "Texturing et rigging des éléments 3D",
      "Animation des différentes séquences du film",
      "Réglage de l'éclairage (lighting) et rendu des plans",
      "Compositing et étalonnage colorimétrique (color grading)",
      "Sound design et intégration de la musique",
      "Post-production finale et export du film"
    ],
    acteurs: "Projet réalisé en solo (David PRIAM), de l'écriture jusqu'à la post-production finale.",
    resultats: "Un film de 1 minute 30 mené à son terme et publié sur YouTube, dont je suis particulièrement fier compte tenu des moyens engagés. Ce projet m'a apporté une expérience précieuse en production vidéo et en animation 3D, des compétences qui viennent enrichir mon profil de développeur.",
    regardCritique: "Une belle exploration créative en dehors de ma zone de confort habituelle. Les points positifs que je retiens sont la fluidité de l'animation, l'intérêt de l'histoire racontée, la qualité du compositing, du sound design et des dialogues. Les axes d'amélioration identifiés sont un scénario un peu plus développé et une transmission encore plus forte des émotions des personnages.",
    competences: ["unreal-engine", "rigueur", "autonomie", "creativite"],
    technologies: ["Unreal Engine 5", "After Effects", "DaVinci Resolve"],
    youtube: "https://www.youtube.com/watch?v=Zy9kU0NkdmY",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/Miniature%20Codex%20d'Orion%202mo.png?raw=true",
  },
  {
    id: "site-pspe",
    nom: "Site Web PSPE",
    description: "Site vitrine professionnel pour l'entreprise PSPE avec design moderne et responsive.",
    presentation: "Ce site vitrine a été développé pour la société PSPE dans le cadre d'une mission freelance. L'objectif était de donner à l'entreprise une présence web professionnelle, avec un design moderne, entièrement responsive et pensé pour convertir les visiteurs en contacts qualifiés.",
    definition: "Il s'agit d'un site de présentation d'entreprise mettant en avant ses services, ses réalisations et ses informations de contact, optimisé pour le référencement naturel (SEO).",
    objectifs: [
      "Créer une présence web professionnelle et crédible pour PSPE",
      "Générer des demandes de contact qualifiées via un formulaire clair et accessible",
      "Présenter de façon claire les services et l'expertise de l'entreprise"
    ],
    contexte: "Mission freelance réalisée entre juin et décembre 2022, qui a constitué ma toute première expérience de développement web en conditions réelles, avec un client à satisfaire et des délais à respecter.",
    enjeux: [
      "Convertir un maximum de visiteurs en demandes de contact concrètes",
      "Optimiser le référencement naturel du site pour améliorer sa visibilité dans les moteurs de recherche",
      "Livrer un site facilement maintenable dans le temps par le client"
    ],
    risques: [
      "Client encore indécis sur certains aspects de la direction visuelle finale, nécessitant plusieurs allers-retours",
      "Délais de livraison stricts à respecter malgré les ajustements demandés",
      "Anticiper la maintenance du site sur le long terme, une fois la mission freelance terminée"
    ],
    etapes: [
      "Phase de découverte du besoin et réalisation de wireframes",
      "Conception de l'interface (UI/UX) sur Figma en lien avec le client",
      "Développement en HTML/CSS avec Tailwind CSS",
      "Intégration d'un formulaire de contact fonctionnel",
      "Optimisation SEO on-page (balises, structure sémantique, performance)",
      "Tests de compatibilité sur les principaux navigateurs",
      "Déploiement du site via GitHub Pages",
      "Formation du client à l'usage basique du site et documentation associée"
    ],
    acteurs: "Projet réalisé en solo (David PRIAM), en relation directe avec le client tout au long de la mission.",
    resultats: "Le site est en ligne depuis 2022 et a reçu un retour client positif, ce qui m'a permis de valider ma capacité à mener une mission freelance de bout en bout, du premier échange client à la mise en production.",
    regardCritique: "Un site fonctionnel et visuellement attractif pour une première mission freelance. Les axes d'amélioration que j'identifie sont des animations plus poussées, l'ajout d'une section blog pour renforcer le SEO, et la mise en place d'un suivi analytique plus détaillé du trafic.",
    competences: ["html-css", "javascript", "git", "communication", "rigueur", "autonomie"],
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Figma", "GitHub Pages"],
    github: "https://github.com/Vlaarsan/Site-PSPE",
    lien: "https://vlaar93.github.io/Site_Sid",
    image: "https://github.com/Vlaarsan/Portfolio/blob/main/img/handshake.jpg?raw=true",
  },
  {
    id: "cuistoResto",
    nom: "CuistoResto",
    description: "Application mobile de recettes avec favoris, partage et recommandations culinaires.",
    presentation: "CuistoResto est une application culinaire qui permet à ses utilisateurs de découvrir des recettes, de les enregistrer en favoris et de planifier plus facilement leurs menus de la semaine.",
    definition: "Il s'agit d'une application mobile de cuisine reposant sur une base de données de recettes, un système de favoris et, à terme, des recommandations personnalisées adaptées aux goûts de l'utilisateur.",
    objectifs: [
      "Créer une application de cuisine simple et agréable à utiliser au quotidien",
      "Offrir une base de recettes suffisamment large et variée pour convenir à des profils différents",
      "Simplifier concrètement la planification des repas de la semaine"
    ],
    contexte: "Projet personnel, développé dans la continuité de mon apprentissage de React Native, avec pour objectif d'explorer l'intégration d'API externes de recettes.",
    enjeux: [
      "Se différencier dans un marché déjà occupé par des acteurs installés",
      "Maintenir une base de recettes pertinente et à jour",
      "Garantir de bonnes performances malgré un volume de contenu potentiellement important"
    ],
    risques: [
      "Concurrence de plateformes déjà bien établies (Marmiton, Google Recipes, entre autres)",
      "Coût de production de contenu culinaire de qualité, long à créer ou à curer",
      "Difficulté à trouver un modèle de monétisation viable à terme"
    ],
    etapes: [
      "Conception d'une interface simple et agréable à parcourir",
      "Intégration d'une API externe de recettes",
      "Développement du système de favoris",
      "Création de la page de détail des recettes",
      "Mise en place de la recherche et des filtres avancés",
      "Tests fonctionnels et optimisation continue"
    ],
    acteurs: "Projet réalisé en solo (David PRIAM), actuellement toujours en développement actif.",
    resultats: "Le projet est actuellement en cours de développement (\"work in progress\"), avec une base fonctionnelle déjà solide sur la consultation et la gestion des favoris.",
    regardCritique: "Une base de travail prometteuse, encore en construction. Les points à travailler identifiés sont une meilleure différenciation (par exemple via des recettes personnalisées), une expérience utilisateur encore plus fluide, ainsi qu'un contenu culinaire plus riche.",
    competences: ["react-native", "javascript", "typescript", "firebase", "creativite", "rigueur", "autonomie"],
    technologies: ["React Native", "TypeScript", "Firebase", "API externe de recettes"],
    github: "https://github.com/Vlaarsan/CuistoResto",
    image: "https://t3.ftcdn.net/jpg/03/05/40/20/360_F_305402093_Xjwbp9xAfRElg7vD6eOAOe8BcYRLOqal.jpg",
  },
];

export const experiences: Experience[] = [
  {
    id: "tf1",
    poste: "Développeur React Native (Alternance)",
    entreprise: "TF1",
    periode: "Depuis 09/2024",
    dateDebut: "2024-09",
    type: "Alternance",
    lieu: "Boulogne-Billancourt, France",
    logo: "https://www.google.com/s2/favicons?domain=tf1.fr&sz=128",
    lienEntreprise: "https://www.tf1.fr",
    resume: "Développeur React Native au sein des équipes techniques de TF1, sur les environnements TV connectées de l'application TF1+.",
    contexte: "J'ai intégré TF1 en alternance en septembre 2024, au sein d'une équipe produit dédiée aux environnements TV connectées (Android TV, tvOS, Fire TV, plateformes constructeurs) de l'application TF1+. C'est un changement d'échelle majeur par rapport à mes projets personnels : une base de code volumineuse, des conventions d'équipe strictes, une intégration continue automatisée, et un produit utilisé quotidiennement par des millions de foyers en France.",
    missions: [
      "Développement de nouvelles fonctionnalités en React Native pour l'application TF1+ sur les environnements TV connectées",
      "Adaptation de l'expérience utilisateur aux contraintes spécifiques de la TV : navigation à la télécommande, gestion fine du focus visuel, lisibilité à distance (\"10-foot UI\")",
      "Participation aux revues de code de l'équipe, en donnant et en recevant des retours constructifs",
      "Correction de bugs et optimisation des performances sur des appareils TV aux capacités matérielles parfois limitées",
      "Collaboration avec les équipes produit et design pour ajuster les fonctionnalités livrées aux besoins réels des utilisateurs",
      "Montée en compétence continue sur les outils et conventions internes (CI/CD, tests automatisés, architecture modulaire)"
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Jest", "Git", "CI/CD"],
    competencesAcquises: ["react-native", "typescript", "rigueur", "collaboration", "communication", "adaptabilite"],
    resultats: "Une intégration réussie dans une équipe professionnelle, avec une montée en compétence rapide sur les spécificités du développement pour la télévision connectée, un domaine que je ne connaissais pas avant d'y être confronté. Cette expérience m'a permis d'appliquer à grande échelle des compétences jusque-là développées sur des projets personnels bien plus modestes.",
    anecdote: "Le plus grand choc culturel à mon arrivée n'a pas été technique mais méthodologique : je découvrais pour la première fois un vrai processus de revue de code systématique, avec des standards d'équipe stricts. Les premières semaines, chaque pull request revenait avec de nombreux commentaires. Plutôt que de le vivre comme une critique, j'ai choisi d'y voir un accélérateur d'apprentissage : quelques mois plus tard, mes revues de code étaient nettement plus courtes, et je me retrouve aujourd'hui à mon tour à commenter le code d'autres alternants.",
    icon: "fab fa-react",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "codeflow",
    poste: "Développeur React Native (Stage)",
    entreprise: "CodeFlow",
    periode: "11/2023 - 02/2024",
    dateDebut: "2023-11",
    type: "Stage (3 mois)",
    lieu: "France",
    resume: "Stage de fin de formation Concepteur Développeur d'Applications, centré sur le développement complet de l'application mobile Dogout.",
    contexte: "Ce stage de trois mois a constitué ma première expérience professionnelle en développement mobile. Il s'inscrivait dans la validation de mon diplôme de Concepteur Développeur d'Applications, avec pour mission le développement d'une application complète, de la conception à la mise en production.",
    missions: [
      "Réalisation des maquettes de l'application sur Figma en amont du développement",
      "Conception de la navigation de l'application avec React Navigation",
      "Configuration de Firebase pour l'authentification des utilisateurs et le stockage des données",
      "Développement de l'ensemble des écrans et fonctionnalités de l'application Dogout",
      "Déploiement d'un build APK pour les phases de test",
      "Présentation régulière de l'avancement du projet à mon tuteur de stage"
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Figma", "React Navigation"],
    competencesAcquises: ["react-native", "firebase", "autonomie", "rigueur"],
    resultats: "Une application mobile fonctionnelle livrée en fin de stage, qui a servi de support à ma soutenance de diplôme. Cette première expérience professionnelle m'a confirmé mon attrait pour le développement mobile et m'a donné les codes de base d'un environnement de travail encadré, en complément de mes apprentissages en autodidacte.",
    anecdote: "N'ayant jamais travaillé en entreprise auparavant, j'appréhendais surtout la gestion du temps sur un projet à échéance fixe. J'ai appris à découper mon travail en étapes concrètes et à communiquer régulièrement sur mon avancement plutôt que d'attendre la fin du stage pour montrer un résultat, une méthode que j'ai conservée depuis sur tous mes projets, personnels comme professionnels.",
    icon: "fas fa-code",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "pspe",
    poste: "Développeur Web (Freelance)",
    entreprise: "PSPE (Indépendant)",
    periode: "06/2022 - 12/2022",
    dateDebut: "2022-06",
    type: "Freelance",
    lieu: "France (à distance)",
    resume: "Première mission freelance : conception et développement d'un site vitrine professionnel pour l'entreprise PSPE.",
    contexte: "Cette mission a marqué mes tout premiers pas dans le développement web professionnel, en dehors de tout cadre scolaire ou salarié. J'ai géré seul l'ensemble de la relation client, de la prise de besoin jusqu'à la livraison finale du site.",
    missions: [
      "Recueil du besoin client et réalisation de wireframes",
      "Conception de l'interface du site sur Figma",
      "Développement du site en HTML, CSS et JavaScript avec Tailwind CSS",
      "Intégration d'un formulaire de contact et optimisation SEO de base",
      "Déploiement du site et formation du client à son usage courant"
    ],
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Figma"],
    competencesAcquises: ["html-css", "communication", "autonomie", "rigueur"],
    resultats: "Un site livré dans les délais convenus, toujours en ligne depuis 2022, avec un client satisfait du résultat final. Cette mission m'a appris à gérer une relation client de bout en bout, bien au-delà des seuls aspects techniques du développement.",
    anecdote: "Gérer directement la relation avec un client, sans intermédiaire ni cahier des charges figé au départ, a été un vrai apprentissage. Le client changeait parfois d'avis sur certains choix visuels en cours de route : j'ai appris à cadrer les échanges avec des maquettes validées par écrit à chaque étape, pour éviter les allers-retours sans fin et respecter mes délais.",
    icon: "fas fa-globe",
    color: "from-blue-500 to-cyan-600",
  },
];

export const formations: Formation[] = [
  {
    id: "animation-3d",
    titre: "Production Vidéo & Animation 3D",
    etablissement: "Auto-formation",
    periode: "2025 - 2026",
    dateDebut: "2025-01",
    niveau: "Auto-formation",
    lieu: "À distance",
    resume: "Apprentissage en autodidacte des outils de production vidéo et d'animation 3D, concrétisé par la réalisation du court-métrage \"Le Codex d'Orion\".",
    contexte: "Après plusieurs années centrées sur le développement logiciel, j'ai voulu explorer un champ créatif complémentaire : la production audiovisuelle. Cette formation s'est faite entièrement en autodidacte, au travers d'un projet concret plutôt que par de la théorie isolée.",
    programme: [
      "Modélisation et animation 3D avec Unreal Engine 5",
      "Techniques de lighting et de rendu cinématographique",
      "Compositing et étalonnage colorimétrique avec After Effects",
      "Montage, sound design et post-production avec DaVinci Resolve",
      "Construction d'une narration visuelle sur un format court"
    ],
    competencesAcquises: ["unreal-engine", "creativite", "rigueur", "autonomie"],
    resultats: "Réalisation complète du court-métrage \"Le Codex d'Orion\" (1 min 30), de l'écriture jusqu'à la publication, démontrant ma capacité à mener à bien un projet créatif entièrement nouveau pour moi.",
    anecdote: "Le plus grand défi n'a pas été la 3D en elle-même, déjà pratiquée sur Saga Cube, mais la narration : raconter une histoire cohérente et émouvante en seulement 90 secondes force à trancher dans chaque scène. J'ai réécrit le scénario à plusieurs reprises avant de trouver un équilibre entre ambition narrative et faisabilité technique avec les outils que je maîtrisais.",
    icon: "fas fa-film",
    color: "from-indigo-500 to-violet-600",
  },
  {
    id: "auto-react-native",
    titre: "Développement Mobile React Native",
    etablissement: "Auto-formation & projets pratiques",
    periode: "2023 - 2024",
    dateDebut: "2023-03",
    niveau: "Auto-formation",
    lieu: "À distance",
    resume: "Maîtrise progressive de React Native construite au travers du développement de trois applications mobiles complètes : Dogout, Kodafit et CuistoResto.",
    contexte: "Souhaitant me spécialiser dans le développement mobile après ma formation initiale en conception d'applications, j'ai choisi d'apprendre React Native en autodidacte, en alternant documentation officielle, ressources en ligne et surtout mise en pratique immédiate sur de vrais projets.",
    programme: [
      "Fondamentaux de React et de React Native (composants, hooks, gestion d'état)",
      "Navigation avancée avec React Navigation",
      "Intégration de backends applicatifs avec Firebase",
      "Gestion d'état complexe avec Redux",
      "Bonnes pratiques d'architecture et de performance sur mobile"
    ],
    competencesAcquises: ["react-native", "javascript", "typescript", "firebase", "autonomie"],
    resultats: "Trois applications mobiles fonctionnelles développées de bout en bout (Dogout, Kodafit, CuistoResto), qui ont constitué à la fois mon terrain d'apprentissage et mon portfolio technique concret, aujourd'hui valorisés dans le cadre de mon alternance chez TF1.",
    anecdote: "J'ai commencé par de très petits projets (un pierre-feuille-ciseaux, un jeu de memory) avant de m'attaquer à Dogout. Cette progression par paliers, plutôt qu'un grand projet dès le départ, m'a évité de me décourager face à la complexité et m'a permis de solidement ancrer chaque nouvelle notion avant de passer à la suivante.",
    icon: "fas fa-mobile-alt",
    color: "from-red-500 to-rose-600",
  },
  {
    id: "cda-altrh",
    titre: "Concepteur Développeur d'Applications",
    etablissement: "ALT-RH",
    periode: "09/2022 - 09/2023",
    dateDebut: "2022-09",
    niveau: "Bac +3 / Niveau 6 (RNCP)",
    lieu: "France",
    logo: "https://www.google.com/s2/favicons?domain=alt-rh.com&sz=128",
    lienEtablissement: "https://www.alt-rh.com/accueil",
    resume: "Diplôme de niveau 6 (Bac+3) en conception et développement d'applications, obtenu auprès du centre de formation ALT-RH.",
    contexte: "Cette formation constitue le socle académique de mon parcours de développeur. Elle couvre l'ensemble du cycle de vie d'un projet logiciel, de l'analyse du besoin jusqu'au déploiement, avec une alternance entre cours théoriques et mises en pratique sur des projets concrets.",
    programme: [
      "Conception et architecture d'applications (analyse fonctionnelle, modélisation UML, bases de données)",
      "Développement front-end et back-end sur des projets web et mobile",
      "Gestion de projet et méthodes agiles",
      "Sécurité applicative et bonnes pratiques de développement",
      "Préparation et soutenance d'un projet de fin de formation (l'application Dogout)"
    ],
    competencesAcquises: ["javascript", "git", "rigueur", "autonomie", "communication"],
    resultats: "Obtention du diplôme de niveau 6 en 2023, avec une soutenance appuyée sur l'application Dogout développée durant mon stage chez CodeFlow. Cette formation m'a donné une vision structurée du cycle de développement logiciel, que je complète depuis par de l'auto-formation continue sur des technologies plus spécifiques.",
    anecdote: "Cette formation m'a offert quelque chose que l'autodidaxie seule ne m'aurait pas apporté aussi facilement : une méthodologie de conduite de projet structurée (analyse du besoin, modélisation, planification) que j'applique encore aujourd'hui avant de me lancer dans le code, même sur mes projets personnels les plus modestes.",
    icon: "fas fa-certificate",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "auto-web",
    titre: "Développement Web",
    etablissement: "Auto-formation",
    periode: "2022",
    dateDebut: "2022-01",
    niveau: "Auto-formation",
    lieu: "À distance",
    resume: "Apprentissage autodidacte de HTML, CSS, JavaScript et React.js, concrétisé par la réalisation du site vitrine PSPE.",
    contexte: "En parallèle de ma spécialisation mobile, j'ai voulu conserver une culture web solide, en particulier pour être capable de mener seul des missions freelance de développement de sites vitrines.",
    programme: [
      "Structuration sémantique du contenu avec HTML5",
      "Mise en forme responsive avec CSS3 et Tailwind CSS",
      "Interactivité côté client avec JavaScript",
      "Bases de React.js pour la construction d'interfaces web",
      "Bonnes pratiques de référencement naturel (SEO) et d'accessibilité"
    ],
    competencesAcquises: ["html-css", "javascript", "react"],
    resultats: "Réalisation et livraison du site vitrine de l'entreprise PSPE dans le cadre d'une mission freelance, démontrant une maîtrise opérationnelle de ces technologies au-delà de simples exercices d'apprentissage.",
    anecdote: "Apprendre le web en autodidacte juste avant de le mettre en pratique sur une vraie mission client m'a forcé à être extrêmement efficace dans mes recherches : pas de place pour la théorie superflue, chaque notion apprise devait immédiatement servir à avancer sur le site du client.",
    icon: "fas fa-laptop-code",
    color: "from-yellow-500 to-lime-600",
  },
  {
    id: "auto-ue5",
    titre: "Game Design & Unreal Engine 5",
    etablissement: "Auto-formation",
    periode: "2021 - 2022",
    dateDebut: "2021-09",
    niveau: "Auto-formation",
    lieu: "À distance",
    resume: "Apprentissage en autodidacte du moteur Unreal Engine 5 et des fondamentaux du game design, concrétisé par la publication du jeu \"Saga Cube\" sur Steam.",
    contexte: "Passionné de jeux vidéo, j'ai voulu comprendre comment ils étaient fabriqués de l'intérieur. Sans aucune base en 3D ni en game design, j'ai choisi d'apprendre par la pratique directe, en me fixant l'objectif ambitieux de publier un jeu complet sur Steam.",
    programme: [
      "Prise en main du moteur Unreal Engine 5 (interface, workflow, gestion de projet)",
      "Programmation par Blueprints et introduction au C++ pour le gameplay",
      "Conception de niveaux et d'énigmes (level design)",
      "Modélisation 3D et intégration d'assets visuels",
      "Optimisation des performances et publication sur Steam"
    ],
    competencesAcquises: ["unreal-engine", "creativite", "autonomie"],
    resultats: "Publication réussie du jeu \"Saga Cube\" sur Steam, avec des retours positifs de joueurs, validant à la fois l'apprentissage technique du moteur et ma capacité à mener un projet créatif jusqu'à sa commercialisation.",
    anecdote: "Les premiers mois ont été particulièrement décourageants : Unreal Engine est un outil professionnel avec une courbe d'apprentissage abrupte, et mes premiers prototypes ressemblaient à peu de choses. Plutôt que d'abandonner, j'ai décomposé l'apprentissage en petits objectifs concrets (déplacer un personnage, créer une porte qui s'ouvre, déclencher un son) jusqu'à pouvoir assembler un niveau complet.",
    icon: "fas fa-gamepad",
    color: "from-orange-500 to-amber-600",
  },
];
