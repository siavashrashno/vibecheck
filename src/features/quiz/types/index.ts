export interface Option {
  id: string;
  text: string;
  vibe: string;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: Option[];
}
