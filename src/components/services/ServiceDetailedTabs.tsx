
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceDetailedTab from "./ServiceDetailedTab";

interface DetailedService {
  id: string;
  name: string;
  description: string[];
  features: string[];
  image: string;
  price?: string;
}

interface ServiceDetailedTabsProps {
  serviceTitle: string;
  detailedServices: DetailedService[];
  serviceSlug: string;
}

const ServiceDetailedTabs = ({ serviceTitle, detailedServices, serviceSlug }: ServiceDetailedTabsProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
          Nos prestations de {serviceTitle.toLowerCase()}
        </h2>

        <Tabs defaultValue={detailedServices[0].id} className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 bg-transparent">
            {detailedServices.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="border border-gray-200 rounded-md py-2 px-3 text-center data-[state=active]:border-primary data-[state=active]:bg-primary/10"
              >
                {service.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {detailedServices.map((service) => (
            <TabsContent key={service.id} value={service.id} className="border rounded-lg p-6">
              <ServiceDetailedTab service={service} serviceSlug={serviceSlug} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceDetailedTabs;
