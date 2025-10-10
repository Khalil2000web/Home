import { useRef, useState, useEffect } from "react";

let currentlyUnmutedVideo = null;

export default function CustomVideo({ src, muteIcon, unmuteIcon }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const updateIcon = (muted) => {
    const icon = containerRef.current?.querySelector(".sound-btn img");
    if (icon) icon.src = muted ? muteIcon : unmuteIcon;
    setIsMuted(muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      if (currentlyUnmutedVideo && currentlyUnmutedVideo !== videoRef.current) {
        currentlyUnmutedVideo.muted = true;
        const prevIcon = currentlyUnmutedVideo.closest(".video-container")?.querySelector(".sound-btn img");
        if (prevIcon) prevIcon.src = muteIcon;
      }
      videoRef.current.muted = false;
      currentlyUnmutedVideo = videoRef.current;
      updateIcon(false);
    } else {
      videoRef.current.muted = true;
      if (currentlyUnmutedVideo === videoRef.current) currentlyUnmutedVideo = null;
      updateIcon(true);
    }
  };

  const retryLoad = () => {
    setError(false);
    setLoading(true);
    videoRef.current.load();
    videoRef.current.play().catch(() => setIsPlaying(false));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(() => {
      if (!videoRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const fullyOut = rect.bottom < 0 || rect.top > window.innerHeight;
      if (fullyOut && !videoRef.current.muted) {
        videoRef.current.muted = true;
        updateIcon(true);
        if (currentlyUnmutedVideo === videoRef.current) currentlyUnmutedVideo = null;
      }
    }, { threshold: 0 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlaying = () => {
    setIsPlaying(true);
    setLoading(false);
  };

  const handlePause = () => setIsPlaying(false);

  const handleWaiting = () => setLoading(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div ref={containerRef} className="video-container">
      {loading && !error && !isPlaying && <div className="spinner"></div>}

<video
  ref={videoRef}
  src={src}
  autoPlay
  loop
  muted={isMuted}
  preload="auto"
  playsInline
  controls={false}
  disablePictureInPicture
  controlsList="nofullscreen nodownload noplaybackrate"
  onPlaying={handlePlaying}
  onPause={handlePause}
  onWaiting={handleWaiting}
  onError={handleError}
  style={{
    width: "100%",
    height: "100%",
    display: error ? "none" : "block",
    objectFit: "cover",
  }}
/>

      {error && (
        <div className="error-overlay">
          <p>Video failed to load. Try again.</p>
          <button onClick={retryLoad}>Retry</button>
        </div>
      )}

      {!error && (
        <button className="sound-btn" onClick={toggleMute}>
          <img src={isMuted ? muteIcon : unmuteIcon} alt="sound" />
        </button>
      )}

      {!isPlaying && !loading && !error && (
        <button className="play-btn" onClick={togglePlay}>
          PLAY
        </button>
      )}

      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          min-height: 250px;
          background: black;
        }

        .sound-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10;
        }
        .sound-btn img {
          width: 19px;
          user-select:none;
          user-drag:none;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          font-size: 40px;
          z-index: 10;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }

        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: 6px solid #4682B4;
          border-top-color: white;
          opacity: 0.8;
          animation:spinner-bulqg1 0.8s infinite linear alternate,spinner-oaa3wk 1.6s infinite linear;margin:-30px 0 0 -30px;
        }

        @keyframes spinner-bulqg1{0%{clip-path:polygon(50% 50%,0 0,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%);}12.5%{clip-path:polygon(50% 50%,0 0,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%);}25%{clip-path:polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,100% 100%,100% 100%);}50%{clip-path:polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,50% 100%,0% 100%);}62.5%{clip-path:polygon(50% 50%,100% 0,100% 0%,100% 0%,100% 100%,50% 100%,0% 100%);}75%{clip-path:polygon(50% 50%,100% 100%,100% 100%,100% 100%,100% 100%,50% 100%,0% 100%);}100%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%);}}@keyframes spinner-oaa3wk{0%{transform:scaleY(1) rotate(0deg);}49.99%{transform:scaleY(1) rotate(135deg);}50%{transform:scaleY(-1) rotate(0deg);}100%{transform:scaleY(-1) rotate(-135deg);}}

        .error-overlay {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          color: #fff;
          z-index: 20;text-align:center;
        }
        .error-overlay button {
          margin-top: 10px;
          padding: 5px 10px;
          cursor: pointer;font-family:arial;font-size:16px;margin-top:5px;
        }
      `}</style>
    </div>
  );
}