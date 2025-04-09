
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { majorCities } from "@/data/zonesInterventionData";

const ZonesMajorCities = () => {
  return (
    <section className="bg-warmBeige-50 py-12 border-y border-warmBeige-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Principales Villes Couvertes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {majorCities.map((city) => (
            <Card key={`${city.name}-${city.postalCode}`} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{city.name}</CardTitle>
                <CardDescription>{city.postalCode} - {city.department}</CardDescription>
              </CardHeader>
              {city.description && (
                <CardContent className="pt-0 text-sm">
                  <p>{city.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesMajorCities;
