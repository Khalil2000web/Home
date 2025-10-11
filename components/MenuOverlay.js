import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  // Set active page based on route
  useEffect(() => {
    const current =
      router.pathname === '/'
        ? '' // no HOME after PAGES / on homepage
        : router.pathname.replace('/', '').toUpperCase();
    setActivePage(current);
  }, [router.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (page) => {
    setActivePage(page === 'HOME' && router.pathname === '/' ? '' : page);
    setMenuOpen(false);
    buttonRef.current.focus(); // return focus to button
  };

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
          {/* HOME link still visible */}
          <Link
            href="/"
            className={`menu-link ${activePage === '' ? 'active' : ''}`}
            onClick={() => handleLinkClick('HOME')}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={`menu-link ${activePage === 'ABOUT' ? 'active' : ''}`}
            onClick={() => handleLinkClick('ABOUT')}
          >
            ABOUT
          </Link>

          <a
            href="https://tour.khaliil.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`menu-link ${activePage === 'TOUR' ? 'active' : ''}`}
            onClick={() => handleLinkClick('TOUR')}
          >
            TOUR
          </a>
        </nav>
      </div>
    </>
  );
}