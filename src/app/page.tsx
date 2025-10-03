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
    title: '株式会社ツナーズピクニック｜Web×システム×プロモーション',
    description: isRealProduction
      ? '株式会社ツナーズピクニック(ツナピク)は、熊本を拠点としながら、クライアントと共にMission達成へと歩むクリエイティブ集団です。新規事業の立ち上げからWeb制作・システム開発・プロモーション設計までを一括で手がけ、成果と向き合いながら寄り添います。また、私たちはプロセスも大切に。「楽しむ」ことを軸に、チームの力を引き出し、共に成長します。'
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
