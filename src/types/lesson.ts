export type LessonStatus = 'not_started' | 'in_progress' | 'completed';

export interface LessonSection {
  id: string;
  title: string;
  content?: string; // Может быть Markdown или HTML
}

export interface Lesson {
  id: string;
  title: string;
  description?: string; // Краткое описание для карточки урока
  status: LessonStatus;
  // Возможно, красивая картинка в самом верху урока
  imageUrl?: string; 
  sections: LessonSection[];
} 