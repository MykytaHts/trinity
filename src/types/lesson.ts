export interface LessonSection {
  id: string;
  title: string;
  content?: string; // Может быть Markdown или HTML
}

export interface Lesson {
  id: string;
  title: string;
  // Возможно, красивая картинка в самом верху урока
  imageUrl?: string; 
  sections: LessonSection[];
} 