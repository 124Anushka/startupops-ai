"use client";
export default function Home() {

  
  const handleSubmit = async (email: string, name: string = "") => {
    if (!email || !email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzPIGHQjAl9GuC9KYmyxsYaQdvJbOEPv59U1-8vjsIPCOH4gAt2oWb5Zn8ahXSE_o5JWA/exec", {
        method: "POST",
        body: JSON.stringify({ email, name }),
      });
    } catch (err) {
      console.log(err);
    }

    window.location.href =
      "https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai";
  };
  return (
    <main>

      {/* HERO */}
      <section id="about" className="hero"> 
        <div className="container center"> 
          <p className="badge"> 70+ founders diagnosed • free to try </p> 
          <h1> Most founders don't have an execution problem.<br /> They have a diagnosis problem. </h1> 
          
          <p className="subtitle"> StartupOps AI diagnosis what's actually blocking your startup, and tell you exactly what to fix next. </p> 
          
          <p className="subtitle-strong"> 2 minutes. One answer. One clear move. </p> 
          <div className="hero-buttons"> 

        <div className="lead-card">

  <h2 className="lead-title">
    Find what's actually blocking you
  </h2>

  <p className="lead-sub">
    Free diagnosis · 2 minutes · No fluff — just your #1 bottleneck + one clear next action
  </p>

  <input
    type="text"
    placeholder="Your first name"
    className="lead-input"
    id="nameInput"
  />

  <input
    type="email"
    placeholder="your@email.com"
    className="lead-input"
    id="emailInput"
  />

  <button
    className="lead-button"
    onClick={() => {
  const email = (document.getElementById("emailInput") as HTMLInputElement).value;
  const name = (document.getElementById("nameInput") as HTMLInputElement).value;

  handleSubmit(email, name);
}}



  >
    Get My Free Diagnosis →
  </button>

  <p className="lead-proof">
    Used by SaaS, B2B & solo founders · No spam, ever
  </p>

</div>




          </div> 
          <p className="micro-proof"> 
            No signup. Just answers. </p> 



<div className= "stats">
  <div className="stat">
    <h3>70+</h3>
    <p>Founders diagnosed</p>
  </div>

  <div className= "stat">
    <h3>2 min</h3>
    <p>To your bottleneck</p>
  </div>

  <div className ="stat">
    <h3>Free</h3>
    <p>To try right now</p>
  </div>
</div>


<p className ="trust-line">
  Used by SaaS founders, B2B operators, and solo builders at the idea-to-traction stage
</p>


<div className ="testimonials">

  <div className ="testimonial">
    <p>
      "Realized my 'growth problem' was actually a positioning problem. Saved me months of wrong marketing."
    </p>
    <span>— SaaS founder, pre-seed</span>
  </div>

  <div className ="testimonial">
    <p>
      "I thought I needed to hire. Turns out I was doing work that shouldn't exist yet. Complete mindset shift."
    </p>
    <span>— Solo operator, B2B</span>
  </div>

  <div className ="testimonial">
    <p>
      "First tool that didn’t just tell me to 'talk to users' — it told me which users and exactly what to ask."
    </p>
    <span>— Product lead, early-stage startup</span>
  </div>

</div>





          
          
          {/* 🔥 Conversion booster */} 
          <div className="outcomes"> 
            <p className="outcomes-title">What you'll walk away with:</p> 
            <ul> <li>"You're solving for users don't care enough to switch"</li> 
              <li>"Users don't feel this problem strongly enough to act"</li> 
              <li>"Your positioning is unclear, so nothing sticks"</li> 
              <li>"You're solving symptoms, not the real constraint"</li> 
            </ul> </div> 
          
          <p className="urgency"> Every extra week you spend on the wrong problem = time your competitors spend on the right one. </p> 
          
          <p className="tagline-soft"> Clarity before execution. </p> 
        </div> </section>


      
<section className="section">
  <div className="container center">
    <p className="proof-line">
      70+ founders diagnosed across product, growth, and positioning.
    </p>
  </div>
</section>



     {/* 🔥 PROOF (NEW — CRITICAL) */}
<section className="section">
  <div className="container center">

    <p className="proof-title">What a real diagnosis looks like:</p>

    <div className="proof-box">
      <p className="proof-text">
        “Your problem isn’t growth — it’s weak problem urgency.
        Users understand your product, but don’t feel enough pain to switch.”
      </p>

      <p className="proof-fix">
        → Fix: Focus on users actively experiencing this weekly  
        <br />
        → Stop: Adding features before demand is real
      </p>
    </div>

  </div>
</section>


      
<p className="built-line">
  Built using real startup patterns across product, growth, retention & monetization
</p>

      {/* HOW IT WORKS */}
      <section className="how">

  <p className="how-label">— HOW IT WORKS</p>

  <h2 className="how-title">
    Diagnose first.<br />
    <span>Then execute.</span>
  </h2>

  <div className="steps">

    
    <div className="step">
      <div className="step-number">01</div>

      <p className="step-tag">INPUT — 60 SECONDS</p>

      <h3>Describe where you're stuck</h3>

      <p className="step-desc">
        Tell it what you're building, where you're struggling, what you've already tried.
        No long forms. Just your situation in plain language.
      </p>
    </div>

    
    <div className="step">
      <div className="step-number">02</div>

      <p className="step-tag">DIAGNOSIS — INSTANT</p>

      <h3>Get your real constraint identified</h3>

      <p className="step-desc">
        StartupOps AI analyzes your situation against real startup patterns —
        finding the underlying problem, not just the symptom.
      </p>
    </div>

    
    <div className="step">
      <div className="step-number">03</div>

      <p className="step-tag">OUTPUT — ONE CLEAR MOVE</p>

      <h3>Walk away knowing exactly what to fix</h3>

      <p className="step-desc">
        Your #1 bottleneck. One high-leverage next action.
        One thing to stop doing immediately.
        Not a long plan — just clarity.
      </p>
    </div>

  </div>

</section>




      <p className="section-sub">
  Built for people making high-stakes decisions with limited clarity
</p>


<section className="compare-section section">
  <div className="container">

    <p className="how-label">— WHY NOT JUST USE CHATGPT?</p>

    <h2 className="compare-title">
      Generic AI gives <span>generic answers.</span>
    </h2>

    <p className="compare-sub">
      StartupOps AI is built specifically around startup decision patterns - not general knowledge.
    </p>

    <div className="compare-table">

      <div className="compare-row compare-head">
        <div>Capability</div>
        <div>StartupOps AI</div>
        <div>Generic AI</div>
      </div>

      <div className="compare-row">
        <div>Identifies real bottleneck vs symptom</div>
        <div className="yes">✓ Yes</div>
        <div className="no">✕ No</div>
      </div>

      <div className="compare-row">
        <div>Startup-specific diagnostic framework</div>
        <div className="yes">✓ Yes</div>
        <div className="no">✕ No</div>
      </div>

      <div className="compare-row">
        <div>Accounts for constraints (time, capital)</div>
        <div className="yes">✓ Yes</div>
        <div className="no">✕ No</div>
      </div>

      <div className="compare-row">
        <div>Tells you what to STOP doing</div>
        <div className="yes">✓ Yes</div>
        <div className="no">✕ Rarely</div>
      </div>

      <div className="compare-row">
        <div>One clear next action</div>
        <div className="yes">✓ Yes</div>
        <div className="no">✕ No</div>
      </div>

    </div>

  </div>
</section>










      
      {/* WHO IT’S FOR */}
      <section id="who-it's-for" className="who-section section">
        <div className="container">

          <h2 className="section-title">Who it's for</h2>

          <div className="who-grid">

            <div className="who-card">
              <h3>Startup Founder / CEO</h3>
              <div className="mini-line"></div>

              <p className="who-main">
                Constant decisions, unclear priorities, and no signal for what actually matters.
              </p>

              <div className="card-divider"></div>

              <p className="who-sub">
                “StartupOps AI acts as your thinking partner — isolating the real constraint so every decision compounds.”
              </p>
            </div>

            <div className="who-card">
              <h3>Product Manager / Product Lead</h3>
              <div className="mini-line"></div>

              <p className="who-main">
                Pulled between stakeholders, roadmap pressure, and unclear trade-offs.
              </p>

              <div className="card-divider"></div>

              <p className="who-sub">
                “StartupOps AI structures decisions against real constraints - making every roadmap choice defensible, focused, and execution-ready.”
              </p>
            </div>

            <div className="who-card">
              <h3>Solo Operator / Early-Stage Builder</h3>
              <div className="mini-line"></div>

              <p className="who-main">
                Doing everything at once with limited time, capital, and clarity.
              </p>

              <div className="card-divider"></div>

              <p className="who-sub">
                “StartupOps AI eliminates noise and shows what actually deserves execution.”
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SYSTEM */}
      <section className="system-section section">
        <div className="container">

          <div className="system-container">

            <div className="system-left">
              <h2>Systematic Thinking</h2>

              <p className="system-description">
                Transform messy signals into clear execution direction.
              </p>

              <ul className="system-list">
                <li><strong>Input:</strong> Raw uncertainty</li>
                <li><strong>Process:</strong> Diagnosis</li>
                <li><strong>Output:</strong> Clear execution</li>
              </ul>
            </div>

            <div className="system-right">
              <div className="system-box">
                CHAOS → ORDER
              </div>
            </div>

          </div>

        </div>
      </section>

     {/* PRICING */}
<section id="pricing" className="section">
  <div className="container">

    <div className="pricing-header">
      <h2 className="section-title">Pricing</h2>
      <div className="section-line"></div>

      <p className="pricing-sub">
        Early access pricing for first users.
      </p>
    </div>

    <div className="pricing-grid">

      <div className="pricing-card">
        <h3>Free</h3>
        <div className="price">Free <span>/ month</span></div>

        <p className="plan-tag">
          Experience the thinking system
        </p>

        <ul>
          <li>Access the core clarity framework</li>
          <li>Understand your real constraints</li>
          <li>Shift from reactive to structured thinking</li>
        </ul>

        <a
          href="https://chatgpt.com/g/g-69620ff898308191a9da31cfffe153c3-startupops-ai"
          className="btn-primary full-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try in ChatGPT
        </a>
      </div>

      <div className="pricing-card featured">
        <div className="badge">Limited early access</div>
        <div className="popular">MOST POPULAR</div>
        
        <h3>Starter</h3>
        
        <div className="price">₹499 <span>/ month</span></div>
        
        <p className="price-note">Early access price (increases soon)</p>

        <p className="plan-tag">
          For founders who want consistent clarity
        </p>

        <ul>
          <li>Context-aware decision support</li>
          <li>Structured follow-ups & deeper reasoning</li>
          <li>Constraint-based recommendations</li>
        </ul>

        <a
  href="/waitlist" className="btn-primary full-btn"
>
  Get Early Access
</a>
      </div>

      <div className="pricing-card">
        <h3>Pro</h3>
        <div className="price">₹1999 <span>/ month</span></div>

        <p className="plan-tag">
          For serious operators & high-stakes decisions
        </p>

        <ul>
          <li>Deep trade-off analysis</li>
          <li>Execution-grade clarity & prioritization</li>
          <li>High-leverage decision frameworks</li>
        </ul>

        <a href="#" className="btn-primary full-btn">
          Request Pro Access
        </a>
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="cta-section section">
  <div className="container center">

    <h2>Still guessing what's wrong?</h2>

    <p className="cta-sub">
      Get your bottleneck in 2 minutes.
    </p>

    <div className="email-capture">
      <input
        type="email"
        placeholder="your@email.com"
        className="email-input"
        id="emailInput2"
      />

      <button
  className="btn-primary"
  onClick={() => {
  const email = (document.getElementById("emailInput2") as HTMLInputElement).value;

  handleSubmit(email);
}}




>
  Diagnose My Startup →
</button>


    </div>

  </div>
</section>



      {/* CONTACT */}
      <section className="section center">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <a href="mailto:startupopsai@gmail.com" className="btn-primary">
            startupopsai@gmail.com
          </a>
        </div>
      </section>

    </main>
  );
}
