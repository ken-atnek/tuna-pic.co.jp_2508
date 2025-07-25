/* =======================================
 * 株式会社ツナーズピクニック ニュース型
 * URL: src/types/newsItem.ts
 * Created: 2025-07-16
 * Last updated: 2025-07-16
 * ======================================= */
export type NewsItem = {
  title?: string;
  body?: string;
  pdfTitle?: string;
  pdfLink?: string;
  date: string;
};
