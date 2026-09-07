import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, User, Users, Sparkles, ShieldCheck, ArrowRight, Lock, Key } from 'lucide-react';
import { playScanBeep, playSuccessFanfare } from '../utils/audio';
import { triggerPlacementConfetti } from '../utils/confetti';

export default function PageOneEntry({ config, onEnterCelebration }) {
  const [transitioning, setTransitioning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = config.page1.transitionSteps || [
    "ACCESS GRANTED ✓",
    "LOADING ROOMMATE HISTORY...",
    "ANALYSING FRIENDSHIP DATA...",
    "SEARCHING FOR THE BIGGEST PLOT TWIST..."
  ];

  const handleOpen = () => {
    setTransitioning(true);
    playScanBeep(700);

    // Progression of transition status messages
    setTimeout(() => {
      setStepIndex(1);
      playScanBeep(850);
    }, 900);

    setTimeout(() => {
      setStepIndex(2);
      playScanBeep(1000);
    }, 1800);

    setTimeout(() => {
      setStepIndex(3);
      playScanBeep(1200);
    }, 2800);

    setTimeout(() => {
      playSuccessFanfare();
      triggerPlacementConfetti();
      onEnterCelebration();
    }, 3800);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-[#060810] bg-cyber-grid text-slate-100 select-none overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-24 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"
          style={{
            top: `${15 + i * 10}%`,
            left: `${10 + i * 11}%`,
          }}
        />
      ))}

      {/* Main Mystery Card Container */}
      <div className="relative max-w-md w-full z-10">
        
        <AnimatePresence mode="wait">
          {!transitioning ? (
            <motion.div
              key="mystery-box"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0B1020]/90 border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)] backdrop-blur-2xl text-center relative overflow-hidden"
            >
              {/* Corner Tech Brackets */}
              <div className="corner-bracket-tl !w-4 !h-4 !border-amber-400/50" />
              <div className="corner-bracket-tr !w-4 !h-4 !border-amber-400/50" />
              <div className="corner-bracket-bl !w-4 !h-4 !border-amber-400/50" />
              <div className="corner-bracket-br !w-4 !h-4 !border-amber-400/50" />

              {/* Warning Header */}
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>{config.page1.warningTag}</span>
              </div>

              {/* Warning Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                This portal contains memories, emotional moments, and{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-pink-400 glow-text-gold">
                  {config.page1.highlightText}
                </span>
                .
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

              {/* Detected Users Section */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono text-cyan-400 tracking-widest uppercase flex items-center justify-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>TWO USERS DETECTED</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* User 1 Card */}
                  <div className="p-3.5 rounded-2xl bg-[#0D1225] border border-slate-800 flex flex-col items-center text-center shadow-inner hover:border-slate-700 transition">
                    <span className="text-[10px] font-mono text-slate-500">USER 01</span>
                    <span className="text-base font-extrabold font-display text-white mt-0.5 tracking-wide">
                      {config.user1}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ACTIVE
                    </span>
                  </div>

                  {/* User 2 Card */}
                  <div className="p-3.5 rounded-2xl bg-[#0D1225] border border-slate-800 flex flex-col items-center text-center shadow-inner hover:border-slate-700 transition">
                    <span className="text-[10px] font-mono text-slate-500">USER 02</span>
                    <span className="text-base font-extrabold font-display text-white mt-0.5 tracking-wide">
                      {config.user2}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Report Pills */}
              <div className="mt-5 space-y-2 text-left font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-[#0D1225]/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">RELATIONSHIP:</span>
                  <span className="text-emerald-400 font-bold">{config.page1.relationshipStatus}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0D1225]/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">CURRENT STATUS:</span>
                  <span className="text-amber-300 font-bold">{config.page1.currentStatus}</span>
                </div>
              </div>

              {/* Main Glowing CTA Button */}
              <div className="mt-8">
                <button
                  onClick={handleOpen}
                  className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 text-white font-display font-extrabold text-base sm:text-lg shadow-[0_0_35px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
                >
                  {/* Subtle shine sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <span>{config.page1.buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-4 text-[11px] font-mono text-slate-500">
                Encrypted with 100% Roommate Lore
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="transition-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl bg-[#0B1020]/95 border border-emerald-500/40 shadow-[0_0_60px_rgba(34,197,94,0.3)] backdrop-blur-2xl text-center space-y-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(34,197,94,0.5)] animate-pulse">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-400 glow-text-green">
                  {steps[stepIndex]}
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Syncing Gauri & Disha roommate telemetry...
                </p>
              </div>

              {/* Cyber progress loader */}
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_10px_#22c55e]"
                  initial={{ width: '15%' }}
                  animate={{ width: `${(stepIndex + 1) * 25}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}