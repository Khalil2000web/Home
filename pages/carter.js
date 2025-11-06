import Head from 'next/head';

export default function Carter() {

return (
<>
<Head>
<title>CARTER: The Cat</title>
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

<meta name="copyright" content={new Date().getFullYear()} />
<meta name="referrer" content="no-referrer-when-downgrade" />
</Head>

<div className="content">

<h2>CARTER THE CAT</h2>

</div>

      <style jsx>{`
        p {
          height: 200px;
          width: 500px;
          margin: 100px auto;
          position: relative;
        }

        img {
          height: 100px;
          position: absolute;
          left: 0;
          offset-path: path('m 0 50 q 50-30 100-30 t 100 30 100 0 100-30 100 30');
          box-shadow: 1px 1px 3px #0008;
          transition: transform .4s ease-out, offset-path .4s cubic-bezier(.77,-1.17,.75,.84), box-shadow .3s, z-index .3s;
          z-index: 0;
        }

        img:hover {
          transform: scale(3);
          offset-path: path('m 5 65 q 45-0 90-0 t 90 0 90 0 90-0 90 0');
          box-shadow: 3px 4px 10px #0006;
          z-index: 999;
        }

        /* 3 images */
        img:nth-last-child(3):first-child { offset-distance: 17%; }
        img:nth-last-child(2):nth-child(2) { offset-distance: 49%; }
        img:last-child:nth-child(3) { offset-distance: 81%; }

        /* 4 images */
        img:nth-last-child(4):first-child { offset-distance: 10%; }
        img:nth-last-child(3):nth-child(2) { offset-distance: 40%; }
        img:nth-last-child(2):nth-child(3) { offset-distance: 70%; }
        img:last-child:nth-child(4) { offset-distance: 100%; }

        /* 5 images */
        img:nth-last-child(5):first-child { offset-distance: 10%; }
        img:nth-last-child(4):nth-child(2) { offset-distance: 32%; }
        img:nth-last-child(3):nth-child(3) { offset-distance: 54%; }
        img:nth-last-child(2):nth-child(4) { offset-distance: 76%; }
        img:last-child:nth-child(5) { offset-distance: 98%; }
      `}</style>

      <main>
        <p>
          <img src="https://loremflickr.com/320/200" />
          <img src="https://loremflickr.com/321/200" />
          <img src="https://loremflickr.com/319/200" />
          <img src="https://loremflickr.com/323/200" />
          <img src="https://loremflickr.com/322/200" />
        </p>

        <p>
          <img src="https://loremflickr.com/320/200" />
          <img src="https://loremflickr.com/321/200" />
          <img src="https://loremflickr.com/319/200" />
        </p>

        <p>
          <img src="https://loremflickr.com/320/200" />
          <img src="https://loremflickr.com/321/200" />
          <img src="https://loremflickr.com/319/200" />
          <img src="https://loremflickr.com/323/200" />
        </p>
      </main>


</>
);
}