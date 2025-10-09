// pages/gallery-test.js
import { useState, useEffect } from "react";

export default function GalleryTest() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = Array.from({ length: 20 }, (_, i) => `https://picsum.photos/600/400?random=${i}`);

  // Disable background scroll and touch when overlay is open
  useEffect(() => {
    if (overlayOpen) {
      const preventScroll = (e) => e.preventDefault();
      document.body.style.overflow = "hidden"; // hide body scroll
      document.addEventListener("touchmove", preventScroll, { passive: false }); // prevent touch scroll
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [overlayOpen]);

  const openOverlay = (src) => {
    setActiveImage(src);
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="page-wrapper">
      <h1 style={{ textAlign: "center" }}>Gallery Test</h1>

      <div className="gallery">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            onClick={() => openOverlay(src)}
            className="gallery-img"
          />
        ))}
      </div>

      {overlayOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>X</button>
            <img src={activeImage} alt="active" style={{ maxWidth: "100%", maxHeight: "100%" }} />
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
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        .overlay-content {
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          font-size: 20px;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}