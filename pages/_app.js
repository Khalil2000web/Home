import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-links">
          <a href="https://khaliil.com/">Home</a>
          <a href="https://tour.khaliil.com/">Tour</a>
          <a id="nbold">K//</a>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="footer">
        <div className="footer-links">
          <p>&copy; 2025 Khaliil</p>
          <a href="https://khaliil.com/legal">Legal</a>
        </div>
      </footer>
    </>
  )
}
