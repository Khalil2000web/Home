import { useState, useEffect, useRef } from "react";

export default function GalleryTallOverlay() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const overlayRef = useRef(null);

  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    // super tall image
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?fit=crop&w=800&h=2000"
  ];

  useEffect(() => {
    if (!overlayOpen) return;

    const body = document.body;
    let scrollY = window.scrollY;
    body.style.position = "relative"; // keep Safari toolbar free

    const preventBgScroll = (e) => {
      // only prevent scroll if the target is NOT inside the overlay
      if (!overlayRef.current.contains(e.target)) e.preventDefault();
    };

    document.addEventListener("touchmove", preventBgScroll, { passive: false });
    document.addEventListener("wheel", preventBgScroll, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventBgScroll);
      document.removeEventListener("wheel", preventBgScroll);
    };
  }, [overlayOpen]);

  const openOverlay = (src) => {
    setActiveImage(src);
    setOverlayOpen(true);
  };
  const closeOverlay = () => setOverlayOpen(false);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Scrollable Tall Overlay Test</h1>
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`img-${i}`} className="gallery-img" onClick={() => openOverlay(src)} />
        ))}
      </div>

      {overlayOpen && (
        <div className="overlay" ref={overlayRef}>
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>X</button>
            <img src={activeImage} alt="active" style={{ width: "100%" }} />
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
          padding: 20px;
        }
        .gallery-img {
          width: 100%;
          cursor: pointer;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 999999999999999999;
          overflow: auto;
          -webkit-overflow-scrolling: touch; /* iOS smooth scroll */
          padding-top: 50px;
        }
        .overlay-content {
          max-width: 100%;
          max-height: 90%;
          overflow: auto; /* scroll inside overlay */
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}