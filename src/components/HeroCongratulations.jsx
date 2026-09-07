import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';

export default function HeroCongratulations({ config }) {
  const handleScrollNext = () => {
    const el = document.getElementById('photos-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center pt-16 sm:pt-20 pb-16 px-4 bg-cyber-grid text-center overflow-hidden">
      {/* Radiant ambient glow orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-amber-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating celebratory particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 shadow-sm"
          style={{
            top: `${10 + i * 8}%`,
            left: `${8 + i * 9}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-orange-200 text-orange-700 text-xs sm:text-sm font-mono font-bold shadow-sm backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-orange-500 animate-spin" />
          <span>{config.hero.badge}</span>
        </motion.div>

        {/* Main Names & Congratulations Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="text-xs sm:text-sm font-mono tracking-widest text-orange-600 uppercase font-extrabold">
            🎉 CONGRATULATIONS 🎉
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 inline-block">
              {config.user1}
            </span>{' '}
            <span className="text-slate-400">&</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 inline-block">
              {config.user2}
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-sans max-w-xl mx-auto pt-1 leading-relaxed">
            {config.hero.subtitle}
          </p>
        </motion.div>

        {/* Plot Twist Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 w-full max-w-lg p-6 rounded-3xl bg-white/90 border border-amber-200 shadow-xl backdrop-blur-xl relative"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-amber-800 mb-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{config.hero.revealBadge}</span>
          </div>

          <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            {config.hero.companyNotice}
          </div>

          <div className="mt-2 text-xs font-mono text-slate-500">
            @{config.companyName}
          </div>
        </motion.div>

        {/* Main Theme Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 space-y-2"
        >
          <div className="text-3xl sm:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600">
            {config.hero.mainTheme}
          </div>
          <div className="text-sm sm:text-base font-mono text-slate-600 font-bold tracking-wide">
            "{config.hero.secondaryTagline}"
          </div>
        </motion.div>

        {/* Scroll CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8"
        >
          <button
            onClick={handleScrollNext}
            className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 text-white font-display font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_35px_rgba(244,63,94,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <span>VIEW MEMORIES & MESSAGE</span>
            <ChevronDown className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}