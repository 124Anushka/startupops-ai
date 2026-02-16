export default function Home() {
  return(
    <main className= "min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-semibold">StartupOps AI</div>
        <a href="/chat" className="text-sm font-medium text-gray-600 hover:text-black">
        Open App </a>
      </nav>
      {/* Hero */}
      <section className="text-center px-6 py-32 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Clarity before execution.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          StartupOps AI eliminates execution chaos and sharpens founder decisions.
        </p>
        <a
        href="/chat"
        className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition"
        >
          Open StartupOps
        </a>
      </section>
    </main>
  )
}