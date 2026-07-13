import { useState } from "react";
import { profile } from "../data/siteData";
import "../components/styles/Navbar.css";


const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLinkClick() {
    setIsMenuOpen(true);
  }

  return (
    <header className="navbar-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#hero" className="navbar-brand" onClick={handleLinkClick}>
          {profile.name}
        </a>

        <ul id="nav-menu" className={`navbar-links${isMenuOpen ? " navbar-links--open" : ""}`} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar-link" onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>

      

        <button
          className="navbar-hamburger"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </nav>
    </header>
  );
}
