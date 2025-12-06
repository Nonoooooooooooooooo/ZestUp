import Link from 'next/link';
export default function Navbar(){
  return (
    <nav style={{
      display:'flex', justifyContent:'space-between', 
      alignItems:'center',
      padding:'1rem 2rem',
      backgroundColor:'#FF7F50', 
      color:'white',
      boxShadow:'0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{fontFamily:'Montserrat', fontWeight:'700', fontSize:'1.5rem'}}>ZestUp</h2>
      <div style={{display:'flex', gap:'1rem'}}>
        <Link href='/'>Home</Link>
        <Link href='/menus'>Menus</Link>
        <Link href='/reservation'>Reservation</Link>
        <Link href='/commande'>Order</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  )
}
