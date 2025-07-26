/* =======================================
 * 株式会社ツナーズピクニック HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */
'use client';
import { navMenu } from '@/data/navMenuData';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState, useRef } from 'react';
import Logo from '@/assets/images/logo-dark.svg';
import LogoMobile from '@/assets/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen]);

  return (
    <header className={styles.containerHeader}>
      <div className={styles.itemLogo}>
        <Image src={Logo} alt="ツナーズピクニックのロゴ" />
      </div>
      <article
        className={`${isOpen ? styles['is-open'] : ''} ${
          !isOpen ? styles.closing : ''
        }`}
      >
        <div className={styles.itemMobileLogo}>
          <Image src={LogoMobile} alt="ツナーズピクニックのロゴ" />
        </div>
        <nav>
          {navMenu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.itemLink}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </article>
      <button
        type="button"
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
        ref={buttonRef}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
