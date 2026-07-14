// src/components/Team/types.ts

export type Department = 
  | 'Leadership'
  | 'Administration'
  | 'Finance'
  | 'IT'
  | 'Engineering'
  | 'Surveying'
  | 'Secretary';

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: Department;
  image: string;
  bio?: string;
  socials?: SocialLinks;
  isLeadership?: boolean;
}

export interface OrganizationNode {
  title: string;
  department: Department;
  children?: OrganizationNode[];
}