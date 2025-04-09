
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: React.ReactNode;
  error?: string;
}

const FormCheckbox = ({ 
  id, 
  name, 
  checked, 
  onCheckedChange, 
  label,
  error
}: FormCheckboxProps) => {
  return (
    <div className="space-y-1">
      <div className="flex items-start space-x-2">
        <Checkbox 
          id={id} 
          checked={checked}
          onCheckedChange={(checked) => onCheckedChange(checked === true)}
          className={error ? "border-red-500" : ""}
        />
        <Label htmlFor={id} className="text-sm text-gray-600 font-normal cursor-pointer">
          {label}
        </Label>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 ml-6">{error}</p>
      )}
    </div>
  );
};

export default FormCheckbox;
