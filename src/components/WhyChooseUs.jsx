import { Truck, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Truck size={40} />,
    title: 'Siap Antar Jemput',
    description: 'Tidak perlu repot keluar rumah. Kirim file Anda, kami cetak, dan kami antar langsung ke depan pintu Anda.',
    highlight: true,
  },
  {
    icon: <Award size={40} />,
    title: 'Kualitas Premium',
    description: 'Kami hanya menggunakan mesin terbaru dan bahan terbaik untuk memastikan hasil cetak yang tajam dan tahan lama.',
    highlight: false,
  },
  {
    icon: <Zap size={40} />,
    title: 'Pengerjaan Kilat',
    description: 'Deadline mepet? Tenang, tim kami bekerja cepat tanpa mengurangi kualitas hasil akhir.',
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
