import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#" className="brand">
          <img src={logo} alt="Logo" className="brand-logo" />
          <span>Jefrey Bonyad</span>
        </a>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn btn-dark">
          Let’s Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;