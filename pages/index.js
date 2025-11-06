import Head from "next/head";
import CustomVideo from "../components/CustomVideo";

export default function HomePage({ media }) {
  return (
    <>
      <Head>
        <title>KHALIIL</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Khaliil's Official Website" />
        <meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
        <meta name="author" content="Khaliil" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khaliil.com/" />

        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content="Khaliil's Official Website" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khaliil.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2025-10-09T00:00:00+03:00" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content="Khaliil's Official Website" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="@khaliildiab" />
        <meta name="twitter:creator" content="@khaliildiab" />

        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Khaliil" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name="copyright" content="2025" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link
          rel="preload"
          as="video"
          href="https://ik.imagekit.io/cx6yav04a/91AAD0-2855-41E9-AFBC-BF7F0B030D1B-2.mp4"
          type="video/mp4"
        />
      </Head>
      
      
      
      <div className="underwork-container">
        <div className="underwork-box">
          <h1>🚧 This page is under work 🚧</h1>
          <p>Please check out other pages meanwhile:</p>
          <div className="links">
            <a href="https://trips.khaliil.com/">TRIPS</a>
            <Link href="/about">ABOUT</Link>
            <Link href="/legal">LEGAL</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .underwork-container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;text-transform:uppercase;

        }
        
      .underwork-container h1 {
      font-weight:300;
      }
        
        .underwork-box {
          animation: fadeIn 1s ease;
        }
        .links {
          margin-top: 20px;
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .links a {
          color: white;
          text-decoration: none;
          border-bottom: 1px solid white;
          transition: opacity 0.3s;
        }
        .links a:hover {
          opacity: 0.7;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      
    
    </>
  );
}

export async function getStaticProps() {
  const media = [
    {
      type: "video",
      src: "https://ik.imagekit.io/cx6yav04a/91AAD0-2855-41E9-AFBC-BF7F0B030D1B-2.mp4",
      muteIcon: "/icons/icon-mute.svg",
      unmuteIcon: "/icons/icon-volume.svg",
      videoLink: "https://tour.khaliil.com/"
    },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2879.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2908.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2909.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2915.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2934.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2937.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2938.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2944.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2945.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2946.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2953.jpeg" }
  ];

  return { props: { media } };
}