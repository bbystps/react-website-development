import {
  FaSearch,
  FaPencilRuler,
  FaReact,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

import { processSteps } from "../data/processSteps";

const processIcons = {
  discovery: <FaSearch />,
  design: <FaPencilRuler />,
  development: <FaReact />,
  testing: <FaMobileAlt />,
  deployment: <FaRocket />,
};

function Process() {
  return (
    <section id="process" className="section section-soft process-section">
      <div className="container">
        <div className="section-heading process-heading">
          <p className="section-badge">Process</p>

          <h2>How I build websites</h2>

          <p>
            A simple workflow that keeps the project organized from planning to
            deployment.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-card-header">
                <span className="step-number">{step.number}</span>

                <span className="process-icon">
                  {processIcons[step.icon]}
                </span>
              </div>

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