
import React from 'react';
import { FormErrors, QuoteFormData } from '@/utils/formValidation';
import PersonalInfoFields from './fields/PersonalInfoFields';
import ProjectInfoFields from './fields/ProjectInfoFields';
import ConsentFields from './fields/ConsentFields';

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
      <PersonalInfoFields 
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
      
      <ProjectInfoFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
      />
      
      <ConsentFields
        formData={formData}
        errors={errors}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default QuoteFormFields;
