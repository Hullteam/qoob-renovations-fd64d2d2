
import React from 'react';
import FormSelect from '../FormSelect';
import FormTextarea from '../FormTextarea';
import { FormErrors, QuoteFormData } from '@/utils/formValidation';
import { serviceOptions } from '../QuoteFormServiceOptions';

interface ProjectInfoFieldsProps {
  formData: QuoteFormData;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const ProjectInfoFields: React.FC<ProjectInfoFieldsProps> = ({
  formData,
  errors,
  handleChange,
  handleSelectChange
}) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ProjectInfoFields;
