// pages/gallery-long-img.js
import { useState, useEffect } from "react";

export default function GalleryLongImg() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    // super tall image for overlay test
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?fit=crop&w=800&h=2000"
  ];

  useEffect(() => {
    if (overlayOpen) {
      const preventScroll = (e) => e.preventDefault();
      document.body.style.overflow = "hidden"; // block background scroll
      document.addEventListener("touchmove", preventScroll, { passive: false });
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
      <h1 style={{ textAlign: "center" }}>Scrollable Overlay Test</h1>

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
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: flex-start; /* align top so scroll works naturally */
          z-index: 9999;
          overflow: auto; /* overlay can scroll */
          -webkit-overflow-scrolling: touch; /* smooth iOS scroll */
          padding-top: 50px; /* some spacing from top */
        }

        .overlay-content {
          max-width: 90%;
          max-height: 90%;
          overflow: auto; /* trap scroll inside overlay */
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          font-size: 20px;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}