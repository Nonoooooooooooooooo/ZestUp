import { useRouter } from "next/router";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Image from "next/image";
import styles from "../../styles/MenuDetail.module.css";

const menusData = {
  menu1: { title: "Explosion Méditerranéenne" },
  menu2: { title: "Autour du Monde" },
  menu3: { title: "Street Food Gourmande" },
  menu4: { title: "Green & Healthy" },
  menu5: { title: "Gastronomie Gourmet" },
};

export default function MenuDetail() {
  const router = useRouter();

  if (!router.isReady) {
    return null;
  }

  const { slug } = router.query;
  const menu = menusData[slug];

  if (!menu) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "3rem", textAlign: "center" }}>
          <h1>Menu introuvable</h1>
          <p>Slug reçu : <strong>{slug}</strong></p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ padding: "3rem" }}>
        <h1>{menu.title}</h1>
        <p>Le menu est bien chargé 🎉</p>
      </main>
      <Footer />
    </>
  );
}
