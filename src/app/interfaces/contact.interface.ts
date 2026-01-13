export interface Contact {
  id: number | string;
  imageSrc: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  notes?: string;
  birthday?: string;
  selected: boolean;
  starred: boolean;
}