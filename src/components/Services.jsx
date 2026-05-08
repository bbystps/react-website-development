import {
  FaReact,
  FaBullhorn,
  FaUserTie,
  FaMobileAlt,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

import { services } from "../data/services";

const serviceIcons = {
  react: <FaReact />,
  landing: <FaBullhorn />,
  portfolio: <FaUserTie />,
  responsive: <FaMobileAlt />,
  dashboard: <FaChartBar />,
  deployment: <FaRocket />,
};

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-heading services-heading">
          <p className="section-badge">Services</p>

          <h2>What I can build for you</h2>

          <p>
            Website development services focused on clean design, responsive
            layout, and professional presentation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <div className="service-icon">
                  {serviceIcons[service.icon]}
                </div>

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;