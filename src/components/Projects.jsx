import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Projects.css'

// Verifica se um link é real (não é placeholder)
const isValidLink = (url) => Boolean(url) && !url.startsWith('[')

export default function Projects() {
  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )
  const [filter, setFilter] = useState('Todos')

  const visible = filter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projetos"
          title="Casos práticos e experiências"
          subtitle="Casos reais do meu dia a dia com integrações, dados e SQL."
        />

        <Reveal className="project-filters" role="tablist" aria-label="Filtrar projetos por categoria">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`project-filter ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {visible.map((project, index) => (
            <Reveal
              key={project.id}
              as="article"
              className={`card project-card ${project.featured ? 'is-featured' : ''}`}
              delay={index * 60}
            >
              {project.featured && <span className="project-featured">Destaque</span>}

              <div className="project-head">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  {isValidLink(project.github) && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${project.title}`}>
                      <Icon name="github" size={18} />
                    </a>
                  )}
                  {isValidLink(project.demo) && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demonstração: ${project.title}`}>
                      <Icon name="external" size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <p className="project-objective">
                <span className="project-label">Objetivo</span>
                {project.objective}
              </p>

              <div className="project-features">
                <span className="project-label">Funcionalidades</span>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                {isValidLink(project.github) ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-cta">
                    <Icon name="github" size={16} />
                    Ver código
                  </a>
                ) : (
                  <span className="project-cta project-cta--disabled">
                    <Icon name="github" size={16} />
                    Em breve
                  </span>
                )}
                {isValidLink(project.demo) && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-cta">
                    <Icon name="external" size={16} />
                    Demonstração
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
