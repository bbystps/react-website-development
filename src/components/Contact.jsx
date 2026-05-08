import { FaEnvelope, FaRocket, FaCheckCircle } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="contact-content">
            <p className="section-badge contact-badge">
              <span className="badge-icon-wrap">
                <FaEnvelope className="badge-icon" />
              </span>
              Contact
            </p>

            <h2>Need a modern website for your business?</h2>

            <p>
              Let’s build a clean and professional React website that helps
              present your services, build trust, and strengthen your online
              presence.
            </p>

            <div className="contact-highlights">
              <span>
                <FaCheckCircle />
                Responsive layout
              </span>

              <span>
                <FaCheckCircle />
                Clean React structure
              </span>

              <span>
                <FaCheckCircle />
                Deployment ready
              </span>
            </div>
          </div>

          <div className="contact-action-card">
            <div className="contact-action-icon">
              <FaRocket />
            </div>

            <h3>Ready to start?</h3>

            <p>
              Send an inquiry and let’s discuss your website idea, target users,
              and required sections.
            </p>

            <div className="contact-buttons">
              <a href="mailto:your-email@example.com" className="btn btn-primary">
                Send Inquiry
              </a>

              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;