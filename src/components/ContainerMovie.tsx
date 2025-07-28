/* =======================================
 * ツナーズピクニック MOVIE
 * URL: src/components/ContainerMovie.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';

const ContainerMovie = () => {
  return (
    <section className={styles.containerMovie}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/movie/top-movie.webp"
        className={styles.video}
      >
        <source src="/movie/top-movie.webm" type="video/webm" />
        <source src="/movie/top-movie.mp4" type="video/mp4" />
        お使いのブラウザは動画タグに対応していません。
      </video>
    </section>
  );
};
export default ContainerMovie;
