import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="ZestUp Logo" />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link href="/">Accueil</Link>
        <Link href="/menus">Menus</Link>
        <Link href="/commande">Commander</Link>
        <Link href="/reservation">Réservation</Link>
      </div>

      <div className={styles.menuRight}>
        {session?.user ? (
          <div className={styles.profileButton}>
            <Link href="/profile">
              <img src={session.user.image || "/images/avatar.png"} alt="Avatar" className={styles.avatar} />
              {session.user.name}
            </Link>
            <button onClick={() => signOut()}>Déconnexion</button>
          </div>
        ) : (
          <Link href="/auth/signin">
            <button className={styles.connexionButton}>Connexion</button>
          </Link>
        )}
      </div>

      <div className={styles.menuMobileIcon} onClick={toggleMenu}>
        <FiMenu />
      </div>

      <div className={`${styles.menuMobile} ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={toggleMenu}>Accueil</Link>
        <Link href="/menus" onClick={toggleMenu}>Menus</Link>
        <Link href="/commande" onClick={toggleMenu}>Commander</Link>
        <Link href="/reservation" onClick={toggleMenu}>Réservation</Link>
        {session?.user ? (
          <Link href="/profile" onClick={toggleMenu}>Profil</Link>
        ) : (
          <Link href="/auth/signin" onClick={toggleMenu}>Connexion</Link>
        )}
      </div>
    </nav>
  );
}
