
import React from "react";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import { EstimationFormData, FormErrors, propertyTypeOptions } from "../types/estimationFormTypes";

interface PropertyInfoSectionProps {
  formData: EstimationFormData;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const PropertyInfoSection: React.FC<PropertyInfoSectionProps> = ({
  formData,
  errors,
  handleChange,
  handleSelectChange
}) => {
  return (
    <>
      <FormInput
        id="propertyAddress"
        name="propertyAddress"
        value={formData.propertyAddress}
        onChange={handleChange}
        label="Adresse du bien à estimer"
        placeholder="Adresse complète du bien"
        required
        error={errors.propertyAddress}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormSelect
          id="propertyType"
          name="propertyType"
          value={formData.propertyType}
          onValueChange={(value) => handleSelectChange("propertyType", value)}
          label="Type de bien"
          placeholder="Sélectionnez le type"
          options={propertyTypeOptions}
          required
          error={errors.propertyType}
        />
        
        <FormInput
          id="propertySize"
          name="propertySize"
          value={formData.propertySize}
          onChange={handleChange}
          label="Surface (m²)"
          placeholder="Surface approximative"
          error={errors.propertySize}
        />
        
        <FormInput
          id="propertyYear"
          name="propertyYear"
          value={formData.propertyYear}
          onChange={handleChange}
          label="Année de construction"
          placeholder="Si connue"
          error={errors.propertyYear}
        />
      </div>
      
      <FormInput
        id="visitDate"
        name="visitDate"
        value={formData.visitDate}
        onChange={handleChange}
        label="Date de visite souhaitée"
        placeholder="Quand souhaitez-vous visiter le bien ?"
        error={errors.visitDate}
      />
      
      <FormInput
        id="budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        label="Budget envisagé"
        placeholder="Budget approximatif pour l'achat et les travaux"
        error={errors.budget}
      />
    </>
  );
};

export default PropertyInfoSection;
