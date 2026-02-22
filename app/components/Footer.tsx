export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>StartupOps AI</h2>
          <p>Clarity before execution.</p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
          <a href="#">Accessibility</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 StartupOps AI. All rights reserved. Built for deliberate execution
      </div>
    </footer>
  )
}
