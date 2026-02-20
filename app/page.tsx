export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="section hero-section">
        <div className="container hero">
          <h1>
            Clarity before <span>execution.</span>
          </h1>

          <p className="hero-sub">
            For founders and operators who think before they move.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              Try StartupOps AI (Free)
            </a>
            <a href="#how" className="btn-secondary">
              See how it works
            </a>
          </div>

          <p className="hero-note">
            Currently runs inside ChatGPT while we build the native platform.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="container narrow">
          <h2 className="section-title">
            Operational clarity, structured.
          </h2>

          <div className="three-col">

            <div className="card">
              <h3>01 — Diagnose</h3>
              <p>
                Isolate the real constraint. Separate noise from leverage.
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
                Execution happens only when impact is measurable and defensible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="who" className="section alt">
        <div className="container narrow">
          <h2 className="section-title">
            Built for serious operators.
          </h2>

          <div className="three-col">

            <div className="card">
              <h3>Founder / CEO</h3>
              <p>
                Reduce chaos. Focus on strategic leverage instead of reactive execution.
              </p>
            </div>

            <div className="card">
              <h3>Product Leader</h3>
              <p>
                Clarify prioritization decisions. Make trade-offs visible and defensible.
              </p>
            </div>

            <div className="card">
              <h3>Operations Manager</h3>
              <p>
                Align execution with real constraints and measurable outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container narrow">
          <h2 className="section-title">
            Pricing
          </h2>

          <div className="pricing-grid">

            <div className="price-card">
              <h3>Free</h3>
              <p className="price">₹0</p>
              <p>Experience the clarity system.</p>
              <a href="#" className="btn-primary full">
                Start Free
              </a>
            </div>

            <div className="price-card featured">
              <h3>Starter</h3>
              <p className="price">₹499<span>/month</span></p>
              <p>Structured reasoning & decision frameworks.</p>
              <a href="#" className="btn-secondary full">
                Join Waitlist
              </a>
            </div>

            <div className="price-card">
              <h3>Pro</h3>
              <p className="price">₹1999<span>/month</span></p>
              <p>Deep trade-off mapping and execution-grade clarity.</p>
              <a href="#" className="btn-primary full">
                Request Access
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta">
        <div className="container narrow">
          <h2>Think clearly before you execute.</h2>
          <a href="#" className="btn-primary">
            Start Free in ChatGPT
          </a>
        </div>
      </section>

    </main>
  )
}
