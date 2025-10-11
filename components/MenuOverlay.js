import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  // Determine active page from the current route
  const getActivePage = () => {
    switch (router.pathname) {
      case '/':
        return ''; // homepage, no HOME after slash
      case '/about':
        return 'ABOUT';
      case '/legal':
        return 'LEGAL';
      default:
        return ''; 
    }
  };

  const [activePage, setActivePage] = useState(getActivePage());

  useEffect(() => {
    setActivePage(getActivePage());
  }, [router.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);

  // Close menu on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="menu-toggle"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        aria-label={menuOpen ? 'Close pages menu' : 'Open pages menu'}
      >
        PAGES{activePage ? ` / ${activePage}` : ' /'}
      </button>

      <div
        id="main-menu"
        ref={menuRef}
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav className="menu-links">
          {/* HOME */}
          <Link
            href="/"
            className={`menu-link ${router.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className={`menu-link ${router.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>

          {/* LEGAL */}
          <Link
            href="/legal"
            className={`menu-link ${router.pathname === '/legal' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            LEGAL
          </Link>

          {/* TOUR (external) */}
          <a
            href="https://tour.khaliil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            TOUR
          </a>
        </nav>
      </div>
    </>
  );
}