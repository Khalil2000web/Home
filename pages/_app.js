import '../styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <a href="https://tour.khaliil.com/" rel="noopener noreferrer">Tour</a>
          <span className="nbold">K//</span>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="footer">
        <div className="footer-links">
          <p>&copy; 2025 Khaliil</p>
          <Link href="/legal">Legal</Link>
        </div>
      </footer>
    </>
  )
}