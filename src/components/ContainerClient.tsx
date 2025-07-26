/* =======================================
 * ツナーズピクニック CLIENT
 * URL: src/components/ContainerClient.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-26
 * Last updated: 2025-07-26
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import { clientData } from '@/data/clientData';
const ContainerClient = () => {
  return (
    <section className={styles.containerClient} id="ContainerClient">
      <h2>
        cli<i>ent</i>
      </h2>
      <ul className={styles.bannerList}>
        {clientData.map((client, index) => (
          <li key={index} className={styles.bannerItem}>
            <ExternalLink
              href={client.url}
              aria-label={client.title}
            ></ExternalLink>
            <div className={styles.wrapImage}>
              <Image
                src={client.image}
                className={styles.itemImage}
                alt={client.title.replace(/<br\s*\/?>/gi, ' ')}
                style={{ width: client.width ? client.width + '%' : '90%' }}
                width={100}
                height={60}
              />
            </div>
            <p
              className={styles.bannerTitle}
              dangerouslySetInnerHTML={{ __html: client.title }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ContainerClient;
