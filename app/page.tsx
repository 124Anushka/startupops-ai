export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container center">
          <h1>Clarity before execution.</h1>
          <p className="hero-sub">
            StartupOps AI is a decision-discipline partner for founders
            who are tired of reacting and ready to think systematically.
          </p>
          <p className="subtle">
            Currently available inside ChatGPT while we build the native platform.
          </p>

          <div className="hero-buttons">
            <a
              href="https://chat.openai.com"
              target="_blank"
              className="btn-primary"
            >
              Start Free in ChatGPT
            </a>

            <a href="#how" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>
      </section>


      {/* PROBLEM */}
      <section className="section dark">
        <div className="container center">
          <h2>Most founders don’t lack effort.</h2>
          <p className="big-text">
            They lack clarity.
          </p>

          <p>
            You’re shipping features. Hiring people. Running sales.
            But underneath the motion, something feels misaligned.
          </p>

          <p>
            Startup chaos is rarely about speed.
            It’s about not knowing the real constraint.
          </p>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="container center">
          <h2>Systematic Thinking</h2>

          <div className="flow-box">
            <div className="chaos">Unclear Situation</div>
            <div className="arrow">→</div>
            <div className="order">Focused Direction</div>
          </div>

          <div className="how-steps">
            <div className="step">
              <h3>1. Describe the Mess</h3>
              <p>
                Share the raw situation — confusion, constraints,
                misalignment, growth pain.
              </p>
            </div>

            <div className="step">
              <h3>2. Diagnose the Constraint</h3>
              <p>
                StartupOps AI identifies what actually matters
                instead of treating surface symptoms.
              </p>
            </div>

            <div className="step">
              <h3>3. Execute with Precision</h3>
              <p>
                You move forward with a clear execution priority —
                not scattered tasks.
              </p>
            </div>
          </div>

          <p className="subtle">
            We don’t give motivation. We give diagnosis.
          </p>
        </div>
      </section>


      {/* EXAMPLE OUTPUT */}
      <section className="section dark">
        <div className="container center">
          <h2>Example Output</h2>

          <div className="example-box">
            <p><strong>Your Input:</strong> “We’re growing fast but everything feels unstable.”</p>
            <p><strong>Diagnosis:</strong> Growth without operational clarity.</p>
            <p><strong>Core Constraint:</strong> Undefined ownership and accountability.</p>
            <p><strong>Execution Direction:</strong> Create a decision map before hiring more.</p>
          </div>

          <p className="subtle">
            Clear problem → Clear constraint → Clear action.
          </p>
        </div>
      </section>


      {/* WHO IT'S FOR */}
      <section id="who" className="section">
        <div className="container">
          <h2>Who It’s For</h2>

          <div className="cards">

            <div className="card">
              <h3>Startup Founder / CEO</h3>
              <p>
                You are juggling product, hiring, growth, and operations.
                Every decision feels urgent.
                You need structure — not more hustle.
              </p>
            </div>

            <div className="card">
              <h3>Operations Leader</h3>
              <p>
                Systems are breaking as you scale.
                You need clarity before adding more process.
              </p>
            </div>

            <div className="card">
              <h3>HR / People Lead</h3>
              <p>
                Building foundational infrastructure from scratch.
                High stakes. Limited bandwidth.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* WHY NOT JUST CHATGPT */}
      <section className="section dark">
        <div className="container center">
          <h2>Why Not Just Use ChatGPT?</h2>

          <p>
            ChatGPT gives answers.
            StartupOps AI applies structured operational thinking.
          </p>

          <ul className="compare-list">
            <li>Focused on identifying constraints</li>
            <li>No generic productivity advice</li>
            <li>No motivational fluff</li>
            <li>Built specifically for startup operators</li>
          </ul>
        </div>
      </section>


      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container center">
          <h2>Early Feedback</h2>

          <div className="testimonial">
            <p>
              “It forced me to slow down and see the real issue.
              I was solving symptoms for months.”
            </p>
            <span>— Early-stage SaaS Founder</span>
          </div>
        </div>
      </section>


      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container center">
          <h2>Pricing</h2>

          <p className="subtle">
            This is not a productivity tool.
            This is structured decision infrastructure.
          </p>

          <div className="pricing-grid">

            <div className="pricing-card">
              <h3>Free</h3>
              <h4>₹0</h4>
              <p>Experience the thinking model</p>
              <button className="btn-primary">
                Try in ChatGPT
              </button>
            </div>

            <div className="pricing-card highlight">
              <h3>Starter</h3>
              <h4>₹499 / month</h4>
              <p>For solo founders and operators</p>
              <button className="btn-secondary">
                Join Waitlist
              </button>
            </div>

            <div className="pricing-card">
              <h3>Pro</h3>
              <h4>₹1999 / month</h4>
              <p>Advanced operational diagnosis & priority mapping</p>
              <button className="btn-primary">
                Request Pro Access
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="section center final-cta">
        <h2>Think clearly before you execute.</h2>

        <a
          href="https://chat.openai.com"
          target="_blank"
          className="btn-primary"
        >
          Start Free in ChatGPT
        </a>

        <p className="subtle">
          Stop reacting. Start diagnosing.
        </p>
      </section>

    </main>
  )
}
