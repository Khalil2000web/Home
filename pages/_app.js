import '../styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-links">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <a className="nav-link" href="https://tour.khaliil.com/">Tour</a>
          <img id="logo" src="/icons/logo.png" alt="Logo" />
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
  );
}
