import Link from 'next/link';
import Head from 'next/head';
import CustomVideo from "../components/CustomVideo.js";

export default function HomePage() {
    return (
    <>
            <Head>
        <title>KHALIIL</title>
        <meta name="description" content="Khaliil's Official Website" />
        <meta name="url" content="https://www.khaliil.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content="Khaliil's Official Website" />
        <meta name="twitter:image" content="/static/images/19311D40-948D-475E-A39B-9FB6AC451657.jpeg" />
        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content="Khaliil's Official Website" />
        <meta property="og:image" content="/static/images/19311D40-948D-475E-A39B-9FB6AC451657.jpeg" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.khaliil.com/" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <meta name="copyright" content="2025" />
      </Head>
      <main>
        <div className="m6">
          <a href="https://tour.khaliil.com/">
            <p>
              The road is drawn across silent maps cities wait in shadows lights
              rest before the storm and soon the journey begins.
            </p>
          </a>
        </div>

<div
  style={{
    width: '100%',
    paddingTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  }}
>
  <CustomVideo
    src="https://ik.imagekit.io/cx6yav04a/E9D48422-5E4E-4D8D-BFC0-8C6AA2DCC1F4-2.mp4"
    muteIcon="/icons/icon-mute.svg"
    unmuteIcon="/icons/icon-volume.svg"
  />

  <a
    href="https://tour.khaliil.com"
    style={{
      width: '80px',
      paddingTop: '10px',
      paddingBottom: '10px',
      textAlign: 'center',
      margin: '0 auto',
      textDecoration: 'none',
      border: '1px solid white',
    }}
  >
    TOUR
  </a>
</div>
      </main>
      </>
    );
  }