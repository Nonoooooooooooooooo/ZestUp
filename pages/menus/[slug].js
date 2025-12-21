import { useRouter } from "next/router";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Image from "next/image";
import styles from "../../styles/MenuDetail.module.css";

// --- Données complètes pour tous les menus ---
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

  menu2: {
    title: "Autour du Monde",
    description: "Un voyage culinaire à travers les continents.",
    sections: {
      entree: {
        title: "Entrée",
        image: "/images/entree2.jpg",
        desc: "Rouleaux de printemps frais et croquants.",
        ingredients: "Riz, crudités, herbes, crevettes",
        allergenes: "Crustacés"
      },
      plat: {
        title: "Plat",
        image: "/images/plat2.jpg",
        desc: "Curry thaï au lait de coco et légumes.",
        ingredients: "Légumes, lait de coco, épices",
        allergenes: "Aucun"
      },
      dessert: {
        title: "Dessert",
        image: "/images/dessert2.jpg",
        desc: "Mochi glacé à la vanille.",
        ingredients: "Riz gluant, vanille, sucre",
        allergenes: "Aucun"
      },
      accompagnement: {
        title: "Accompagnement",
        image: "/images/acc2.jpg",
        desc: "Riz jasmin parfumé.",
        ingredients: "Riz",
        allergenes: "Aucun"
      }
    }
  },

  menu3: {
    title: "Street Food Gourmande",
    description: "Le meilleur de la street food revisitée.",
    sections: {
      entree: {
        title: "Entrée",
        image: "/images/entree3.jpg",
        desc: "Onion rings croustillants.",
        ingredients: "Oignons, farine, épices",
        allergenes: "Gluten"
      },
      plat: {
        title: "Plat",
        image: "/images/plat3.jpg",
        desc: "Burger gourmet au bœuf et cheddar.",
        ingredients: "Bœuf, pain, fromage",
        allergenes: "Gluten, lait"
      },
      dessert: {
        title: "Dessert",
        image: "/images/dessert3.jpg",
        desc: "Milkshake vanille maison.",
        ingredients: "Lait, vanille",
        allergenes: "Lait"
      },
      accompagnement: {
        title: "Accompagnement",
        image: "/images/acc3.jpg",
        desc: "Frites de patates douces.",
        ingredients: "Patates douces",
        allergenes: "Aucun"
      }
    }
  },

  menu4: {
    title: "Green & Healthy",
    description: "Des recettes saines, fraîches et équilibrées.",
    sections: {
      entree: {
        title: "Entrée",
        image: "/images/entree4.jpg",
        desc: "Velouté de légumes de saison.",
        ingredients: "Légumes",
        allergenes: "Aucun"
      },
      plat: {
        title: "Plat",
        image: "/images/plat4.jpg",
        desc: "Bowl quinoa, avocat et légumes grillés.",
        ingredients: "Quinoa, légumes",
        allergenes: "Aucun"
      },
      dessert: {
        title: "Dessert",
        image: "/images/dessert4.jpg",
        desc: "Salade de fruits frais.",
        ingredients: "Fruits",
        allergenes: "Aucun"
      },
      accompagnement: {
        title: "Accompagnement",
        image: "/images/acc4.jpg",
        desc: "Pain complet bio.",
        ingredients: "Blé",
        allergenes: "Gluten"
      }
    }
  },

  menu5: {
    title: "Gastronomie Gourmet",
    description: "Une expérience culinaire raffinée.",
    sections: {
      entree: {
        title: "Entrée",
        image: "/images/entree5.jpg",
        desc: "Foie gras mi-cuit et chutney.",
        ingredients: "Foie gras, fruits",
        allergenes: "Aucun"
      },
      plat: {
        title: "Plat",
        image: "/images/plat5.jpg",
        desc: "Filet de bœuf sauce truffe.",
        ingredients: "Bœuf, truffe",
        allergenes: "Aucun"
      },
      dessert: {
        title: "Dessert",
        image: "/images/dessert5.jpg",
        desc: "Fondant au chocolat noir.",
        ingredients: "Chocolat, œufs, beurre",
        allergenes: "Lait, œufs"
      },
      accompagnement: {
        title: "Accompagnement",
        image: "/images/acc5.jpg",
        desc: "Gratin dauphinois.",
        ingredients: "Pommes de terre, crème",
        allergenes: "Lait"
      }
    }
  }
};

export default function MenuDetail() {
  const router = useRouter();

  if (!router.isReady) return null;

  const { slug } = router.query;
  const menu = menusData[slug];

  if (!menu) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "3rem", textAlign: "center" }}>
          <h1>Menu introuvable</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>{menu.title}</h1>
        <p className={styles.description}>{menu.description}</p>

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
                <details className={styles.detailsBox}>
                  <summary>Ingrédients & Allergènes</summary>
                  <p><strong>Ingrédients :</strong> {sec.ingredients}</p>
                  <p><strong>Allergènes :</strong> {sec.allergenes}</p>
                </details>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.avisSection}>
          <h2>Vos avis</h2>
          <p>Les avis clients seront bientôt disponibles.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
