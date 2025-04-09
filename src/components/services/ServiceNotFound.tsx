
import { Button } from "@/components/ui/button";

const ServiceNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Service non trouvé</h1>
      <Button className="mt-4" asChild>
        <a href="/#services">Retour aux services</a>
      </Button>
    </div>
  );
};

export default ServiceNotFound;
