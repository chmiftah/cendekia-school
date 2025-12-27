
import React from 'react';
import CTASection from '../components/CTASection';

const Academics: React.FC = () => {
  const levels = [
    { name: 'SD (Elementary)', desc: 'Membangun karakter dan kecintaan belajar.', icon: 'backpack', color: 'text-blue-500' },
    { name: 'SMP (Junior High)', desc: 'Eksplorasi minat dan pengembangan kemandirian.', icon: 'explore', color: 'text-green-500' },
    { name: 'SMA (Senior High)', desc: 'Persiapan intensif menuju universitas terbaik.', icon: 'school', color: 'text-primary' },
    { name: 'SMK (Vocational)', desc: 'Keahlian praktis untuk karir profesional.', icon: 'precision_manufacturing', color: 'text-orange-500' },
  ];

  const subjects = [
    { name: 'Mathematics', icon: 'calculate' },
    { name: 'Science', icon: 'science' },
    { name: 'Languages', icon: 'language' },
    { name: 'Arts & Culture', icon: 'palette' },
    { name: 'Technology', icon: 'terminal' },
    { name: 'Social Studies', icon: 'groups' },
  ];

  const methods = [
    {
      title: 'Digital-First Learning',
      desc: 'Kami mengintegrasikan teknologi modern ke setiap ruang kelas. Mulai dari tablet hingga workshop coding.',
      img: 'https://picsum.photos/seed/digital/800/500',
      bullets: ['Program iPad 1:1', 'Interactive Smart Boards']
    },
    {
      title: 'Project-Based Learning',
      desc: 'Teori bertemu praktik. Siswa terlibat dalam proyek kolaboratif untuk menyelesaikan masalah dunia nyata.',
      img: 'https://picsum.photos/seed/project/800/500',
      bullets: ['Kerja Kelompok Kolaboratif', 'Studi Kasus Nyata']
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="relative min-h-[500px] flex flex-col justify-end p-12 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/academics/1920/1080" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" 
              alt="Academics" 
            />
            <div className="relative z-10 max-w-2xl flex flex-col gap-6">
              <h1 className="text-white text-5xl md:text-7xl font-display font-black leading-tight">Academic Excellence for Every Stage</h1>
              <p className="text-gray-200 text-lg md:text-xl font-light">
                Kurikulum komprehensif yang dirancang untuk membina pemikir kritis dan pemimpin masa depan.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-display font-bold">Kurikulum</button>
                <button className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-lg font-display font-bold border border-white/20">Silabus</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-text-main mb-4">Jenjang Pendidikan Kami</h2>
            <p className="text-text-secondary text-lg">Jalur pembelajaran yang disesuaikan untuk setiap tahap usia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {levels.map((level, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className={`size-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${level.color}`}>
                  <span className="material-symbols-outlined text-3xl">{level.icon}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-text-main mb-3">{level.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{level.desc}</p>
                <a href="#" className="text-primary text-sm font-display font-bold flex items-center gap-1">Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Curriculum Subjects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-text-main mb-4">Kurikulum Inti</h2>
              <p className="text-text-secondary text-lg">Pendekatan holistik yang menggabungkan standar nasional dengan praktik terbaik internasional.</p>
            </div>
            <button className="text-primary font-display font-bold flex items-center gap-2">Unduh Silabus Lengkap <span className="material-symbols-outlined">download</span></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {subjects.map((sub, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background-light hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20 cursor-default">
                <span className="material-symbols-outlined text-4xl text-primary">{sub.icon}</span>
                <span className="font-display font-bold text-text-main text-center">{sub.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h2 className="text-4xl font-display font-bold text-center mb-20">Metode Pembelajaran</h2>
          <div className="flex flex-col gap-32">
            {methods.map((m, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-2xl">
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover aspect-video" />
                </div>
                <div className="flex-1 flex flex-col gap-8">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{i === 0 ? 'devices' : 'groups'}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-text-main">{m.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">{m.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {m.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-main font-medium">
                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Academics;
