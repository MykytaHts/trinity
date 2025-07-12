export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Homework {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  imageUrl?: string;
  status: 'completed' | 'not_started';
  difficulty: Difficulty;
} 