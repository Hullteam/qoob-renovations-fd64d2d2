
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormTextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

const FormTextarea = ({ 
  id, 
  name, 
  value, 
  onChange, 
  label, 
  placeholder, 
  required = false,
  rows = 4
}: FormTextareaProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label} {required && '*'}</Label>
      <Textarea 
        id={id} 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        required={required}
        rows={rows} 
      />
    </div>
  );
};

export default FormTextarea;
