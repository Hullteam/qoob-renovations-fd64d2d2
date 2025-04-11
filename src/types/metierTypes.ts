
// Type definitions for métier components

export interface RelatedMetier {
  id: string;
  name: string;
}

export interface Expertise {
  title: string;
  description: string;
  features: string[];
}

export interface WorkProcess {
  title: string;
  description: string;
  duration?: string;
  step?: number;
}

export interface MetierFaq {
  question: string;
  answer: string;
}
