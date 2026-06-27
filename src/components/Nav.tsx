import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import { useTheme } from '../theme/ThemeContext'
import flagUk from '../assets/flag-uk.svg'
import flagUa from '../assets/flag-ua.svg'
import './Nav.css'

export default function Nav() {
  const { lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const t = translations[lang]

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'other', label: t.nav.other },
  ]

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav__controls">
        <button
          type="button"
          className="nav__theme-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M12 1.5v3M12 19.5v3M3.5 12h-3M23.5 12h-3M5.4 5.4 3.3 3.3M20.7 20.7l-2.1-2.1M5.4 18.6l-2.1 2.1M20.7 3.3l-2.1 2.1"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21 14.5A8.5 8.5 0 0 1 9.5 3a9 9 0 1 0 11.5 11.5Z"
              />
            </svg>
          )}
        </button>

        <div className="nav__lang">
          <button
            type="button"
            className={lang === 'en' ? 'nav__lang-btn nav__lang-btn--active' : 'nav__lang-btn'}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
            aria-label="English"
          >
            <img src={flagUk} alt="" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={lang === 'ua' ? 'nav__lang-btn nav__lang-btn--active' : 'nav__lang-btn'}
            onClick={() => setLang('ua')}
            aria-pressed={lang === 'ua'}
            aria-label="Українська"
          >
            <img src={flagUa} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  )
}
