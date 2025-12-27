
import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const About: React.FC = () => {
  const timeline = [
    { year: '2005', title: 'Pendirian Sekolah', desc: 'Sekolah Cendekia didirikan dengan visi sederhana: memberikan pendidikan berkualitas bagi masyarakat sekitar.' },
    { year: '2010', title: 'Ekspansi Fasilitas', desc: 'Peresmian gedung baru seluas 2 hektar yang dilengkapi dengan laboratorium sains and perpustakaan digital.' },
    { year: '2018', title: 'Akreditasi A Unggul', desc: 'Meraih akreditasi "A" dari BAN-S/M dengan nilai hampir sempurna, menegaskan kualitas kami.' },
    { year: '2023', title: 'Sekolah Penggerak', desc: 'Terpilih sebagai salah satu Sekolah Penggerak nasional, mengadopsi Kurikulum Merdeka.' },
  ];

  const values = [
    { title: 'Integritas', desc: 'Menjunjung tinggi kejujuran dan etika dalam setiap tindakan.', icon: 'verified_user', color: 'bg-primary/10 text-primary' },
    { title: 'Kreativitas', desc: 'Mendorong inovasi dan pemikiran kritis.', icon: 'lightbulb', color: 'bg-green-500/10 text-green-600' },
    { title: 'Kemandirian', desc: 'Membentuk pribadi yang tangguh dan disiplin.', icon: 'psychology', color: 'bg-orange-500/10 text-orange-600' },
    { title: 'Global', desc: 'Memiliki wawasan luas di lingkungan internasional.', icon: 'public', color: 'bg-purple-500/10 text-purple-600' },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary pt-16 pb-32 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10 flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            {/* Added missing Link import from react-router-dom */}
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white">Tentang Sekolah</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">Mengenal Lebih Dekat Sekolah Cendekia</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl font-light">
            Membangun Generasi Unggul, Berkarakter, dan Berwawasan Global melalui pendidikan berkualitas dan lingkungan yang inspiratif.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* Hero Image / Principal */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/principal/600/800" 
                alt="Principal" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-display font-bold tracking-widest uppercase text-sm">Sambutan Kepala Sekolah</span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text-main leading-tight">Mewujudkan Potensi Terbaik Setiap Siswa</h2>
            </div>
            <div className="flex flex-col gap-6 text-text-secondary text-lg italic font-light leading-relaxed">
              <p>"Selamat datang di Sekolah Cendekia. Kami percaya bahwa setiap anak memiliki potensi unik yang menunggu untuk digali. Komitmen kami adalah menyediakan lingkungan belajar yang aman, inklusif, dan menantang."</p>
              <p>"Di era globalisasi ini, kami terus berinovasi dalam metode pengajaran untuk memastikan lulusan kami siap menghadapi tantangan masa depan dengan integritas dan keunggulan."</p>
            </div>
            <div>
              <p className="text-text-main text-2xl font-display font-bold">Dr. Budi Santoso, M.Pd.</p>
              <p className="text-primary font-display font-semibold">Kepala Sekolah</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-text-main mb-4">Sejarah Perjalanan Kami</h2>
            <p className="text-text-secondary text-lg">Membangun institusi pendidikan terdepan sejak tahun 2005.</p>
          </div>
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-auto md:mr-auto space-y-16">
            {timeline.map((item, i) => (
              <div key={i} className={`relative pl-10 md:pl-0 md:flex items-center justify-between ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-3xl font-display font-black text-primary mb-1">{item.year}</h3>
                  <h4 className="text-xl font-display font-bold text-text-main mb-2">{item.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 top-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm"></div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-surface-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-8 justify-center">
              <div className="inline-flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-sm">visibility</span>
                <span className="text-sm font-display font-bold uppercase">Visi Kami</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-black leading-tight">
                "Menjadi sekolah teladan yang mencetak pemimpin masa depan berkarakter mulia dan berwawasan global."
              </h3>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="inline-flex items-center gap-2 mb-8 text-primary font-display font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>Misi Kami</span>
              </div>
              <ul className="flex flex-col gap-6">
                {[
                  'Menyelenggarakan pendidikan holistik yang seimbang.',
                  'Menanamkan nilai-nilai keimanan dan budi pekerti luhur.',
                  'Mengembangkan potensi siswa melalui ekstrakurikuler.'
                ].map((m, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="bg-primary text-white rounded-full p-1 shrink-0">
                      <span className="material-symbols-outlined text-sm block">check</span>
                    </div>
                    <p className="text-lg font-light leading-relaxed">{m}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-text-main mb-4">Nilai-Nilai Utama</h2>
            <p className="text-text-secondary text-lg">Fondasi karakter yang kami tanamkan kepada setiap civitas akademika.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 rounded-3xl bg-background-light hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-primary/20">
                <div className={`w-20 h-20 rounded-2xl ${v.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-4xl">{v.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main mb-4">{v.title}</h3>
                <p className="text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
