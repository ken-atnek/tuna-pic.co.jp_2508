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
  title: ' 株式会社ツナーズピクニック',
  description: isRealProduction
    ? '株式会社ツナーズピクニックのディスクリプション'
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
