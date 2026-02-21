export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <a href="/" className="logo">
          StartupOps AI
        </a>

        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#who">Who it’s for</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Free
        </a>

      </div>
    </nav>
  )
}
