import { Check } from 'lucide-react';

const prices = [
  {
    title: 'Spanduk / Banner',
    price: 'Rp 25.000',
    unit: '/m²',
    features: ['Bahan Flexi 280gr', 'High Resolution', 'Finishing Mata Ayam', 'Tahan Cuaca'],
    highlight: true,
  },
  {
    title: 'Kartu Nama',
    price: 'Rp 40.000',
    unit: '/box',
    features: ['Art Carton 260gr', 'Isi 100 pcs', 'Free Box', 'Laminasi Tersedia'],
    highlight: false,
  },
  {
    title: 'Sticker A3+',
    price: 'Rp 15.000',
    unit: '/lembar',
    features: ['Bahan Chromo/Vinyl', 'Kiss Cut / Die Cut', 'Tahan Air (Vinyl)', 'Warna Tajam'],
    highlight: false,
  },
  {
    title: 'X-Banner',
    price: 'Rp 85.000',
    unit: '/set',
    features: ['Ukuran 60x160cm', 'Termasuk Tiang', 'Bahan Flexi High Res', 'Mudah Bongkar Pasang'],
    highlight: false,
  },
  {
    title: 'Brosur A4',
    price: 'Rp 650',
    unit: '/pcs', /* Min order usually applies, keeping simple */
    features: ['Art Paper 120gr', 'Cetak 1 Sisi', 'Min. Order 500', 'Full Color'],
    highlight: false,
  },
  {
    title: 'Undangan Premium',
    price: 'Mulai Rp 3.000',
    unit: '/pcs',
    features: ['Hardcover / Softcover', 'Desain Custom', 'Free Plastik', 'Elegan & Mewah'],
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
