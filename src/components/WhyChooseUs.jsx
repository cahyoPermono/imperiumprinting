import { Truck, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Truck size={40} />,
    title: 'Hemat Waktu & Tenaga',
    description: 'Stop buang waktu di jalan! Cukup kirim file dari HP/Laptop, kami produksi, dan kurir kami antar langsung ke lokasi Anda.',
    highlight: true,
  },
  {
    icon: <Award size={40} />,
    title: 'Kualitas Aset Bisnis',
    description: 'Kami menggunakan tinta original dan bahan grade-A. Hasil cetak tidak hanya tajam, tapi juga awet dan meningkatkan citra profesional Anda.',
    highlight: false,
  },
  {
    icon: <Zap size={40} />,
    title: 'Selesai Tepat Waktu',
    description: 'Deadline mepet? Jangan panik. Sistem produksi kami teroptimasi untuk kecepatan tanpa mengorbankan detail sedikitpun.',
    highlight: false,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Kenapa Memilih <span className="gold-text">Imperium?</span></h2>
          <p>Lebih dari sekadar percetakan biasa.</p>
        </div>

        <div className="why-grid">
          {benefits.map((item, index) => (
            <div key={index} className={`why-card ${item.highlight ? 'highlight' : ''}`}>
              <div className="why-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
