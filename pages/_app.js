import '../styles/globals.css';
import MenuOverlay from '../components/MenuOverlay';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>

<MenuOverlay />
    
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
