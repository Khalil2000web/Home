import '../styles/globals.css';
import MenuOverlay from '../components/MenuOverlay';
import Link from 'next/link';
import AnimatedBackground from "../components/AnimatedBackground";

export default function App({ Component, pageProps }) {
return (
<>

<AnimatedBackground />
<MenuOverlay />
<Component {...pageProps} />

</>
);
}