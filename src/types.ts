import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Cell {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  row: number;
  col: number;
}

export interface Category {
  name: string;
  items: Omit<Cell, 'row' | 'col'>[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
  link?: string;
}