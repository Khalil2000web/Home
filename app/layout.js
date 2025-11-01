import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    { path: './fonts/BBManualMonoProTX.22d272fc.ttf', weight: '400', style: 'normal' }
  ],
  variable: '--font-main'
});

export const metadata = {
  title: 'Khaliil Site',
  description: 'Official Website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.variable}>
        {children}
      </body>
    </html>
  );
}
