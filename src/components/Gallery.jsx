import imgBanner from '../assets/gallery-banner.png';
import imgCard from '../assets/gallery-card.png';
import imgSticker from '../assets/gallery-sticker.png';
import imgInvitation from '../assets/gallery-invitation.png';
import imgBrochure from '../assets/gallery-brochure.png';
import imgMerch from '../assets/gallery-merch.png';

const works = [
  { type: 'Banner', image: imgBanner }, 
  { type: 'Kartu Nama', image: imgCard },
  { type: 'Sticker', image: imgSticker },
  { type: 'Undangan', image: imgInvitation },
  { type: 'Brosur', image: imgBrochure },
  { type: 'Merchandise', image: imgMerch },
];

const Gallery = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Galeri <span className="gold-text">Karya</span></h2>
          <p>Intip hasil cetakan premium kami. Real Pict, bukan sekadar mockup.</p>
        </div>

        <div className="gallery-grid">
          {works.map((item, index) => (
            <div key={index} className="gallery-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <img 
                src={item.image} 
                alt={`Hasil Cetak ${item.type}`} 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
