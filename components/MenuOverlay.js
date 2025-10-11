import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const current = router.pathname === '/' ? 'HOME' : router.pathname.replace('/', '').toUpperCase();
    setActivePage(current);
  }, [router.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    buttonRef.current.focus(); // return focus for accessibility
  };

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
          {['HOME', 'ABOUT', 'TOUR', 'CONTACT'].map((page) => (
            <Link
              key={page}
              href={page === 'HOME' ? '/' : `/${page.toLowerCase()}`}
              className={`menu-link ${activePage === page ? 'active' : ''}`}
              onClick={() => handleLinkClick(page)}
            >
              {page}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}