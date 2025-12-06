import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menus', label: 'Menus' },
    { href: '/reservation', label: 'Reservation' },
    { href: '/commande', label: 'Order' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Navigation Buttons à gauche */}
      <div className={styles.navButtons}>
        {navItems.map((item, i) => (
          <Link key={i} href={item.href}>
            <a className={styles.navButton}>{item.label}</a>
          </Link>
        ))}
      </div>

      {/* Logo à droite */}
      <div className={styles.logo}>
        ZestUp
      </div>
    </nav>
  );
}
