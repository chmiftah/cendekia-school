
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="10" cy="10" r="20" fill="white" />
          <circle cx="90" cy="90" r="30" fill="white" />
          <circle cx="50" cy="50" r="10" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col gap-8 items-center">
        <div className="size-20 rounded-[28px] bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-2">
          <span className="material-symbols-outlined text-5xl">auto_awesome</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-white tracking-tight">
          Mulailah Petualangan Akademikmu Hari Ini
        </h2>
        
        <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
          Pendaftaran siswa baru tahun ajaran 2024/2025 telah dibuka untuk jenjang SD, SMP, dan SMA. Amankan masa depan putra-putri Anda bersama kami.
        </p>
        
        <div className="flex flex-wrap gap-5 justify-center mt-4">
          <button className="bg-white text-primary hover:bg-blue-50 px-12 py-5 rounded-2xl font-display font-bold text-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 active:scale-95">
            Daftar Sekarang
          </button>
          <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-12 py-5 rounded-2xl font-display font-bold text-xl transition-all">
            Hubungi Konsultan
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
