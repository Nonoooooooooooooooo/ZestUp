import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import styles from "../styles/Profile.module.css";

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [message, setMessage] = useState("");

  if (!session) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <h2>Vous devez être connecté pour accéder à cette page.</h2>
        </div>
        <Footer />
      </>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Profil mis à jour !");
      // Mettre à jour la session pour Navbar
      update();
    } else {
      setMessage("Erreur lors de la mise à jour");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Mon profil</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Nom :
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className={styles.label}>
            URL de la photo de profil :
            <input
              className={styles.input}
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
            />
          </label>

          <button type="submit" className={styles.button}>Enregistrer</button>
        </form>

        {message && <p className={styles.success}>{message}</p>}

        <div className={styles.logout}>
          <button className={styles.logoutButton} onClick={() => signOut({ callbackUrl: "/" })}>
            Déconnexion
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
