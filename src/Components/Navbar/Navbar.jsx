import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/icons/Logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Process", "Portfolio", "Blog", "Services"];

  return (
    <header className="portfolio10-navbar">
      <div className="portfolio10-navbar-container">

        {/* LEFT: Logo */}
        <div className="portfolio10-navbar-logo">
          <img src={Logo} alt="Brooklyn logo" className="nav-logo-img" />
          <span className="navbar-brand-name">Brooklyn</span>
        </div>

        {/* CENTER: Nav links */}
        <nav className="portfolio10-navbar-center">
          <ul className={`portfolio10-navbar-menu ${open ? "open" : ""}`}>
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: Actions */}
        <div className="portfolio10-navbar-actions">
          <button className="portfolio10-navbar-btn">Contact</button>
          <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span className="hamburger" />
          </button>
        </div>
      </div>

      {/* MOBILE: dropdown menu */}
      {open && (
        <div className="portfolio10-mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
