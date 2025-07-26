/* =======================================
 * 株式会社ツナーズピクニック TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-25
 * Last updated: 2025-07-25
 * ======================================= */

import ContainerAboutUs from '@/components/ContainerAboutUs';
import ContainerClient from '@/components/ContainerClient';
import ContainerContact from '@/components/ContainerContact';
import ContainerMovie from '@/components/ContainerMovie';
import ContainerProfile from '@/components/ContainerProfile';
import ContainerVision from '@/components/ContainerVision';
import type { Metadata } from 'next';

const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

export const generateMetadata = (): Metadata => {
  return {
    title: '株式会社ツナーズピクニック',
    description: isRealProduction
      ? '株式会社ツナーズピクニックはクライアントと歩む、Mission達成への道。クライアントと共に、そのすべてのプロセスを楽しむ。楽しむ事こそチームの力。'
      : undefined,
  };
};
export default function Home() {
  return (
    <>
      <ContainerVision />
      <ContainerMovie />
      <ContainerAboutUs />
      <ContainerProfile />
      <ContainerClient />
      <ContainerContact />
    </>
  );
}
