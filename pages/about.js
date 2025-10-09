import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [data, setData] = useState({ title: '', content: [] });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
      setData(window.__NEXT_DATA__.about);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={data.description} />
        <meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
        <meta name="author" content="Khaliil" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khaliil.com/" />

        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khaliil.com/" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content="" />
      </Head>

      <div className="about-content">
        <h2>{data.title}</h2>
        {data.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}
