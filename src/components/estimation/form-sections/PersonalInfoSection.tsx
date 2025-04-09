
import React from "react";
import FormInput from "@/components/form/FormInput";
import { EstimationFormData, FormErrors } from "../types/estimationFormTypes";

interface PersonalInfoSectionProps {
  formData: EstimationFormData;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ 
  formData, 
  errors, 
  handleChange 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormInput
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        label="Prénom"
        placeholder="Votre prénom"
        required
        error={errors.firstName}
      />
      
      <FormInput
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        label="Nom"
        placeholder="Votre nom"
        required
        error={errors.lastName}
      />
      
      <FormInput
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
        placeholder="votre@email.com"
        type="email"
        required
        error={errors.email}
      />
      
      <FormInput
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        label="Téléphone"
        placeholder="Votre numéro de téléphone"
        required
        error={errors.phone}
      />
    </div>
  );
};

export default PersonalInfoSection;
