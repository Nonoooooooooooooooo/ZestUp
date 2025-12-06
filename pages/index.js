import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';
import CarrouselImages from '../composants/CarrouselImages';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'url(/images/menu1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '6rem 2rem',
        position: 'relative'
      }}>
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '3rem',
          borderRadius: '15px',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>ZestUp: Explosion of Flavors!</h1>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>Order your favorite dishes or book a private chef for a unique culinary experience.</p>
          <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
            <a href='/commande'><button>Order Now</button></a>
            <a href='/reservation'><button style={{backgroundColor:'#FF5733'}}>Book a Chef</button></a>
          </div>
        </div>
      </section>

      {/* Carrousel Section */}
      <section style={{padding:'4rem 2rem'}}>
        <h2 style={{textAlign:'center', marginBottom:'2rem'}}>Discover Our Menus</h2>
        <CarrouselImages />
      </section>

      <Footer />
    </>
  )
}

