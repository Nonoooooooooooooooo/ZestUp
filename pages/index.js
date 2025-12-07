import Hero from '../composants/Hero';
import CarrouselMenus from '../composants/CarrouselMenus';
import CarrouselCommandes from '../composants/CarrouselCommandes';
import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h2 style={{textAlign:"center", margin:"2rem 0"}}>Nos menus</h2>
      <CarrouselMenus />
      <h2 style={{textAlign:"center", margin:"2rem 0"}}>À commander directement</h2>
      <CarrouselCommandes />
      <Footer />
    </>
  );
}


