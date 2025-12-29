import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Owner Cafe Senja',
    comment: 'Saya pesan banner dan sticker untuk cafe saya, hasilnya luar biasa! Warna tajam dan bahannya tebal. Yang paling mantap, diantar sampai ke toko.',
    stars: 5,
  },
  {
    name: 'Siti Aminah',
    role: 'Event Organizer',
    comment: 'Butuh X-Banner dadakan H-1 acara, ImperiumPrinting bener-bener penyelamat. Pengerjaan cepat banget, pagi kirim file, sore sudah sampai.',
    stars: 5,
  },
  {
    name: 'CV. Maju Jaya',
    role: 'Corporate Client',
    comment: 'Sudah langganan cetak kartu nama dan brosur disini. Kualitas konsisten premium, harga sangat bersaing untuk corporate. Recommended!',
    stars: 5,
  },
  {
    name: 'Rina Wulandari',
    role: 'Mahasiswi',
    comment: 'Jujur kaget, cetak skripsi dan jilid softcover disini hasilnya rapi banget. Harganya juga pas dikantong mahasiswa. Bakal langganan terus!',
    stars: 5,
  },
  {
    name: 'Pak Hendra',
    role: 'UMKM Keripik',
    comment: 'Awalnya ragu mau cetak label kemasan karena takut luntur. Ternyata sticker vinyl-nya tahan banget kena minyak. Penjualan jadi makin pede.',
    stars: 5,
  },
  {
    name: 'Dinda Pertiwi',
    role: 'Freelance Designer',
    comment: 'Sebagai desainer, saya picky banget soal warna. Di Imperium, warna hasil cetak 99% akurat sesuai monitor saya. Jarang nemu percetakan se-detail ini di Bontang.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-darker">
      <div className="container">
        <div className="section-header">
          <h2>Kata <span className="gold-text">Mereka</span></h2>
          <p>Bukti kepuasan pelanggan yang telah mempercayakan brandingnya pada kami.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <Quote size={40} className="text-gold quote-icon" />
              <p className="testimonial-comment">"{item.comment}"</p>
              <div className="testimonial-stars">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4AF37" className="text-gold" />
                ))}
              </div>
              <div className="testimonial-author">
                <h4 className="author-name">{item.name}</h4>
                <p className="author-role">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
