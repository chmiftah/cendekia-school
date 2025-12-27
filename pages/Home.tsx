
import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  const stats = [
    { label: 'Siswa Berprestasi', value: '1,500+', icon: 'school' },
    { label: 'Guru Berpengalaman', value: '120+', icon: 'verified' },
    { label: 'Tahun Berdiri', value: '25+', icon: 'history_edu' },
    { label: 'Fasilitas Modern', value: '45+', icon: 'domain' },
  ];

  const news = [
    { date: '12 Okt', title: 'Juara 1 Olimpiade Sains Nasional', desc: 'Siswa SMA Cendekia kembali mengukir prestasi gemilang di tingkat nasional.' },
    { date: '08 Okt', title: 'Workshop Digital Literacy', desc: 'Peningkatan kompetensi teknologi untuk menyongsong era industri 4.0.' },
    { date: '05 Okt', title: 'Peresmian Lab Robotik Baru', desc: 'Fasilitas terbaru untuk mendukung kreativitas dan inovasi teknologi siswa.' },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Dynamic Split Hero */}
      <section className="relative min-h-[90vh] lg:h-[95vh] flex items-center bg-[#0a192f] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 lg:right-0 lg:left-auto lg:w-1/2 h-full z-0">
          <div className="absolute inset-0 bg-primary/20 lg:bg-primary/20 z-10 mix-blend-multiply"></div>
          {/* Mobile Overlay: Darker to ensure text readability */}
          <div className="absolute inset-0 bg-[#0a192f]/80 lg:bg-transparent z-10"></div>

          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero_campus.png"
            className="w-full h-full object-cover"
            alt="Campus"
          />
          {/* Decorative shapes */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a192f] to-transparent z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 w-full relative z-30">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:w-1/2 flex flex-col gap-8 py-20 lg:py-0"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 backdrop-blur-md px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-blue-400 text-xs font-display font-bold uppercase tracking-[0.2em]">Pendaftaran 2024 Dibuka</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-white text-5xl md:text-7xl lg:text-[84px] font-display font-black leading-[1.05] tracking-tight">
              Membangun <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Generasi Emas</span> <br /> Indonesia
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Pendidikan holistik berbasis karakter dan teknologi untuk mempersiapkan pemimpin masa depan yang kompeten di kancah internasional.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 mt-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-display font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1">
                Mulai Belajar Sekarang
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-display font-bold text-lg hover:bg-white/10 transition-all">
                Brosur Digital
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Stats */}
      <section className="relative z-40 -mt-16 max-w-7xl mx-auto px-4 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-wrap lg:flex-nowrap justify-between gap-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 min-w-[150px] flex items-center gap-5"
            >
              <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-black text-slate-900">{s.value}</span>
                <span className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values / About Mini */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" alt="Learning" className="w-full aspect-square object-cover" />
            </div>
            {/* Decorative float element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-[32px] shadow-2xl hidden md:block border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900">Akreditasi A</p>
                  <p className="text-sm text-slate-500 leading-none">Unggul Nasional</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-black text-slate-900 leading-tight">
              Pendidikan yang Menginspirasi Setiap Potensi
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Di Cendekia, kami tidak hanya mengajar ilmu pengetahuan. Kami membangun ekosistem di mana karakter, kreativitas, dan kolaborasi menjadi dasar pengembangan diri setiap siswa.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {['Teknologi Mutakhir', 'Bimbingan Konseling', 'Kurikulum Internasional', 'Ekstrakurikuler Luas'].map((item, idx) => (
                <motion.div variants={fadeInUp} key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-display font-bold text-slate-800">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button variants={fadeInUp} className="mt-6 flex items-center gap-3 text-primary font-display font-bold group w-fit">
              Kenali Kami Lebih Dekat
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-black text-slate-900 mb-4">Program Unggulan</h2>
              <p className="text-lg text-slate-500">Jalur pendidikan terstruktur untuk setiap fase tumbuh kembang anak.</p>
            </div>
            <button className="bg-white border border-slate-200 px-6 py-3 rounded-2xl font-display font-bold hover:bg-slate-50 transition-colors">Lihat Semua</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Primary Years', level: 'SD', color: 'bg-blue-600', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022' },
              { title: 'Junior High', level: 'SMP', color: 'bg-purple-600', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070' },
              { title: 'Senior High', level: 'SMA', color: 'bg-orange-600', img: 'https://images.unsplash.com/photo-1544391496-1ca7c97457cd?q=80&w=2070' },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-3">
                  <span className={`${p.color} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit`}>{p.level}</span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                    Kurikulum berbasis inkuiri dengan pendekatan Project-Based Learning.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-display font-black text-slate-900 mb-6">Warta Sekolah</h2>
            <p className="text-slate-500 mb-8">Ikuti perkembangan terbaru dan pencapaian civitas akademika Cendekia.</p>
            <button className="bg-primary text-white w-full py-4 rounded-2xl font-display font-bold shadow-xl shadow-primary/20">Selengkapnya</button>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            {news.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-8 p-6 rounded-3xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100"
              >
                <div className="size-20 rounded-2xl bg-slate-100 flex flex-col items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-xl font-display font-black">{n.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-bold uppercase">{n.date.split(' ')[1]}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">{n.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
