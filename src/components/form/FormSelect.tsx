
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  label: string;
  placeholder: string;
  options: SelectOption[];
  required?: boolean;
}

const FormSelect = ({ 
  id, 
  name, 
  value, 
  onValueChange, 
  label, 
  placeholder, 
  options,
  required = false,
}: FormSelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label} {required && '*'}</Label>
      <Select 
        value={value}
        onValueChange={(value) => onValueChange(value)}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
