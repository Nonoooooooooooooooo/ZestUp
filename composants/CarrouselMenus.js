import { useRef } from "react";
import styles from "../styles/CarrouselMenus.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const menus = [
  { name: "Menu 1", image: "/images/menu1.jpg" },
  { name: "Menu 2", image: "/images/menu2.jpg" },
  { name: "Menu 3", image: "/images/menu3.jpg" },
  { name: "Menu 4", image: "/images/menu4.jpg" },
  { name: "Menu 5", image: "/images/menu5.jpg" },
];

export default function CarrouselMenus() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.carrouselContainer}>
      <button className={`${styles.arrowButton} ${styles.arrowLeft}`} onClick={scrollLeft}>
        <FiChevronLeft />
      </button>
      <div ref={carouselRef} className={styles.carrousel}>
        {menus.map((menu, i) => (
          <div key={i} className={styles.menuCard}>
            <img src={menu.image} alt={menu.name} />
            <h3>{menu.name}</h3>
            <button>Voir le menu</button>
          </div>
        ))}
      </div>
      <button className={`${styles.arrowButton} ${styles.arrowRight}`} onClick={scrollRight}>
        <FiChevronRight />
      </button>
    </div>
  );
}
