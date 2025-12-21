import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // URL de la photo par défaut si pas de photo
  const defaultAvatar = "/images/avatar-default.png";

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="ZestUp Logo" />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link className={styles.navLink} href="/">Accueil</Link>
        <Link className={styles.navLink} href="/menus">Menus</Link>
        <Link className={styles.navLink} href="/commande">Commander</Link>
        <Link className={styles.navLink} href="/reservation">Réservation</Link>

        <div className={styles.userSection}>
          {session ? (
            <Link href="/profile" className={styles.userButton}>
              <Image
                src={session.user.image || defaultAvatar}
                alt="Avatar"
                width={32}
                height={32}
                className={styles.userAvatar}
              />
              {session.user.name}
            </Link>
          ) : (
            <Link className={styles.navButton} href="/auth/signin">Connexion</Link>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div className={styles.menuMobileIcon} onClick={toggleMenu}>
        <FiMenu />
      </div>

      <div className={`${styles.menuMobile} ${menuOpen ? 'open' : ''}`}>
        <Link className={styles.navLink} href="/" onClick={toggleMenu}>Accueil</Link>
        <Link className={styles.navLink} href="/menus" onClick={toggleMenu}>Menus</Link>
        <Link className={styles.navLink} href="/commande" onClick={toggleMenu}>Commander</Link>
        <Link className={styles.navLink} href="/reservation" onClick={toggleMenu}>Réservation</Link>

        {session ? (
          <Link href="/profile" className={styles.userButton} onClick={toggleMenu}>
            <Image
              src={session.user.image || defaultAvatar}
              alt="Avatar"
              width={32}
              height={32}
              className={styles.userAvatar}
            />
            {session.user.name}
          </Link>
        ) : (
          <Link className={styles.navButton} href="/auth/signin" onClick={toggleMenu}>Connexion</Link>
        )}
      </div>
    </nav>
  );
}
