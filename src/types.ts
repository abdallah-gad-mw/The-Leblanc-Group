export interface Project {
  id: string;
  address: string;
  location: string;
  category: 'Custom New Builds' | 'Luxury Renovations';
  specs: {
    size?: string;
    timeline?: string;
    beds?: string;
    baths?: string;
    garage?: string;
    features: string[];
  };
  image: string;
  shortDesc: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export type ActiveTab = 'home' | 'about' | 'projects' | 'contact';
