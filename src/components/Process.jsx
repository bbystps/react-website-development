import { processSteps } from "../data/processSteps";

function Process() {
  return (
    <section id="process" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="section-badge">Process</p>
          <h2>How I build websites</h2>
          <p>
            A simple process that keeps the project clear, organized, and
            focused.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;