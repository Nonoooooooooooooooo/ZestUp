import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';
import CarrouselImages from '../composants/CarrouselImages';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{textAlign: 'center', padding: '2rem'}}>
        <h1>Welcome to ZestUp</h1>
        <p>Explosion of flavors delivered to your door or with a private chef!</p>
        <CarrouselImages />
        <div style={{marginTop: '2rem'}}>
          <a href='/commande'><button>Order Now</button></a>
          <a href='/reservation'><button style={{marginLeft:'1rem'}}>Book a Chef</button></a>
        </div>
      </main>
      <Footer />
    </>
  )
}
