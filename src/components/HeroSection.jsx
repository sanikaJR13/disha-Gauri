import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Briefcase, GraduationCap, Award, ChevronDown, LockOpen, Star } from 'lucide-react';
import { triggerPlacementConfetti } from '../utils/confetti';
import { playSuccessFanfare } from '../utils/audio';

export default function HeroSection({ config }) {
  const handleUnlockClick = () => {
    triggerPlacementConfetti();
    playSuccessFanfare();
    const target = document.getElementById('stats-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-cyber-grid text-center">
      {/* Abstract QR Matrix Geometric Elements in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing cyber blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-amber-500/10 rounded-full blur-3xl" />
        
        {/* Decorative QR matrix pattern blocks */}
        <div className="absolute top-16 left-6 sm:left-24 w-16 h-16 border-2 border-emerald-500/20 rounded-lg p-2 opacity-40">
          <div className="w-full h-full bg-emerald-400/20 rounded-sm" />
        </div>
        <div className="absolute bottom-24 right-6 sm:right-24 w-20 h-20 border-2 border-cyan-500/20 rounded-lg p-2.5 opacity-40">
          <div className="w-full h-full bg-cyan-400/20 rounded-sm" />
        </div>
        <div className="absolute top-1/3 right-8 sm:right-32 w-10 h-10 border border-amber-500/30 rounded p-1 opacity-50">
          <div className="w-full h-full bg-amber-400/30" />
        </div>
        <div className="absolute bottom-1/3 left-8 sm:left-32 w-12 h-12 border border-purple-500/30 rounded p-1.5 opacity-50">
          <div className="w-full h-full bg-purple-400/30" />
        </div>

        {/* Floating digital particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-sm shadow-[0_0_8px_#22c55e]"
            style={{
              top: `${15 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Career & Celebration Icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-6 sm:left-36 hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md"
      >
        <GraduationCap className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-36 right-6 sm:right-36 hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900/80 border border-amber-500/30 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-md"
      >
        <Briefcase className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-10 sm:left-44 hidden md:flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-900/80 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md"
      >
        <Rocket className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-28 right-10 sm:right-44 hidden md:flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-900/80 border border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md"
      >
        <Star className="w-5 h-5" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Top Celebration Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-mono font-semibold shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>🎉 SHE DID IT! 🎉</span>
          <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDirection: 'reverse' }} />
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-tight sm:leading-none"
        >
          Congratulations,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 glow-text-green inline-block">
            {config.friendName}!
          </span>
        </motion.h1>

        {/* Company & Role Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg text-xs sm:text-sm font-mono text-slate-300"
        >
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Award className="w-4 h-4" />
            <span>{config.placementRole}</span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-amber-300 font-bold">@{config.companyName}</span>
          {config.batchYear && (
            <>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400">Batch {config.batchYear}</span>
            </>
          )}
        </motion.div>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-slate-300 font-sans max-w-xl leading-relaxed px-2"
        >
          {config.heroSubtitle}
        </motion.p>

        {/* Highlighted Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-2xl sm:text-4xl font-extrabold tracking-wide font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold"
        >
          {config.heroCatchphrase}
        </motion.div>

        {/* Unlock Celebration CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <button
            onClick={handleUnlockClick}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-display font-extrabold text-base sm:text-lg shadow-[0_0_35px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            <LockOpen className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span className="tracking-wide">UNLOCK YOUR CELEBRATION</span>
            <Sparkles className="w-5 h-5 text-amber-300" />
          </button>

          <span className="text-xs font-mono text-slate-400/80 flex items-center gap-1 animate-bounce mt-2">
            <span>Scroll to explore your journey</span>
            <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
          </span>
        </motion.div>

      </div>
    </section>
  );
}
