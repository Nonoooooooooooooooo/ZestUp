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
      <div className="sectionWrapper">
      <h2 className="sectionTitle">Nos Menus</h2>
      <p className="sectionSubtitle">Découvrez nos créations culinaires uniques</p>
      </div>
      <CarrouselMenus />
      <div className="sectionWrapper">
      <h2 className="sectionTitle">À Commander</h2>
      <p className="sectionSubtitle">Des plats prêts à savourer, préparés avec passion</p>
      </div>
      <CarrouselCommandes />
      <Footer />
    </>
  );
}


