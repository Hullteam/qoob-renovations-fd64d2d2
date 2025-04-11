
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

export interface Testimonial {
  author?: string;
  name?: string;
  location: string;
  rating?: number;
  text?: string;
  quote?: string;
  imageBefore?: string;
  imageAfter?: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
  // Separate testimonials with before/after images
  const imageTestimonials = testimonials.filter(t => t.imageBefore && t.imageAfter);
  const textTestimonials = testimonials.filter(t => !t.imageBefore || !t.imageAfter);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
          Ce que nos clients disent
        </h2>

        {/* Before/After image testimonials */}
        {imageTestimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-serif font-semibold text-center text-warmBeige-700 mb-8">
              Avant / Après nos interventions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {imageTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium text-center">Avant</p>
                      <img 
                        src={testimonial.imageBefore} 
                        alt="Avant travaux" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium text-center">Après</p>
                      <img 
                        src={testimonial.imageAfter} 
                        alt="Après travaux" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="italic text-gray-700 mb-4">{testimonial.text || testimonial.quote && `"${testimonial.quote}"`}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{testimonial.author || testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center">
                        {testimonial.rating && [...Array(5)].map((_, i) => (
                          <ThumbsUp 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Text testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {testimonial.rating && [...Array(5)].map((_, i) => (
                    <ThumbsUp 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-4">{testimonial.text || testimonial.quote && `"${testimonial.quote}"`}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">{testimonial.author || testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
