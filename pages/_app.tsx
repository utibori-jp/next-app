// pages/_app.tsx
import 'tailwindcss/tailwind.css'; // Tailwind CSSのインポート
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
