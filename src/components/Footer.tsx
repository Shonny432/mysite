import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import './Footer.css'

const GITHUB_URL = 'https://github.com/Shonny432'
const EMAIL_URL = 'mailto:kutsenko.alexander@gmail.com'
const RESUME_URL = '/Oleksandr_Kutsenko_Frontend_Developer_CV.pdf'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <h2 className="footer__title">{t.footer.title}</h2>
          <p className="footer__text">{t.footer.text}</p>
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href={RESUME_URL} download="Oleksandr_Kutsenko_Frontend_Developer_CV.pdf">
            {t.header.downloadCv}
          </a>
          <a className="btn btn--ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn--ghost" href={EMAIL_URL}>
            Gmail
          </a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Oleksandr Kutsenko</p>
    </footer>
  )
}
