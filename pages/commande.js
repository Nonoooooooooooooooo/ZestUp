import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';

const plats = [
  {name:'Sushi Platter', price:'$15'},
  {name:'Lasagna', price:'$12'},
  {name:'Burger Gourmet', price:'$10'},
  {name:'Ceviche', price:'$14'},
];

export default function Commande() {
  return (
    <>
      <Navbar />
      <main style={{padding:'2rem'}}>
        <h1>Order Your Dishes</h1>
        <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
          {plats.map((plat,i)=>(
            <div key={i} style={{border:'1px solid #ddd', padding:'1rem', borderRadius:'8px'}}>
              <h3>{plat.name}</h3>
              <p>{plat.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
