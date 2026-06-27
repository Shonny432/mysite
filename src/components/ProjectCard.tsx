import { useTilt } from '../hooks/useTilt'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import './ProjectCard.css'

type Props = {
  project: Project
  onOpen: (project: Project, origin: { x: number; y: number }) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  const { ref, onPointerMove, onPointerLeave } = useTilt<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = translations[lang]

  const handleClick = (e: React.MouseEvent) => {
    onOpen(project, { x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="card"
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={handleClick}
      style={{ '--card-accent': project.color } as React.CSSProperties}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen(project, { x: window.innerWidth / 2, y: window.innerHeight / 2 })
      }}
    >
      <div className="card__glow" />
      <div className="card__art">
        {project.image && <img className="card__image" src={project.image} alt={project.title} />}
      </div>
      <div className="card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.description}</p>
        <ul className="card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className="card__cta">{t.projects.viewCase}</span>
      </div>
    </div>
  )
}
