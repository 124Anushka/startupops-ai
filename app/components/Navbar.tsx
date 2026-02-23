"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <a href="/" className="logo">StartupOps AI</a>

        {/* HAMBURGER */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#who" onClick={() => setMenuOpen(false)}>Who it's for</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a
            href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffef153c3-startupops-ai"
            className="btn-primary mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free
          </a>

        </div>

      </div>
    </nav>
  );
}
