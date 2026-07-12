import type { SiteContent } from '../content/types';

export function HomePage({ content }: { content: SiteContent }) {
  const selected = content.projects
    .filter((project) => project.selected)
    .slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Xiamen University · Software Engineering</p>
          <h1 id="hero-title">{content.identity.name}</h1>
          <p className="hero-role">{content.identity.role}</p>
          <ul className="interest-list" aria-label="Research interests">
            {content.identity.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
          <div className="profile-links" aria-label="Professional profiles">
            <a href="mailto:haotianliu.me@gmail.com">Email</a>
            <a
              href="https://github.com/haotian-io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/haotian-liu-a92492347/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=hemBmosAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Scholar
            </a>
          </div>
        </div>
        <img
          src="https://github.com/haotian-io.png?size=240"
          alt="Portrait of Haotian Liu"
        />
      </section>

      <section className="about" aria-label="About">
        <p>{content.identity.about}</p>
      </section>

      <section className="section" aria-labelledby="publications-title">
        <h2 id="publications-title">{content.labels.publications}</h2>
        <div className="rows">
          {content.publications.slice(0, 3).map((publication) => (
            <article
              className="publication-row"
              data-testid="publication"
              key={publication.title}
            >
              <div>
                <h3>
                  {publication.href ? (
                    <a href={publication.href} target="_blank" rel="noreferrer">
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p>{publication.role}</p>
              </div>
              <span>{publication.venue}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="selected-title">
        <div className="section-heading">
          <h2 id="selected-title">{content.labels.selectedProjects}</h2>
          <a href="#/projects">{content.labels.allProjects} →</a>
        </div>
        <div className="project-grid">
          {selected.map((project) => (
            <article
              className="project-card"
              data-testid="selected-project"
              key={project.id}
            >
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <strong>{project.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section experience"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title">{content.labels.experience}</h2>
        <div>
          <h3>{content.experience.organization}</h3>
          <p>
            {content.experience.role} · {content.experience.period}
          </p>
          <p>{content.experience.summary}</p>
        </div>
      </section>
    </>
  );
}
