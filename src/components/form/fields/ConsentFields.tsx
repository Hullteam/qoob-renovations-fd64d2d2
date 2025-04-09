
import React from 'react';
import FormCheckbox from '../FormCheckbox';
import { Link } from 'react-router-dom';
import { FormErrors, QuoteFormData } from '@/utils/formValidation';

interface ConsentFieldsProps {
  formData: QuoteFormData;
  errors: FormErrors;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const ConsentFields: React.FC<ConsentFieldsProps> = ({
  formData,
  errors,
  handleCheckboxChange
}) => {
  return (
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
  );
};

export default ConsentFields;
