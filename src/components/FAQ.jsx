import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah ada minimum order?',
    answer: 'Untuk spanduk dan sticker meteran tidak ada minimum order. Namun untuk kartu nama (per box) dan brosur (per rim) ada standar kemasan.',
  },
  {
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Spanduk & Sticker bisa ditunggu (1-3 jam tergantung antrian). Untuk pesanan banyak (ribuan pcs) estimasi 1-2 hari kerja.',
  },
  {
    question: 'File format apa yang harus dikirim?',
    answer: 'Kami menyarankan file PDF, TIFF, atau JPEG High Resolution agar kualtias cetak maksimal. File mentah (AI/Corel) juga boleh.',
  },
  {
    question: 'Apakah bisa desainkan sekalian?',
    answer: 'Tentu! Kami memiliki tim desainer in-house. Biaya desain menyesuaikan tingkat kerumitan, gratis untuk order jumlah besar.',
  },
  {
    question: 'Area antar jemput sampai mana?',
    answer: 'Gratis ongkir untuk seluruh area Bontang Kota dengan minimum belanja Rp 100.000. Dibawah itu dikenakan ongkir flat murah.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Tanya <span className="gold-text">Jawab</span></h2>
          <p>Hal yang sering ditanyakan pelanggan kami.</p>
        </div>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <Minus size={20} className="text-gold" /> : <Plus size={20} className="text-gold" />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
