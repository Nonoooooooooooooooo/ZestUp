import Link from 'next/link';
export default function Navbar(){
  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'1rem 2rem', backgroundColor:'#FF7F50', color:'white'}}>
      <h2>ZestUp</h2>
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
