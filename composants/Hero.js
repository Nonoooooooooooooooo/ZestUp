import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Explosion de saveurs à domicile</h1>
        <p>Découvrez nos menus, commandez vos plats préférés ou réservez un chef chez vous.</p>
        <Link href="/reservation">
          <button>Réserver un chef</button>
        </Link>
      </div>

      <Image
        src="/images/hero.jpg" // mets une image de haute résolution ici
        alt="Hero ZestUp"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        priority
      />
    </section>
  );
}
