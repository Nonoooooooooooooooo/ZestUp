import styles from '../styles/CarrouselMenus.module.css';

const menus = [
  { name: "Menu 1", image: "/images/menu1.jpg" },
  { name: "Menu 2", image: "/images/menu2.jpg" },
  { name: "Menu 3", image: "/images/menu3.jpg" },
  { name: "Menu 4", image: "/images/menu4.jpg" },
  { name: "Menu 5", image: "/images/menu5.jpg" },
];

export default function CarrouselMenus() {
  return (
    <section className={styles.carrousel}>
      {menus.map((menu, i) => (
        <div key={i} className={styles.menuCard}>
          <img src={menu.image} alt={menu.name} />
          <h3>{menu.name}</h3>
          <button>Voir le menu</button>
        </div>
      ))}
    </section>
  );
}
