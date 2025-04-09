
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: React.ReactNode;
}

const FormCheckbox = ({ 
  id, 
  name, 
  checked, 
  onCheckedChange, 
  label
}: FormCheckboxProps) => {
  return (
    <div className="flex items-start space-x-2">
      <Checkbox 
        id={id} 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
      />
      <Label htmlFor={id} className="text-sm text-gray-600 font-normal cursor-pointer">
        {label}
      </Label>
    </div>
  );
};

export default FormCheckbox;
