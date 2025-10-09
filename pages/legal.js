import Head from 'next/head';
import { useEffect } from 'react';

export default function Legal({ allPages }) {
  const pageData = allPages.legal;

  useEffect(() => {
    const btn = document.getElementById('scrollBtn');
    const btnText = btn.querySelector('.btn-text');
    const arrow = btn.querySelector('.arrow');

    const privacyHeading = document.getElementById('privacy-policy');
    const termsHeading = document.getElementById('terms-conditions');

    if (!privacyHeading || !termsHeading) return;

    function getDocOffset(el) {
      let top = 0;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent;
      }
      return top;
    }

    let privacyStart = 0, privacyEnd = 0;

    function calcOffsets() {
      privacyStart = getDocOffset(privacyHeading);
      const h2s = Array.from(document.querySelectorAll('h2[id]'));
      const idx = h2s.indexOf(privacyHeading);
      if (idx >= 0 && idx < h2s.length - 1) {
        privacyEnd = getDocOffset(h2s[idx + 1]);
      } else {
        privacyEnd = document.body.scrollHeight;
      }
    }

    calcOffsets();
    window.addEventListener('resize', calcOffsets);

    let ticking = false;
    function update() {
      ticking = false;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const centerY = scrollY + window.innerHeight / 2;
      const inPrivacy = centerY >= privacyStart && centerY < privacyEnd;

      if (inPrivacy) {
        btnText.textContent = 'Terms & Conditions';
        arrow.classList.add('up');
        btn.dataset.mode = 'toTerms';
      } else {
        btnText.textContent = 'Privacy Policy';
        arrow.classList.remove('up');
        btn.dataset.mode = 'toPrivacy';
      }

      const viewportTop = scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const overlap = Math.max(0, Math.min(viewportBottom, privacyEnd) - Math.max(viewportTop, privacyStart));
      const denom = Math.min(window.innerHeight, Math.max(privacyEnd - privacyStart, 1));
      const visibleRatio = overlap / denom;

      if (visibleRatio >= 0.7) {
        btn.classList.add('hidden');
      } else {
        btn.classList.remove('hidden');
      }
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();

    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode || 'toPrivacy';
      btn.classList.add('hidden');
      if (mode === 'toPrivacy') {
        privacyHeading.scrollIntoView({ behavior: 'smooth' });
      } else {
        termsHeading.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(calcOffsets, 500);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
        <meta name="author" content="Khaliil" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khaliil.com/" />

        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khaliil.com/" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content={pageData.description} />
        <meta name="twitter:image" content="" />    
  </Head>

      <div className="content">
        <h2 id="terms-conditions">{pageData.terms.title}</h2>
        {pageData.terms.content.map((block, i) => {
          if (block.type === 'p') return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />;
          if (block.type === 'ul') return (
            <ul key={i}>
              {block.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
          );
          return null;
        })}

        <h2 id="privacy-policy">{pageData.privacy.title}</h2>
        {pageData.privacy.content.map((block, i) => {
          if (block.type === 'p') return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />;
          if (block.type === 'ul') return (
            <ul key={i}>
              {block.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
          );
          return null;
        })}

        <button id="scrollBtn" aria-label="Jump to section" style={{
          position: 'fixed',
          bottom: '55px',
          right: '20px',
          background: '#000',
          color: '#fff',
          padding: '5px 9px',
          border: '1px solid #fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          textTransform: 'uppercase',
          zIndex: 9999,
          transition: 'opacity 0.25s, transform 0.25s'
        }}>
          <span className="btn-text">Privacy Policy</span>
          <span className="arrow" aria-hidden="true" style={{ fontSize: '20px' }}>↓</span>
        </button>      </div>
    </>
  );
}









