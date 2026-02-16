export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">StartupOps AI</h1>
        <div className="space-x-8 text-sm font-medium">
          <a href="#product">Product</a>
          <a href="#how">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="/chat">Open App</a>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="text-center mt-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold leading-tight">
          Clarity before execution.
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          StartupOps AI eliminates execution chaos and sharpens founder decisions.
          From idea to scale — structured, AI-powered clarity.
        </p>

        <div className="mt-10 space-x-4">
          <a href="/chat">
            <button className="bg-black text-white px-8 py-4 rounded-xl text-lg">
              Open StartupOps
            </button>
          </a>

          <button className="border px-8 py-4 rounded-xl text-lg">
            View Demo
          </button>
        </div>
      </section>


      {/* PROBLEM SECTION */}
      <section className="mt-40 bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold">
            Most startups don’t fail from lack of effort.
          </h3>

          <p className="mt-6 text-gray-600 text-lg">
            They fail from lack of clarity.  
            Wrong priorities. Scattered execution. Emotional decisions.
          </p>

          <p className="mt-6 text-gray-600 text-lg">
            StartupOps AI replaces chaos with structured execution logic.
          </p>
        </div>
      </section>


      {/* FEATURES */}
      <section id="product" className="mt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
        
        <div>
          <h4 className="text-xl font-semibold">Execution Engine</h4>
          <p className="mt-4 text-gray-600">
            Get clear next steps instantly. No more guessing what to build next.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Founder Decision AI</h4>
          <p className="mt-4 text-gray-600">
            Make structured, emotion-free decisions with AI-powered logic.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Operational Discipline</h4>
          <p className="mt-4 text-gray-600">
            Replace messy docs and random tasks with structured execution.
          </p>
        </div>

      </section>


      {/* HOW IT WORKS */}
      <section id="how" className="mt-40 bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold">
            How StartupOps AI Works
          </h3>

          <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
            
            <div>
              <h4 className="text-lg font-semibold">1. Input Your Situation</h4>
              <p className="mt-4 text-gray-400">
                Describe your startup stage, problem, or decision.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">2. AI Analyzes Context</h4>
              <p className="mt-4 text-gray-400">
                StartupOps processes your input using structured founder frameworks.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">3. Get Clear Execution Plan</h4>
              <p className="mt-4 text-gray-400">
                Receive precise, logical, execution-focused output.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PRICING */}
      <section id="pricing" className="mt-40 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold">
          Simple Pricing
        </h3>

        <div className="mt-16 border rounded-2xl p-10">
          <h4 className="text-2xl font-semibold">Founder Plan</h4>
          <p className="text-5xl font-bold mt-6">₹999<span className="text-lg">/month</span></p>

          <ul className="mt-8 space-y-3 text-gray-600">
            <li>✔ Unlimited AI Queries</li>
            <li>✔ Founder Decision Frameworks</li>
            <li>✔ Execution Roadmaps</li>
            <li>✔ Priority Intelligence</li>
          </ul>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-lg">
            Start Now
          </button>
        </div>
      </section>


      {/* WAITLIST */}
      <section className="mt-40 bg-gray-100 py-24 px-6 text-center">
        <h3 className="text-4xl font-bold">
          Join the Founder Waitlist
        </h3>

        <p className="mt-6 text-gray-600">
          Early access. Founder-only updates. Product roadmap influence.
        </p>

        <div className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-l-xl border w-80"
          />
          <button className="bg-black text-white px-6 py-4 rounded-r-xl">
            Join
          </button>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="mt-40 py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} StartupOps AI. All rights reserved.
      </footer>

    </main>
  );
}
