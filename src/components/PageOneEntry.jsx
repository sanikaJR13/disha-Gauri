import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { playScanBeep, playSuccessFanfare } from '../utils/audio';
import { triggerPlacementConfetti } from '../utils/confetti';

export default function PageOneEntry({ config, onEnterCelebration }) {
  const [transitioning, setTransitioning] = useState(false);

  const handleOpen = () => {
    setTransitioning(true);
    playScanBeep(700);

    setTimeout(() => {
      playSuccessFanfare();
      triggerPlacementConfetti();
      onEnterCelebration();
    }, 2200);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-amber-50/60 via-rose-50/50 to-sky-50/60 text-slate-800 select-none overflow-hidden">
      {/* Radiant ambient background blur orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle celebratory particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 shadow-sm"
          style={{
            top: `${15 + i * 10}%`,
            left: `${10 + i * 11}%`,
          }}
        />
      ))}

      {/* Center Container */}
      <div className="relative z-10 max-w-sm w-full flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {!transitioning ? (
            <motion.div
              key="button-only"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              {/* Single Prominent Glowing Button */}
              <button
                onClick={handleOpen}
                className="group relative w-full py-5 px-8 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 text-white font-display font-black text-lg sm:text-xl shadow-[0_15px_40px_rgba(244,63,94,0.35)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <span className="tracking-wide">OPEN AT YOUR OWN RISK 👀</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="transition-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl bg-white/90 border border-slate-200 shadow-xl backdrop-blur-xl text-center space-y-4 w-full"
            >
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-800 tracking-wider">
                LOADING...
              </div>

              {/* Progress Loading Bar */}
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 rounded-full shadow-sm"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.0, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}