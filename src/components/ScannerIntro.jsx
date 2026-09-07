import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, QrCode, Sparkles, ShieldCheck, Cpu, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { triggerPlacementConfetti } from '../utils/confetti';
import { playScanBeep, playSuccessFanfare } from '../utils/audio';

export default function ScannerIntro({ config, onComplete, isSoundOn, toggleSound }) {
  const [step, setStep] = useState(0); 
  // 0: Scanning QR
  // 1: QR Verified & Searching Achievement
  // 2: Identity Detected
  // 3: Achievement Detected
  // 4: Placement Unlocked + Confetti
  // 5: Complete & Fade Out

  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Sequence timeline
    const t0 = setTimeout(() => {
      playScanBeep(600);
    }, 400);

    const t1 = setTimeout(() => {
      setStep(1); // QR Code Verified
      playScanBeep(800);
    }, 1800);

    const t2 = setTimeout(() => {
      setStep(2); // Identity Detected: HER NAME
      playScanBeep(1000);
    }, 3200);

    const t3 = setTimeout(() => {
      setStep(3); // Achievement Detected
      playScanBeep(1200);
    }, 4600);

    const t4 = setTimeout(() => {
      setStep(4); // Placement Successfully Unlocked!
      playSuccessFanfare();
      triggerPlacementConfetti();
    }, 5800);

    const t5 = setTimeout(() => {
      onComplete();
    }, 8500);

    return () => {
      clearInterval(interval);
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    playSuccessFanfare();
    triggerPlacementConfetti();
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] bg-cyber-grid text-white px-4 select-none overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl -top-20 -left-20 pointer-events-none animate-pulse-glow" />
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl -bottom-20 -right-20 pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Top Header bar with sound toggle and skip */}
      <div className="absolute top-6 left-0 right-0 px-6 flex items-center justify-between z-20 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/80 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>CYBER_SCANNER // v2.6.4</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white transition"
          >
            {isSoundOn ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
          
          <button
            onClick={handleSkip}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700 px-3 py-1.5 rounded-full transition"
          >
            <span>Skip Scan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center QR Scanner Visual HUD */}
      <div className="relative flex flex-col items-center max-w-sm w-full">
        {/* The Scanning Frame */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 shadow-[0_0_50px_rgba(34,197,94,0.15)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden">
          {/* Tech Corner Brackets */}
          <div className="corner-bracket-tl !w-6 !h-6 !border-emerald-400 !border-t-4 !border-l-4" />
          <div className="corner-bracket-tr !w-6 !h-6 !border-emerald-400 !border-t-4 !border-r-4" />
          <div className="corner-bracket-bl !w-6 !h-6 !border-emerald-400 !border-b-4 !border-l-4" />
          <div className="corner-bracket-br !w-6 !h-6 !border-emerald-400 !border-b-4 !border-r-4" />

          {/* Animated Laser Scanning Line */}
          {step < 4 && (
            <motion.div
              animate={{
                top: ['5%', '90%', '5%'],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-2 right-2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#22c55e] z-10"
            />
          )}

          {/* Center Graphic Dynamic by Step */}
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center relative w-full h-full"
              >
                <div className="relative p-6 rounded-xl bg-slate-900/80 border border-slate-800">
                  <QrCode className="w-24 h-24 text-emerald-400/80 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent pointer-events-none" />
                </div>
                <span className="mt-3 text-[11px] font-mono text-emerald-400 tracking-widest">
                  DECODING MATRIX {scanProgress}%
                </span>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="flex flex-col items-center justify-center text-center p-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.4)] mb-3">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="text-xs font-mono text-emerald-400 tracking-wider">
                  {config.scannerConfig.verifiedText}
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>{config.scannerConfig.searchingText}</span>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center text-center p-3"
              >
                <span className="text-xs font-mono text-amber-400 tracking-wider mb-1 flex items-center gap-1">
                  <span>{config.scannerConfig.identityText}</span>
                </span>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-amber-300 glow-text-green font-display"
                >
                  {config.friendName}
                </motion.div>
                <span className="text-[11px] font-mono text-slate-400 mt-2 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
                  ID: CANDIDATE_001 // VERIFIED
                </span>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center text-center p-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] mb-2 animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="text-xs font-mono text-amber-400 tracking-widest uppercase">
                  {config.scannerConfig.achievementText}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  OFFER LETTER CONFIRMED
                </div>
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center justify-center text-center p-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-[0_0_35px_rgba(34,197,94,0.6)] mb-2"
                >
                  <Check className="w-12 h-12 stroke-[3]" />
                </motion.div>
                <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest">
                  ACCESS GRANTED
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status Text Feed Below Scanner Frame */}
        <div className="mt-8 text-center min-h-[90px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="text0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1.5"
              >
                <div className="text-lg font-mono font-bold tracking-wider text-emerald-400 glow-text-green">
                  {config.scannerConfig.scanTitle}
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {config.scannerConfig.scanSubtitle}
                </p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="text1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1.5"
              >
                <div className="text-lg font-mono font-bold tracking-wider text-cyan-400">
                  VERIFYING SIGNATURE...
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Matching career data & milestones...
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="text2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1.5"
              >
                <div className="text-lg font-mono font-bold tracking-wider text-amber-300">
                  MATCH CONFIRMED: {config.friendName.toUpperCase()}
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Checking career records & placement status...
                </p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="text3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1.5"
              >
                <div className="text-xl font-display font-extrabold text-amber-400 glow-text-gold">
                  {config.scannerConfig.achievementText}
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  Preparing victory sequence...
                </p>
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                key="text4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-2"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 glow-text-green font-display">
                  {config.scannerConfig.unlockedText}
                </div>
                <p className="text-xs text-emerald-300 font-mono flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Loading celebration experience...</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom manual enter button if user wants to enter immediately during step 4 */}
        {step >= 4 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onComplete}
            className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:scale-105 active:scale-95 transition flex items-center gap-2"
          >
            <span>Enter Celebration</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
