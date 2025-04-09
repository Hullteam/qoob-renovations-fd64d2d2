
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { departments } from "@/data/zonesInterventionData";

const ZonesDepartments = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          Découvrez toutes nos zones d'intervention
        </h2>
        <p className="section-subtitle text-center">
          Consultez la liste complète des communes où nous intervenons dans chaque département.
        </p>
        
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {departments.map((dept) => (
              <AccordionItem key={dept.code} value={dept.code} className="border border-warmBeige-200 rounded-lg shadow-sm bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold">{dept.name}</span>
                    <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {dept.cities.length} communes
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <div className="text-warmBeige-700 mb-4">
                    {dept.description}
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ville</TableHead>
                          <TableHead>Code Postal</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dept.cities.sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                          <TableRow key={`${city.name}-${city.postalCode}`}>
                            <TableCell className="font-medium">{city.name}</TableCell>
                            <TableCell>{city.postalCode}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ZonesDepartments;
