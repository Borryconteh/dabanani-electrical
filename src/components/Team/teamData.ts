// src/components/Team/teamData.ts
import type { TeamMember, OrganizationNode } from './types';

// Placeholder image (replace with actual paths like '/images/team/john.jpg' later)
const placeholderImg = 'https://ui-avatars.com/api/?background=random&size=400';

export const teamMembers: TeamMember[] = [
  {
    id: 'md-1',
    name: 'John Doe',
    role: 'Managing Director',
    department: 'Leadership',
    image: placeholderImg,
    bio: 'Guiding DECL with over 20 years of industry experience and strategic vision.',
    isLeadership: true,
    socials: {
      linkedin: '#',
      email: 'md@decl.com'
    }
  },
  {
    id: 'sec-1',
    name: 'Jane Smith',
    role: 'Company Secretary',
    department: 'Secretary',
    image: placeholderImg,
    bio: 'Ensuring smooth executive operations and corporate compliance.',
  },
  {
    id: 'admin-1',
    name: 'Robert Johnson',
    role: 'Head of Administration',
    department: 'Administration',
    image: placeholderImg,
    isLeadership: true,
  },
  {
    id: 'admin-2',
    name: 'Emily Davis',
    role: 'HR Manager',
    department: 'Administration',
    image: placeholderImg,
  },
  {
    id: 'fin-1',
    name: 'Michael Wilson',
    role: 'Chief Financial Officer',
    department: 'Finance',
    image: placeholderImg,
    isLeadership: true,
  },
  {
    id: 'fin-2',
    name: 'Sarah Brown',
    role: 'Senior Accountant',
    department: 'Finance',
    image: placeholderImg,
  },
  {
    id: 'eng-1',
    name: 'David Miller',
    role: 'Lead Engineer',
    department: 'Engineering',
    image: placeholderImg,
    isLeadership: true,
  },
  {
    id: 'eng-2',
    name: 'James Taylor',
    role: 'Civil Engineer',
    department: 'Engineering',
    image: placeholderImg,
  },
  {
    id: 'it-1',
    name: 'Alex Anderson',
    role: 'IT Director',
    department: 'IT',
    image: placeholderImg,
    isLeadership: true,
  },
  {
    id: 'surv-1',
    name: 'William Thomas',
    role: 'Chief Surveyor',
    department: 'Surveying',
    image: placeholderImg,
    isLeadership: true,
  }
];

export const organizationChart: OrganizationNode = {
  title: 'Managing Director',
  department: 'Leadership',
  children: [
    {
      title: 'Secretary',
      department: 'Secretary',
    },
    {
      title: 'Administration',
      department: 'Administration',
    },
    {
      title: 'Finance',
      department: 'Finance',
    },
    {
      title: 'IT',
      department: 'IT',
    },
    {
      title: 'Engineering',
      department: 'Engineering',
      children: [
        {
          title: 'Surveying',
          department: 'Surveying',
        }
      ]
    }
  ]
};