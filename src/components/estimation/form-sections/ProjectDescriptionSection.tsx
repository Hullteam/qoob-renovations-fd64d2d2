
import React from "react";
import FormTextarea from "@/components/form/FormTextarea";
import FormCheckbox from "@/components/form/FormCheckbox";
import { useEstimationFormContext } from "../context/EstimationFormContext";

const ProjectDescriptionSection: React.FC = () => {
  const { formData, errors, handleChange, handleCheckboxChange } = useEstimationFormContext();
  
  return (
    <>
      <FormTextarea
        id="projectDescription"
        name="projectDescription"
        value={formData.projectDescription}
        onChange={handleChange}
        label="Description du projet"
        placeholder="Décrivez votre projet d'acquisition et les travaux que vous envisagez"
        required
        error={errors.projectDescription}
      />
      
      <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-md">
        <p className="text-sm text-amber-800">
          Notre service d'estimation avant achat est facturé à partir de 3€/m². 
          Ce montant sera déduit de votre facture si vous nous confiez la réalisation des travaux.
        </p>
      </div>
      
      <FormCheckbox
        id="consent"
        name="consent"
        checked={formData.consent}
        onCheckedChange={(checked) => handleCheckboxChange("consent", checked)}
        label={
          <>
            J'accepte que mes données soient utilisées pour me recontacter concernant ma demande d'estimation*
          </>
        }
        error={errors.consent}
      />
    </>
  );
};

export default ProjectDescriptionSection;
