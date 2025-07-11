import type { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 'rust-basics',
    title: 'Введение в Rust',
    imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop',
    sections: [
      {
        id: '1-1',
        title: 'Что такое Rust?',
        content: `
          <p>Rust - это язык программирования, который дает возможность каждому создавать надежное и эффективное программное обеспечение.</p>
          <p>Это мультипарадигменный язык системного программирования, ориентированный на безопасность, особенно на безопасную работу с памятью.</p>
        `,
      },
      {
        id: '1-2',
        title: 'Установка',
        content: `
          <p>Для установки Rust используйте <code>rustup</code>, официальный установщик Rust.</p>
          <pre><code>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code></pre>
          <p>Эта команда загрузит и запустит скрипт, который установит последнюю стабильную версию Rust.</p>
        `,
      },
      {
        id: '1-3',
        title: 'Hello, World!',
        content: `
          <p>Давайте напишем нашу первую программу на Rust.</p>
          <p>Создайте файл с именем <code>main.rs</code> и добавьте в него следующий код:</p>
          <pre><code>fn main() {
    println!("Hello, world!");
}</code></pre>
          <p>Скомпилируйте и запустите его с помощью <code>rustc main.rs && ./main</code>.</p>
        `,
      },
    ],
  },
  {
    id: 'variables',
    title: 'Переменные и типы данных',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop',
    sections: [
      { id: 'variables-mutability', title: 'Переменные и изменяемость' },
      {
        id: '2-2',
        title: 'Скалярные типы',
        content: `
          <p>Rust имеет четыре основных скалярных типа: integer, floating-point numbers, booleans, и characters.</p>
          <ul>
            <li><strong>Integers:</strong> <code>i32</code>, <code>u32</code>, <code>i64</code> и т.д.</li>
            <li><strong>Floats:</strong> <code>f32</code>, <code>f64</code>.</li>
            <li><strong>Booleans:</strong> <code>bool</code> (true or false).</li>
            <li><strong>Characters:</strong> <code>char</code>.</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 'ownership',
    title: 'Основные концепции: Владение и Заимствование',
    imageUrl: 'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=2069&auto=format&fit=crop',
    sections: [
      { id: 'ownership-intro', title: 'Обзор урока' },
      {
        id: '3-1',
        title: 'Владение (Ownership)',
        content: '<p>Ключевая особенность Rust, которая гарантирует безопасность памяти без сборщика мусора. У каждого значения есть переменная, которая является его владельцем.</p>',
      },
      {
        id: '3-2',
        title: 'Заимствование (Borrowing)',
        content: '<p>Вы можете разрешить другому коду использовать значение, не передавая владение, с помощью ссылок. Это называется заимствованием.</p>',
      },
    ],
  },
  {
    id: 'structs-enums',
    title: 'Структуры и Перечисления (Structs & Enums)',
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1974&auto=format&fit=crop',
    sections: [
      { id: 'structs-intro', title: 'Обзор урока' },
      {
        id: '4-1',
        title: 'Определение и использование Struct',
        content: '<p>Структуры похожи на кортежи, но каждый элемент имеет имя.</p>',
      },
      {
        id: '4-2',
        title: 'Enums и сопоставление с образцом (Pattern Matching)',
        content: '<p>Перечисления позволяют определить тип, который может быть одним из нескольких вариантов.</p>',
      },
    ],
  },
  {
    id: 'error-handling',
    title: 'Обработка ошибок в Rust',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    sections: [
      { id: 'errors-intro', title: 'Введение в обработку ошибок' },
      {
        id: '5-1',
        title: 'Непаникующие ошибки с Result<T, E>',
        content: '<p><code>Result</code> - это перечисление с вариантами <code>Ok</code> и <code>Err</code>. Это основной способ обработки ошибок в Rust.</p>',
      },
    ],
  },
]; 