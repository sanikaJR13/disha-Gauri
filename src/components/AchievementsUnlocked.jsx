import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Laugh, Heart, Award, Briefcase, Sparkles, Crown } from 'lucide-react';
import { triggerStarBurst } from '../utils/confetti';
import { playPartyPop } from '../utils/audio';

const iconMap = {
  GraduationCap,
  Laugh,
  Heart,
  Award,
  Briefcase,
  Sparkles,
  Trophy
};

export default function AchievementsUnlocked({ config, onEasterEgg }) {
  const handleBadgeClick = (ach, e) => {
    playPartyPop();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(
      (rect.left + rect.width / 2) / window.innerWidth,
      (rect.top + rect.height / 2) / window.innerHeight
    );
    if (onEasterEgg) {
      onEasterEgg(ach.title);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>DUAL TROPHY CASE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          ACHIEVEMENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-rose-400 glow-text-gold">UNLOCKED 🏆</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-md mx-auto">
          Tap or hover any trophy card to celebrate specific milestone superpowers unlocked together!
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.achievements.map((ach) => {
          const IconComponent = iconMap[ach.icon] || Trophy;
          const isUltraRare = ach.isUltraRare;

          return (
            <motion.div
              key={ach.id}
              onClick={(e) => handleBadgeClick(ach, e)}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl group ${
                isUltraRare
                  ? 'bg-gradient-to-br from-[#0B1020] via-amber-950/40 to-[#0D1225] border-2 border-amber-400/80 shadow-[0_0_40px_rgba(245,158,11,0.35)]'
                  : 'bg-[#0B1020]/90 hover:bg-[#0D1225] border border-slate-800 shadow-xl'
              }`}
            >
              {/* Ultra Rare special banner / ambient glow */}
              {isUltraRare && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-rose-500/20 rounded-full blur-2xl pointer-events-none" />
              )}

              {/* Corner Tech Brackets */}
              <div className="corner-bracket-tl !w-3 !h-3 !border-amber-400/30" />
              <div className="corner-bracket-br !w-3 !h-3 !border-amber-400/30" />

              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ${
                  isUltraRare 
                    ? 'bg-gradient-to-br from-amber-500 to-yellow-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)]' 
                    : 'bg-[#0D1225] border border-slate-700 text-amber-400'
                }`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold ${
                  isUltraRare
                    ? 'bg-amber-400 text-black shadow-[0_0_10px_#fbbf24]'
                    : 'bg-slate-900 border border-slate-800 text-amber-300'
                }`}>
                  {ach.badge}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  {ach.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {ach.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>CONFIRMED</span>
                </span>
                <span className="text-slate-500 group-hover:text-amber-400 transition-colors">
                  Tap to pop ✨
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}