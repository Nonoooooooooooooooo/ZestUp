import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Menus.module.css";

const menus = [
  {
    name: "Explosion Méditerranéenne",
    slug: "mediterranean",
    image: "/images/mediterranean.jpg",
    description: "Un voyage ensoleillé aux saveurs fraîches et authentiques."
  },
  {
    name: "Saveurs du Monde",
    slug: "world-food",
    image: "/images/world_food.jpg",
    description: "Une tournée gourmande à travers les cuisines du globe."
  },
  {
    name: "Street-Food Gourmet",
    slug: "street-food",
    image: "/images/street_food.jpg",
    description: "Le meilleur de la street-food revisité façon maison."
  },
  {
    name: "Végétal & Healthy",
    slug: "vege-healthy",
    image: "/images/vege.jpg",
    description: "Des plats équilibrés et gourmands pour tous."
  },
  {
    name: "Chef Gastronomique",
    slug: "gastronomique",
    image: "/images/gastro.jpg",
    description: "Une expérience culinaire raffinée et élégante."
  }
];

export default function MenusPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Nos Menus</h1>

      <div className={styles.menuGrid}>
        {menus.map((menu) => (
          <Link key={menu.slug} href={`/menus/${menu.slug}`} className={styles.menuCard}>
            <Image
              src={menu.image}
              alt={menu.name}
              width={300}
              height={180}
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
            <h3 className={styles.menuTitle}>{menu.name}</h3>
            <p className={styles.menuDescription}>{menu.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
