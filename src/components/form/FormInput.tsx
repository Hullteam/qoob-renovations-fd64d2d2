
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}

const FormInput = ({ 
  id, 
  name, 
  value, 
  onChange, 
  label, 
  placeholder, 
  required = false,
  type = "text"
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label} {required && '*'}</Label>
      <Input 
        id={id} 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        required={required}
        type={type} 
      />
    </div>
  );
};

export default FormInput;
