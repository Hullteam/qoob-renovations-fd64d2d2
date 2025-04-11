
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Banknote } from "lucide-react";

interface DetailedService {
  id: string;
  name: string;
  description: string[];
  features: string[];
  image: string;
  price?: string;
}

interface ServiceDetailedTabProps {
  service: DetailedService;
  serviceSlug: string;
}

const ServiceDetailedTab = ({ service, serviceSlug }: ServiceDetailedTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
        <div className="space-y-4 mb-6">
          {service.description.map((paragraph, index) => (
            <p key={index} className="text-gray-700">{paragraph}</p>
          ))}
        </div>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <Button className="flex items-center gap-2" asChild>
            <Link to={`/services/${serviceSlug}/metiers/${service.id}`}>
              En savoir plus <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <Link to="/demande-devis">
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <img
          src={
            service.id === "cuisines" 
              ? "/lovable-uploads/3d71113d-25da-45bc-8af6-292776840206.png" 
              : service.id === "salles-de-bains" 
                ? "/lovable-uploads/a0054bf8-2bc4-4d1f-ae6a-fcc96d391abc.png"
                : service.id === "plomberie" || service.id === "plombier-sanitaire"
                  ? "/lovable-uploads/74e30d7e-1a1c-4a99-8b0b-cbd7dbe83a21.png"
                  : service.id === "peinture"
                    ? "/lovable-uploads/8ab161d7-01e0-49f7-a854-b6795b8bd944.png"
                    : service.id === "sols"
                      ? "/lovable-uploads/293da69a-39c6-4e51-8354-b4567195c828.png"
                      : service.id === "plafonds"
                        ? "/lovable-uploads/44d77b07-c775-48de-bce4-5048c54996ba.png"
                        : service.id === "facades"
                          ? "/lovable-uploads/03c956cf-4546-4071-8380-a098ea62396e.png"
                          : service.image
          }
          alt={service.name}
          className="w-full h-auto rounded-lg shadow-md mb-4"
        />
        {service.price && (
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Banknote className="w-5 h-5 text-primary mr-2" />
              <span className="font-medium">Tarif indicatif</span>
            </div>
            <p className="text-sm mb-2">{service.price}</p>
            <p className="text-xs text-gray-500">*Prix variable selon la complexité du projet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailedTab;
