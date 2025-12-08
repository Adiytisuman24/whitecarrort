import { Company, Job } from './types';

// Initial Seed Data
const MOCK_COMPANIES: Company[] = [
  {
    id: 'c1',
    slug: 'acme-corp',
    name: 'Acme Corp',
    branding: {
      primaryColor: '#0f172a', // Slate 900
      secondaryColor: '#3b82f6', // Blue 500
      fontFamily: 'Inter',
      logoUrl: 'https://placehold.co/200x50/0f172a/ffffff?text=ACME',
      heroImageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    },
    sections: [
      {
        id: 's1',
        type: 'hero',
        title: 'Build the Future with Us',
        content: 'We are pioneering the next generation of anvil technology.',
        order: 0,
      },
      {
        id: 's2',
        type: 'about',
        title: 'About Acme',
        content: 'Founded in 1920, Acme Corp has been the leading supplier of physics-defying contraptions. Our mission is to empower coyotes everywhere.',
        order: 1,
      },
      {
        id: 's3',
        type: 'culture',
        title: 'Life at Acme',
        content: 'Fast-paced, high-impact, and occasionally explosive.',
        order: 2,
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'c2',
    slug: 'globex',
    name: 'Globex Corporation',
    branding: {
      primaryColor: '#dc2626', // Red 600
      secondaryColor: '#fca5a5', // Red 300
      fontFamily: 'Roboto',
      logoUrl: 'https://placehold.co/200x50/dc2626/ffffff?text=Globex',
      heroImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    },
    sections: [
      {
        id: 's1',
        type: 'hero',
        title: 'We Move the World',
        content: 'Globex is a high-tech employee-first conglomerate.',
        order: 0,
      },
    ],
  },
];

const MOCK_JOBS: Job[] = [
  {
    id: 'j1',
    companyId: 'c1',
    title: 'Senior Anvil Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Design aerodynamic anvils with high terminal velocity.',
    publishedAt: '2023-10-01T10:00:00Z',
  },
  {
    id: 'j2',
    companyId: 'c1',
    title: 'Trap Designer (Remote)',
    location: 'Remote',
    type: 'Contract',
    description: 'Create elaborate traps. Must have experience with bird seed baiting.',
    publishedAt: '2023-10-05T14:30:00Z',
  },
  {
    id: 'j3',
    companyId: 'c2',
    title: 'Henchman',
    location: 'Cypress Creek',
    type: 'Full-time',
    description: 'General purpose support role. Medical and dental included.',
    publishedAt: '2023-10-10T09:00:00Z',
  },
];

// simulate database delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const MockDB = {
  getCompany: async (slug: string): Promise<Company | null> => {
    await delay(200);
    return MOCK_COMPANIES.find((c) => c.slug === slug) || null;
  },

  getAllCompanies: async (): Promise<Company[]> => {
    await delay(200);
    return [...MOCK_COMPANIES];
  },

  updateCompany: async (id: string, updates: Partial<Company>): Promise<Company> => {
    await delay(300);
    const index = MOCK_COMPANIES.findIndex((c) => c.id === id);
    if (index === -1) throw new Error('Company not found');
    
    // Deep merge mock (simplistic)
    const updated = {
      ...MOCK_COMPANIES[index],
      ...updates,
      branding: { ...MOCK_COMPANIES[index].branding, ...(updates.branding || {}) },
    };
    MOCK_COMPANIES[index] = updated;
    return updated;
  },

  getJobs: async (companyId: string): Promise<Job[]> => {
    await delay(200);
    return MOCK_JOBS.filter((j) => j.companyId === companyId);
  },
  
  createJob: async (job: Omit<Job, 'id' | 'publishedAt'>): Promise<Job> => {
      await delay(200);
      const newJob: Job = {
          ...job,
          id: Math.random().toString(36).substring(7),
          publishedAt: new Date().toISOString()
      };
      MOCK_JOBS.push(newJob);
      return newJob;
  }
};
