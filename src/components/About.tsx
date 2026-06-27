import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import './About.css'

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="section about" id="about">
      <p className="eyebrow">{t.about.eyebrow}</p>
      <h2 className="about__heading">{t.about.heading}</h2>

      <div className="about__row">
        <div className="about__profile">
          <img
            className="about__photo"
            src="/images/oleksandr.jpg"
            alt="Oleksandr Kutsenko"
            width="194"
            height="194"
          />
          <p className="about__caption">
            <em>Oleksandr Kutsenko</em>
            <br />
            Frontend Developer
          </p>
        </div>

        <p className="about__text">{t.about.text}</p>
      </div>
    </section>
  )
}
