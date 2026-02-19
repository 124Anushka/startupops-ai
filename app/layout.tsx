import "./globals.css"

export const metadata = {
  title: "StartupOps AI",
  description: "Clarity before execution.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="container nav-inner">
            <div className="logo">StartupOps AI</div>

            <div className="links">
              <a href="#how">How It Works</a>
              <a href="#pricing">Pricing</a>
            </div>

            <a className="nav-button" href="#">
              Start Free
            </a>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}

