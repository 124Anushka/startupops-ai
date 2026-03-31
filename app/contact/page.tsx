export default function ContactPage() {
  return (
    <main>

      {/* HERO */}
      <section id="contact" className="section">
        <div className="container center">
          <h1>Get Early Access</h1>

          <p className="subtitle">
            Early users shape the product and get priority pricing when paid plans open.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container contact-grid">

          {/* LEFT */}
          <div className="contact-left">
            <h2>Direct communication</h2>

            <p>
              We read every message. No templates, no delays. Your inquiry matters.
            </p>

            <div className="contact-meta">
              <p><strong>Response time</strong><br />Within 24 hours</p>

              <p>
                <strong>Early access note</strong><br />
                StartupOps AI is currently delivered through a ChatGPT-based assistant.
                Join early to shape the product.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <form 
  action="https://formspree.io/f/xbdpydno" 
  method="POST"
  className="contact-form"
>
  <label>Name</label>
  <input type="text" name="name" placeholder="Your name" required />

  <label>Email</label>
  <input type="email" name="email" placeholder="your@email.com" required />

  <label>Message</label>
  <textarea name="message" placeholder="Your message..." rows={5} required></textarea>

  <button type="submit" className="btn-primary full-btn">
    Get Early Access
  </button>
</form>

        </div>
      </section>

    </main>
  );
}
