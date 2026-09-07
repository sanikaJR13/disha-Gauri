import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Laugh, Heart, Award, Briefcase, Sparkles } from 'lucide-react';
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
      {/* Ambience */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          <span>DUAL TROPHY CASE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
          ACHIEVEMENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600">UNLOCKED 🏆</span>
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base font-sans max-w-md mx-auto">
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
                  ? 'bg-gradient-to-br from-amber-50 via-white to-rose-50 border-2 border-amber-400 shadow-lg'
                  : 'bg-white/90 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ${
                  isUltraRare 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md' 
                    : 'bg-slate-50 border border-slate-200 text-orange-600'
                }`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold ${
                  isUltraRare
                    ? 'bg-amber-300 text-amber-950 font-black shadow-xs'
                    : 'bg-slate-100 border border-slate-200 text-slate-700'
                }`}>
                  {ach.badge}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 group-hover:text-orange-600 transition-colors">
                  {ach.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {ach.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-600 font-bold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>CONFIRMED</span>
                </span>
                <span className="text-slate-400 group-hover:text-orange-600 transition-colors font-medium">
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