import type { Lang } from './LanguageContext'

export const translations: Record<Lang, {
  nav: { about: string; skills: string; projects: string; other: string }
  header: { role: string; tagline: string; downloadCv: string; github: string; linkedin: string }
  about: { eyebrow: string; heading: string; text: string }
  skills: { eyebrow: string; heading: string; categories: Record<string, string> }
  projects: { eyebrow: string; heading: string; viewCase: string; caseStudy: string; close: string; visitWebsite: string }
  projectContent: Record<string, { description: string; highlights: string[] }>
  music: { eyebrow: string; heading: string }
  footer: { title: string; text: string }
}> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Technical Skills',
      projects: 'Selected Work',
      other: 'Other',
    },
    header: {
      role: 'Frontend Developer · React',
      tagline:
        'I build interfaces that hold attention: precise animation, performant rendering, and careful detail.',
      downloadCv: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      eyebrow: 'About',
      heading: 'Frontend developer focused on detail',
      text: 'Frontend Developer with more than 5 years of commercial experience building desktop and web applications using JavaScript (ES6+), TypeScript, React.js, Redux, and Angular. Delivered features for large-scale consumer products in PDF editing and photo processing, used by millions of users worldwide. Skilled in component-based architecture, state management, performance optimization, REST API integration, and unit testing with Jest. Comfortable in Agile/Scrum cross-functional teams and product-driven environments.',
    },
    skills: {
      eyebrow: 'Technical Skills',
      heading: 'What I work with',
      categories: {
        Languages: 'Languages',
        'Frameworks & Libraries': 'Frameworks & Libraries',
        Styling: 'Styling',
        'Performance & Quality': 'Performance & Quality',
        Testing: 'Testing',
        'Tools & Build': 'Tools & Build',
        Workflow: 'Workflow',
        'Design Collaboration': 'Design Collaboration',
        'AI-Assisted Development': 'AI-Assisted Development',
      },
    },
    projects: {
      eyebrow: 'Selected Work',
      heading: 'Projects & experiments',
      viewCase: 'View project →',
      caseStudy: 'Project',
      close: 'Close',
      visitWebsite: 'Visit website',
    },
    projectContent: {
      'inpixio-photo-studio': {
        description: 'Desktop photo editing application for consumer and prosumer users.',
        highlights: [
          'Developed UI for a desktop photo editing application targeting consumer and prosumer users',
          'Implemented reusable components and helped establish the project architecture from early stages',
          'Improved application responsiveness and user experience through targeted performance optimizations',
          'Collaborated closely with designers, backend developers, and QA engineers in a cross-functional team',
        ],
      },
      'soda-pdf-desktop': {
        description: 'Desktop PDF editor distributed to a global user base.',
        highlights: [
          'Developed UI features for a desktop PDF editor distributed to a global user base',
          'Built reusable React components and structured project architecture for long-term maintainability',
          'Investigated and fixed production issues reported by QA and end users, improving application stability',
        ],
      },
      'soda-pdf-online': {
        description: 'Web-based PDF editor used by millions of users monthly.',
        highlights: [
          'Developed new features and refactored legacy modules of a web-based PDF editor used by millions of users monthly',
          'Implemented reusable UI component library with Sass/SCSS, ensuring consistent design across the product',
          'Integrated REST APIs for document processing, authentication, and subscription management',
          'Wrote unit tests with Jest, contributing to test coverage growth and reducing regression bugs',
          'Collaborated with designers in Figma and participated in code reviews and Scrum ceremonies',
        ],
      },
    },
    music: {
      eyebrow: 'Other',
      heading: 'My Music',
    },
    footer: {
      title: "Let's talk about your project",
      text: 'Oleksandr Kutsenko — Frontend Developer (React)',
    },
  },
  ua: {
    nav: {
      about: 'Про мене',
      skills: 'Технічні навички',
      projects: 'Проєкти',
      other: 'Інше',
    },
    header: {
      role: 'Frontend-розробник · React',
      tagline:
        'Я створюю інтерфейси, які тримають увагу: точна анімація, продуктивний рендер і увага до деталей.',
      downloadCv: 'Завантажити CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      eyebrow: 'Про мене',
      heading: 'Frontend-розробник, уважний до деталей',
      text: 'Frontend-розробник із понад 5-річним комерційним досвідом створення десктопних і веб-застосунків на JavaScript (ES6+), TypeScript, React.js, Redux та Angular. Реалізовував функціональність для масштабних споживчих продуктів у сфері редагування PDF і обробки фото, якими користуються мільйони людей у всьому світі. Володію компонентною архітектурою, керуванням станом, оптимізацією продуктивності, інтеграцією REST API та модульним тестуванням із Jest. Комфортно працюю в Agile/Scrum командах і продуктових середовищах.',
    },
    skills: {
      eyebrow: 'Технічні навички',
      heading: 'З чим я працюю',
      categories: {
        Languages: 'Мови',
        'Frameworks & Libraries': 'Фреймворки та бібліотеки',
        Styling: 'Стилізація',
        'Performance & Quality': 'Продуктивність і якість',
        Testing: 'Тестування',
        'Tools & Build': 'Інструменти та збірка',
        Workflow: 'Робочий процес',
        'Design Collaboration': 'Співпраця з дизайном',
        'AI-Assisted Development': 'Розробка з AI',
      },
    },
    projects: {
      eyebrow: 'Проєкти',
      heading: 'Проєкти та експерименти',
      viewCase: 'Дивитись проект →',
      caseStudy: 'Проект',
      close: 'Закрити',
      visitWebsite: 'Перейти на сайт',
    },
    projectContent: {
      'inpixio-photo-studio': {
        description: 'Десктопний застосунок для редагування фото для споживчих та просьюмер-користувачів.',
        highlights: [
          'Розробляв UI для десктопного застосунку редагування фото для споживчих та просьюмер-користувачів',
          'Впроваджував компоненти для повторного використання та допомагав формувати архітектуру проєкту з ранніх етапів',
          'Покращував швидкодію застосунку та користувацький досвід завдяки цілеспрямованим оптимізаціям продуктивності',
          'Тісно співпрацював з дизайнерами, backend-розробниками та QA-інженерами в кросфункціональній команді',
        ],
      },
      'soda-pdf-desktop': {
        description: 'Десктопний редактор PDF, що використовується користувачами по всьому світу.',
        highlights: [
          'Розробляв UI-функціональність для десктопного редактора PDF, що використовується користувачами по всьому світу',
          'Створював React-компоненти для повторного використання та структурував архітектуру проєкту для довгострокової підтримки',
          'Досліджував та виправляв виробничі проблеми, виявлені QA та користувачами, покращуючи стабільність застосунку',
        ],
      },
      'soda-pdf-online': {
        description: 'Веб-редактор PDF, яким щомісяця користуються мільйони людей.',
        highlights: [
          'Розробляв нову функціональність та рефакторив застарілі модулі веб-редактора PDF, яким щомісяця користуються мільйони людей',
          'Впровадив бібліотеку UI-компонентів для повторного використання на Sass/SCSS, забезпечуючи узгоджений дизайн продукту',
          'Інтегрував REST API для обробки документів, автентифікації та керування підписками',
          'Писав модульні тести з Jest, що сприяло зростанню тестового покриття та зменшенню регресійних помилок',
          'Співпрацював з дизайнерами у Figma та брав участь у код-рев\'ю та Scrum-церемоніях',
        ],
      },
    },
    music: {
      eyebrow: 'Інше',
      heading: 'Моя музика',
    },
    footer: {
      title: 'Готовий обговорити ваш проєкт',
      text: 'Олександр Куценко — Frontend-розробник (React)',
    },
  },
}
