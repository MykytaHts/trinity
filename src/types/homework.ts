export interface Homework {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  imageUrl?: string; // Keep optional for now
  status: 'completed' | 'not_started';
} 