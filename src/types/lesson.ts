export interface LessonSection {
  id: string;
  title: string;
  content?: string; // Может быть Markdown или HTML
}

export interface Lesson {
  id: string;
  title: string;
  description?: string; // Краткое описание для карточки урока
  // Возможно, красивая картинка в самом верху урока
  imageUrl?: string; 
  sections: LessonSection[];
} 