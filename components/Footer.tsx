
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1219] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <span className="text-xl font-display font-bold">Sekolah Cendekia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mewujudkan generasi masa depan yang cerdas, berkarakter, dan siap bersaing di kancah global melalui pendidikan berkualitas.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="size-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a href="#" className="size-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Nav Links Group 1 */}
          <div>
            <h4 className="font-display font-bold mb-6 text-lg">Tentang Kami</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">Profil Sekolah</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Visi & Misi</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tenaga Pengajar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fasilitas</a></li>
            </ul>
          </div>

          {/* Nav Links Group 2 */}
          <div>
            <h4 className="font-display font-bold mb-6 text-lg">Akademik</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/academics" className="hover:text-primary transition-colors">Kurikulum</Link></li>
              <li><Link to="/academics" className="hover:text-primary transition-colors">Ekstrakurikuler</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prestasi Siswa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kalender Akademik</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>Jl. Pendidikan No. 123,<br />Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>info@sekolahcendekia.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Sekolah Cendekia. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
