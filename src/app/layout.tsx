/* =======================================
 * 株式会社ツナーズピクニック Layout
 * URL:src/app/layout.tsx
 * Created: 2025-07-25
 * Last updated: 2025-07-25
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Poppins } from 'next/font/google';
// import { Zen_Kaku_Gothic_New } from 'next/font/google';
import { Arvo } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['400', '500', '700'], // 必要なウェイトを指定
  subsets: ['latin'],
  display: 'swap',
});

const arvo = Arvo({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});
// const zenKaku = Zen_Kaku_Gothic_New({
//   weight: ['400', '700', '500', '900'], // 必要なウェイトを指定
//   subsets: ['latin'],
//   display: 'swap',
// });
// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://tuna-pic.co.jp/')
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: '/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '株式会社ツナーズピクニックのOGP画像',
        },
      ],
    },
  }),
  title: ' 株式会社ツナーズピクニック｜Web×システム×プロモーション',
  description: isRealProduction
    ? '熊本を拠点とするTUNA’S PICNIC（ツナーズピクニック）は、新規事業の立ち上げからWeb制作、システム開発、プロモーション設計までを一括対応。寄り添いながら成果を生み出すクリエイティブ集団です。'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-light.svg',
        media: '(prefers-color-scheme: light)',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon/favicon-dark.svg',
        media: '(prefers-color-scheme: dark)',
        type: 'image/svg+xml',
      },
      // { url: '/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${poppins.className}${arvo.className}`}>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GYMTD4Z2M1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GYMTD4Z2M1');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
