/* =======================================
 * メニュー項目
 * URL: src/data/navMenuData.ts
 * Created: 2025-07-25
 * Last updated: 2025-07-25
 * ======================================= */

export type NavMenuItem = {
  href: string;
  label: string;
};

export const navMenu: NavMenuItem[] = [
  { href: '/', label: 'TOP' },
  { href: '/#ContainerVision', label: 'VISION' },
  { href: '/#ContainerAboutUs', label: 'ABOUT US' },
  { href: '/#ContainerProfile', label: 'PROFILE' },
  { href: '/#containerClient', label: 'CLiENT' },
  { href: '/#ContainerContact', label: 'CONTACT' },
];
