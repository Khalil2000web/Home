import Head from "next/head";

export default function About({ pageData }) {
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <meta name="description" content={pageData.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.description} />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="about-page">
        <h1>{pageData.title}</h1>
        <p>{pageData.description}</p>
        {pageData.content.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const pageData = {
    title: "About Khaliil",
    description: "Khaliil's Official Website - About Page",
    content: [
      "Khaliil is a passionate traveler and creator.",
      "He documents his journeys with photos, videos, and stories.",
      "Follow along to see more adventures!"
    ]
  };

  return {
    props: { pageData },
  };
}