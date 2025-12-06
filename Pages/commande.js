import Navbar from '../composants/Navbar'; import Footer from '../composants/Footer';

const plats = [ {name:'Sushi Platter', price:'$15'}, {name:'Lasagna', price:'$12'}, {name:'Burger Gourmet', price:'$10'}, {name:'Ceviche', price:'$14'}, ];

export default function Commande() { return ( <> <main style={{padding:'2rem'}}> Order Your Dishes <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}> {plats.map((plat,i)=>( <div key={i} style={{border:'1px solid #ddd', padding:'1rem', borderRadius:'8px'}}> {plat.name} {plat.price} Add to Cart ))} </> ) }
