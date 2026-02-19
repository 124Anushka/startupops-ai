export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <h1>
          Clarity before <span>execution.</span>
        </h1>
        <p>
          For founders and operators who think before they move.
        </p>

        <div className="subline">
          Currently runs inside ChatGPT while we build the native app.
        </div>

        <div className="hero-buttons">
          <a href="/chat" className="btn primary">
            Start free in ChatGPT
          </a>
          <a href="#pricing" className="btn secondary">
            See how it works
          </a>
        </div>
      </section>


      {/* SYSTEM SECTION */}
      <section className="dark-section">
        <h2>Systematic Thinking</h2>

        <div className="chaos-box">CHAOS</div>
        <div className="order-box">ORDER</div>
      </section>


      {/* PRICING */}
      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <p>Payments open next week — early users get priority pricing.</p>

        <div className="pricing-grid">

          <div className="card">
            <h3>Free</h3>
            <div className="price">₹0</div>
            <p>Experience the thinking style</p>
            <ul>
              <li>Constraint diagnosis prompts</li>
              <li>Structured clarity sessions</li>
            </ul>
            <a href="/chat" className="btn primary">
              Try in ChatGPT
            </a>
          </div>

          <div className="card dark-card">
            <h3>Starter</h3>
            <div className="price">₹499 / month</div>
            <p>For solo founders & builders</p>
            <ul>
              <li>Context-aware reasoning</li>
              <li>Structured follow-ups</li>
              <li>Execution gating</li>
            </ul>
            <button className="btn secondary">
              Join Waitlist
            </button>
          </div>

          <div className="card">
            <h3>Pro</h3>
            <div className="price">₹1999 / month</div>
            <p>For serious operators</p>
            <ul>
              <li>Deep trade-off mapping</li>
              <li>Constraint modeling</li>
              <li>Execution-grade guidance</li>
            </ul>
            <button className="btn primary">
              Request Pro Access
            </button>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="cta">
        <h2>Think clearly before you execute.</h2>
        <a href="/chat" className="btn primary">
          Start free in ChatGPT
        </a>
      </section>

    </main>
  );
}
