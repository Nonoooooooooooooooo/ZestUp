import { useRef } from "react";
import styles from "../styles/CarrouselMenus.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const commandes = [
  {
    name: "Roses des Sables",
    image: "/images/roses-des-sables.jpg",
    description: "Craquantes, gourmandes, enrobées de chocolat — un snack croustillant et réconfortant."
  },
  {
    name: "Brookie",
    image: "/images/brookie.jpg",
    description: "Fondant brownie & moelleux cookie — pour les amoureux du chocolat intense."
  },
  {
    name: "Crêpe Maison",
    image: "/images/crepe.jpg",
    description: "Fine, dorée et moelleuse — servie chaude pour un moment douceur à partager."
  },
];

export default function CarrouselCommandes() {
  const carouselRef = useRef(null);

  const scrollLeft = () =>
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className={styles.carrouselContainer}>
      <button
        className={`${styles.arrowButton} ${styles.arrowLeft}`}
        onClick={scrollLeft}
      >
        <FiChevronLeft />
      </button>

      <div ref={carouselRef} className={styles.carrousel}>
        {commandes.map((plat, i) => (
          <div key={i} className={styles.menuCard}>
            <Image
              src={plat.image}
              alt={plat.name}
              width={260}
              height={160}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
            <h3 className={styles.menuTitle}>{plat.name}</h3>
            <p className={styles.menuDescription}>{plat.description}</p>
            <button className={styles.menuButton}>Commander</button>
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrowButton} ${styles.arrowRight}`}
        onClick={scrollRight}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
