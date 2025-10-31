/* =======================================
 * ツナーズピクニック MOVIE
 * URL: src/components/ContainerMovie.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
'use client';
import styles from '@/styles/PageTop.module.scss';

const ContainerMovie = () => {
  return (
    <section className={styles.containerMovie}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/movie/top-movie.webp"
        className={styles.video}
        onLoadStart={() => console.log('動画読み込み開始')}
        onError={(e) => console.error('動画エラー:', e)}
      >
        <source src="/movie/top-movie.mp4" type="video/mp4" />
        <source src="/movie/top-movie.webm" type="video/webm" />
        お使いのブラウザは動画タグに対応していません。
      </video>
    </section>
  );
};
export default ContainerMovie;
