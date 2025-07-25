/* =======================================
 * 株式会社ツナーズピクニック FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-07-25
 * Last updated: 2025-07-25
 * ======================================= */
import { navMenu } from '@/data/navMenuData';
import Link from 'next/link';
import styles from '@/styles/components/common/Footer.module.scss';
import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.itemLogo}>
        <Image src={Logo} alt="ツナーズピクニックのロゴ" />
      </div>
      <nav>
        {navMenu.map((item) => (
          <Link key={item.label} href={item.href} className={styles.itemLink}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={styles.copyright}>© TUNAPIC CO.,LTD.</div>
    </footer>
  );
};

export default Footer;
