import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
const galleryImages = [{
  src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
  alt: "Salon rénové moderne",
  title: "Rénovation complète d'un salon"
}, {
  src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
  alt: "Cuisine contemporaine",
  title: "Aménagement cuisine design"
}, {
  src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  alt: "Salle de bain luxueuse",
  title: "Rénovation salle de bain"
}, {
  src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  alt: "Chambre à coucher élégante",
  title: "Réaménagement chambre principale"
}, {
  src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
  alt: "Extérieur de maison",
  title: "Rénovation façade et terrasse"
}, {
  src: "https://images.unsplash.com/photo-1602028915047-37ea5ee5ed3d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3",
  alt: "Bureau à domicile",
  title: "Création d'un espace bureau"
}];
const Gallery = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0
  });
  const openLightbox = (index: number) => {
    setLightbox({
      isOpen: true,
      currentIndex: index
    });
  };
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
  };
  const goToNext = () => {
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % galleryImages.length
    });
  };
  const goToPrevious = () => {
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex - 1 + galleryImages.length) % galleryImages.length
    });
  };
  return;
};
export default Gallery;