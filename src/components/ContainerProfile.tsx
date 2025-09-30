/* =======================================
 * ツナーズピクニック PROFILE
 * URL: src/components/ContainerProfile.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-26
 * Last updated: 2025-07-26
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import Link from 'next/link';
const ContainerProfile = () => {
  return (
    <section className={styles.containerProfile} id="ContainerProfile">
      <h2>
        pro<i>file</i>
      </h2>
      <div className={styles.itemLogo}>
        <Image src={Logo} alt="ツナーズピクニックのロゴ" />
      </div>
      <article>
        <div className={styles.name}>株式会社ツナーズピクニック</div>
        <div className={styles.boxInfo}>
          <dl>
            <dt>ADD</dt>
            <dd>
              <address>熊本市西区城山下代1丁目3-1-B</address>
            </dd>
          </dl>
          <dl>
            <dt>TEL</dt>
            <dd>
              <ExternalLink
                href="tel:0963558136"
                className={styles.itemTel}
                aria-label="ツナーズピクニックへ電話"
              >
                096-355-8136
              </ExternalLink>
            </dd>
          </dl>
          <dl>
            <dt>HP</dt>
            <dd>
              <Link href="/">tuna-pic.co.jp</Link>
            </dd>
          </dl>
        </div>
        <ul>
          <li>新規事業プランニング・運営、伴走型支援</li>
          <li>ＷＥＢサイト制作・運営、システム開発</li>
          <li>デジタルマーケティング・プロモーション設計</li>
          <li>動画コンテンツの企画・制作</li>
          <li>その他各種イベント企画</li>
        </ul>
      </article>
    </section>
  );
};
export default ContainerProfile;
