import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <meta name="description" content="Khaliil's Official Website" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
        <meta name="author" content="Khaliil" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khaliil.com/about" />

        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content="Khaliil's Official Website" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khaliil.com/about" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content="Khaliil's Official Website" />
        <meta name="twitter:image" content="" />
      </Head>

      <div className="about-content">
        <h2>ABOUT</h2>
        <p>Hey, I’m Khaliil (Khalil), a 17-year-old creator, coder, and dreamer. I’m deeply obsessed with how things are built — from websites to apps, and I spend most of my time learning, designing, and coding. My goal is to become a software engineer and create digital experiences that feel smart, clean, and full of meaning.</p>
        <p>This website is a reflection of me, my ideas, my projects, and the moments I capture. I don’t travel often, but when I do, I bring back what inspires me most: the visuals, the sounds, and the stories behind every place.</p>
        <p>Everything here is built and shared by me. And yes — it’s completely legal to have a site like this at 17. I own my content and handle everything myself, responsibly.</p>
        <p>Welcome to my world: part code, part art, and completely me.</p>
      </div>
    </>
  );
}
