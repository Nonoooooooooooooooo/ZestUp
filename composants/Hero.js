import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Explosion de saveurs à domicile</h1>
        <p>Découvrez nos menus et commandez vos plats préférés ou réservez un chef chez vous.</p>
      </div>
    </section>
  );
}
