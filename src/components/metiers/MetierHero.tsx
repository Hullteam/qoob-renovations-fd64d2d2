
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MetierHeroProps {
  serviceSlug: string;
  serviceName: string;
  title: string;
  subtitle: string;
  heroImage: string;
}

const MetierHero = ({ serviceSlug, serviceName, title, subtitle, heroImage }: MetierHeroProps) => {
  return (
    <div 
      className="relative bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-white mb-4">
          <Link to={`/services/${serviceSlug}`} className="hover:underline">
            {serviceName}
          </Link> &gt; {title}
        </div>
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

export default MetierHero;
