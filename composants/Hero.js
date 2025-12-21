import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Image de fond */}
      <Image
        src="/images/hero1.jpg"
        alt="Explosion de saveurs ZestUp"
        fill
        priority
        className={styles.heroImage}
      />

      {/* Contenu au premier plan */}
      <div className={styles.heroOverlay}>
        <h1>Explosion de saveurs à domicile</h1>
        <p>
          Découvrez nos menus, commandez vos plats préférés ou réservez un chef
          directement chez vous.
        </p>
        <Link href="/reservation">
          <button>Réserver un chef</button>
        </Link>
      </div>
    </section>
  );
}
