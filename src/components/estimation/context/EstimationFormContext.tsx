
import React, { createContext, useContext } from "react";
import { useEstimationForm } from "../hooks/useEstimationForm";
import { EstimationFormData, FormErrors } from "../types/estimationFormTypes";

interface EstimationFormContextType {
  formData: EstimationFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  formError: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const EstimationFormContext = createContext<EstimationFormContextType | undefined>(undefined);

export const EstimationFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const formState = useEstimationForm();
  
  return (
    <EstimationFormContext.Provider value={formState}>
      {children}
    </EstimationFormContext.Provider>
  );
};

export const useEstimationFormContext = (): EstimationFormContextType => {
  const context = useContext(EstimationFormContext);
  
  if (context === undefined) {
    throw new Error("useEstimationFormContext must be used within an EstimationFormProvider");
  }
  
  return context;
};
