import { services } from "../data/services";

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-badge">Services</p>
          <h2>What I can build for you</h2>
          <p>
            Website development services focused on clean design, responsive
            layout, and professional presentation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
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