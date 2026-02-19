"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">StartupOps AI</div>

        <div className="nav-links">
          <Link href="#how">How It Works</Link>
          <Link href="#who">Who It's For</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <a
          href="https://chat.openai.com"
          target="_blank"
          className="btn-primary"
        >
          Start Free
        </a>
      </div>
    </nav>
  );
}
