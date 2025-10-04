import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>ABOUT</title>
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

      <div className="about-content">
        <h2>ABOUT</h2>
        <p>
Hey, I’m Khaliil (Khalil), a 17-year-old creator, coder, and dreamer. I’m deeply obsessed with how things are built — from websites to apps, and I spend most of my time learning, designing, and coding. My goal is to become a software engineer and create digital experiences that feel smart, clean, and full of meaning.
        </p>
        <p>
This website is a reflection of me, my ideas, my projects, and the moments I capture. I don’t travel often, but when I do, I bring back what inspires me most: the visuals, the sounds, and the stories behind every place.
        </p>
        <p>
Everything here is built and shared by me. And yes — it’s completely legal to have a site like this at 17. I own my content and handle everything myself, responsibly.
        </p>
        <p>
Welcome to my world: part code, part art, and completely me.
        </p>
      </div>
    </>
  );
}