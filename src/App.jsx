import CreateHero from './components/CreateHero';
import PriceList from './components/PriceList';
import ContactSection from './components/ContactSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import HowToOrder from './components/HowToOrder';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      <CreateHero />
      <WhyChooseUs />
      <HowToOrder />
      <Gallery />
      <PriceList />
      <FAQ />
      <Testimonials />
      <ContactSection />
    </div>
  );
}


export default App;
