export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="section hero">
        <div className="container center">
          <h1>Clarity before execution.</h1>
          <p className="subtitle">
            Structured thinking for founders and operators who refuse chaotic execution.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Try StartupOps AI
            </a>
            <a href="#how" className="btn-secondary">
              See how it works
            </a>
          </div>

          <p className="small-text">
            Currently runs inside ChatGPT while we build the native platform.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section alt">
        <div className="container">
          <h2 className="section-title center">How it works</h2>

          <div className="grid-3">
            <div className="card">
              <h3>01 — Diagnose</h3>
              <p>
                Identify the real constraint. Separate noise from leverage.
                Most teams execute on symptoms.
              </p>
            </div>

            <div className="card">
              <h3>02 — Design</h3>
              <p>
                Evaluate trade-offs against time, capital, and operational load.
                No fantasy roadmaps.
              </p>
            </div>

            <div className="card">
              <h3>03 — Decide</h3>
              <p>
                Execution only begins when impact is measurable and defensible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ITS FOR */}
      <section id="who" className="section">
        <div className="container">
          <h2 className="section-title center">Who it’s for</h2>

          <div className="grid-3">
            <div className="card">
              <h3>Founder / CEO</h3>
              <p>
                Replace reactive chaos with strategic clarity and disciplined execution.
              </p>
            </div>

            <div className="card">
              <h3>Product Leaders</h3>
              <p>
                Make prioritization decisions transparent, structured, and defensible.
              </p>
            </div>

            <div className="card">
              <h3>Operators</h3>
              <p>
                Align daily execution with measurable outcomes and real constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section alt">
        <div className="container">
          <h2 className="section-title center">Pricing</h2>

          <div className="grid-3 pricing-grid">
            <div className="card pricing-card">
              <h3>Free</h3>
              <div className="price">₹0</div>
              <p>Experience the clarity framework.</p>
              <a href="#contact" className="btn-primary small-btn">Start Free</a>
            </div>

            <div className="card pricing-card featured">
              <h3>Starter</h3>
              <div className="price">₹499<span>/month</span></div>
              <p>Structured reasoning and decision systems.</p>
              <a href="#contact" className="btn-outline small-btn">Join Waitlist</a>
            </div>

            <div className="card pricing-card">
              <h3>Pro</h3>
              <div className="price">₹1999<span>/month</span></div>
              <p>Deep trade-off mapping and execution-grade clarity.</p>
              <a href="#contact" className="btn-primary small-btn">Request Pro Access</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section center">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="subtitle">
            For partnerships, early access, or structured strategic thinking.
          </p>
          <a href="mailto:hello@startupopsai.com" className="btn-primary">
            hello@startupopsai.com
          </a>
        </div>
      </section>

    </main>
  )
}
