import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, BookOpen, ArrowRight, Stars } from 'lucide-react';
import { playScanBeep, playSuccessFanfare } from '../utils/audio';
import { triggerPlacementConfetti } from '../utils/confetti';

export default function PageOneEntry({ config, onEnterCelebration }) {
  const [transitioning, setTransitioning] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);

  const loadingPhrases = [
    "Flipping open the college memory journal... 📖",
    "Loading 1st year roommate chaos & chai breaks... ☕🎒",
    "Unwrapping the ultimate placement plot twist... 🤯",
    "Destiny confirmed: SAME COMPANY! 🏢💼",
    "Ready for the celebration! 🎉✨"
  ];

  const handleOpen = () => {
    setTransitioning(true);
    playScanBeep(700);

    // 12-second nostalgic suspense sequence
    const interval = setInterval(() => {
      setLoadingPhase((prev) => (prev < loadingPhrases.length - 1 ? prev + 1 : prev));
    }, 2400);

    setTimeout(() => {
      clearInterval(interval);
      playSuccessFanfare();
      triggerPlacementConfetti();
      onEnterCelebration();
    }, 12000);
  };

  const user1 = config?.user1 || 'GAURI';
  const user2 = config?.user2 || 'DISHA';

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-notebook-dots text-stone-800 select-none overflow-hidden">
      
      {/* Soft Pastel Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Doodle Hearts & Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute font-handwriting text-rose-400 font-bold select-none pointer-events-none"
          style={{
            top: `${12 + i * 14}%`,
            left: `${8 + i * 15}%`,
            fontSize: `${18 + (i % 3) * 6}px`
          }}
        >
          {i % 2 === 0 ? '♡' : '✦'}
        </motion.div>
      ))}

      {/* Main Journal Cover Box */}
      <div className="relative z-10 max-w-md w-full flex flex-col items-center justify-center text-center">
        
        {/* Washi Tape at Top of the Journal */}
        <div className="w-32 h-6 washi-tape-yellow rounded-xs -mb-3 z-20 rotate-[-1deg] shadow-xs" />

        <div className="w-full bg-[#fffdfa] border border-stone-200/90 rounded-2xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(51,47,46,0.08)] relative">
          
          {/* Top Stamp Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-journal text-lg tracking-wide mb-4 shadow-2xs">
            <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
            <span>CONFIDENTIAL FRIENDSHIP ARCHIVE</span>
          </div>

          <AnimatePresence mode="wait">
            {!transitioning ? (
              <motion.div
                key="diary-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center space-y-5"
              >
                {/* Journal Title */}
                <div>
                  <h1 className="font-handwriting text-4xl sm:text-5xl font-black text-stone-900 leading-tight">
                    {user1} & {user2}’s
                  </h1>
                  <div className="font-display font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 mt-1">
                    MEMORY SCRAPBOOK
                  </div>
                </div>

                {/* Subtitle / Note */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 font-handwriting text-stone-700 text-lg sm:text-xl leading-snug rotate-[-1deg]">
                  "Warning: Contains 4 years of hostel roommate lore & one gigantic placement plot twist!" 👀✨
                </div>

                {/* Open Button */}
                <button
                  onClick={handleOpen}
                  className="group relative w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-orange-400 via-pink-400 to-rose-500 text-white font-display font-extrabold text-base sm:text-lg shadow-[0_10px_25px_rgba(244,114,182,0.35)] hover:shadow-[0_15px_35px_rgba(244,114,182,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer overflow-hidden mt-2"
                >
                  <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform stroke-[2.2]" />
                  <span>OPEN SCRAPBOOK</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
                </button>

                <p className="font-journal text-base text-stone-400">
                  Tap to unlock memories ♡
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="opening-journal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 space-y-6 flex flex-col items-center"
              >
                {/* Animated Flipping Book / Stars */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center text-rose-500 shadow-xs text-3xl"
                >
                  📖
                </motion.div>

                {/* Whimsical Rotating Loading Phrase */}
                <div className="min-h-[50px] flex items-center justify-center">
                  <motion.p
                    key={loadingPhase}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="font-handwriting text-2xl sm:text-3xl font-bold text-stone-800 leading-snug"
                  >
                    {loadingPhrases[loadingPhase]}
                  </motion.p>
                </div>

                {/* Pastel Progress Bar */}
                <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden border border-stone-200 p-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 via-pink-400 to-rose-400 rounded-full shadow-2xs"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 12.0, ease: 'linear' }}
                  />
                </div>

                <div className="font-journal text-stone-500 text-base">
                  Almost ready for the big reveal... ✨
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Bottom Washi Tape */}
        <div className="w-24 h-5 washi-tape-pink rounded-xs -mt-2 z-20 rotate-[2deg] shadow-xs" />

      </div>

    </div>
  );
}