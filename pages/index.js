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
      <h2 className="sectionTitle">Nos Menus</h2>
      <CarrouselMenus />
      <h2 className="sectionTitle">À commander directement</h2>
      <CarrouselCommandes />
      <Footer />
    </>
  );
}


