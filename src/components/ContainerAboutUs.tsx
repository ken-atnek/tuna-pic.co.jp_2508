/* =======================================
 * ツナーズピクニック ABOUT US
 * URL: src/components/ContainerAboutUs.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import { useMemo } from 'react';
import type { StaticImageData } from 'next/image';
import About01 from '@/assets/images/about01.webp';
type AboutItem = {
  image: StaticImageData;
  title: React.ReactNode;
  titleEn: React.ReactNode;
  description: React.ReactNode;
};
const ContainerAboutUs = () => {
  const ListData: AboutItem[] = useMemo(
    () => [
      {
        title: 'プランニング',
        titleEn: 'PLANNING',
        image: About01,
        description: (
          <>
            新規事業プランニング・運営
            <br />
            地域課題解決・伴走型支援
            <br />
            各種イベント企画
          </>
        ),
      },
      {
        title: 'クリエイティブ',
        titleEn: 'CREATIVE',
        image: About01,
        description: (
          <>
            ＷＥＢサイト制作・運営
            <br />
            動画コンテンツ企画制作
          </>
        ),
      },
      {
        title: 'システム設計・開発',
        titleEn: (
          <>
            SYSTEM DESIGN
            <br />
            and
            <br />
            DEVELOPMENT
          </>
        ),
        image: About01,
        description: (
          <>
            業務効率化を目的とした
            <br />
            各種システム開発
          </>
        ),
      },
      {
        // 「ー」だけ横向きにするために <i> で囲んでいます
        title: (
          <>
            プロモ<i>ー</i>ション
          </>
        ),
        titleEn: 'PROMOTION',
        image: About01,
        description: (
          <>
            デジタルマーケティング・
            <br />
            プロモーション設計 　
          </>
        ),
      },
    ],
    []
  );
  return (
    <section className={styles.containerAboutUs} id="ContainerAboutUs">
      <h2>
        abo<i>ut</i>us
      </h2>
      <h3>アイデアをカタチに、地域にチカラを。</h3>
      <p className={styles.catch}>
        新規事業の立ち上げ支援、WEBサイトや動画コンテンツの制作、業務システムの開発、そしてプロモーション戦略の設計まで。
        <br />
        私たちは各分野のプロフェッショナルが連携し、それぞれの強みを活かしながら、課題解決と価値創出に取り組んでいます。
      </p>
      <ul>
        {ListData.map((item, index) => {
          const liStyle = {
            '--bg-image': `url(${item.image.src})`,
          } as React.CSSProperties;
          return (
            <li key={index} style={liStyle}>
              <h4>{item.title}</h4>
              <h5>{item.titleEn}</h5>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ContainerAboutUs;
