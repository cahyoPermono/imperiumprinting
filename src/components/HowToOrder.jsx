import { MessageCircle, FileUp, Truck } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={40} />,
    title: '1. Chat & Konsultasi',
    description: 'Hubungi kami via WhatsApp. Ceritakan kebutuhan cetak Anda, jenis bahan, dan jumlah order.',
  },
  {
    icon: <FileUp size={40} />,
    title: '2. Kirim File',
    description: 'Kirim desain Anda (PDF/JPG/AI). Belum punya desain? Tim kami siap membantu buatkan.',
  },
  {
    icon: <Truck size={40} />,
    title: '3. Duduk Manis',
    description: 'Kami produksi pesanan Anda dengan cepat. Setelah selesai, kurir kami langsung antar ke lokasi.',
  },
];

const HowToOrder = () => {
  return (
    <section className="section-padding bg-darker">
      <div className="container">
        <div className="section-header">
          <h2>Cara <span className="gold-text">Pesan</span></h2>
          <p>Tanpa ribet, cukup 3 langkah mudah.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-number">{index + 1}</div>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
