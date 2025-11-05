import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  const getActivePage = () => {
    switch (router.pathname) {
      case '/':
        return '';
      case '/about':
        return 'ABOUT';
      case '/legal':
        return 'LEGAL';
      case '/_error':
        return '_ERROR';
      default:
        return ''; 
    }
  };

  const [activePage, setActivePage] = useState(getActivePage());

  useEffect(() => {
    setActivePage(getActivePage());
  }, [router.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);


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
      
<div className={`menu-cover ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      
      <div
        id="main-menu"
        ref={menuRef}
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav className="menu-links">
          <Link
            href="/"
            className={`menu-link ${router.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          
          <a
            href="https://trips.khaliil.com"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            TRIPS
          </a>

          <Link
            href="/about"
            className={`menu-link ${router.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>

          <Link
            href="/legal"
            className={`menu-link ${router.pathname === '/legal' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            LEGAL
          </Link>

        </nav>
        
  <div className="menu-footer">© 2025 KHALIIL™</div>
        
      </div>
    </>
  );
}
