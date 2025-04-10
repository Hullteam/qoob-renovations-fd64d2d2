
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
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
          Ce que nos clients disent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
