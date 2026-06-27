import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import './ProjectModal.css'

type Props = {
  project: Project | null
  origin: { x: number; y: number }
  onClose: () => void
}

export default function ProjectModal({ project, origin, onClose }: Props) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-mask"
          style={{ '--card-accent': project.color } as React.CSSProperties}
          initial={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
          animate={{ clipPath: `circle(150% at ${origin.x}px ${origin.y}px)` }}
          exit={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose} aria-label={t.projects.close}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 4L20 20M20 4L4 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <p className="eyebrow">{t.projects.caseStudy}</p>
            <h3 className="modal__title">{project.title}</h3>
            <ul className="modal__highlights">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="modal__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a className="modal__link" href={project.url} target="_blank" rel="noreferrer">
              {t.projects.visitWebsite}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
