import Head from 'next/head';
import { useEffect } from 'react';

export default function Legal() {
  useEffect(() => {
    const btn = document.getElementById('scrollBtn');
    const btnText = btn.querySelector('.btn-text');
    const arrow = btn.querySelector('.arrow');

    const privacyHeading = document.getElementById('privacy-policy');
    const termsHeading = document.getElementById('terms-conditions');

    if (!privacyHeading || !termsHeading) return;

    function getDocOffset(el) {
      let top = 0;
      while (el) { top += el.offsetTop; el = el.offsetParent; }
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

      if (mode === 'toPrivacy') privacyHeading.scrollIntoView({ behavior: 'smooth' });
      else termsHeading.scrollIntoView({ behavior: 'smooth' });

      setTimeout(calcOffsets, 500);
    });
  }, []);

  return (
    <>
      <Head>
        <title>LEGAL</title>
      </Head>

      <div className="content">
        <h2 id="terms-conditions">TERMS & CONDITIONS</h2>
        <p><strong>LAST UPDATED ON AUGUST 10, 2025</strong></p>
        {/* ... Insert all your terms content here ... */}
        <h2 id="privacy-policy">PRIVACY POLICY</h2>
        <p><strong>EFFECTIVE DATE: AUGUST 10, 2025</strong></p>
        {/* ... Insert all your privacy content here ... */}
      </div>

      <button id="scrollBtn" aria-label="Jump to section">
        <span className="btn-text">Privacy Policy</span>
        <span className="arrow" aria-hidden="true">↓</span>
      </button>

      <style jsx>{`
        #scrollBtn {
          position: fixed;
          bottom: 55px;
          right: 20px;
          background: #000;
          color: #fff;
          padding:5px 9px;
          border: 1px solid #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-family: var(--font-main);
          transition: opacity 0.25s, transform 0.25s;
          z-index: 9999;
          text-transform: uppercase;
        }
        .arrow {
          display: inline-block;
          padding: 0;
          margin: 0;
          transition: transform 0.25s;
          font-size: 20px;
        }
        .arrow.up {
          transform: rotate(180deg);
        }
        #privacy-policy, #terms-conditions {
          scroll-margin-top: 110px;
        }
      `}</style>
    </>
  );
}