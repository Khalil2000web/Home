import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="https://tour.khaliil.com/">Tour</a>
          <img id="logo" src="/icons/logo.png" alt="Logo" />
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="footer">
        <div className="footer-links">
          <p>&copy; 2025 Khaliil</p>
          <a href="/legal">Legal</a>
        </div>
      </footer>
    </>
  )
}
