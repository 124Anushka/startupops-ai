export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container center">
          <h1>Clarity before execution.</h1>

          <p className="subtitle">
            Structured thinking for founders and operators who refuse chaotic execution.
          </p>

          <div className="hero-buttons">
            <a
              href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      {/* HOW */}
      <section id="how" className="section">
        <div className="container how-layout">

          {/* LEFT */}
          <div className="how-left">
            <h2>Operational Clarity</h2>
            <p>
              We don’t do tasks. We fix the thinking that generates the tasks.
              Diagnose constraints. Surface trade-offs. Decide deliberately.
            </p>
          </div>

          {/* RIGHT */}
          <div className="how-right">

            {/* BLOCK */}
            <div className="how-block">
              <span>01</span>
              <h3>Problem Diagnosis Before Action</h3>

              <div className="how-grid">
                <div>
                  <strong>DIAGNOSIS</strong>
                  <p>
                    Most teams rush into execution while solving the wrong problem.
                  </p>
                </div>

                <div>
                  <strong>BENEFIT</strong>
                  <p>
                    Effort is applied only where it actually changes outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="how-block">
              <span>02</span>
              <h3>Constraint-Aware Decision Making</h3>

              <div className="how-grid">
                <div>
                  <strong>DIAGNOSIS</strong>
                  <p>
                    Plans ignore real limitations like time, capital, and team.
                  </p>
                </div>

                <div>
                  <strong>BENEFIT</strong>
                  <p>
                    Decisions become realistic, defensible, and executable.
                  </p>
                </div>
              </div>
            </div>

            <div className="how-block">
              <span>03</span>
              <h3>Execution Readiness & Trade-Off Clarity</h3>

              <div className="how-grid">
                <div>
                  <strong>DIAGNOSIS</strong>
                  <p>
                    Teams lack a clear signal for when execution is justified.
                  </p>
                </div>

                <div>
                  <strong>BENEFIT</strong>
                  <p>
                    Execution happens only when it delivers leverage — not noise.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Who it’s for</h2>

          <div className="who-grid">

            <div className="card">
              <h3>Startup Founder / CEO</h3>
              <p>
                Overwhelmed by decisions and lack of strategic clarity.
              </p>
            </div>

            <div className="card">
              <h3>Product Manager</h3>
              <p>
                Struggling with prioritization and stakeholder pressure.
              </p>
            </div>

            <div className="card">
              <h3>Solo Operator</h3>
              <p>
                Doing everything with limited time and unclear direction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="section">
        <div className="container system">

          <div>
            <h2>Systematic Thinking</h2>
            <p>
              Transform messy signals into clear execution direction.
            </p>

            <ul>
              <li><strong>Input:</strong> Raw uncertainty</li>
              <li><strong>Process:</strong> Diagnosis</li>
              <li><strong>Output:</strong> Clear execution</li>
            </ul>
          </div>

          <div className="system-box">
            <div>CHAOS → ORDER</div>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Pricing</h2>

          <div className="pricing-grid">

            <div className="pricing-card">
              <h3>Free</h3>
              <p className="price">₹0 / month</p>
              <a className="btn-primary">Try</a>
            </div>

            <div className="pricing-card highlight">
              <h3>Starter</h3>
              <p className="price">₹499 / month</p>
              <a className="btn-secondary">Join</a>
            </div>

            <div className="pricing-card">
              <h3>Pro</h3>
              <p className="price">₹1999 / month</p>
              <a className="btn-primary">Request</a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Think clearly before you execute.</h2>

        <a
          href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai"
          className="btn-primary"
        >
          Start free in ChatGPT
        </a>
      </section>

      {/* CONTACT */}
      <section className="section center">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <a href="mailto:hello@startupopsai.com" className="btn-primary">
            hello@startupopsai.com
          </a>
        </div>
      </section>

    </main>
  );
}
