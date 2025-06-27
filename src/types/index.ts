
// HubSpot form types
export interface HubSpotFormData {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  serviceInterest: ServiceType;
  message?: string;
}

export type ServiceType = 
  | 'AI Development'
  | 'Web Development'
  | 'Automated Testing'
  | 'Cloud Solutions'
  | 'API Development'
  | 'Software Consulting';

export interface HubSpotFormProps {
  formId: string;
  portalId: string;
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

// Service card types
export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: string;
  cta: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  company?: string;
  rating?: number;
}

// Case study types
export interface CaseStudy {
  id: string;
  title: string;
  metric: string;
  description: string;
  industry: string;
}

// Stats types
export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

// Animation types
export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Component props
export interface SectionProps {
  className?: string;
  id?: string;
}

export interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
} 