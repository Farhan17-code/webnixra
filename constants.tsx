
import { Project, Milestone, Skill, TeamMember } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Sarah Chen',
    role: 'Lead Architect',
    specialty: 'Cloud Infrastructure & Go',
    bio: 'Ex-Google engineer specialized in high-concurrency systems and distributed databases.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    github: '#',
    linkedin: '#'
  },
  {
    id: 'm2',
    name: 'Marcus Thorne',
    role: 'Creative Director',
    specialty: 'WebGL & Motion Design',
    bio: 'Award-winning designer merging mathematics with aesthetics to create immersive 3D web experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    github: '#',
    linkedin: '#'
  },
  {
    id: 'm3',
    name: 'Elena Rodriguez',
    role: 'AI Research Lead',
    specialty: 'LLMs & Neural Nets',
    bio: 'Pioneering the integration of generative AI into production-ready enterprise applications.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    github: '#',
    linkedin: '#'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aura Cloud Infrastructure',
    description: 'A cloud-native monitoring tool that visualizes infrastructure latency in real-time across global regions.',
    tags: ['React', 'Three.js', 'Go', 'Kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
    github: '#',
    leadMemberId: 'm1'
  },
  {
    id: '2',
    title: 'Neural Palette',
    description: 'An AI-powered design system generator that creates semantic tokens from brand moodboards.',
    tags: ['Next.js', 'Gemini API', 'Tailwind', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
    github: '#',
    leadMemberId: 'm3'
  },
  {
    id: '3',
    title: 'Vortex E-Commerce',
    description: 'High-performance headless commerce engine with a custom 3D product customizer.',
    tags: ['Shopify', 'Three.js', 'Typescript'],
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
    github: '#',
    leadMemberId: 'm2'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'ms1',
    year: '2024',
    title: 'Series A Partnership',
    description: 'Partnered with Global Dynamics to build the next generation of spatial computing interfaces.'
  },
  {
    id: 'ms2',
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized by the Webby Awards for groundbreaking integration of LLMs in creative tools.'
  },
  {
    id: 'ms3',
    year: '2022',
    title: 'Studio Foundation',
    description: 'Nexus Collective formed by a group of senior engineers from FAANG and high-growth startups.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Distributed Systems', category: 'Backend', level: 98 },
  { name: 'WebGL / WebGPU', category: 'Frontend', level: 95 },
  { name: 'Generative AI', category: 'AI', level: 92 },
  { name: 'Cloud Architecture', category: 'Tools', level: 94 },
  { name: 'Visual Storytelling', category: 'Design', level: 90 }
];

export const TEAM_BIO = "Webnixra is an elite multidisciplinary collective of engineers, designers, and AI researchers. We don't just build websites; we architect digital dimensions that push the boundaries of what's possible on the open web.";
