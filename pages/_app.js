import '../styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <a href="https://tour.khaliil.com/" rel="noopener noreferrer" className="nav-link">Tour</a>
          <span id="nbold">K//</span>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="footer">
        <div className="footer-links">
          <p>&copy; 2025 Khaliil</p>
          <Link href="/legal" className="footer-link">Legal</Link>
        </div>
      </footer>
    </>
  )
}