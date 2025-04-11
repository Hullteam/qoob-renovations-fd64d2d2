
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedMetier } from "@/types/metierTypes";

interface MetierNavigationProps {
  serviceName: string;
  serviceSlug: string;
  relatedMetiers: RelatedMetier[];
}

const MetierNavigation = ({
  serviceName,
  serviceSlug,
  relatedMetiers,
}: MetierNavigationProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Button variant="outline" asChild>
              <Link to={`/services/${serviceSlug}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Retour à {serviceName}
              </Link>
            </Button>
          </div>

          {relatedMetiers?.length > 0 && (
            <div className="mt-6 md:mt-0">
              <h3 className="text-center md:text-right text-warmBeige-700 mb-2">
                Métiers connexes
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {relatedMetiers.map((metier) => (
                  <Button
                    key={metier.id}
                    variant="outline"
                    size="sm"
                    asChild
                    className="text-sm"
                  >
                    <Link to={`/services/${serviceSlug}/metiers/${metier.id}`}>
                      {metier.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MetierNavigation;
