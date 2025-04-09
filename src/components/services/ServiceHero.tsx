
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

const ServiceHero = ({ title, subtitle, heroImage }: ServiceHeroProps) => {
  return (
    <div 
      className="relative bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Button size="lg">
          Demander un devis gratuit
        </Button>
      </div>
    </div>
  );
};

export default ServiceHero;
