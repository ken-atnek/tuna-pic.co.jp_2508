/* =======================================
 * ツナーズピクニック VISION
 * URL: src/components/ContainerVision.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-25
 * Last updated: 2025-07-25
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';

const ContainerVision = () => {
  return (
    <section className={styles.containerVision} id="ContainerVision">
      <p>
        クライアントと歩む、Mission達成への道。
        <br />
        クライアントと共に、そのすべてのプロセスを楽しむ。
        <br />
        楽しむ事こそチームの力。
      </p>
      <div className={styles.sidebarH1}>TUNA’S PICNIC.inc</div>
      <h1>株式会社ツナーズピクニック</h1>
      <h2>
        vis<i>ion</i>
      </h2>
    </section>
  );
};
export default ContainerVision;
