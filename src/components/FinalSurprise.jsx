import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, LockOpen, Sparkles, Flame, Heart } from 'lucide-react';
import { triggerGrandCelebration, triggerStarBurst } from '../utils/confetti';
import { playPartyPop, playSuccessFanfare, playScanBeep } from '../utils/audio';

export default function FinalSurprise({ config }) {
  const [unlocked, setUnlocked] = useState(false);
  const [stage, setStage] = useState(0); 
  const [decryptStep, setDecryptStep] = useState(0);
  const [candleLit, setCandleLit] = useState(true);

  const handleUnlock = () => {
    setUnlocked(true);
    setStage(1);
    playScanBeep(600);

    setTimeout(() => {
      setDecryptStep(1);
      playScanBeep(800);
    }, 900);

    setTimeout(() => {
      setDecryptStep(2);
      playScanBeep(1000);
    }, 1800);

    setTimeout(() => {
      setStage(2); // "WAIT... 👀"
      playPartyPop();
    }, 2800);

    setTimeout(() => {
      setStage(3); // "YOU TWO ACTUALLY GOT PLACED IN THE SAME COMPANY?! 😂"
      playPartyPop();
    }, 4500);

    setTimeout(() => {
      setStage(4); // Cake & Grand Celebration!
      playSuccessFanfare();
      triggerGrandCelebration();
    }, 6500);
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

  const user1 = config?.user1 || 'GAURI';
  const user2 = config?.user2 || 'DISHA';

  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto text-center select-none">
      
      {/* Background Soft Pastel Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Pop-up Card Container */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-[#fffdfa] border-2 border-dashed border-amber-300 shadow-[0_15px_40px_rgba(51,47,46,0.08)]">
        
        {/* Washi Tape at Top */}
        <div className="w-28 h-5 washi-tape-yellow rounded-2xs -mt-11 sm:-mt-16 mx-auto mb-6 shadow-2xs rotate-[-1deg]" />

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <div className="w-20 h-20 rounded-3xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm animate-float text-4xl">
                🎁
              </div>

              <div className="space-y-2">
                <span className="font-journal text-amber-700 text-lg uppercase tracking-wide block">
                  {config.finalSurprise.badge}
                </span>
                <h2 className="font-handwriting text-4xl sm:text-6xl font-black text-stone-900 leading-tight">
                  {config.finalSurprise.heading}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 font-sans max-w-md mx-auto">
                  {config.finalSurprise.description}
                </p>
              </div>

              <button
                onClick={handleUnlock}
                className="group relative px-9 py-4 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-500 text-white font-display font-extrabold text-lg sm:text-xl shadow-[0_10px_25px_rgba(244,114,182,0.35)] hover:shadow-[0_15px_35px_rgba(244,114,182,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer"
              >
                <LockOpen className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                <span>{config.finalSurprise.buttonText}</span>
                <Sparkles className="w-5 h-5 text-amber-100" />
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3 py-8"
                >
                  <div className="font-handwriting text-3xl sm:text-4xl font-bold text-stone-800">
                    {config.finalSurprise.decryptSteps[decryptStep]}
                  </div>
                  <div className="w-52 mx-auto bg-stone-100 rounded-full h-3 overflow-hidden border border-stone-200 p-0.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 via-pink-400 to-rose-400 rounded-full shadow-2xs"
                      initial={{ width: '20%' }}
                      animate={{ width: `${(decryptStep + 1) * 33}%` }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </motion.div>
              )}

              {stage === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-handwriting text-5xl sm:text-7xl font-black text-rose-500 py-10"
                >
                  {config.finalSurprise.waitText}
                </motion.div>
              )}

              {stage === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-handwriting text-3xl sm:text-5xl font-black text-stone-900 py-10 max-w-xl leading-tight"
                >
                  {config.finalSurprise.plotTwistQuestion}
                </motion.div>
              )}

              {stage === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="space-y-6 flex flex-col items-center"
                >
                  {/* Story Chain Scrapbook Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-2 font-journal text-base font-bold">
                    <span className="px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                      SAME ROOM 🏠
                    </span>
                    <span className="text-rose-400">➜</span>
                    <span className="px-3.5 py-1 rounded-full bg-pink-100 border border-pink-200 text-rose-800">
                      SAME CHAOS 😂
                    </span>
                    <span className="text-rose-400">➜</span>
                    <span className="px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800">
                      SAME COMPANY 💼
                    </span>
                  </div>

                  {/* Interactive Celebration Cake Card */}
                  <div
                    onClick={handleCandleClick}
                    className="relative p-8 rounded-3xl bg-amber-50/80 border-2 border-dashed border-amber-300 shadow-sm cursor-pointer group hover:scale-105 transition-all"
                  >
                    {/* Candle Flame Indicator */}
                    <div className="flex justify-center items-center gap-3 mb-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                          {candleLit ? (
                            <motion.div
                              animate={{ scale: [1, 1.25, 1], y: [0, -2, 0] }}
                              transition={{ duration: 0.8 + i * 0.2, repeat: Infinity }}
                              className="text-amber-500 drop-shadow-sm"
                            >
                              <Flame className="w-6 h-6 fill-amber-500" />
                            </motion.div>
                          ) : (
                            <span className="text-xs font-journal text-stone-400">💨</span>
                          )}
                          <div className="w-1.5 h-6 bg-gradient-to-b from-rose-400 to-amber-400 rounded-full" />
                        </div>
                      ))}
                    </div>

                    {/* Cake Emoji Icon */}
                    <div className="text-6xl sm:text-7xl select-none">
                      🎂
                    </div>

                    <div className="mt-3 font-journal text-amber-800 text-base font-bold">
                      {candleLit ? "✨ Tap cake to make a wish & blow candles! ✨" : "🎉 Wish Granted! Tap to light candles again 🎉"}
                    </div>
                  </div>

                  <h2 className="font-handwriting text-4xl sm:text-6xl font-black text-stone-900 leading-tight">
                    {config.finalSurprise.cakeAnnouncement}
                  </h2>

                  <div className="p-4 sm:p-6 rounded-2xl bg-amber-100/70 border border-amber-300 shadow-2xs rotate-[-1deg]">
                    <h3 className="font-handwriting text-2xl sm:text-4xl font-black text-rose-600 tracking-wide">
                      {config.finalSurprise.callToAction}
                    </h3>
                  </div>

                  <p className="font-journal text-emerald-800 text-xl font-bold">
                    CONGRATULATIONS, {user1} & {user2}! ♡
                  </p>

                  <p className="font-handwriting text-2xl sm:text-3xl font-black text-stone-800">
                    {config.finalSurprise.finalSubtitle}
                  </p>

                  <button
                    onClick={() => {
                      triggerGrandCelebration();
                      playPartyPop();
                    }}
                    className="px-6 py-2.5 rounded-full bg-white border border-stone-300 hover:border-pink-300 text-stone-700 hover:text-rose-600 font-journal text-base font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition cursor-pointer shadow-2xs"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Trigger More Confetti Blast ✨</span>
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