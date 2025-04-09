
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { metierDetailsData } from "@/data/metierDetailsData";

const MetiersList = () => {
  // Regrouper les métiers par type de service
  const metiersByService = metierDetailsData.reduce((acc, metier) => {
    if (!acc[metier.serviceName]) {
      acc[metier.serviceName] = [];
    }
    acc[metier.serviceName].push(metier);
    return acc;
  }, {} as Record<string, typeof metierDetailsData>);

  // Liste des services dans l'ordre souhaité
  const serviceOrder = [
    "Rénovation Intérieure", 
    "Rénovation Extérieure", 
    "Rénovation Énergétique", 
    "Aménagement Cuisines & Salles de Bains"
  ];

  return (
    <section className="py-12 bg-warmBeige-50">
      <div className="container mx-auto px-4">
        <Tabs defaultValue={serviceOrder[0]} className="w-full">
          <TabsList className="bg-white mb-8 p-1 flex flex-wrap justify-center">
            {serviceOrder.map((serviceName) => (
              <TabsTrigger 
                key={serviceName} 
                value={serviceName}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {serviceName}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceOrder.map((serviceName) => (
            <TabsContent key={serviceName} value={serviceName} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metiersByService[serviceName]?.map((metier) => (
                  <div 
                    key={metier.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={metier.heroImage} 
                        alt={`${metier.title} - qoob rénovations`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2 text-warmBeige-800">
                        {metier.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {metier.subtitle}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-medium text-warmBeige-700 mb-2 text-sm">Expertises principales:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {metier.expertises.slice(0, 2).map((expertise, idx) => (
                            <li key={idx}>{expertise.title}</li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/services/${metier.serviceSlug}/metiers/${metier.id}`}>
                          Découvrir ce métier
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MetiersList;
