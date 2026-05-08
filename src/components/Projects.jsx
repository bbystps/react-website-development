import { FaBuilding, FaBullhorn, FaChartLine, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

const projectIcons = {
  business: <FaBuilding />,
  landing: <FaBullhorn />,
  dashboard: <FaChartLine />,
};

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading projects-heading">
          <p className="section-badge">Projects</p>

          <h2>Featured website concepts</h2>

          <p>
            Sample website concepts that show different layouts, visual styles,
            and real-world use cases for React website development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">
                  <span>Preview Concept</span>
                  <FaArrowRight />
                </div>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span className="project-icon">
                    {projectIcons[project.icon]}
                  </span>

                  <span className="project-category">{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact" className="project-link">
                  View concept <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;