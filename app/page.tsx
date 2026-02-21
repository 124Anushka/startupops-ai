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

      <section id="how" className="how-section">
  <div className="how-container">

    {/* LEFT SIDE */}
    <div className="how-left">
      <h2>Operational<br />Clarity</h2>
      <p>
        We don’t do tasks. We fix the thinking that generates the tasks.
        Diagnose constraints. Surface trade-offs. Decide deliberately.
      </p>
      <div className="line"></div>
    </div>

    {/* RIGHT SIDE */}
    <div className="how-right">

      {/* 01 */}
      <div className="how-block">
        <span className="how-number">01</span>
        <h3>Problem Diagnosis Before Action</h3>

        <div className="how-grid">
          <div>
            <span className="label">DIAGNOSIS</span>
            <p>
              Most teams rush into execution while solving the wrong problem.
              Signals are noisy, opinions conflict, and surface symptoms get treated
              instead of root causes.
            </p>
          </div>

          <div>
            <span className="label">BENEFIT</span>
            <p>
              StartupOps AI isolates the true constraint behind the situation,
              ensuring effort is applied only where it actually changes outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* 02 */}
      <div className="how-block">
        <span className="how-number">02</span>
        <h3>Constraint-Aware Decision Making</h3>

        <div className="how-grid">
          <div>
            <span className="label">DIAGNOSIS</span>
            <p>
              Plans often fail because they’re designed in ideal conditions,
              ignoring real limitations like time, capital, people,
              and operational load.
            </p>
          </div>

          <div>
            <span className="label">BENEFIT</span>
            <p>
              Every recommendation is evaluated against your actual constraints,
              producing decisions that are realistic, defensible, and executable.
            </p>
          </div>
        </div>
      </div>

      {/* 03 */}
      <div className="how-block">
        <span className="how-number">03</span>
        <h3>Execution Readiness & Trade-Off Clarity</h3>

        <div className="how-grid">
          <div>
            <span className="label">DIAGNOSIS</span>
            <p>
              Execution too early creates waste; execution too late creates drift.
              Most teams lack a clear signal for when action is justified.
            </p>
          </div>

          <div>
            <span className="label">BENEFIT</span>
            <p>
              StartupOps AI clarifies trade-offs, priorities, and timing so execution
              happens only when it delivers leverage — not noise.
            </p>
          </div>
        </div>
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
