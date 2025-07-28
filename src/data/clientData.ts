/* =======================================
 * ツナーズピクニック クライアントデータ
 * URL: src/data/clientData.ts
 * Referenced in: src/components/ContainerClient.tsx
 * Created: 2025-07-26
 * Last updated: 2025-07-26
 * ======================================= */

export type ClientBanner = {
  title: string;
  image: string;
  url: string;
  width?: number;
};

export const clientData: ClientBanner[] = [
  {
    title: '熊本日日新聞社',
    image: '/images/client/kumanichi.webp',
    url: 'https://kumanichi.com/',
  },
  {
    title: '熊日広告社',
    image: '/images/client/kumanichi-koukoku.webp',
    url: 'https://kumakou.jp/',
  },
  {
    title: '熊日メディアコム',
    image: '/images/client/kumanichi-media.webp',
    url: 'https://kuma-media.com/',
  },
  {
    title: '熊日サービス開発',
    image: '/images/client/kumanichi-service.webp',
    url: 'https://www.kumanichi-sv.co.jp/',
  },
  {
    title: '黒川温泉観光旅館協同組合',
    image: '/images/client/kurokawaonsen.webp',
    url: 'https://www.kurokawaonsen.or.jp/',
    width: 80,
  },

  {
    title: 'ふもと旅館',
    image: '/images/client/fumoto-ryokan.webp',
    url: 'https://www.fumotoryokan.com/',
    width: 80,
  },
  {
    title: 'こうの湯',
    image: '/images/client/kounoyu.webp',
    url: 'https://www.kounoyu.jp/',
  },
  {
    title: '亀の甲温泉',
    image: '/images/client/kamenoko-onsen.webp',
    url: 'https://kamenokouonsen-kumamoto.com/',
  },
  {
    title: 'ステーキ＆ハンバーグ<br />センターリバー',
    image: '/images/client/center-river.webp',
    url: 'https://centerriver1980.com/',
    width: 90,
  },
  {
    title: '老人ホーム　梨園',
    image: '/images/client/rien.webp',
    url: 'http://enai.co.jp/',
    width: 85,
  },
  {
    title: '徳永琴教室',
    image: '/images/client/tokunaga-koto.webp',
    url: 'https://www.koto-suimei.com/',
    width: 80,
  },
  {
    title: 'ももの木訪問看護ステーション',
    image: '/images/client/mononoki.webp',
    url: 'https://www.momonokikango.com/',
    width: 100,
  },
  {
    title: '加藤誠貴税理士事務所',
    image: '/images/client/katou-tax.webp',
    url: 'https://katou-tax.com/',
    width: 100,
  },
  {
    title: '西養寺',
    image: '/images/client/saiyouji.webp',
    url: 'https://kumamoto-saiyouji.jp/',
  },
  {
    title: '九州運輸',
    image: '/images/client/q-un.webp',
    url: 'https://qun-kumamoto.com/',
    width: 100,
  },
  {
    title: '九環',
    image: '/images/client/q-kan.webp',
    url: 'https://kyukan-kumamoto.com/',
    width: 70,
  },
  {
    title: '西川塗装',
    image: '/images/client/nishikawa-tosou.webp',
    url: 'https://nishikawatoso.com/',
    width: 100,
  },
  {
    title: '佐藤建装',
    image: '/images/client/satou-kensou.webp',
    url: 'https://satoukenso.com/',
    width: 80,
  },
  {
    title: '熊本市中央公民館',
    image: '/images/client/chouou-kouminkan.webp',
    url: 'https://www.shirakawa-chuo-cc.com/',
  },
];
