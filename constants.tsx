
import React from 'react';
import { 
  Wrench, 
  Home, 
  Layout, 
  Paintbrush, 
  Building2, 
  CheckCircle2, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { Service, GalleryItem, ContactDetails } from './types';

export const BUSINESS_NAME = "Saad Ceiling System";
export const FULL_BUSINESS_NAME = "Saad Ceiling System Interior Decorators";

export const CONTACT: ContactDetails = {
  phone: "+91 98346 21114",
  whatsapp: "919834621114", // Format: countrycodeNumber without spaces or symbols
  email: "info@saadceiling.com",
  address: "Shop No 02, Pelhar Rd, Opp. Patil Compound, Vasai–Virar, Maharashtra"
};

export const SERVICES: Service[] = [
  {
    id: 'false-ceiling',
    title: 'False Ceiling Work',
    description: 'Expert installation of modern false ceilings to enhance lighting and aesthetics of your space.',
    icon: 'Layout',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pop-ceiling',
    title: 'POP Ceiling',
    description: 'Elegant Plaster of Paris designs crafted by skilled artisans for a premium finish.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gypsum-ceiling',
    title: 'Gypsum Ceiling',
    description: 'Durable and heat-resistant gypsum board ceilings perfect for residential and commercial use.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'interiors',
    title: 'Interior Decoration',
    description: 'Complete interior solutions including paint, lighting, and spatial planning.',
    icon: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800', category: 'Residential', title: 'Modern Living Room' },
  { id: 2, url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800', category: 'Ceiling', title: 'Gypsum Pattern' },
  { id: 3, url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', category: 'Commercial', title: 'Office Interior' },
  { id: 4, url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800', category: 'Ceiling', title: 'POP Design' },
  { id: 5, url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800', category: 'Residential', title: 'Bedroom Setup' },
  { id: 6, url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800', category: 'Commercial', title: 'Conference Hall' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Quality Material',
    description: 'We use only top-grade gypsum, POP, and frames from trusted brands.',
    icon: <ShieldCheck className="w-8 h-8 text-sky-500" />
  },
  {
    title: 'Experienced Team',
    description: 'Our technicians have over 10+ years of experience in interior work.',
    icon: <Building2 className="w-8 h-8 text-sky-500" />
  },
  {
    title: 'On-Time Work',
    description: 'We respect your time and strictly adhere to project deadlines.',
    icon: <Clock className="w-8 h-8 text-sky-500" />
  },
  {
    title: 'Local Expertise',
    description: 'Deeply familiar with Vasai-Virar property styles and requirements.',
    icon: <Home className="w-8 h-8 text-sky-500" />
  }
];
