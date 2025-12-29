import { ArrowRight, Star, Truck } from 'lucide-react';
import logo from '../assets/logo.png';

const CreateHero = () => {
  return (
    <section className="hero-section">
      
      {/* Decorative Blur Elements */}
      <div className="blur-blob blur-blob-blue"></div>
      <div className="blur-blob blur-blob-gold"></div>

      <div className="container hero-container">
        <div className="hero-logo-wrapper fade-in" style={{ animationDelay: '0.2s' }}>
          <img src={logo} alt="Imperium Printing Logo" className="hero-logo" />
        </div>
        
        <h1 className="hero-title fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="block text-white">Cetak Ide Anda</span>
          <span className="gold-text">Menjadi Nyata</span>
        </h1>

        {/* Feature Badge */}
        <div className="hero-badge fade-in" style={{ animationDelay: '0.5s' }}>
           <Truck size={20} className="text-gold" />
           <span>Layanan Antar Jemput Tersedia</span>
        </div>
        
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.6s' }}>
          Layanan percetakan premium di Bontang dengan kualitas tak tertandingi. 
          Cetak dari rumah, kami antar sampai depan pintu.
        </p>
        
        <div className="hero-actions fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="#contact" className="btn-primary">
            Pesan Sekarang <ArrowRight size={20} />
          </a>
          <a href="#prices" className="btn-secondary">
            <Star size={16} className="text-gold" /> Lihat Harga
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default CreateHero;
