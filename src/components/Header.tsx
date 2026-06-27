import { useRef } from 'react'
import { useScrollY } from '../hooks/useScrollY'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import Kaleidoscope from './Kaleidoscope'
import './Header.css'

const GITHUB_URL = 'https://github.com/Shonny432'
const LINKEDIN_URL = 'https://www.linkedin.com/in/oleksandr-kutsenko-053b4248/'
const EMAIL_URL = 'mailto:kutsenko.alexander@gmail.com'
const RESUME_URL = '/resume.pdf'

export default function Header() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  useScrollY(parallaxRef)
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <header className="hero" ref={parallaxRef}>
      <div className="hero__layer hero__layer--far" />
      <div className="hero__layer hero__layer--kaleidoscope">
        <Kaleidoscope />
      </div>
      <div className="hero__layer hero__layer--grain" />

      <div className="hero__content">
        <p className="eyebrow">{t.header.role}</p>
        <h1 className="hero__name">
          Oleksandr
          <br />
          Kutsenko
        </h1>
        <p className="hero__tagline">{t.header.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={RESUME_URL} download="Oleksandr_Kutsenko_Frontend_Developer_CV.pdf">
            {t.header.downloadCv}
          </a>
          <a
            className="btn btn--ghost"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.41-1.31.74-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={EMAIL_URL}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.8 6.1 7.8-6.1a.5.5 0 0 0-.3-.9H4.5a.5.5 0 0 0-.3.9ZM4 7.9v10.6c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.9l-7.69 6.02a.5.5 0 0 1-.62 0L4 7.9Z" />
            </svg>
            Gmail
          </a>
        </div>
      </div>

      <div className="hero__scrollcue" aria-hidden="true">
        <span />
      </div>
    </header>
  )
}
