import '../styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>


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
