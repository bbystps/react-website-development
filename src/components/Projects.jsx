import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-badge">Projects</p>
          <h2>Featured website concepts</h2>
          <p>
            Add your actual screenshots here so the page looks more realistic
            and portfolio-ready.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;