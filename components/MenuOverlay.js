import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  // activePage always reflects the current route
  const getActivePage = (pathname) => {
    if (pathname === '/') return ''; // homepage
    if (pathname === '/about') return 'ABOUT';
    return ''; // default for safety
  };

  const [activePage, setActivePage] = useState(getActivePage(router.pathname));

  useEffect(() => {
    setActivePage(getActivePage(router.pathname));
  }, [router.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleInternalLinkClick = (path) => {
    setMenuOpen(false);
    buttonRef.current.focus();
    router.push(path);
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
          {/* HOME */}
          <button
            className={`menu-link ${activePage === '' ? 'active' : ''}`}
            onClick={() => handleInternalLinkClick('/')}
          >
            HOME
          </button>

          {/* ABOUT */}
          <button
            className={`menu-link ${activePage === 'ABOUT' ? 'active' : ''}`}
            onClick={() => handleInternalLinkClick('/about')}
          >
            ABOUT
          </button>

          {/* TOUR (external) */}
          <a
            href="https://tour.khaliil.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`menu-link ${activePage === 'TOUR' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            TOUR
          </a>
        </nav>
      </div>
    </>
  );
}