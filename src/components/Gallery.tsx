
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Salon rénové moderne",
    title: "Rénovation complète d'un salon"
  },
  {
    src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Cuisine contemporaine",
    title: "Aménagement cuisine design"
  },
  {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Salle de bain luxueuse",
    title: "Rénovation salle de bain"
  },
  {
    src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Chambre à coucher élégante",
    title: "Réaménagement chambre principale"
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Extérieur de maison",
    title: "Rénovation façade et terrasse"
  },
  {
    src: "https://images.unsplash.com/photo-1602028915047-37ea5ee5ed3d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Bureau à domicile",
    title: "Création d'un espace bureau"
  }
];

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
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Nos Réalisations</h2>
        <p className="section-subtitle text-center">
          Découvrez quelques exemples de projets que nous avons réalisés pour nos clients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-medium text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div className="relative">
              <img
                src={galleryImages[lightbox.currentIndex].src}
                alt={galleryImages[lightbox.currentIndex].alt}
                className="w-full max-h-[80vh] object-contain mx-auto"
              />
              
              <h3 className="text-white text-center mt-4 text-xl">
                {galleryImages[lightbox.currentIndex].title}
              </h3>
              
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-r-lg hover:bg-black/50"
                onClick={goToPrevious}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-l-lg hover:bg-black/50"
                onClick={goToNext}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="text-white text-center mt-4">
              {lightbox.currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
