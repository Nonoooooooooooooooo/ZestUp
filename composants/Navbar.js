import Link from 'next/link';
export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#FF7F50',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Logo */}
      <div style={{fontFamily: 'Montserrat', fontWeight: '700', fontSize: '1.8rem'}}>
        ZestUp
      </div>

      {/* Navigation */}
      <div style={{display: 'flex', gap: '1rem'}}>
        {['/', '/menus', '/reservation', '/commande', '/contact'].map((path, i) => {
          const labels = ['Home', 'Menus', 'Reservation', 'Order', 'Contact'];
          return (
            <Link key={i} href={path} style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.2)'}
            >
              {labels[i]}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
