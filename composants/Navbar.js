import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useSession, signOut } from 'next-auth/react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo réel */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="ZestUp Logo" />
        </Link>
      </div>

      {/* Menu desktop */}
      <div className={styles.menu}>
        <Link className={styles.navLink} href="/">Accueil</Link>
        <Link className={styles.navLink} href="/menus">Menus</Link>
        <Link className={styles.navLink} href="/commande">Commander</Link>
        <Link className={styles.navLink} href="/reservation">Réservation</Link>
        {session ? (
          <>
            <span className={styles.navUser}>Bonjour {session.user.name}</span>
            <button className={`${styles.navButton} ${styles.navLogin}`} onClick={() => signOut({ callbackUrl: "/" })}>
              Déconnexion
            </button>
          </>
        ) : (
          <Link className={`${styles.navLink} ${styles.navLogin}`} href="/auth/signin">Connexion</Link>
        )}
      </div>

      {/* Icône menu mobile */}
      <div className={styles.menuMobileIcon} onClick={toggleMenu}>
        <FiMenu />
      </div>

      {/* Menu mobile */}
      <div className={`${styles.menuMobile} ${menuOpen ? 'open' : ''}`}>
        <Link className={styles.navLink} href="/" onClick={toggleMenu}>Accueil</Link>
        <Link className={styles.navLink} href="/menus" onClick={toggleMenu}>Menus</Link>
        <Link className={styles.navLink} href="/commande" onClick={toggleMenu}>Commander</Link>
        <Link className={styles.navLink} href="/reservation" onClick={toggleMenu}>Réservation</Link>
        {session ? (
          <>
            <span className={styles.navUser}>Bonjour {session.user.name}</span>
            <button className={`${styles.navButton} ${styles.navLogin}`} onClick={() => { signOut({ callbackUrl: "/" }); toggleMenu(); }}>
              Déconnexion
            </button>
          </>
        ) : (
          <Link className={`${styles.navLink} ${styles.navLogin}`} href="/auth/signin" onClick={toggleMenu}>Connexion</Link>
        )}
      </div>
    </nav>
  );
}
