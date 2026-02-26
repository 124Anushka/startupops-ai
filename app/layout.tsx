import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
    
    <head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5BM0MN4C5P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5BM0MN4C5P');
        `}
      </Script>
    </head>

    <body>
      <Navbar />
      {children}
      <Footer />
    </body>

  </html>
)
}
