
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MetiersFormations = () => {
  return (
    <section className="py-16 bg-warmBeige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800 text-center">
            Formations et Certifications des Artisans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Qualifications RGE</h3>
              <p className="text-gray-700 text-sm mb-3">
                "Reconnu Garant de l'Environnement" est une qualification octroyée aux professionnels 
                réalisant des travaux d'économie d'énergie ou d'installation d'équipements utilisant 
                des énergies renouvelables.
              </p>
              <p className="text-gray-700 text-sm">
                Cette certification est indispensable pour que vos travaux de rénovation énergétique 
                soient éligibles aux aides financières de l'État.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Qualibat</h3>
              <p className="text-gray-700 text-sm mb-3">
                Organisme indépendant qui délivre des certifications aux entreprises du bâtiment, 
                attestant de leurs compétences techniques, de leur savoir-faire et de leur fiabilité.
              </p>
              <p className="text-gray-700 text-sm">
                Les certifications Qualibat sont classées par métier et par niveau de technicité, 
                garantissant l'expertise des artisans dans leur domaine d'intervention.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Parcours de Formation</h3>
            <p className="text-gray-700 text-sm mb-3">
              Les artisans du bâtiment suivent généralement un parcours de formation initiale comprenant:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 text-sm">
              <li>CAP ou BEP dans leur domaine de spécialité (électricien, plombier, menuisier...)</li>
              <li>Brevet Professionnel (BP) pour approfondir leur expertise</li>
              <li>Bac Pro ou BTS pour les postes à responsabilité technique</li>
              <li>Formation continue pour s'adapter aux évolutions technologiques et réglementaires</li>
            </ul>
            <p className="text-gray-700 text-sm">
              De nombreux artisans complètent leur formation par un apprentissage auprès de maîtres-artisans, 
              perpétuant ainsi des savoir-faire traditionnels tout en les adaptant aux exigences modernes.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Chez qoob rénovations, nous sélectionnons des artisans qualifiés et certifiés, 
              garantissant une expertise reconnue dans chaque corps de métier.
            </p>
            <Button asChild>
              <Link to="/demande-devis">
                Demander un devis avec nos artisans experts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetiersFormations;
