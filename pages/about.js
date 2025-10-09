import Head from 'next/head';

export default function AboutPage({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageData.description} />
        <meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
        <meta name="author" content="Khaliil" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khaliil.com/" />

        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khaliil.com/" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content={pageData.description} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="@khaliildiab" />
        <meta name="twitter:creator" content="@khaliildiab" />
      </Head>

      <div className="about-content">
        <h2>{pageData.title}</h2>
        {pageData.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}

// This function runs at build time and passes props to the page
export async function getStaticProps() {
  const pageData = {
    title: "ABOUT",
    description: "Khaliil's Official Website",
    content: [
      "Hey, I’m Khaliil (Khalil), a 17-year-old creator, coder, and dreamer. I’m deeply obsessed with how things are built — from websites to apps, and I spend most of my time learning, designing, and coding. My goal is to become a software engineer and create digital experiences that feel smart, clean, and full of meaning.",
      "This website is a reflection of me, my ideas, my projects, and the moments I capture. I don’t travel often, but when I do, I bring back what inspires me most: the visuals, the sounds, and the stories behind every place.",
      "Everything here is built and shared by me. And yes — it’s completely legal to have a site like this at 17. I own my content and handle everything myself, responsibly.",
      "Welcome to my world: part code, part art, and completely me."
    ]
  };

  return {
    props: {
      pageData
    }
  };
}