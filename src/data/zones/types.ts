
// Shared types for zone intervention data

export type City = {
  name: string;
  postalCode: string;
  department: string;
  isMajor?: boolean;
  description?: string;
}

export type Department = {
  name: string;
  code: string;
  description: string;
  cities: City[];
}

// Main location information
export const mainLocation = {
  name: "Lavergne",
  postalCode: "47800",
  department: "Lot-et-Garonne",
  coordinates: {
    lat: 44.4019,
    lng: 0.6981
  },
  address: "987 route du Bladet, 47800 Lavergne"
};

export const serviceRadius = 50; // en kilomètres
