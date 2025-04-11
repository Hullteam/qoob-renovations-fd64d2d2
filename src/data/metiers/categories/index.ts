
import { MetierData } from "@/types/metierTypes";
import { grosOeuvreMetiers } from "./grosOeuvre";
import { charpenteCouvertureMetiers } from "./charpenteCouverture";
import { secondOeuvreStructureMetiers } from "./secondOeuvreStructure";
import { secondOeuvreReseauxMetiers } from "./secondOeuvreReseaux";
import { amenagementInterieurMetiers } from "./amenagementInterieur";
import { finitionsMetiers } from "./finitions";
import { menuiserieSerrurieMetiers } from "./menuiserieSerrurerie";
import { exterieurPaysagerMetiers } from "./exterieurPaysager";
import { performanceEnergetiqueMetiers } from "./performanceEnergetique";
import { pilotageLConseilMetiers } from "./pilotageConseil";

// Export all categories
export const metierCategories = [
  {
    id: "gros-oeuvre",
    name: "Gros œuvre",
    icon: "Building", // Nom de l'icône Lucide
    description: "Fondations, structures porteuses et travaux de terrassement"
  },
  {
    id: "charpente-couverture",
    name: "Charpente & Couverture",
    icon: "Home",
    description: "Charpentes, toitures et structures de couverture"
  },
  {
    id: "second-oeuvre-structure",
    name: "Second œuvre – Structure & cloisonnement",
    icon: "Layers",
    description: "Cloisons, plâtrerie et isolation des murs et plafonds"
  },
  {
    id: "second-oeuvre-reseaux",
    name: "Second œuvre – Réseaux & fluides",
    icon: "Cable",
    description: "Électricité, plomberie, chauffage et systèmes de ventilation"
  },
  {
    id: "amenagement-interieur",
    name: "Aménagement intérieur",
    icon: "Sofa",
    description: "Cuisines, salles de bains et menuiserie d'intérieur"
  },
  {
    id: "finitions",
    name: "Finitions",
    icon: "PaintBucket",
    description: "Carrelage, peinture, revêtements de sol et muraux"
  },
  {
    id: "menuiserie-serrurerie",
    name: "Menuiserie & serrurerie",
    icon: "Lock",
    description: "Menuiserie bois/alu/PVC et serrurerie métallique"
  },
  {
    id: "exterieur-paysager",
    name: "Extérieur et aménagement paysager",
    icon: "Sprout",
    description: "Aménagement de jardin, terrasses et accès extérieurs"
  },
  {
    id: "performance-energetique",
    name: "Performance énergétique & environnement",
    icon: "Leaf",
    description: "Diagnostics, audits et solutions d'efficacité énergétique"
  },
  {
    id: "pilotage-conseil",
    name: "Pilotage, conseil & maîtrise d'œuvre",
    icon: "ClipboardList",
    description: "Conception, coordination et suivi des projets de construction"
  }
];

// Combine all trades from all categories
export const allMetiers: MetierData[] = [
  ...grosOeuvreMetiers,
  ...charpenteCouvertureMetiers,
  ...secondOeuvreStructureMetiers,
  ...secondOeuvreReseauxMetiers,
  ...amenagementInterieurMetiers,
  ...finitionsMetiers,
  ...menuiserieSerrurieMetiers,
  ...exterieurPaysagerMetiers,
  ...performanceEnergetiqueMetiers,
  ...pilotageLConseilMetiers
];
