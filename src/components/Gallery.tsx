
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Salon rénové moderne",
    title: "Rénovation complète d'un salon",
  },
  {
    src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Cuisine contemporaine",
    title: "Aménagement cuisine design",
  },
  {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Salle de bain luxueuse",
    title: "Rénovation salle de bain",
  },
  {
    src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Chambre à coucher élégante",
    title: "Réaménagement chambre principale",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Extérieur de maison",
    title: "Rénovation façade et terrasse",
  },
  {
    src: "https://images.unsplash.com/photo-1602028915047-37ea5ee5ed3d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Bureau à domicile",
    title: "Création d'un espace bureau",
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0,
  });

  const openLightbox = (index: number) => {
    setLightbox({
      isOpen: true,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false,
    });
  };

  const goToNext = () => {
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % galleryImages.length,
    });
  };

  const goToPrevious = () => {
    setLightbox({
      ...lightbox,
      currentIndex:
        (lightbox.currentIndex - 1 + galleryImages.length) % galleryImages.length,
    });
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Nos Réalisations</h2>
        <p className="section-subtitle text-center">
          Découvrez quelques-unes de nos plus belles réalisations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="font-medium text-sm lg:text-base">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox.isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="max-h-[80vh] max-w-[90%]">
              <img
                src={galleryImages[lightbox.currentIndex].src}
                alt={galleryImages[lightbox.currentIndex].alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
              <div className="text-white text-center mt-4">
                <h3 className="font-medium">
                  {galleryImages[lightbox.currentIndex].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {`${lightbox.currentIndex + 1} / ${galleryImages.length}`}
                </p>
              </div>
            </div>
            <button
              onClick={goToNext}
              className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
