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
      <div className="sectionBlock">
      <h2 className="sectionTitle">Nos Menus</h2>
      <p className="sectionSubtitle">Une sélection gourmande pour tous les goûts</p>
      </div>
      <CarrouselMenus />
      <div className="sectionBlock">
      <h2 className="sectionTitle">À Commander</h2>
      <p className="sectionSubtitle">Commandez vos plats préférés en un clic</p>
      </div>
      <CarrouselCommandes />
      <Footer />
    </>
  );
}


