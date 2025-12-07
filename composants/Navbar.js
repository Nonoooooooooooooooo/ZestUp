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
      <div className={styles.navButtons}>
        {navItems.map((item, i) => (
          <Link key={i} href={item.href} legacyBehavior>
            <a className={styles.navButton}>{item.label}</a>
          </Link>
        ))}
      </div>

      <div className={styles.logo}>
        ZestUp
      </div>
    </nav>
  );
}
