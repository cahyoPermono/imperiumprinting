import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <footer id="contact" className="main-footer">
      <div className="container contact-container">
        <div className="contact-grid">
          
          {/* CTA Section */}
          <div className="contact-cta">
            <h2 className="cta-title">Siap Mencetak <br /><span className="gold-text">Karya Masterpiece?</span></h2>
            <p className="cta-description">
              Jangan ragu untuk berkonsultasi. Tim kami siap membantu Anda mendapatkan hasil cetak terbaik untuk kebutuhan bisnis atau personal Anda.
            </p>
            <a href="https://wa.me/6285790560300?text=Halo%20Imperium%20Printing,%20saya%20ingin%20konsultasi%20cetak" 
               target="_blank" rel="noreferrer"
               className="btn-primary btn-cta">
              <Phone size={24} /> Hubungi Kami via WhatsApp
            </a>
          </div>

          {/* Info Section */}
          <div className="contact-info-card">
            <h3 className="info-title">Informasi Kontak</h3>
            
            <div className="info-list">
              <div className="info-item">
                <div className="icon-wrapper icon-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="info-label">Lokasi Workshop</h4>
                  <p className="info-text">Bontang, Kalimantan Timur<br/>(Detail alamat bisa request via WA)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper icon-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="info-label">WhatsApp / Telepon</h4>
                  <p className="info-text phone-number">0857-9056-0300</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper icon-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="info-label">Jam Operasional</h4>
                  <p className="info-text">Senin - Sabtu: 08:00 - 21:00<br/>Minggu: Libur (Bisa janjian)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Imperium Printing. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
