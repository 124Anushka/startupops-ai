export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">

        <a href="/" className="nav-logo">
          StartupOps AI
        </a>

        <div className="nav-center">
          <a href="#how">How it works</a>
          <a href="#who">Who it’s for</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#pricing" className="nav-cta">
          Start Free
        </a>

      </div>
    </nav>
  )
}
