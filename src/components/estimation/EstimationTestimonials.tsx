
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sophie T.",
    location: "Villeneuve-sur-Lot, Lot-et-Garonne",
    testimonial: "Grâce à l'estimation avant achat de qoob rénovations, nous avons pu négocier le prix de notre appartement et économiser 15 000 €. Le rapport détaillé nous a permis de planifier nos travaux sereinement.",
    rating: 5
  },
  {
    name: "Marc D.",
    location: "Nérac, Lot-et-Garonne",
    testimonial: "J'hésitais entre deux maisons et l'estimation m'a aidé à faire le bon choix. Les travaux prévus correspondaient exactement au budget estimé, sans mauvaise surprise.",
    rating: 5
  },
  {
    name: "Émilie F.",
    location: "Tonneins, Lot-et-Garonne",
    testimonial: "L'estimation avant achat m'a évité d'acheter un bien avec des problèmes structurels majeurs. Un service qui m'a fait économiser beaucoup d'argent et de stress.",
    rating: 5
  }
];

const EstimationTestimonials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Ce que nos clients en disent</h2>
        <p className="section-subtitle text-center mb-12">
          Découvrez les témoignages de nos clients qui ont utilisé notre service d'estimation avant achat
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
              <div className="font-medium text-warmBeige-800">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstimationTestimonials;
