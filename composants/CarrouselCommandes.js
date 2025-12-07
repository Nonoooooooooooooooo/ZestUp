import { useRef } from "react";
import styles from "../styles/CarrouselMenus.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from 'next/image';

const commandes = [
  { name: "Plat 1", image: "/images/plat1.jpg" },
  { name: "Plat 2", image: "/images/plat2.jpg" },
  { name: "Plat 3", image: "/images/plat3.jpg" },
];

export default function CarrouselCommandes() {
  const carouselRef = useRef(null);

  const scrollLeft = () => carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className={styles.carrouselContainer}>
      <button className={`${styles.arrowButton} ${styles.arrowLeft}`} onClick={scrollLeft}>
        <FiChevronLeft />
      </button>
      <div ref={carouselRef} className={styles.carrousel}>
        {commandes.map((plat, i) => (
          <div key={i} className={styles.menuCard}>
            <Image src={plat.image} alt={plat.name} width={250} height={150} style={{ objectFit: 'cover' }} />
            <h3>{plat.name}</h3>
            <button>Commander</button>
          </div>
        ))}
      </div>
      <button className={`${styles.arrowButton} ${styles.arrowRight}`} onClick={scrollRight}>
        <FiChevronRight />
      </button>
    </div>
  );
}
