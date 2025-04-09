
import React from 'react';
import FormInput from '../FormInput';
import { FormErrors, QuoteFormData } from '@/utils/formValidation';

interface PersonalInfoFieldsProps {
  formData: QuoteFormData;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
  formData,
  errors,
  handleChange
}) => {
  return (
    <div className="space-y-6">
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default PersonalInfoFields;
