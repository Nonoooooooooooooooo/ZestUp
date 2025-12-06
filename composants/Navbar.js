import Link from 'next/link';

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
      justifyContent: 'flex-start',  // tout aligné à gauche
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
      {/* Navigation Buttons (à gauche du logo) */}
      <div style={{ display: 'flex', gap: '0.8rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
        {navItems.map((item, i) => (
          <Link 
            key={i} 
            href={item.href} 
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              textDecoration: 'none',   // plus de soulignement
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.2)'}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '800',
        fontSize: '2rem',
        marginLeft: '2rem',   // espacement à droite des boutons
        color: 'white',
        letterSpacing: '2px'
      }}

}
