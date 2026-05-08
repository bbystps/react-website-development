import {
  FaReact,
  FaLayerGroup,
  FaBolt,
  FaCode,
  FaExpandArrowsAlt,
} from "react-icons/fa";

function WhyReact() {
  const benefits = [
    {
      icon: <FaLayerGroup />,
      title: "Reusable Components",
      text: "Build sections once and reuse them across the website.",
    },
    {
      icon: <FaCode />,
      title: "Clean UI Structure",
      text: "Organized frontend code that is easier to maintain.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Frontend",
      text: "Smooth and responsive user interface for modern websites.",
    },
    {
      icon: <FaExpandArrowsAlt />,
      title: "Scalable Design",
      text: "Ready for future pages, features, and dashboard-style layouts.",
    },
  ];

  return (
    <section className="section section-soft why-section">
      <div className="container why-grid">
        <div className="why-content">
          <p className="section-badge why-badge">
            <span className="badge-icon-wrap">
              <FaReact className="badge-icon" />
            </span>
            Why Choose This Service
          </p>

          <h2>Built with React for a modern, scalable frontend</h2>

          <p className="why-text">
            React is ideal for building clean business websites, landing pages,
            portfolios, dashboards, and interactive web interfaces that can grow
            with your needs.
          </p>

          <div className="why-mini-stats">
            <div>
              <strong>Reusable</strong>
              <span>Component-based</span>
            </div>

            <div>
              <strong>Responsive</strong>
              <span>Mobile-ready</span>
            </div>
          </div>
        </div>

        <div className="why-card">
          <div className="why-card-header">
            <div className="why-react-icon">
              <FaReact />
            </div>

            <div>
              <span>ReactJS Frontend</span>
              <h3>Clean, maintainable, and production-ready UI</h3>
            </div>
          </div>

          <div className="why-benefit-grid">
            {benefits.map((benefit) => (
              <article className="why-benefit-card" key={benefit.title}>
                <span className="why-benefit-icon">{benefit.icon}</span>
                <h4>{benefit.title}</h4>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyReact;