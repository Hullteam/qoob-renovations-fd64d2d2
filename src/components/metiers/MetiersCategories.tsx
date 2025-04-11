
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building, Home, Layers, Cable, Sofa, PaintBucket, 
  Lock, Sprout, Leaf, ClipboardList 
} from "lucide-react";
import { metierCategories } from "@/data/metierDetailsData";

const iconMap: Record<string, React.ElementType> = {
  "Building": Building,
  "Home": Home,
  "Layers": Layers,
  "Cable": Cable,
  "Sofa": Sofa,
  "PaintBucket": PaintBucket,
  "Lock": Lock,
  "Sprout": Sprout,
  "Leaf": Leaf,
  "ClipboardList": ClipboardList,
};

const MetiersCategories = () => {
  return (
    <section className="py-16 bg-warmBeige-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-10">
          Les 10 grandes familles de métiers du bâtiment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metierCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={category.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {Icon && (
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-serif font-semibold text-warmBeige-800">
                      {category.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/metiers-renovation/categories/${category.id}`}>
                      Découvrir ces métiers
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetiersCategories;
