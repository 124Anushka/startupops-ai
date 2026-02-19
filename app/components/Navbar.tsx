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
          href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai"
          target="_blank"
          className="btn-primary"
        >
          Start Free
        </a>
      </div>
    </nav>
  );
}
