
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

const Achievements: React.FC = () => {
    // Categories for filtering (optional enhancement for later, but good for UI now)
    const categories = ['Semua', 'Akademik', 'Olahraga', 'Seni & Budaya', 'Teknologi'];
    const [activeCategory, setActiveCategory] = useState('Semua');

    const achievements = [
        {
            id: 1,
            title: 'Medali Emas Olimpiade Matematika Internasional',
            category: 'Akademik',
            student: 'Budi Santoso',
            description: 'Meraih medali emas dalam kompetisi matematika tingkat dunia di London, mengalahkan peserta dari 50 negara.',
            image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070'
        },
        {
            id: 2,
            title: 'Juara 1 Lomba Robotik Nasional',
            category: 'Teknologi',
            student: 'Tim Robotik Cendekia',
            description: 'Inovasi robot pemilah sampah otomatis yang berhasil memukau juri dan memenangkan kategori Best Innovation.',
            image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070'
        },
        {
            id: 3,
            title: 'Gold Medal Choir Festival',
            category: 'Seni & Budaya',
            student: 'Gita Bahana Cendekia',
            description: 'Paduan suara sekolah mendapatkan penghargaan tertinggi dalam festival paduan suara internasional di Bali.',
            image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070'
        },
        {
            id: 4,
            title: 'Juara Umum Kejuaraan Basket DBL',
            category: 'Olahraga',
            student: 'Tim Basket Putra',
            description: 'Mempertahankan gelar juara umum selama 3 tahun berturut-turut dalam liga basket pelajar terbesar.',
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ee3?q=80&w=2090'
        },
        {
            id: 5,
            title: 'Best Speaker Debate Championship',
            category: 'Akademik',
            student: 'Siti Aminah',
            description: 'Penghargaan pembicara terbaik dalam kejuaraan debat Bahasa Inggris tingkat nasional.',
            image: 'https://images.unsplash.com/photo-1544928147-79a2e746b531?q=80&w=2080'
        },
        {
            id: 6,
            title: 'Pameran Lukisan "Warna Indonesia"',
            category: 'Seni & Budaya',
            student: 'Ekskul Melukis',
            description: 'Karya siswa terpilih untuk dipamerkan di Galeri Nasional sebagai representasi seni rupa pelajar.',
            image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080'
        }
    ];

    const filteredAchievements = activeCategory === 'Semua'
        ? achievements
        : achievements.filter(a => a.category === activeCategory);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Hero */}
            <section className="bg-primary pt-32 pb-20 px-4 md:px-10 rounded-b-[50px] shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-widest inline-block mb-6 backdrop-blur-sm">
                            Hall of Fame
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
                            Prestasi Siswa
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Bukti nyata dedikasi dan kerja keras civitas akademika Cendekia dalam mengukir nama harum di berbagai bidang.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="max-w-7xl mx-auto px-4 md:px-10 -mt-8 relative z-20">
                <div className="bg-white p-2 rounded-2xl shadow-lg flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-xl text-sm font-display font-bold transition-all ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-md'
                                    : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4 md:px-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    key={activeCategory} // Force re-render animation on filter change
                >
                    {filteredAchievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            variants={item}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                                    {achievement.category}
                                </span>
                                <img
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {achievement.title}
                                </h3>
                                <p className="text-primary font-semibold text-sm mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">person</span>
                                    {achievement.student}
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {achievement.description}
                                </p>
                                <button className="text-slate-400 text-sm font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                                    Baca Selengkapnya
                                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <CTASection />
        </div>
    );
};

export default Achievements;
