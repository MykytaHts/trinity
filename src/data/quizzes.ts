import type { Quiz } from '../types/quiz';

export const sampleQuiz: Quiz = {
  id: 'quiz1',
  lessonId: 'js-basics-1',
  title: 'Проверка знаний: Основы JavaScript',
  questions: [
    {
      id: 'q1',
      questionText: 'Какие из перечисленных являются примитивными типами в JavaScript?',
      options: [
        { id: 'a', text: 'string' },
        { id: 'b', text: 'number' },
        { id: 'c', text: 'object' },
        { id: 'd', text: 'boolean' },
      ],
      correctAnswerIds: ['a', 'b', 'd'],
      explanation: 'В JavaScript существует 7 примитивных типов: string, number, bigint, boolean, undefined, symbol и null. Object не является примитивным типом.'
    },
    {
      id: 'q2',
      questionText: 'Что выведет в консоль `console.log(typeof null)`?',
      options: [
        { id: 'a', text: "'null'" },
        { id: 'b', text: "'object'" },
        { id: 'c', text: "'undefined'" },
        { id: 'd', text: "'any'" },
      ],
      correctAnswerIds: ['b'],
      explanation: 'Это одна из известных особенностей (и ошибок) JavaScript. `typeof null` возвращает `object`, хотя `null` является примитивным типом.'
    },
    {
        id: 'q3',
        questionText: 'Какой метод используется для добавления элемента в конец массива?',
        options: [
          { id: 'a', text: 'array.push()' },
          { id: 'b', text: 'array.pop()' },
          { id: 'c', text: 'array.shift()' },
          { id: 'd', text: 'array.unshift()' },
        ],
        correctAnswerIds: ['a'],
        explanation: '`push()` добавляет элемент в конец, `pop()` удаляет с конца, `shift()` удаляет с начала, а `unshift()` добавляет в начало.'
      }
  ],
}; 