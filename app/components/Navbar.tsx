"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);
  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>StartupOps AI</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href= "#who-it's-for">Who it's for</a>
          <a href= "#pricing">Pricing</a>
          <Link href= "/contact">Contact</Link>
        </div>

        {/* HAMBURGER */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

          <button
            className="menu-close"
            onClick={() => setMenuOpen(false)}
          >
          ×
          </button>
          
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#who-it's-for" onClick={() => setMenuOpen(false)}>Who it's for</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a
            href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai"
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
