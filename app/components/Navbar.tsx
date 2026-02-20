export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">StartupOps AI</div>

        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#who">Who it’s for</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start Free
        </a>
      </div>
    </nav>
  )
}
