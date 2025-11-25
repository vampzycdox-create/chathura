import React from 'react';

export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
  themeColor: string; // Tailwind class partial or hex
  icon: React.ComponentType<any>;
  bgImage: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}