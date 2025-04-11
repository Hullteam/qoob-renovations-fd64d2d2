
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/services/ServiceCTA";
import { metierCategories, getMetiersByCategory } from "@/data/metierDetailsData";

const MetierCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  
  const category = metierCategories.find(cat => cat.id === categoryId);
  const metiers = getMetiersByCategory(categoryId || "");
  
  // Filter métiers based on search term
  const filteredMetiers = searchTerm 
    ? metiers.filter(metier => 
        metier.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        metier.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : metiers;

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Catégorie non trouvée</h1>
        <Button className="mt-4" asChild>
          <Link to="/metiers-renovation">Retour à tous les métiers</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Métiers ${category.name} | qoob rénovations`}</title>
        <meta 
          name="description" 
          content={`Découvrez les métiers du secteur ${category.name}: compétences, techniques et spécificités. Guide complet pour comprendre les expertises nécessaires à vos projets.`} 
        />
        <meta 
          name="keywords" 
          content={`métiers ${category.name.toLowerCase()}, corps de métier bâtiment, expertise rénovation, artisans spécialisés`} 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <div className="bg-warmBeige-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-4">
                <Link to="/metiers-renovation" className="text-primary hover:underline">
                  Métiers de la rénovation
                </Link> &gt; {category.name}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-warmBeige-800 mb-4">
                Les métiers {category.name}
              </h1>
              <p className="text-lg md:text-xl text-warmBeige-700 mb-6 max-w-3xl mx-auto">
                {category.description}
              </p>

              {/* Search bar */}
              <div className="max-w-md mx-auto mt-8">
                <input
                  type="text"
                  placeholder="Rechercher un métier..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Métiers Grid */}
          <div className="py-16 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMetiers.length > 0 ? (
                filteredMetiers.map((metier) => (
                  <div
                    key={metier.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={metier.heroImage}
                        alt={metier.title}
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
                        {metier.keyPoints && metier.keyPoints.length > 0 && (
                          <>
                            <h4 className="font-medium text-warmBeige-700 mb-2 text-sm">Points clés:</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              {metier.keyPoints.slice(0, 2).map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/services/${metier.serviceSlug}/metiers/${metier.id}`}>
                          En savoir plus
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">Aucun métier ne correspond à votre recherche.</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <ServiceCTA title={`${category.name}`} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MetierCategory;
