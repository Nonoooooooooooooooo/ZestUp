import { useRef } from "react";
import styles from "../styles/CarrouselMenus.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const menus = [
  { 
    name: "Menu Méditerranéen", 
    image: "/images/menu1.jpg.jpg",
    description: "Saveurs fraîches du soleil : olives, herbes, poissons & épices douces."
  },
  { 
    name: "Menu du Monde", 
    image: "/images/menu2.jpg.jpg",
    description: "Une sélection gourmande inspirée des cuisines internationales."
  },
  { 
    name: "Street Food Gourmet", 
    image: "/images/menu3.jpg.jpg",
    description: "Le meilleur de la street-food revisité en version premium."
  },
  { 
    name: "Menu Végétal & Healthy", 
    image: "/images/menu4.jpg.jpg",
    description: "Plats équilibrés, gourmands et adaptés à tous les régimes."
  },
  { 
    name: "Menu Gastronomique", 
    image: "/images/menu5.jpg.jpg",
    description: "Une expérience culinaire raffinée, inspirée de la haute cuisine."
  }
];

export default function CarrouselMenus() {
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
        {menus.map((menu, i) => (
          <div key={i} className={styles.menuCard}>
            <Image
              src={menu.image}
              alt={menu.name}
              width={250}
              height={150}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />

            <h3 className={styles.menuTitle}>{menu.name}</h3>

            {/* ➕ Description ajoutée */}
            <p className={styles.menuDescription}>{menu.description}</p>

            <button className={styles.menuButton}>Voir le menu</button>
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
