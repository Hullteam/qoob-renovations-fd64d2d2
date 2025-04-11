
// couvreur.ts - Modèle pour le métier de couvreur

export const couvreurData = {
  id: "couvreur",
  title: "Couvreur",
  subtitle: "Expert en réalisation et rénovation de toitures",
  categoryId: "charpente-couverture",
  serviceSlug: "renovation-exterieure",
  serviceName: "Rénovation Extérieure",
  metaDescription: "Découvrez l'expertise des couvreurs pour la réalisation, la réparation et l'entretien de tous types de toitures. Travail de qualité et garanties professionnelles.",
  keywords: ["couvreur", "toiture", "rénovation toiture", "étanchéité toit", "tuiles", "ardoises", "zinc", "gouttières"],
  heroImage: "/lovable-uploads/c0858a2e-bb8c-49a0-9773-0e35bafc8fa1.png", // Remplacer par une image appropriée
  presentationImage: "/lovable-uploads/74e30d7e-1a1c-4a99-8b0b-cbd7dbe83a21.png", // Remplacer par une image appropriée
  presentationTitle: "Le couvreur, gardien de l'étanchéité de votre toit",
  presentationText: [
    "Le couvreur est l'artisan spécialiste de la réalisation et de la rénovation des toitures. Son expertise est cruciale pour garantir l'étanchéité parfaite du toit, élément essentiel à la protection du bâtiment contre les intempéries.",
    "Ce professionnel maîtrise la pose de différents matériaux de couverture: tuiles (terre cuite, béton), ardoises, zinc, bac acier, bardeaux bitumineux ou encore membranes d'étanchéité. Il assure également l'installation et l'entretien des éléments associés comme les gouttières, descentes d'eau pluviale, solins et autres accessoires d'étanchéité.",
    "Le métier de couvreur requiert une grande habileté manuelle, une bonne condition physique et un sens aigu de la sécurité. Ces artisans travaillent souvent en hauteur et doivent donc parfaitement maîtriser les techniques de sécurité et les équipements de protection individuelle et collective."
  ],
  
  keyPoints: [
    "Spécialiste des toitures et de leur étanchéité",
    "Maîtrise de multiples matériaux de couverture",
    "Installation des systèmes d'évacuation des eaux pluviales",
    "Réparation et entretien des toitures existantes",
    "Respect des normes de sécurité pour le travail en hauteur"
  ],
  
  expertises: [
    {
      title: "Pose de couverture en tuiles",
      description: "Installation ou rénovation de toitures en tuiles terre cuite ou béton, avec respect des techniques traditionnelles.",
      features: ["Tuiles canal", "Tuiles plates", "Tuiles mécaniques", "Travail dans les règles de l'art", "Étanchéité garantie"]
    },
    {
      title: "Couverture en ardoises",
      description: "Pose d'ardoises naturelles ou synthétiques selon les méthodes traditionnelles ou modernes.",
      features: ["Ardoise naturelle", "Ardoise synthétique", "Pose au crochet", "Pose clouée", "Finitions soignées"]
    },
    {
      title: "Toitures métalliques et zinc",
      description: "Réalisation de couvertures et ornements en zinc, cuivre ou autres métaux avec techniques de façonnage spécifiques.",
      features: ["Zinc à tasseaux", "Zinc à joint debout", "Bac acier", "Cuivre", "Ornements et finitions"]
    },
    {
      title: "Systèmes d'évacuation des eaux",
      description: "Installation et entretien de gouttières, chéneaux et descentes pour une gestion optimale des eaux pluviales.",
      features: ["Gouttières zinc", "Gouttières cuivre", "Gouttières PVC", "Descentes pluviales", "Raccordements"]
    }
  ],
  
  workProcess: [
    {
      step: 1,
      title: "Diagnostic de toiture",
      description: "Évaluation de l'état actuel de la toiture pour identifier les problèmes et définir les travaux nécessaires."
    },
    {
      step: 2,
      title: "Préparation du support",
      description: "Nettoyage et préparation de la charpente ou de la surface existante pour garantir une base solide."
    },
    {
      step: 3,
      title: "Pose de l'isolation et de l'écran sous-toiture",
      description: "Installation des matériaux isolants et de l'écran sous-toiture pour garantir performance thermique et étanchéité."
    },
    {
      step: 4,
      title: "Réalisation du lattage",
      description: "Mise en place des liteaux ou voliges qui serviront de support aux éléments de couverture."
    },
    {
      step: 5,
      title: "Pose des éléments de couverture",
      description: "Installation méthodique des tuiles, ardoises ou autres matériaux de couverture selon les règles de l'art."
    },
    {
      step: 6,
      title: "Finitions et étanchéité",
      description: "Réalisation des raccords d'étanchéité, solins, faîtages et installation des systèmes d'évacuation des eaux."
    }
  ],
  
  faqs: [
    {
      question: "Quelle est la durée de vie moyenne d'une toiture?",
      answer: "La durée de vie d'une toiture dépend principalement du matériau utilisé. En moyenne, on peut compter 30 à 50 ans pour des tuiles en terre cuite, 80 à 100 ans pour l'ardoise naturelle, 40 à 50 ans pour le zinc, et 20 à 30 ans pour les bardeaux bitumineux. Ces durées peuvent varier en fonction de la qualité de l'installation, de l'entretien régulier et des conditions climatiques locales."
    },
    {
      question: "Comment savoir si ma toiture nécessite une rénovation?",
      answer: "Plusieurs signes peuvent indiquer qu'une rénovation est nécessaire : des tuiles cassées ou déplacées, des traces d'humidité ou moisissures dans les combles, des infiltrations d'eau au plafond, une isolation thermique défaillante (combles trop chauds en été ou trop froids en hiver), ou encore une toiture de plus de 25-30 ans qui n'a jamais été rénovée. Un diagnostic par un couvreur professionnel est recommandé pour évaluer précisément l'état de votre toiture."
    },
    {
      question: "Est-il possible de poser une nouvelle toiture sur l'ancienne?",
      answer: "Dans certains cas, il est possible de poser une nouvelle couverture sur l'ancienne, ce qu'on appelle une 'surtoiture'. Cependant, cette solution n'est pas toujours recommandée car elle ne permet pas d'inspecter et réparer d'éventuels problèmes structurels de la charpente, et ajoute un poids supplémentaire sur la structure. De plus, les problèmes sous-jacents comme des fuites ou des dommages peuvent persister. Un couvreur professionnel évaluera si cette solution est adaptée ou si une dépose complète est préférable."
    }
  ],
  
  relatedMetiers: [
    {
      id: "charpentierBois", 
      name: "Charpentier bois"
    },
    {
      id: "zingueur", 
      name: "Zingueur"
    }
  ]
};
