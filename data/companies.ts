import { BrainCircuit, Cpu, ShieldCheck } from 'lucide-react';
import { BooleanLabLogo, X365Logo, InspectiveLogo } from '../components/icons/Logos';

export interface CompanyData {
  id: string;
  name: string;
  pillText: string;
  pillColor: string; // Tailwind color class snippet (e.g., 'yellow', 'pink')
  icon: any;
  LogoComponent: any;
  description: string;
  bgImage: string;
  themeColor: string;
  websiteUrl: string;
}

export const SUBSIDIARY_COMPANIES: CompanyData[] = [
  {
    id: 'BooleanLab',
    name: 'BooleanLab',
    pillText: 'Intelligence',
    pillColor: 'yellow',
    icon: BrainCircuit,
    LogoComponent: BooleanLabLogo,
    description: 'Best-in-class intelligence, design and technology. Powering business with AI solutions.',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    themeColor: 'bg-yellow-500',
    websiteUrl: 'https://booleanlabs.biz',
  },
  {
    id: 'X365',
    name: 'X365',
    pillText: 'Innovation',
    pillColor: 'pink',
    icon: Cpu,
    LogoComponent: X365Logo,
    description: 'Innovative product excellence via Vision, IoT & Biometrics.',
    bgImage: 'https://images.unsplash.com/photo-1535378437327-10ff28945482?auto=format&fit=crop&q=80&w=800',
    themeColor: 'bg-pink-500',
    websiteUrl: 'https://booleanlabs.biz',
  },
  {
    id: 'INSPECTIVE',
    name: 'INSPECTIVE',
    pillText: 'Safety',
    pillColor: 'blue',
    icon: ShieldCheck,
    LogoComponent: InspectiveLogo,
    description: 'Safe and secure homes through AI inspection technology.',
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    themeColor: 'bg-blue-500',
    websiteUrl: 'https://booleanlabs.biz',
  },
];