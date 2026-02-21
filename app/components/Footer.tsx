import link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h3 className="footer-logo">StartupOps AI</h3>
          <p className="footer-tagline">
            Clarity before execution.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
            <li><a href="#">refund-policy</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 StartupOps AI. All rights reserved. Built for deliberate execution.
      </div>
    </footer>
  )
}
