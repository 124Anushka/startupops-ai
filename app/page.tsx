export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-semibold">StartupOps AI</div>
        <a href="/chat" className="text-sm font-medium hover:opacity-70">
          Open App
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-28 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Clarity before execution.
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          The boundary exists to prevent premature or incorrect execution.
        </p>

        <p className="text-gray-500 mb-10">
          Free mode clarifies thinking. Paid plans compound execution.
        </p>

        <a
          href="/chat"
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition"
        >
          Think First
        </a>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Think first. Execute when ready.
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Chaos comes from unstructured inputs. StartupOps AI acts as the filter,
          transforming messy signals into linear, actionable directives.
        </p>
      </section>

      {/* WHO IT’S FOR */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Designed for high-leverage operators.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border p-8 rounded-2xl">
            <h3 className="font-semibold text-lg mb-4">Startup Founder / CEO</h3>
            <p className="text-gray-600">
              Automates routine operational tasks, provides data-driven insights,
              and frees founder time to focus on strategic growth.
            </p>
          </div>

          <div className="border p-8 rounded-2xl">
            <h3 className="font-semibold text-lg mb-4">Operations Manager</h3>
            <p className="text-gray-600">
              Integrated tools for process management, onboarding, vendor
              management and scalable operations without large teams.
            </p>
          </div>

          <div className="border p-8 rounded-2xl">
            <h3 className="font-semibold text-lg mb-4">Head of People / HR</h3>
            <p className="text-gray-600">
              AI-powered assistance for policy generation, talent sourcing,
              compliance checks and performance frameworks.
            </p>
          </div>

        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-12">
          Systematic Thinking
        </h2>

        <div className="space-y-4 text-lg">
          <p>Input: Raw uncertainty & constraints</p>
          <p>Process: Diagnosis & Framing</p>
          <p>Output: Clear Execution Direction</p>
        </div>

        <div className="mt-10 text-gray-400">
          CHAOS → ORDER
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <p className="text-3xl font-bold mb-6">₹0</p>
            <p className="text-gray-600 mb-6">
              Experience the thinking style.
            </p>
            <a href="/chat" className="underline">
              Start Free
            </a>
          </div>

          <div className="border-2 border-black p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">₹499 / month</p>
            <p className="text-gray-600 mb-6">
              Context-aware reasoning & structured follow-ups.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Join Waitlist
            </button>
          </div>

          <div className="border p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-6">₹1999 / month</p>
            <p className="text-gray-600 mb-6">
              Deep analysis, trade-offs mapping & execution-grade guidance.
            </p>
            <button className="underline">
              Request Access
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 text-center bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Think clearly before you execute.
        </h2>

        <a
          href="/chat"
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium"
        >
          Start Free in ChatGPT
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t text-center text-sm text-gray-500">
        <div className="mb-4 font-medium text-gray-900">StartupOps AI</div>
        <p>© 2026 StartupOps AI. All rights reserved.</p>
        <p className="mt-2">Built for deliberate execution.</p>
      </footer>

    </main>
  );
}
