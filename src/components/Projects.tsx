import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import './Projects.css'

export default function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [origin, setOrigin] = useState({ x: 0, y: 0 })

  const localizedProjects: Project[] = projects.map((project) => ({
    ...project,
    ...t.projectContent[project.id],
  }))

  const selected = localizedProjects.find((project) => project.id === selectedId) ?? null

  const openProject = (project: Project, point: { x: number; y: number }) => {
    setOrigin(point)
    setSelectedId(project.id)
  }

  return (
    <section className="section projects" id="projects">
      <p className="eyebrow">{t.projects.eyebrow}</p>
      <h2 className="projects__heading">{t.projects.heading}</h2>
      <div className="projects__grid">
        {localizedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={openProject} />
        ))}
      </div>

      <ProjectModal project={selected} origin={origin} onClose={() => setSelectedId(null)} />
    </section>
  )
}
