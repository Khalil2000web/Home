// pages/test.js
import Head from "next/head";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const closeOverlay = document.getElementById("closeOverlay");
    const cards = document.querySelectorAll(".menu-card");
    const overlayName = document.getElementById("overlayName");
    const overlayPrice = document.getElementById("overlayPrice");
    const overlayDesc = document.getElementById("overlayDesc");
    const overlayImg = document.getElementById("overlayImg");
    let scrollPos = 0;

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        overlayName.textContent = card.dataset.name;
        overlayPrice.textContent = card.dataset.price;
        overlayDesc.textContent = card.dataset.desc;
        overlayImg.src = card.dataset.img;
        scrollPos = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPos}px`;
        overlay.classList.add("active");
      });
    });

    closeOverlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPos);
    });

    window.scrollToSection = function (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Noir Kitchen — Menu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style>{`
:root {
  --bg: #fefefe;
  --card: #d7cfbf;
  --text: #877259;
  --muted: #6c5e4f;
  --accent: #1e394b;
  --divider: #111;
  --font: "Noto Sans Arabic", sans-serif;
}

html { scroll-padding-top: 100px; }
* { padding: 0; margin: 0; box-sizing: border-box; }
body {
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  scroll-behavior: smooth;
  direction: rtl;
  font-family: var(--font);
  font-weight: 400;
}
.header {
  position: relative;
  width: 100vw;
  height: 350px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
.header .store-in img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.header .store-in h2 {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: clamp(2rem, 5vw, 4rem);
  padding-bottom: 20px;
}
.section-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
  padding: 30px 0;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  background-color: #fefefeb6;
  z-index: 100000;
  border-bottom: 1px solid #1111111c;
}
.section-buttons button {
  border: 1px solid #111;
  padding: 8px 15px;
  background-color: transparent;
  color: var(--muted);
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font);
  transition: transform 0.3s;
}
.section-buttons button:hover { transform: scale(1.05); }
.menu-section { padding: 30px 0; }
.menu-section h2 {
  text-align: center;
  color: var(--accent);
  font-size: 1.5rem;
  margin-bottom: 20px;
  position: relative;
}
.menu-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: currentColor;
}
.side-scroll {
  display: flex;
  overflow-x: auto;
  gap: 25px;
  padding: 20px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.side-scroll::-webkit-scrollbar { display: none; }
.menu-card {
  flex: 0 0 260px;
  border-radius: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-left: 1px solid #1111111c;
  text-align: center;
}
.menu-card img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.menu-info {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.menu-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 5px;
}
.menu-price {
  color: var(--accent);
  margin-bottom: 8px;
}
.menu-desc {
  flex: 1;
  font-size: 0.85rem;
  color: var(--muted);
  overflow: auto;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: 100000;
}
.overlay.active {
  opacity: 1;
  pointer-events: auto;
}
.overlay-content {
  background: #fefefe;
  border-radius: 4px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  padding: 25px 20px 60px;
  position: relative;
  animation: slideUp 0.35s ease;
}
.overlay-content img {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}
.overlay-content h2 { margin-bottom: 5px; }
.overlay-content p {
  color: var(--muted);
  margin-bottom: 10px;
}
.close-btn {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #11111152;
  font-size: 30px;
  padding: 10px;
  color: #fff;
  mix-blend-mode: difference;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
}
@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
footer {
  display: flex;
  width: 90%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #1111111c;
  padding-top: 40px;
  padding-bottom: 30px;
  margin: 0 auto;
  margin-top: 50px;
}
.footer p {
  direction: ltr;
  color: #000;
  font-size: 15px;
  padding: 0;
  line-height: 1.6;
}
.footer p a {
  color: #000;
  cursor: pointer;
}
.sc-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 90%;
  padding-bottom: 30px;
  flex-wrap: wrap;
}
.sc-links a {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px;
  transition: background-color 0.3s ease;
}
.sc-links a svg {
  display: block;
  color: #000;
  width: 20px;
}
.sc-links a:hover { background-color: #0000001a; }
`}</style>
      </Head>

      <header className="header">
        <div className="store-in">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349"
            alt="Logo"
          />
          <h2>[RESTU NAME]</h2>
        </div>
      </header>

      <div className="section-buttons">
        <button onClick={() => scrollToSection("جديد")}>جديد</button>
        <button onClick={() => scrollToSection("برجر")}>برجر</button>
        <button onClick={() => scrollToSection("desserts")}>تشيكن</button>
        <button onClick={() => scrollToSection("drinks")}>مشروبات</button>
      </div>

      {/* --- MENU SECTIONS --- */}
      <div
        className="menu-section"
        id="جديد"
        dangerouslySetInnerHTML={{
          __html: `
<h2>وجبات جديدة!</h2>
<div class="side-scroll">
${[...Array(5)]
  .map(
    () => `
<div class="menu-card" data-name="برجر نباتي" data-price="50₪" data-desc="كرات بطاطا البيريه مغطاه بالجبنة الذائبة" data-img="https://images.unsplash.com/photo-1551218808-94e220e084d2">
  <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2">
  <div class="menu-info">
    <div class="menu-name">برجر نباتي</div>
    <div class="menu-price">50₪</div>
    <div class="menu-desc">كرات بطاطا البيريه مغطاه بالجبنة الذائبة</div>
  </div>
</div>`
  )
  .join("")}
</div>`,
        }}
      />

      <div
        className="menu-section"
        id="برجر"
        dangerouslySetInnerHTML={{
          __html: `
<h2>برجر</h2>
<div class="side-scroll">
${[...Array(5)]
  .map(
    () => `
<div class="menu-card" data-name="برجر نباتي" data-price="50₪" data-desc="كرات بطاطا البيريه مغطاه بالجبنة الذائبة" data-img="https://images.unsplash.com/photo-1551218808-94e220e084d2">
  <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2">
  <div class="menu-info">
    <div class="menu-name">برجر نباتي</div>
    <div class="menu-price">50₪</div>
    <div class="menu-desc">كرات بطاطا البيريه مغطاه بالجبنة الذائبة</div>
  </div>
</div>`
  )
  .join("")}
</div>`,
        }}
      />

      {/* FOOTER */}
      <footer className="footer">
        <div
          className="sc-links"
          dangerouslySetInnerHTML={{
            __html: `<a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 ..."/></svg></a>`,
          }}
        />
        <p>&copy; 2025 [RESTU NAME] — جميع الحقوق محفوظة</p>
        <p>
          <a href="#">شروط الاستخدام</a>
        </p>
        <p>
          CREATED BY <a href="https://khaliil.com/">KHALIIL</a>.
        </p>
      </footer>

      <div className="overlay" id="overlay">
        <div className="overlay-content">
          <img id="overlayImg" src="" alt="" />
          <h2 id="overlayName"></h2>
          <p id="overlayPrice"></p>
          <p id="overlayDesc"></p>
        </div>
        <button className="close-btn" id="closeOverlay">
          &#x2715;
        </button>
      </div>
    </>
  );
}