import type { Article } from '../types/article';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Понимание системы владения в Rust',
    author: 'Джейн Доу',
    createdAt: '2024-07-21T10:00:00Z',
    content: `
      <p>Система владения (ownership) — это самая уникальная особенность Rust, которая позволяет языку гарантировать безопасность памяти без сборщика мусора. Если вы пришли из других языков, эта концепция может показаться незнакомой. Давайте разберем ее ключевые принципы.</p>
      <h2>Три правила владения</h2>
      <ol>
        <li>Каждое значение в Rust имеет переменную, которая называется его <strong>владельцем</strong>.</li>
        <li>В каждый момент времени может быть только один владелец.</li>
        <li>Когда владелец выходит из области видимости, значение удаляется.</li>
      </ol>
      <h2>Пример в коде</h2>
      <pre><code class="language-rust">fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 перемещается в s2

    // println!("{}, world!", s1); // Ошибка! s1 больше не действителен
    println!("{}, world!", s2); // Работает
}

// some_string входит в область видимости
fn takes_ownership(some_string: String) { 
    println!("{}", some_string);
} // Здесь some_string выходит из области видимости, и вызывается \`drop\`.
  // Память освобождается.</code></pre>
      <p>Этот пример иллюстрирует, как Rust обеспечивает безопасность памяти. Как только право владения на строку было передано переменной s2, s1 стала невалидной, и компилятор запретил ее использовать. Это предотвращает двойное освобождение памяти — распространенную ошибку в системном программировании.</p>
    `,
  },
  {
    id: '2',
    title: 'Введение в асинхронное программирование на Rust',
    author: '',
    createdAt: '',
    content: '',
  },
];

export const createArticle = (article: Article) => {
  articles.push(article);
};

export const updateArticle = (updatedArticle: Article) => {
  const index = articles.findIndex(article => article.id === updatedArticle.id);
  if (index !== -1) {
    articles[index] = updatedArticle;
  }
}; 