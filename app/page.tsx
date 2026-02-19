export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <h1>Clarity before execution.</h1>

        <p className="subtitle">
          Most founders don’t have an execution problem.
          They have a diagnosis problem.
        </p>

        <p className="small">
          StartupOps AI is a structured thinking partner — currently available inside ChatGPT while we build the native platform.
        </p>

        <div className="buttons">
          <a className="primary" href="#">
            Start Free in ChatGPT
          </a>
          <a className="secondary" href="#how">
            See How It Works
          </a>
        </div>
      </section>


      {/* TENSION */}
      <section className="dark">
        <h2>Motion is not momentum.</h2>

        <p>
          You’re shipping features.  
          Hiring people.  
          Running campaigns.  
          Talking to investors.
        </p>

        <p>
          But something feels misaligned.
        </p>

        <p>
          Progress feels noisy.  
          Energy feels scattered.  
          Decisions feel reactive.
        </p>

        <p>
          The issue isn’t effort.  
          It’s misdiagnosis.
        </p>
      </section>


      {/* WHAT WE DO */}
      <section>
        <h2>We identify the real constraint.</h2>

        <p className="section-intro">
          Every business has one dominant constraint.
          Until it’s clear, everything else is distraction.
        </p>

        <ul className="bullets">
          <li>One clear constraint</li>
          <li>One execution priority</li>
          <li>One disciplined next move</li>
        </ul>
      </section>


      {/* HOW IT WORKS */}
      <section id="how" className="dark">
        <h2>Structured thinking. Not random prompting.</h2>

        <div className="steps">
          <div>
            <h3>1. Describe reality</h3>
            <p>No polished pitch. No positioning spin. Just what’s actually happening.</p>
          </div>

          <div>
            <h3>2. Diagnose the constraint</h3>
            <p>We identify what is truly limiting progress — not what feels urgent.</p>
          </div>

          <div>
            <h3>3. Gate execution</h3>
            <p>No scattered effort. No parallel chaos. One direction at a time.</p>
          </div>
        </div>
      </section>


      {/* PRICING */}
      <section>
        <h2>Pricing</h2>

        <div className="pricing">

          <div className="card">
            <h3>Free</h3>
            <p className="price">₹0</p>
            <p>Experience the thinking model</p>
            <p>Constraint identification</p>
          </div>

          <div className="card featured">
            <h3>Starter</h3>
            <p className="price">₹499 / month</p>
            <p>Structured follow-ups</p>
            <p>Execution gating</p>
            <p>Decision clarity loops</p>
          </div>

          <div className="card">
            <h3>Pro</h3>
            <p className="price">₹1999 / month</p>
            <p>Deep operational diagnosis</p>
            <p>Priority mapping</p>
            <p>Ongoing strategic clarity</p>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="final">
        <h2>Don’t move faster. Move correctly.</h2>

        <p className="small">
          Clarity compounds. Chaos compounds faster.
        </p>

        <a className="primary" href="#">
          Start Free in ChatGPT
        </a>
      </section>

    </main>
  );
}

