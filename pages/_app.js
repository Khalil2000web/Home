import '../styles/globals.css';
import MenuOverlay from '../components/MenuOverlay';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
return (
<>

<MenuOverlay />
<Component {...pageProps} />

</>
);
}