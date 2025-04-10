
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Notre Portfolio</h2>
        <p className="section-subtitle text-center">Découvrez nos réalisations récentes</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] duration-300 bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto px-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-warmBeige-300 transition-colors z-10"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
            
            <div className="relative">
              <img 
                src={galleryImages[lightbox.currentIndex].src}
                alt={galleryImages[lightbox.currentIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-medium">{galleryImages[lightbox.currentIndex].title}</h3>
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
