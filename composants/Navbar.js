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
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#FF7F50',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      gap: '1rem'
    }}>
      {/* Navigation Buttons */}
      <div style={{ display: 'flex', gap: '0.8rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
        {navItems.map((item, i) => (
          <Link key={i} href={item.href} className={styles.navButton}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '800',
        fontSize: '2rem',
        marginLeft: '2rem',
        color: 'white',
        letterSpacing: '2px'
      }}>
        ZestUp
      </div>
    </nav>
  )
}
