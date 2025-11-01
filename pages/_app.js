import '../styles/globals.css';
import MenuOverlay from '../components/MenuOverlay';
import Link from 'next/link';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/BBManualMonoProTX.22d272fc.ttf', // Pages Router can use public folder
  variable: '--font-main',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.variable}>
      <MenuOverlay />
      <Component {...pageProps} />
    </div>
  );
}
