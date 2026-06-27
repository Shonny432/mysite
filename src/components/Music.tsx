import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import { useInView } from '../hooks/useInView'
import './Music.css'

const SPOTIFY_ARTIST_ID = '7juGSQjYepHQNUApLLDeyU'

export default function Music() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const { ref, inView } = useInView<HTMLHeadingElement>()

  return (
    <section className="section music" id="other">
      <p className="eyebrow">{t.music.eyebrow}</p>
      <h2 ref={ref} className={`music__heading reveal ${inView ? 'reveal--visible' : ''}`}>
        {t.music.heading}
      </h2>
      <div className="music__embed">
        <iframe
          title="Spotify artist"
          src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  )
}
