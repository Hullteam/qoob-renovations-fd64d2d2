
export type PropertyType = "apartment" | "house" | "land" | "commercial" | "other";

export interface EstimationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertyType: PropertyType | "";
  propertySize: string;
  propertyYear: string;
  visitDate: string;
  projectDescription: string;
  budget: string;
  consent: boolean;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export const propertyTypeOptions = [
  { value: "apartment", label: "Appartement" },
  { value: "house", label: "Maison" },
  { value: "land", label: "Terrain" },
  { value: "commercial", label: "Local commercial" },
  { value: "other", label: "Autre" },
];
