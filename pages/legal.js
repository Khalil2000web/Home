import Head from 'next/head';
import { useEffect } from 'react';

export default function Legal({ pageData }) {
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageData.description} />
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
        <meta name="twitter:site" content="@khaliildiab" />
        <meta name="twitter:creator" content="@khaliildiab" />
      </Head>

      <div className="content">
        {/* Render Terms & Conditions */}
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

        {/* Render Privacy Policy */}
        <h2 id="privacy-policy" style={{ paddingTop: '80px' }}>{pageData.privacy.title}</h2>
        {pageData.privacy.content.map((block, i) => {
          if (block.type === 'p') return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />;
          if (block.type === 'ul') return (
            <ul key={i}>
              {block.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
          );
          return null;
        })}

        {/* Scroll Button */}
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
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const pageData = {
    title: "LEGAL",
    description: "Khaliil's Official Website",
    terms: {
      title: "TERMS & CONDITIONS",
      content: [
        { type: 'p', text: "<strong>LAST UPDATED ON AUGUST 10, 2025</strong>" },
        { type: 'p', text: "<strong>INTRODUCTION</strong>" },
        { type: 'p', text: "Welcome to khaliil.com (hereinafter referred to as “the Site”) including all subdomains..." },
        { type: 'p', text: "<strong>1. ACCEPTANCE OF TERMS</strong>" },
        { type: 'p', text: "Accessing or using the Site constitutes your acceptance of these Terms..." },
        { type: 'p', text: "<strong>2. SCOPE OF TERMS AND SUBDOMAINS</strong>" },
        { type: 'p', text: "These Terms apply to khaliil.com and its subdomains..." },
        { type: 'p', text: "<strong>3. INTELLECTUAL PROPERTY RIGHTS</strong>" },
        { type: 'p', text: "All content is owned by the Owner..." },
        { type: 'p', text: "<strong>4. RESTRICTIONS ON USE</strong>" },
        { type: 'ul', items: [
          "Downloading, copying, redistributing, or using content without permission.",
          "Modifying or republishing content without authorization.",
          "Using content in ways that infringe IP rights.",
          "Misrepresenting ownership or attribution.",
          "Disrupting site functionality, servers, or networks.",
          "Using the Site for unlawful purposes or violating laws."
        ]},
        { type: 'p', text: "<strong>5. IMAGES AND VIDEOS</strong>" },
        { type: 'p', text: "All images/videos are exclusive works by the Owner." },
        { type: 'p', text: "<strong>6. DISCLAIMER OF LIABILITY AND WARRANTIES</strong>" },
        { type: 'p', text: "The Site is provided 'as is' without warranties of any kind." },
        { type: 'p', text: "<strong>7. THIRD-PARTY LINKS AND SERVICES</strong>" },
        { type: 'p', text: "The Site may include links to third-party websites. Use at your own risk." },
        { type: 'p', text: "<strong>8. DATA COLLECTION AND PRIVACY</strong>" },
        { type: 'p', text: "We do not collect personal data directly; third-party services may collect anonymized data." },
        { type: 'p', text: "<strong>9. AGE RESTRICTION</strong>" },
        { type: 'p', text: "The Site is intended for users aged 13 and older." },
        { type: 'p', text: "<strong>10. DISPUTE RESOLUTION AND LEGAL LIMITATIONS</strong>" },
        { type: 'p', text: "Notify the Owner before pursuing legal action. Owner not liable for damages." },
        { type: 'p', text: "<strong>11. GOVERNING LAW AND JURISDICTION</strong>" },
        { type: 'p', text: "These Terms are governed by Israeli law." },
        { type: 'p', text: "<strong>12. AMENDMENTS</strong>" },
        { type: 'p', text: "Owner may update Terms at any time without notice." },
        { type: 'p', text: "<strong>13. CONTACT INFORMATION</strong>" },
        { type: 'p', text: "Contact: <a href='mailto:help@khaliil.com'>help@khaliil.com</a>." },
        { type: 'p', text: "<strong>ACCEPTANCE OF TERMS</strong> By using the Site, you agree to comply with these Terms." },
      ]
    },
    privacy: {
      title: "PRIVACY POLICY",
      content: [
        { type: 'p', text: "<strong>EFFECTIVE DATE: AUGUST 10, 2025</strong>" },
        { type: 'p', text: "<strong>1. INTRODUCTION</strong>" },
        { type: 'p', text: "We respect your privacy and are committed to transparency regarding data practices." },
        { type: 'p', text: "<strong>2. DATA COLLECTION</strong>" },
        { type: 'p', text: "We do not collect personal data directly. No forms/sign-ups collect personal info." },
        { type: 'p', text: "<strong>3. THIRD-PARTY SERVICES</strong>" },
        { type: 'ul', items: [
          "<strong>Cloudflare:</strong> Limited technical data collection for performance/security.",
          "<strong>jsDelivr (optional):</strong> Occasionally collects anonymized usage data."
        ]},
        { type: 'p', text: "<strong>4. EXTERNAL LINKS</strong>" },
        { type: 'p', text: "Not responsible for third-party content or privacy practices." },
        { type: 'p', text: "<strong>5. COOKIES AND TRACKING</strong>" },
        { type: 'p', text: "No active tracking cookies; third-party services may use essential cookies." },
        { type: 'p', text: "<strong>6. AGE RESTRICTION</strong>" },
        { type: 'p', text: "Intended for users aged 13+. No data collection from minors under 13." },
        { type: 'p', text: "<strong>7. CHANGES TO THIS PRIVACY POLICY</strong>" },
        { type: 'p', text: "Policy may update; updates posted with revised effective date." },
        { type: 'p', text: "<strong>8. CONTACT</strong>" },
        { type: 'p', text: "For questions contact <a href='mailto:help@khaliil.com'>help@khaliil.com</a>. All emails are from official accounts." },
        { type: 'p', text: "<strong>ACCEPTANCE OF PRIVACY POLICY:</strong> By using this Site, you acknowledge you have read and understood this Policy." },
      ]
    }
  };

  return { props: { pageData } };
}