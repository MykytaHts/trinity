import type { Homework } from '../types/homework';

export const homeworkList: Homework[] = [
  {
    id: 'hw-rust-basics',
    lessonId: 'rust-basics',
    title: 'Основы Rust: Переменные и типы',
    description: 'Практическое задание на закрепление знаний о переменных, мутабельности и базовых скалярных типах данных в Rust.',
    status: 'completed',
  },
  {
    id: 'hw-ownership',
    lessonId: 'ownership',
    title: 'Владение и заимствование',
    description: 'Решите несколько задач, связанных с концепциями владения, ссылок и заимствования, чтобы понять их на практике.',
    status: 'completed',
  },
  {
    id: 'hw-structs-enums',
    lessonId: 'structs-enums',
    title: 'Структуры и перечисления',
    description: 'Создайте свои собственные типы данных с помощью структур и перечислений, чтобы смоделировать реальную задачу.',
    status: 'not_started',
  },
   {
    id: 'hw-error-handling',
    lessonId: 'error-handling',
    title: 'Обработка ошибок',
    description: 'Научитесь правильно обрабатывать возможные ошибки в коде с помощью Result и Option, чтобы писать надежные программы.',
    status: 'not_started',
  }
]; 