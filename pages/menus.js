import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Menus.module.css";

const menus = [
  {
    name: "Menu 1",
    slug: "menu1",
    image: "/images/menu1.jpg",
    description: "Un menu savoureux et équilibré pour tous les goûts."
  },
  {
    name: "Menu 2",
    slug: "menu2",
    image: "/images/menu2.jpg",
    description: "Des plats gourmands, frais et faits maison."
  },
  {
    name: "Menu 3",
    slug: "menu3",
    image: "/images/menu3.jpg",
    description: "Une explosion de saveurs inspirée des cuisines du monde."
  },
  {
    name: "Menu 4",
    slug: "menu4",
    image: "/images/menu4.jpg",
    description: "Des recettes originales pour surprendre vos papilles."
  },
  {
    name: "Menu 5",
    slug: "menu5",
    image: "/images/menu5.jpg",
    description: "Le meilleur de la cuisine traditionnelle revisité."
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

