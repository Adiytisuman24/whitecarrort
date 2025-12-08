export interface BrandingConfig {
  logoUrl?: string;
  primaryColor: string; // Hex code
  secondaryColor: string; // Hex code
  heroVideoUrl?: string; // Optional URL for hero video
  heroImageUrl?: string; // Fallback or alternative
  fontFamily: string;
}

export type SectionType = 'hero' | 'about' | 'gallery' | 'culture' | 'perks' | 'text';

export interface ContentSection {
  id: string;
  type: SectionType;
  title: string;
  content: string; // Markdown or plain text
  order: number;
  imageUrl?: string;
}

export interface Job {
  id: string;
  companyId: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string; // Markdown
  salaryRange?: string;
  publishedAt: string;
}

export interface Company {
  id: string;
  slug: string;
  name: string;
  branding: BrandingConfig;
  sections: ContentSection[];
}
