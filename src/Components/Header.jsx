import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">BK Nesrine</a>
      <nav className={`navigation ${menuOpen ? "active" : ""}`}>
        <a href="#formation" onClick={() => setMenuOpen(false)}>Formation</a>
        <a href="#competences" onClick={() => setMenuOpen(false)}>Compétences</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Icône de menu hamburger */}
      </div>
    </header>
  );
};

export default Header;
