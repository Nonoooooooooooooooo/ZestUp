import { useState } from "react";
import menusData from "../../data/menus";
import Image from "next/image";
import styles from "../../styles/MenuPage.module.css";

export default function MenuPage({ menu }) {
  if (!menu) {
    return <h1>Menu introuvable</h1>;
  }

  const [openSection, setOpenSection] = useState(null);

  const toggleDetails = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{menu.title}</h1>
      <p className={styles.description}>{menu.description}</p>

      <div className={styles.sections}>
        {Object.entries(menu.sections).map(([key, item]) => (
          <div key={key} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.name}</h2>

            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={250}
              className={styles.image}
            />

            <p>{item.desc}</p>

            <button
              className={styles.toggleButton}
              onClick={() => toggleDetails(key)}
            >
              {openSection === key ? "Fermer" : "Voir Ingrédients & Allergènes"}
            </button>

            {openSection === key && (
              <div className={styles.details}>
                <p><strong>Ingrédients :</strong> {item.details.ingredients}</p>
                <p><strong>Allergènes :</strong> {item.details.allergens}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.avisSection}>
        <h2>Avis</h2>
        <p>⭐ Cette section affichera les avis des clients (à venir)</p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const menu = menusData[params.slug] || null;

  return {
    props: {
      menu,
    },
  };
}
