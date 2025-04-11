
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

export interface MetierData {
  id: string;
  categoryId: string;
  serviceSlug: string;
  serviceName: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  presentationTitle: string;
  presentationText: string[];
  presentationImage: string;
  keyPoints: string[];
  expertises: Expertise[];
  workProcess: WorkProcess[];
  faqs: MetierFaq[];
  relatedMetiers: RelatedMetier[];
}
