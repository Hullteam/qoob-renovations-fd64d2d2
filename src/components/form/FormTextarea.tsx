
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
  error?: string;
}

const FormTextarea = ({ 
  id, 
  name, 
  value, 
  onChange, 
  label, 
  placeholder, 
  required = false,
  rows = 4,
  error
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
        className={error ? "border-red-500" : ""} 
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormTextarea;
