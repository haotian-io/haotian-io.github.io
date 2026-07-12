import type { SiteContent } from '../content/types';

export function ProjectsPage({ content }: { content: SiteContent }) {
  return (
    <section className="projects-page" aria-labelledby="projects-title">
      <header>
        <p className="eyebrow">Research</p>
        <h1 id="projects-title">{content.labels.allProjects}</h1>
      </header>
      <div className="project-list">
        {content.projects.map((project) => (
          <article data-testid="project" key={project.id}>
            <div className="project-title">
              <h2>{project.title}</h2>
              <span>{project.status}</span>
            </div>
            <p>{project.summary}</p>
            <strong>{project.result}</strong>
            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer">
                {content.labels.viewProject} →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
