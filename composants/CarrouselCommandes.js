import styles from '../styles/CarrouselMenus.module.css'; // on réutilise le même style

const commandes = [
  { name: "Plat 1", image: "/images/plat1.jpg" },
  { name: "Plat 2", image: "/images/plat2.jpg" },
  { name: "Plat 3", image: "/images/plat3.jpg" },
];

export default function CarrouselCommandes() {
  return (
    <section className={styles.carrousel}>
      {commandes.map((plat, i) => (
        <div key={i} className={styles.menuCard}>
          <img src={plat.image} alt={plat.name} />
          <h3>{plat.name}</h3>
          <button>Commander</button>
        </div>
      ))}
    </section>
  );
}
