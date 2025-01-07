import { type ReactElement } from 'react';

export interface Topic {
  name: string;
  info?: {
    title: string;
    content: Array<{
      heading?: string;
      text: string;
      items?: string[];
    }>;
  };
}

export interface SkillCard {
  title: string;
  icon: React.ElementType;
  description: string;
  duration: string;
  questions: number;
  color: string;
  topics: Topic[];
}