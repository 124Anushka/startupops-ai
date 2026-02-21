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

      <section id="who" className="who-section">
  <div className="who-header">
    <h2>Who it’s for</h2>
    <p className="who-tagline">
      Designed for high-leverage operators.
    </p>
  </div>

  <div className="who-divider"></div>

  <div className="who-grid">

    {/* COLUMN 1 */}
    <div className="who-card">
      <h3>Startup Founder / CEO</h3>
      <div className="mini-line"></div>

      <p className="who-main">
        Overwhelmed by operational noise, constant decisions,
        and lack of strategic focus.
      </p>

      <div className="card-divider"></div>

      <p className="who-sub">
        “StartupOps AI isolates the real constraint behind your growth
        bottlenecks, ensuring decisions are deliberate and leverage-driven
        — not reactive.”
      </p>
    </div>

    {/* COLUMN 2 */}
    <div className="who-card">
      <h3>Product Manager / Product Lead</h3>
      <div className="mini-line"></div>

      <p className="who-main">
        Struggling with prioritization pressure,
        stakeholder noise, and unclear trade-offs.
      </p>

      <div className="card-divider"></div>

      <p className="who-sub">
        “StartupOps AI structures decisions against real constraints,
        making every roadmap choice defensible and executable.”
      </p>
    </div>

    {/* COLUMN 3 */}
    <div className="who-card">
      <h3>Solo Operator / Early-Stage Builder</h3>
      <div className="mini-line"></div>

      <p className="who-main">
        Doing everything at once with limited
        time, capital, and operational clarity.
      </p>

      <div className="card-divider"></div>

      <p className="who-sub">
        “StartupOps AI eliminates chaotic motion and clarifies
        what actually deserves execution.”
      </p>
    </div>

  </div>
</section>

      <section id="pricing" className="pricing-section">
  <div className="pricing-header">
    <h2>Pricing</h2>
    <p className="pricing-sub">
      "Payments open next week — early users get priority pricing."
    </p>
  </div>

  <div className="pricing-grid">

    {/* FREE */}
    <div className="pricing-card">
      <h3>Free</h3>
      <div className="price">
        ₹0 <span>/ month</span>
      </div>

      <p className="plan-tag">Try the thinking style</p>

      <ul>
        <li>Design to experience the clarity framework</li>
      </ul>

      <a href="#" className="btn-primary full-btn">
        Try in ChatGPT
      </a>
    </div>

    {/* STARTER */}
    <div className="pricing-card featured">
      <div className="popular">MOST POPULAR</div>

      <h3>Starter</h3>
      <div className="price">
        ₹499 <span>/ month</span>
      </div>

      <p className="plan-tag">For solo founders & builders</p>

      <ul>
        <li>Context-aware reasoning</li>
        <li>Structured follow-ups</li>
      </ul>

      <a href="#" className="btn-outline full-btn">
        Join Waitlist
      </a>
    </div>

    {/* PRO */}
    <div className="pricing-card">
      <h3>Pro</h3>
      <div className="price">
        ₹1999 <span>/ month</span>
      </div>

      <p className="plan-tag">For serious operators</p>

      <ul>
        <li>Deep trade-off mapping</li>
        <li>Execution-grade clarity</li>
      </ul>

      <a href="#" className="btn-primary full-btn">
        Request Pro Access
      </a>
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
