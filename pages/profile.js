import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import styles from "../styles/Profile.module.css";

export default function ProfilePage() {
  const { data: session } = useSession();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux envoyer les données vers ton API ou base de données
    setMessage("Profil mis à jour avec succès !");
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Mon profil</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nom :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            URL de la photo de profil :
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
            />
          </label>

          <button type="submit">Enregistrer</button>
        </form>

        {message && <p className={styles.success}>{message}</p>}

        <div className={styles.logout}>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Déconnexion
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
