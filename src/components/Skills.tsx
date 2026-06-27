import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      'React.js (Hooks, Context API)',
      'Redux',
      'Redux Toolkit (RTK)',
      'React Router',
      'Angular',
      'SciterJS',
      'Next.js',
    ],
  },
  {
    category: 'Styling',
    items: [
      'Sass/SCSS',
      'CSS-in-JS (styled-components, Emotion)',
      'CSS Modules',
      'Responsive Design',
      'Cross-browser Compatibility',
      'BEM',
      'Flexbox',
      'CSS Grid',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Performance & Quality',
    items: [
      'Code Splitting',
      'Lazy Loading (React.lazy, dynamic imports)',
      'Memoization',
      'Virtualization',
      'Accessibility',
    ],
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library (RTL)', 'Unit Testing', 'Integration Testing', 'Debugging'],
  },
  {
    category: 'Tools & Build',
    items: ['Git', 'Vite', 'Webpack', 'Babel', 'ESLint', 'npm/yarn', 'REST APIs', 'Chrome DevTools'],
  },
  {
    category: 'Workflow',
    items: ['Agile/Scrum', 'Jira', 'Code Reviews'],
  },
  {
    category: 'Design Collaboration',
    items: ['Figma', 'Adobe XD'],
  },
  {
    category: 'AI-Assisted Development',
    items: ['Claude Code', 'Codex'],
  },
]

export default function Skills() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="section skills" id="skills">
      <p className="eyebrow">{t.skills.eyebrow}</p>
      <h2 className="skills__heading">{t.skills.heading}</h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skills__group" key={group.category}>
            <h3 className="skills__category">{t.skills.categories[group.category]}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
