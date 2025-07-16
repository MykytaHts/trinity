export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Section {
  id: string;
  courseId: string;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  sectionId: string;
  title: string;
  description: string;
  duration: number; // in seconds
  subSections: { id: string; title: string; content: string }[];
}

export const courses: Course[] = [
  {
    id: 'rust-fundamentals',
    title: 'Rust: От основ до мастерства',
    description: 'Полный курс по языку программирования Rust, который проведет вас от самых азов до сложных концепций, таких как владение, заимствование и многопоточность.',
    image: '/images/rust-logo.png', // Пример пути, нужно будет добавить изображение
  },
];

export const sections: Section[] = [
  {
    id: 's1-introduction',
    courseId: 'rust-fundamentals',
    title: 'Введение и настройка',
    description: 'Знакомство с Rust, его философией и установка необходимого инструментария для разработки.',
  },
  {
    id: 's2-basics',
    courseId: 'rust-fundamentals',
    title: 'Основы языка',
    description: 'Изучение базовых конструкций языка: переменные, типы данных, функции и управление потоком.',
  },
  {
    id: 's3-ownership',
    courseId: 'rust-fundamentals',
    title: 'Ключевые концепции: Владение',
    description: 'Глубокое погружение в уникальную систему управления памятью в Rust: владение, заимствование и времена жизни.',
  },
];

export const lessons: Lesson[] = [
  // Section 1
  {
    id: 'l1',
    sectionId: 's1-introduction',
    title: 'Что такое Rust?',
    description: 'История и философия языка.',
    duration: 300,
    subSections: [
      {
        id: 'l1-s1',
        title: 'Философия Rust',
        content: `
          <p>Ключевая цель Rust — дать разработчикам возможность создавать <strong>быстрое и безопасное</strong> программное обеспечение. Rust достигает этого, предоставляя контроль над низкоуровневыми деталями, такими как управление памятью, без компромиссов в безопасности, которые характерны для таких языков, как C или C++.</p>
          <p>Три кита философии Rust:</p>
          <ul>
            <li><strong>Производительность:</strong> Код на Rust должен быть быстрым и эффективно использовать память.</li>
            <li><strong>Безопасность:</strong> Rust гарантирует безопасность памяти во время компиляции, предотвращая целый класс ошибок, таких как разыменование нулевых указателей, висячие указатели или гонки данных.</li>
            <li><strong>Параллелизм:</strong> Rust имеет встроенные механизмы для написания безопасного и эффективного многопоточного кода.</li>
          </ul>
        `
      },
      {
        id: 'l1-s2',
        title: 'Ключевые особенности',
        content: `
          <p>Что делает Rust уникальным?</p>
          <ol>
            <li><strong>Нулевые абстракции (Zero-cost abstractions):</strong> В Rust вы можете использовать высокоуровневые конструкции, такие как итераторы или async/await, но они компилируются в очень эффективный машинный код, сопоставимый с написанным вручную низкоуровневым кодом. Вы не платите за то, что не используете.</li>
            <li><strong>Семантика перемещения (Move semantics):</strong> Вместо копирования данных по умолчанию, Rust "перемещает" их. Это основа системы владения.</li>
            <li><strong>Владение и заимствование (Ownership & Borrowing):</strong> Это самая известная особенность Rust. Компилятор во время компиляции проверяет, что у каждого значения есть только один "владелец", и что ссылки (заимствования) не переживают данные, на которые они указывают.</li>
            <li><strong>Cargo:</strong> Встроенный менеджер зависимостей и система сборки. Управлять проектами на Rust — одно удовольствие.</li>
          </ol>
        `
      },
    ],
  },
  {
    id: 'l2',
    sectionId: 's1-introduction',
    title: 'Установка Rust',
    description: 'Установка компилятора и Cargo.',
    duration: 480,
    subSections: [
      {
        id: 'l2-s1',
        title: 'Использование rustup',
        content: `
          <p>Самый простой и рекомендуемый способ установить Rust — это использовать <code>rustup</code>, официальный установщик и менеджер версий Rust. Он позволяет управлять несколькими версиями компилятора (toolchains), например, stable, beta и nightly.</p>
          <p>Для установки в системах Linux или macOS, откройте терминал и выполните команду:</p>
          <pre><code class="language-bash">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code></pre>
          <p>Для Windows посетите официальный сайт <a href="https://www.rust-lang.org/tools/install" target="_blank">rust-lang.org</a> и скачайте установщик.</p>
          <p>После установки убедитесь, что все работает, выполнив в терминале:</p>
          <pre><code class="language-bash">rustc --version</code></pre>
        `
      },
    ],
  },
  {
    id: 'l3',
    sectionId: 's1-introduction',
    title: 'Hello, World!',
    description: 'Ваша первая программа на Rust.',
    duration: 240,
    subSections: [
       {
         id: 'l3-s1',
         title: 'Создание проекта',
         content: `
          <p>Cargo — это система сборки и менеджер пакетов Rust. Cargo обрабатывает множество задач, таких как сборка вашего кода, загрузка библиотек, от которых зависит ваш код (крейтов), и сборка этих библиотек.</p>
          <p>Чтобы создать новый проект с помощью Cargo, используйте команду:</p>
          <pre><code class="language-bash">cargo new hello_world</code></pre>
          <p>Cargo сгенерирует для вас директорию с именем <code>hello_world</code>, содержащую файл <code>Cargo.toml</code> (файл манифеста) и директорию <code>src</code> с файлом <code>main.rs</code> внутри.</p>
        `
      },
       {
         id: 'l3-s2',
         title: 'Запуск кода',
         content: `
          <p>Содержимое вашего файла <code>src/main.rs</code> будет выглядеть так:</p>
          <pre><code class="language-rust">fn main() {
    println!("Hello, world!");
}</code></pre>
          <p><code>fn</code> - ключевое слово для объявления функции, <code>main</code> - это точка входа в любую программу на Rust. <code>println!</code> - это макрос Rust, который выводит текст на консоль.</p>
          <p>Чтобы скомпилировать и запустить вашу программу, перейдите в директорию проекта и выполните:</p>
          <pre><code class="language-bash">cd hello_world
cargo run</code></pre>
          <p>Вы должны увидеть <code>Hello, world!</code> на экране. Поздравляем, вы написали свою первую программу на Rust!</p>
        `
      },
    ],
  },

  // Section 2
  {
    id: 'l4',
    sectionId: 's2-basics',
    title: 'Переменные и изменяемость',
    description: 'Объявление переменных и правила их изменения.',
    duration: 600,
    subSections: [
      {
        id: 'l4-s1',
        title: 'Неизменяемость по умолчанию',
        content: `
          <p>В Rust переменные по умолчанию являются <strong>неизменяемыми (immutable)</strong>. Это одна из ключевых особенностей, которая помогает писать безопасный и предсказуемый код.</p>
          <p>Когда переменная неизменяема, после присвоения ей значения вы не можете его изменить.</p>
          <pre><code class="language-rust">// Этот код не скомпилируется!
fn main() {
    let x = 5;
    println!("The value of x is: {}", x);
    x = 6; // Ошибка компиляции: cannot assign twice to immutable variable
    println!("The value of x is: {}", x);
}</code></pre>
          <p>Такой подход заставляет вас явно указывать, какие части вашего кода могут изменять состояние, что делает код более понятным.</p>
        `
      },
      {
        id: 'l4-s2',
        title: 'Ключевое слово `mut`',
        content: `
          <p>Чтобы сделать переменную изменяемой, используйте ключевое слово <code>mut</code> перед ее именем.</p>
          <pre><code class="language-rust">fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}</code></pre>
          <p>Теперь код успешно скомпилируется, и на экране будет выведено сначала 5, а затем 6.</p>
        `
      }
    ],
  },
  {
    id: 'l5',
    sectionId: 's2-basics',
    title: 'Базовые типы данных',
    description: 'Числа, булевы значения, символы и срезы.',
    duration: 720,
    subSections: [
      {
        id: 'l5-s1',
        title: 'Скалярные типы',
        content: `
          <p>Скалярный тип представляет собой одно значение. В Rust есть четыре основных скалярных типа:</p>
          <ul>
            <li><strong>Целочисленные (Integer):</strong> Числа без дробной части. Делятся на знаковые (<code>i8</code>, <code>i16</code>, <code>i32</code>, <code>i64</code>, <code>i128</code>, <code>isize</code>) и беззнаковые (<code>u8</code>, ..., <code>usize</code>). <code>isize</code> и <code>usize</code> зависят от архитектуры компьютера (64 бита на 64-битных системах).</li>
            <li><strong>С плавающей точкой (Floating-point):</strong> Числа с дробной частью. Типы <code>f32</code> и <code>f64</code>.</li>
            <li><strong>Булев (Boolean):</strong> Тип <code>bool</code> может иметь только два значения: <code>true</code> или <code>false</code>.</li>
            <li><strong>Символьный (Character):</strong> Тип <code>char</code> представляет один символ Unicode.</li>
          </ul>
          <pre><code class="language-rust">fn main() {
    let _integer: i32 = -10;
    let _unsigned_integer: u32 = 10;
    let _float: f64 = 3.14;
    let _is_true: bool = true;
    let _character: char = '😻';
}</code></pre>
        `
      },
      {
        id: 'l5-s2',
        title: 'Составные типы',
        content: `
          <p>Составные типы могут группировать несколько значений в один тип. В Rust есть два примитивных составных типа:</p>
          <ul>
            <li><strong>Кортеж (Tuple):</strong> Группа значений разных типов, собранных вместе. Кортежи имеют фиксированную длину: однажды объявленные, они не могут расти или уменьшаться в размере.</li>
            <li><strong>Массив (Array):</strong> В отличие от кортежа, каждый элемент массива должен иметь один и тот же тип. Массивы в Rust также имеют фиксированную длину.</li>
          </ul>
          <pre><code class="language-rust">fn main() {
    // Кортеж
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (_x, y, _z) = tup;
    println!("The value of y is: {}", y); // 6.4

    // Массив
    let a = [1, 2, 3, 4, 5];
    let first = a[0];
    println!("The first element is: {}", first); // 1
}</code></pre>
        `
      }
    ]
  },
  {
    id: 'l6',
    sectionId: 's2-basics',
    title: 'Функции и комментарии',
    description: 'Как определять и вызывать функции.',
    duration: 540,
    subSections: [
      {
        id: 'l6-s1',
        title: 'Определение и вызов функций',
        content: `
          <p>Функции объявляются с помощью ключевого слова <code>fn</code>. Именование функций в Rust принято в стиле <code>snake_case</code> (все буквы в нижнем регистре, слова разделены подчеркиваниями).</p>
          <pre><code class="language-rust">fn main() {
    println!("Hello from main!");
    another_function(); // вызов функции
}

fn another_function() {
    println!("Hello from another function!");
}</code></pre>
        `
      },
      {
        id: 'l6-s2',
        title: 'Параметры и возвращаемые значения',
        content: `
          <p>Функции могут принимать параметры и возвращать значения. В сигнатуре функции вы должны объявить тип каждого параметра.</p>
          <pre><code class="language-rust">// Функция с параметрами
fn print_value(x: i32) {
    println!("The value is: {}", x);
}

// Функция с возвращаемым значением
fn five() -> i32 {
    5 // это выражение, оно возвращается из функции
}

fn main() {
    print_value(10);
    let number = five();
    println!("The returned number is: {}", number);
}</code></pre>
          <p>Обратите внимание, что возвращаемое значение функции - это значение последнего выражения в теле функции. Точка с запятой превращает выражение в инструкцию, и она не будет возвращать значение.</p>
        `
      }
    ]
  },

  // Section 3
  {
    id: 'l7',
    sectionId: 's3-ownership',
    title: 'Владение (Ownership)',
    description: 'Основной принцип управления памятью.',
    duration: 900,
    subSections: [
       {
        id: 'l7-s1',
        title: 'Правила владения',
        content: `
          <p>Владение — это набор правил, которые компилятор проверяет во время компиляции. Эти правила позволяют Rust обеспечивать безопасность памяти без сборщика мусора.</p>
          <ol>
            <li>У каждого значения в Rust есть переменная, которая является его <strong>владельцем</strong>.</li>
            <li>В каждый момент времени может быть только <strong>один</strong> владелец.</li>
            <li>Когда владелец выходит из области видимости, значение <strong>удаляется</strong>.</li>
          </ol>
        `
      },
      {
        id: 'l7-s2',
        title: 'Перемещение (Move)',
        content: `
          <p>Когда мы присваиваем одну переменную, содержащую данные в куче (heap), другой переменной, происходит "перемещение". Rust считает первую переменную недействительной.</p>
          <pre><code class="language-rust">fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 перемещено в s2

    // println!("{}, world!", s1); // Ошибка! s1 больше не действительна
}</code></pre>
          <p>Это предотвращает двойное освобождение памяти.</p>
        `
      }
    ]
  },
  {
    id: 'l8',
    sectionId: 's3-ownership',
    title: 'Заимствование (Borrowing)',
    description: 'Как передавать ссылки на данные.',
    duration: 840,
    subSections: [
       {
        id: 'l8-s1',
        title: 'Неизменяемые ссылки',
        content: `
          <p>Вместо передачи владения, мы можем передать ссылку на значение. Это называется заимствованием.</p>
          <pre><code class="language-rust">fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}</code></pre>
          <p>Здесь <code>&s1</code> создает ссылку на <code>s1</code>, но не передает владение.</p>
        `
      },
      {
        id: 'l8-s2',
        title: 'Изменяемые ссылки',
        content: `
          <p>Мы также можем заимствовать изменяемую ссылку, чтобы модифицировать значение.</p>
          <pre><code class="language-rust">fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}</code></pre>
          <p>Ключевое правило: вы можете иметь либо одну изменяемую ссылку, либо любое количество неизменяемых ссылок на конкретные данные в конкретной области видимости, но не то и другое одновременно.</p>
        `
      }
    ]
  },
  {
    id: 'l9',
    sectionId: 's3-ownership',
    title: 'Времена жизни (Lifetimes)',
    description: 'Обеспечение безопасности ссылок.',
    duration: 1200,
    subSections: [
       {
        id: 'l9-s1',
        title: 'Предотвращение висячих ссылок',
        content: `
          <p>Времена жизни — это способ указать компилятору, как долго должны быть действительны ссылки. Основная цель времен жизни — предотвратить висячие ссылки, которые возникают, когда ссылка указывает на данные, которые уже были освобождены.</p>
          <pre><code class="language-rust">'a // аннотация времени жизни

fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}</code></pre>
          <p>Эта сигнатура функции говорит, что возвращаемая ссылка будет действительна до тех пор, пока действительны обе входные ссылки (<code>x</code> и <code>y</code>).</p>
        `
      }
    ]
  },
]; 