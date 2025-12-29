import { Check } from 'lucide-react';

const prices = [
  {
    title: 'Spanduk / Banner',
    price: 'Rp 25.000',
    unit: '/m²',
    features: ['Bahan Flexi 280gr (Tebal)', 'Tinta Outdoor (Tahan Hujan/Panas)', 'Free Mata Ayam / Selongsong', 'Siap Pasang'],
    highlight: true,
  },
  {
    title: 'Kartu Nama Bisnis',
    price: 'Rp 40.000',
    unit: '/box',
    features: ['Art Carton 260gr Premium', 'Isi 100 pcs / Box', 'Gratis Box Eksklusif', 'Warna Dijamin Akurat'],
    highlight: false,
  },
  {
    title: 'Sticker Label A3+',
    price: 'Rp 15.000',
    unit: '/lembar',
    features: ['Bahan Chromo/Vinyl Glossy', 'Kiss Cut (Tinggal Tempel)', 'Anti Air & Minyak (Vinyl)', 'Cocok untuk Kemasan'],
    highlight: false,
  },
  {
    title: 'X-Banner Display',
    price: 'Rp 85.000',
    unit: '/set',
    features: ['Ukuran Standar 60x160cm', 'Termasuk Penyangga Kokoh', 'Cetak High-Res 280gr', 'Tas X-Banner Gratis'],
    highlight: false,
  },
  {
    title: 'Brosur Promosi A4',
    price: 'Rp 650',
    unit: '/pcs', /* Min order usually applies, keeping simple */
    features: ['Art Paper 120gr (Kilap)', 'Desain Bolak-balik Bisa', 'Min. Order 500 pcs', 'Warna Tajam Memikat'],
    highlight: false,
  },
  {
    title: 'Undangan Pernikahan',
    price: 'Mulai Rp 3.000',
    unit: '/pcs',
    features: ['Pilihan Hardcover / Softcover', 'Desain Custom Elegan', 'Gratis Plastik & Label', 'Mewah & Berkesan'],
    highlight: false,
  },
];

const PriceList = () => {
  return (
    <section id="prices" className="price-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Penawaran <span className="gold-text">Terbaik</span></h2>
          <p>Harga kompetitif dengan kualitas cetak bintang lima.</p>
        </div>
        
        <div className="price-grid">
          {prices.map((item, index) => (
            <div key={index} className={`price-card ${item.highlight ? 'highlight' : ''}`}>
              
              {item.highlight && (
                <div className="badge-best-seller">
                  Best Seller
                </div>
              )}

              <h3 className="price-title">{item.title}</h3>
              <div className="price-amount-wrapper">
                <span className="price-amount">{item.price}</span>
                <span className="price-unit">{item.unit}</span>
              </div>
              
              <ul className="price-features">
                {item.features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={16} className="icon-check" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <a href={`https://wa.me/6285790560300?text=Halo,%20saya%20mau%20pesan%20${item.title}`} 
                 target="_blank" rel="noreferrer"
                 className={`btn-order ${item.highlight ? 'btn-highlight' : 'btn-normal'}`}>
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
