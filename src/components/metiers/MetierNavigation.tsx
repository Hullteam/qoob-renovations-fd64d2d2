
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RelatedMetier {
  id: string;
  name: string;
}

interface MetierNavigationProps {
  serviceName: string;
  serviceSlug: string;
  relatedMetiers: RelatedMetier[];
}

const MetierNavigation = ({ serviceName, serviceSlug, relatedMetiers }: MetierNavigationProps) => {
  // If there are no related metiers, don't render the component
  if (!relatedMetiers || relatedMetiers.length === 0) {
    return null;
  }
  
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Explorer nos autres expertises en {serviceName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedMetiers.map((related, index) => (
              <Button key={index} variant="outline" className="justify-start" asChild>
                <Link to={`/services/${serviceSlug}/metiers/${related.id}`}>
                  <span>{related.name}</span>
                  <ArrowRight className="ml-auto h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetierNavigation;
