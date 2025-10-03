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
        <h2>KHALIIL.COM</h2>
        <p>
          I’m Khalil (Khaliil). I move through the world with a lens, capturing what most people miss—the quiet moments, the energy of cities, the stories hidden in streets and skies. This site is my space to share those experiences, raw and unfiltered, as I see them.
        </p>
        <p>
          Every trip, every frame, every sound is part of a story. Not just a memory, but a perspective. I don’t just travel—I observe, feel, and create. The journeys here aren’t about where I’ve been; they’re about what I’ve seen, felt, and imagined along the way.
        </p>
        <p>
          This isn’t a gallery of perfect pictures. It’s a record of life in motion, of curiosity and discovery, of moments that leave a mark. It’s honest. It’s intentional. It’s the way I choose to see the world.
        </p>
        <p>
          Step in. Explore. Experience the world through my eyes.
        </p>
      </div>
    </>
  );
}