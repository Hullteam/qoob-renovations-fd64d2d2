
const testimonials = [
  {
    name: "Sophie D.",
    location: "Agen, Lot-et-Garonne",
    quote: "Une équipe professionnelle et attentive à nos besoins. Notre cuisine est méconnaissable, et le résultat dépasse nos espérances !",
    imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    imageAfter: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Jean-Marc L.",
    location: "Marmande, Lot-et-Garonne",
    quote: "Maison Accueillante a transformé notre salle de bains vieillotte en un espace moderne et épuré. Le respect des délais était impressionnant.",
    imageBefore: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    imageAfter: "/lovable-uploads/c0858a2e-bb8c-49a0-9773-0e35bafc8fa1.png",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 testimonial-gradient">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Ce que disent nos clients</h2>
        <p className="section-subtitle text-center">
          Découvrez les témoignages de nos clients satisfaits et les transformations que nous avons réalisées
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-full md:w-1/2">
                  <p className="text-gray-500 text-sm mb-2">Avant</p>
                  <img 
                    src={testimonial.imageBefore} 
                    alt="Avant rénovation" 
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-gray-500 text-sm mb-2">Après</p>
                  <img 
                    src={testimonial.imageAfter} 
                    alt="Après rénovation" 
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="mt-4">
                <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-warmBeige-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
