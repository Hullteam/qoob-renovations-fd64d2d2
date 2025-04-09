
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
