
import React from 'react';

const Contact: React.FC = () => {
  const contactCards = [
    { title: 'Alamat Kampus', detail: 'Jl. Pendidikan No. 123, Kawasan Edukasi Terpadu, Jakarta Selatan', icon: 'location_on', color: 'text-blue-500' },
    { title: 'Layanan Telepon', detail: '+62 21 1234 5678 (Hunting)', icon: 'call', color: 'text-green-500' },
    { title: 'Email Akademik', detail: 'admissions@cendekia.sch.id', icon: 'alternate_email', color: 'text-orange-500' },
    { title: 'WhatsApp Center', detail: '0812-3456-7890 (24 Jam)', icon: 'chat', color: 'text-emerald-500' },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center flex flex-col items-center gap-6">
          <h1 className="text-white text-5xl md:text-7xl font-display font-black tracking-tight">Hubungi Kami</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
            Punya pertanyaan mengenai program kami atau butuh bantuan pendaftaran? Tim kami siap melayani Anda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.1)] border border-slate-100">
               <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Kirim Pesan Langsung</h2>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest">Nama Lengkap</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all font-display" placeholder="E.g. John Doe" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest">Alamat Email</label>
                    <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all font-display" placeholder="name@domain.com" />
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest">Topik Pertanyaan</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all font-display appearance-none">
                      <option>Pilih Jenjang Sekolah</option>
                      <option>Sekolah Dasar (SD)</option>
                      <option>Sekolah Menengah Pertama (SMP)</option>
                      <option>Sekolah Menengah Atas (SMA)</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest">Pesan</label>
                    <textarea rows={5} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all font-display resize-none" placeholder="Tuliskan detail pertanyaan Anda..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-display font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                      Kirim Sekarang
                    </button>
                  </div>
               </form>
            </div>
          </div>

          {/* Contact Cards Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Informasi Kontak</h2>
            <div className="grid grid-cols-1 gap-4">
              {contactCards.map((card, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 rounded-[28px] border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-all group">
                   <div className={`size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${card.color}`}>
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                   </div>
                   <div>
                      <p className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest mb-1">{card.title}</p>
                      <p className="text-slate-900 font-display font-bold">{card.detail}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 relative rounded-[32px] overflow-hidden h-[300px] shadow-lg group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-display font-bold shadow-2xl flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">map</span> Petunjuk Arah
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
