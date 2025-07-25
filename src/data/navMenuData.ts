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
  { href: '/', label: 'VISION' },
  { href: '/', label: 'ABOUT US' },
  { href: '/', label: 'CLiENT' },
  { href: '/', label: 'PROFILE' },
  { href: '/', label: 'CONTACT' },
];
