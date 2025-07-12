export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: QuizOption[];
  correctAnswerIds: string[];
  explanation?: string;
}

export interface Quiz {
  id:string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
} 