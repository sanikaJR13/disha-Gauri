import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { triggerPlacementConfetti } from '../utils/confetti';
import { playSuccessFanfare } from '../utils/audio';

export default function HeroCongratulations({ config, onEasterEgg }) {
  const [cardsConnected, setCardsConnected] = useState(false);

  const handleScrollNext = () => {
    const el = document.getElementById('consistency-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-16 sm:pt-20 pb-16 px-4 bg-cyber-grid text-center overflow-hidden">
      {/* Radiant ambient glow orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-amber-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating particles */}
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

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* System Upgrade Notice Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-xs sm:text-sm font-mono font-bold shadow-sm backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
          <span>{config.hero.upgradeNotice}</span>
        </motion.div>

        {/* Main Congratulations Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
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
          <p className="text-sm sm:text-lg text-slate-600 font-sans max-w-xl mx-auto pt-1">
            You both did it! {config.hero.subtitle}
          </p>
        </motion.div>

        {/* SPECIAL VISUAL: DUAL IDENTITY CARDS MERGING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200 shadow-xl backdrop-blur-xl relative"
        >
          <div className="text-[11px] font-mono text-slate-500 mb-4 tracking-wider flex items-center justify-between">
            <span className="font-bold">CAREER TELEMETRY MATCH</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              VERIFIED
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            
            {/* Gauri Card */}
            <motion.div
              className="flex-1 w-full p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-left shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">CANDIDATE 01</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold">
                  PLACED ✓
                </span>
              </div>
              <div className="text-lg font-bold font-display text-slate-900 mt-1">{config.user1}</div>
              <div className="text-xs text-slate-600 font-mono mt-0.5">{config.role1}</div>
            </motion.div>

            {/* Merge Heart */}
            <div className="flex items-center justify-center p-2.5 rounded-full bg-rose-50 border border-rose-200 text-rose-500 shadow-sm">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
            </div>

            {/* Disha Card */}
            <motion.div
              className="flex-1 w-full p-4 rounded-2xl bg-sky-50/60 border border-sky-200 text-left shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">CANDIDATE 02</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold">
                  PLACED ✓
                </span>
              </div>
              <div className="text-lg font-bold font-display text-slate-900 mt-1">{config.user2}</div>
              <div className="text-xs text-slate-600 font-mono mt-0.5">{config.role2}</div>
            </motion.div>

          </div>

          {/* Connected Reveal Banner */}
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50 to-emerald-50 border border-amber-300 text-center shadow-sm">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{config.hero.plotTwistBadge}</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-slate-900">
              {config.hero.plotTwistReveal} @ {config.companyName}
            </div>
          </div>
        </motion.div>

        {/* Major Theme Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={handleScrollNext}
            className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 text-white font-display font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_35px_rgba(244,63,94,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <span>EXPLORE THE STORY</span>
            <ChevronDown className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}