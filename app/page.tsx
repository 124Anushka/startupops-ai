export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <h1>Clarity before execution.</h1>

          <p>For founders and operators who think before they move.</p>

          <div style={{ marginTop: 40 }}>
            <a href="#" className="btn">
              Try StartupOps AI (Free)
            </a>
          </div>

          <p style={{ marginTop: 20, fontSize: 14 }}>
            CURRENTLY RUNS INSIDE CHATGPT WHILE WE BUILD THE NATIVE APP.
          </p>
        </div>
      </section>

      {/* SYSTEMATIC THINKING */}
      <section className="section dark">
        <div className="container">
          <h2>Systematic Thinking</h2>

          <p>
            Chaos comes from unstructured inputs. StartupOps AI acts as the filter,
            transforming messy signals into linear, actionable directives.
          </p>

          <ul style={{ marginTop: 40, lineHeight: 2 }}>
            <li>Input: Raw uncertainty & constraints</li>
            <li>Process: Diagnosis & Framing</li>
            <li>Output: Clear Execution Direction</li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <h2>Pricing</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <h1>₹0</h1>
              <p>Try the thinking style</p>
            </div>

            <div className="pricing-card pricing-featured">
              <h3>Starter</h3>
              <h1>₹499 / month</h1>
              <p>Context-aware reasoning & structured follow-ups</p>
            </div>

            <div className="pricing-card">
              <h3>Pro</h3>
              <h1>₹1999 / month</h1>
              <p>Deep analysis & execution-grade guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOUNDARY */}
      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="container">
          <h2>
            "The boundary exists to prevent premature or incorrect execution."
          </h2>

          <p style={{ marginTop: 30 }}>
            Free mode clarifies thinking. Paid plans compound execution.
          </p>

          <p style={{ marginTop: 50 }}>
            THINK FIRST. EXECUTE WHEN READY.
          </p>
        </div>
      </section>
    </>
  );
}
