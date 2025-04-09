
import React from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import { Link } from 'react-router-dom';
import { FormErrors, QuoteFormData } from '@/utils/formValidation';
import { serviceOptions } from './QuoteFormServiceOptions';

interface QuoteFormFieldsProps {
  formData: QuoteFormData;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const QuoteFormFields: React.FC<QuoteFormFieldsProps> = ({
  formData,
  errors,
  handleChange,
  handleSelectChange,
  handleCheckboxChange
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
      
      <FormSelect
        id="service"
        name="service"
        value={formData.service}
        onValueChange={(value) => handleSelectChange("service", value)}
        label="Type de service"
        placeholder="Choisissez un service"
        options={serviceOptions}
        required
        error={errors.service}
      />
      
      <FormTextarea 
        id="description" 
        name="description"
        value={formData.description}
        onChange={handleChange}
        label="Description du projet"
        placeholder="Décrivez votre projet en détail (travaux souhaités, superficie, contraintes particulières...)"
        required
        error={errors.description}
      />
      
      <div className="space-y-4">
        <FormCheckbox 
          id="consent" 
          name="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => handleCheckboxChange("consent", checked)}
          label={
            <>
              J'accepte que mes données soient traitées conformément à la <Link to="/confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> de qoob rénovations. *
            </>
          }
          error={errors.consent}
        />
        
        <FormCheckbox 
          id="marketingConsent" 
          name="marketingConsent"
          checked={formData.marketingConsent}
          onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked)}
          label="J'accepte de recevoir des informations commerciales de la part de qoob rénovations."
        />
      </div>
    </div>
  );
};

export default QuoteFormFields;
