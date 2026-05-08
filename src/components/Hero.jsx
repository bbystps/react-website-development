import { FaReact, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import heroMockup from "../assets/hero-mockup.png";

function Hero() {
  const heroFeatures = [
    {
      icon: <FaMobileAlt />,
      title: "Responsive",
      text: "Mobile-ready layout",
    },
    {
      icon: <FaPaintBrush />,
      title: "Modern UI",
      text: "Clean visual design",
    },
    {
      icon: <FaReact />,
      title: "ReactJS",
      text: "Component-based frontend",
    },
  ];

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="section-badge hero-badge">
            <span className="badge-icon-wrap">
              <FaReact className="badge-icon" />
            </span>
            React Website Development
          </p>

          <h1>
            Modern websites that help businesses look professional and grow
            online.
          </h1>

          <p className="hero-text">
            I design and build responsive React websites for businesses,
            startups, service providers, and professionals who want a strong
            and modern online presence.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>

            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <img src={heroMockup} alt="Website mockup" className="hero-image" />

            <div className="floating-badge badge-one">Business Websites</div>
            <div className="floating-badge badge-two">Landing Pages</div>
            <div className="floating-badge badge-three">Dashboard UI</div>
          </div>

          <div className="hero-feature-strip">
            {heroFeatures.map((feature) => (
              <div className="hero-feature-card" key={feature.title}>
                <span className="hero-feature-icon">{feature.icon}</span>

                <div>
                  <strong>{feature.title}</strong>
                  <small>{feature.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;