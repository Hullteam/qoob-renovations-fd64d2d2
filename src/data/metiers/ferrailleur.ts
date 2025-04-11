
// ferrailleur.ts - Modèle pour le métier de ferrailleur

export const ferrailleurData = {
  id: "ferrailleur",
  title: "Ferrailleur",
  subtitle: "Expert en armatures métalliques pour le béton armé",
  categoryId: "gros-oeuvre",
  serviceSlug: "renovation-interieure", // Modifier selon le service approprié
  serviceName: "Rénovation Intérieure", // Modifier selon le service approprié
  metaDescription: "Découvrez l'expertise des ferrailleurs, spécialistes des armatures métalliques pour vos projets de construction en béton armé. Qualité et conformité garanties.",
  keywords: ["ferrailleur", "armature métallique", "béton armé", "ferraillage", "acier de construction", "armature béton"],
  heroImage: "/lovable-uploads/df07af35-8496-46c5-8b42-0a017da7763e.png", // Remplacer par une image appropriée
  presentationImage: "/lovable-uploads/6d22a9da-5065-4cd3-89e3-23d7b96f8307.png", // Remplacer par une image appropriée
  presentationTitle: "Le rôle essentiel du ferrailleur dans la construction",
  presentationText: `Le ferrailleur est un acteur indispensable dans la construction en béton armé. Sa mission principale consiste à façonner, assembler et poser les armatures métalliques qui renforceront le béton pour lui conférer sa résistance mécanique.
  
  Le travail du ferrailleur s'effectue en plusieurs étapes : lecture des plans de ferraillage, préparation des aciers (coupe, façonnage), mise en place des armatures selon les plans, et assemblage par ligature ou soudure. La précision est essentielle car la position des armatures détermine directement la résistance future du béton armé.
  
  Les ferrailleurs interviennent sur tous types de structures : fondations, murs, poteaux, planchers, escaliers, ou ouvrages d'art. Leur expertise garantit la solidité et la durabilité des constructions en béton armé, dans le respect des normes de construction.`,
  
  keyPoints: [
    "Expert en lecture de plans de ferraillage",
    "Maîtrise des techniques d'armatures pour béton armé",
    "Connaissance des normes de construction",
    "Assemblage et pose des cages d'armatures",
    "Travail en coordination avec les coffreurs et bétonneurs"
  ],
  
  expertises: [
    {
      title: "Préparation des armatures métalliques",
      description: "Coupe, pliage et façonnage des barres d'acier selon les plans de ferraillage et les normes de construction.",
      image: "/lovable-uploads/3d71113d-25da-45bc-8af6-292776840206.png" // Remplacer par une image appropriée
    },
    {
      title: "Pose et assemblage de ferraillage",
      description: "Installation et fixation des armatures avant le coulage du béton, garantissant leur bon positionnement.",
      image: "/lovable-uploads/44d77b07-c775-48de-bce4-5048c54996ba.png" // Remplacer par une image appropriée
    },
    {
      title: "Ferraillage pour ouvrages spéciaux",
      description: "Réalisation d'armatures pour structures complexes comme les escaliers, voûtes ou ouvrages d'art.",
      image: "/lovable-uploads/8ab161d7-01e0-49f7-a854-b6795b8bd944.png" // Remplacer par une image appropriée
    },
    {
      title: "Contrôle qualité des armatures",
      description: "Vérification de la conformité du ferraillage selon les plans et les normes techniques en vigueur.",
      image: "/lovable-uploads/a0054bf8-2bc4-4d1f-ae6a-fcc96d391abc.png" // Remplacer par une image appropriée
    }
  ],
  
  workProcess: [
    {
      step: 1,
      title: "Étude des plans de ferraillage",
      description: "Analyse approfondie des plans fournis par le bureau d'études pour comprendre les spécifications techniques."
    },
    {
      step: 2,
      title: "Préparation des aciers",
      description: "Coupe et façonnage des barres d'acier selon les dimensions et formes requises pour chaque élément de la structure."
    },
    {
      step: 3,
      title: "Assemblage des armatures",
      description: "Montage des cages d'armatures par ligature au fil de fer recuit ou par points de soudure selon les besoins."
    },
    {
      step: 4,
      title: "Mise en place sur chantier",
      description: "Installation des armatures dans les coffrages, avec respect rigoureux des enrobages minimaux pour protéger l'acier."
    },
    {
      step: 5,
      title: "Contrôle avant bétonnage",
      description: "Vérification finale du positionnement et de la stabilité des armatures avant le coulage du béton."
    }
  ],
  
  faqs: [
    {
      question: "Quelle est la différence entre un ferrailleur et un coffreur?",
      answer: "Le ferrailleur est spécialisé dans la préparation et la pose des armatures métalliques qui renforceront le béton. Le coffreur, quant à lui, construit les moules (coffrages) qui recevront le béton et lui donneront sa forme définitive. Ces deux métiers sont complémentaires et travaillent généralement en étroite collaboration sur les chantiers."
    },
    {
      question: "Quels sont les aciers utilisés par un ferrailleur?",
      answer: "Les ferrailleurs utilisent principalement des barres d'acier haute adhérence (HA), avec différents diamètres selon les besoins de résistance. On retrouve aussi des treillis soudés, des aciers façonnés (cadres, étriers), et parfois des aciers inox pour certaines applications spécifiques. Chaque type d'acier répond à des normes précises et est choisi selon les contraintes structurelles calculées par les bureaux d'études."
    },
    {
      question: "Comment le ferrailleur garantit-il la durabilité du béton armé?",
      answer: "Le ferrailleur assure la durabilité du béton armé en respectant scrupuleusement l'enrobage minimal des armatures (distance entre l'acier et la surface du béton). Cet enrobage protège l'acier contre la corrosion et garantit sa bonne adhérence avec le béton. Le ferrailleur veille également au bon positionnement des armatures pour que les efforts mécaniques soient correctement repris par la structure."
    }
  ],
  
  relatedMetiers: [
    {
      id: "maconnerie", 
      title: "Maçon", 
      serviceSlug: "renovation-interieure"
    },
    {
      id: "coffreur", 
      title: "Coffreur", 
      serviceSlug: "renovation-interieure"
    }
  ]
};
