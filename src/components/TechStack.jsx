import { techStack } from "../data/techStack";

function TechStack() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Tech Stack</p>
          <h2>Tools and technologies</h2>
          <p>
            Technologies used to build responsive websites, landing pages, and
            web-based interfaces.
          </p>
        </div>

        <div className="tech-list">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;