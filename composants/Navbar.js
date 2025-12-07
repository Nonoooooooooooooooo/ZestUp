import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      {/* LOGO */}
      <div className={styles.logo}>
        Zest<span className={styles.logoAccent}>Up</span>
      </div>

      {/* MENU DESKTOP */}
      <div className={styles.menu}>
        <Link href="/" className={styles.navLink}>Accueil</Link>
        <Link href="/menus" className={styles.navLink}>Menus</Link>
        <Link href="/reservation" className={styles.navLink}>Réservation</Link>
        <Link href="/commande" className={styles.navLink}>Commande</Link>
      </div>

      {/* ICON MENU MOBILE */}
      <div
        className={styles.menuMobileIcon}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* MENU MOBILE */}
      <div className={`${styles.menuMobile} ${mobileOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navLink}>Accueil</Link>
        <Link href="/menus" className={styles.navLink}>Menus</Link>
        <Link href="/reservation" className={styles.navLink}>Réservation</Link>
        <Link href="/commande" className={styles.navLink}>Commande</Link>
      </div>

    </nav>
  );
}
