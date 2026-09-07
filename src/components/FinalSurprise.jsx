import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, LockOpen, Sparkles, Cake, Flame, Heart, RefreshCw } from 'lucide-react';
import { triggerGrandCelebration, triggerStarBurst } from '../utils/confetti';
import { playPartyPop, playSuccessFanfare } from '../utils/audio';

export default function FinalSurprise({ config }) {
  const [unlocked, setUnlocked] = useState(false);
  const [stage, setStage] = useState(0); 
  // 0: Initial locked button
  // 1: "WAIT... 👀"
  // 2: "WHY ARE YOU STILL LOOKING AT THE WEBSITE? 😂"
  // 3: "YOUR CAKE IS WAITING! 🎂🎉" -> "NOW GO CUT THE CAKE! ❤️🎂🚀"
  
  const [candleLit, setCandleLit] = useState(true);

  const handleUnlock = () => {
    setUnlocked(true);
    setStage(1);
    playPartyPop();

    setTimeout(() => {
      setStage(2);
      playPartyPop();
    }, 1800);

    setTimeout(() => {
      setStage(3);
      playSuccessFanfare();
      triggerGrandCelebration();
    }, 3800);
  };

  const handleCandleClick = (e) => {
    setCandleLit((prev) => !prev);
    playPartyPop();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(
      (rect.left + rect.width / 2) / window.innerWidth,
      (rect.top + rect.height / 2) / window.innerHeight
    );
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-slate-950/90 border-2 border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.2)] backdrop-blur-2xl">
        
        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-float">
                <Gift className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">
                  CLASSIFIED FINAL TRANSMISSION
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
                  {config.cakeSurprise?.heading || "🎁 ONE MORE SURPRISE..."}
                </h2>
                <p className="text-sm sm:text-base text-slate-400 font-sans max-w-md mx-auto">
                  One last secret message is encrypted in this portal. Click below to reveal it!
                </p>
              </div>

              <button
                onClick={handleUnlock}
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white font-display font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 overflow-hidden cursor-pointer"
              >
                <LockOpen className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
                <span>{config.cakeSurprise?.buttonText || "UNLOCK FINAL MESSAGE 🔓"}</span>
                <Sparkles className="w-5 h-5 text-amber-200" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              {stage === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-4xl sm:text-6xl font-extrabold font-display text-amber-400 glow-text-gold animate-pulse py-10"
                >
                  {config.cakeSurprise?.waitText || "WAIT... 👀"}
                </motion.div>
              )}

              {stage === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl sm:text-4xl font-extrabold font-display text-rose-300 glow-text-gold py-10"
                >
                  {config.cakeSurprise?.questionText || "WHY ARE YOU STILL LOOKING AT THE WEBSITE? 😂"}
                </motion.div>
              )}

              {stage === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="space-y-6 flex flex-col items-center"
                >
                  {/* Interactive Celebration Cake Card */}
                  <div
                    onClick={handleCandleClick}
                    className="relative p-8 rounded-3xl bg-slate-900/90 border-2 border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.4)] cursor-pointer group hover:scale-105 transition-all"
                  >
                    {/* Candle Flame Indicator */}
                    <div className="flex justify-center items-center gap-3 mb-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                          {candleLit ? (
                            <motion.div
                              animate={{ scale: [1, 1.25, 1], y: [0, -2, 0] }}
                              transition={{ duration: 0.8 + i * 0.2, repeat: Infinity }}
                              className="text-amber-400 drop-shadow-[0_0_10px_#f59e0b]"
                            >
                              <Flame className="w-6 h-6 fill-amber-400" />
                            </motion.div>
                          ) : (
                            <span className="text-xs font-mono text-slate-500">💨</span>
                          )}
                          <div className="w-1.5 h-6 bg-gradient-to-b from-rose-400 to-amber-300 rounded-full" />
                        </div>
                      ))}
                    </div>

                    {/* Cake Base */}
                    <div className="text-6xl sm:text-7xl">
                      🎂
                    </div>

                    <div className="mt-3 text-[11px] font-mono text-amber-300">
                      {candleLit ? "✨ Tap cake to make a wish & blow candles! ✨" : "🎉 Wish Granted! Tap to light again 🎉"}
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold">
                    {config.cakeSurprise?.cakeAnnouncement || "YOUR CAKE IS WAITING! 🎂🎉"}
                  </h2>

                  <p className="text-base sm:text-xl text-slate-200 font-sans max-w-md">
                    Congratulations once again, <span className="font-bold text-amber-300">{config.friendName}</span>! You made everyone proud!
                  </p>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-600/30 via-amber-500/30 to-emerald-600/30 border border-amber-400/50">
                    <h3 className="text-xl sm:text-3xl font-extrabold font-display text-white tracking-wide">
                      {config.cakeSurprise?.finalCallToAction || "NOW GO CUT THE CAKE! ❤️🎂🚀"}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      triggerGrandCelebration();
                      playPartyPop();
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-mono flex items-center gap-2 hover:scale-105 active:scale-95 transition"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Trigger More Confetti Blast</span>
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
