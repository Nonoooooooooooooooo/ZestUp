import { useRouter } from "next/router";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Image from "next/image";
import styles from "../../styles/MenuDetail.module.css";

// --- Données simulées pour chaque menu ---
const menusData = {
  menu1: {
    title: "Explosion Méditerranéenne",
    description: "Un menu inspiré des saveurs du sud : frais, coloré et ensoleillé.",
    sections: {
      entree: {
        title: "Entrée",
        image: "/images/entree1.jpg",
        desc: "Salade fraîcheur aux tomates, olives et feta.",
        ingredients: "Tomates, olives, feta, huile d’olive",
        allergenes: "Lait"
      },
      plat: {
        title: "Plat",
        image: "/images/plat1.jpg",
        desc: "Poulet grillé aux herbes et légumes rôtis.",
        ingredients: "Poulet, courgettes, poivrons, herbes",
        allergenes: "Aucun"
      },
      dessert: {
        title: "Dessert",
        image: "/images/dessert1.jpg",
        desc: "Tarte au citron meringuée maison.",
        ingredients: "Citron, farine, œufs, sucre",
        allergenes: "Gluten, œufs"
      },
      accompagnement: {
        title: "Accompagnement",
        image: "/images/acc1.jpg",
        desc: "Pain pita chaud et houmous crémeux.",
        ingredients: "Pois chiches, tahini, pain pita",
        allergenes: "Sésame, gluten"
      }
    }
  },

  // Tu peux dupliquer ici pour menu2, menu3… ensuite
};

// ---------------------------

export default function MenuDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const menu = menusData[slug];

  if (!menu) return <p>Menu introuvable.</p>;

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>{menu.title}</h1>
        <p className={styles.description}>{menu.description}</p>

        {/* ---- Sections Entrée / Plat / Dessert / Accompagnement ---- */}
        <div className={styles.sectionsWrapper}>
          {Object.values(menu.sections).map((sec, index) => (
            <div key={index} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{sec.title}</h2>

              <div className={styles.sectionContent}>
                <Image
                  src={sec.image}
                  alt={sec.title}
                  width={300}
                  height={200}
                  className={styles.sectionImage}
                />

                <p className={styles.sectionDesc}>{sec.desc}</p>

                {/* Onglet déroulant */}
                <details className={styles.detailsBox}>
                  <summary>Ingrédients & Allergènes</summary>
                  <p><strong>Ingrédients :</strong> {sec.ingredients}</p>
                  <p><strong>Allergènes :</strong> {sec.allergenes}</p>
                </details>
              </div>
            </div>
          ))}
        </div>

        {/* ----- Section Avis ----- */}
        <div className={styles.avisSection}>
          <h2>Vos avis</h2>
          <p>Les avis clients seront bientôt disponibles.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
