import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Terminal, Sparkles, CheckCircle, Cpu, Zap, Laugh, Shield } from 'lucide-react';
import { playPartyPop } from '../utils/audio';
import { triggerStarBurst } from '../utils/confetti';

export default function QRTechSection({ config }) {
  const [activeToast, setActiveToast] = useState(null);

  const easterEggs = [
    "☕ Chai Break Protocol: Officially Approved!",
    "💸 Salary Credited Notifications incoming soon!",
    "👑 Future Team Lead Energy: 1000%",
    "🚀 0 Bugs in Production Guarantee activated!",
    "😎 Corporate Lanyard Swagger: Max Level!",
    "🍕 Team Pizza & Treat Budget: Approved!",
    "🧠 Brain storage expanded for big tech wins!",
    "🎉 Best Colleague Award: Pre-allocated!",
  ];

  const handleTileClick = (index, e) => {
    playPartyPop();
    const egg = easterEggs[index % easterEggs.length];
    setActiveToast(egg);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(rect.left / window.innerWidth, rect.top / window.innerHeight);

    setTimeout(() => {
      setActiveToast((prev) => (prev === egg ? null : prev));
    }, 3000);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Background Neon Grid Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <QrCode className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>Interactive QR Quantum Decoder</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          QR = <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 glow-text-green">QUITE READY</span> FOR THE NEXT CHAPTER 😎
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-lg mx-auto">
          Tap anywhere on the quantum QR matrix below to decrypt classified corporate easter eggs!
        </p>
      </div>

      {/* Main Interactive Matrix & Terminal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left / Center: Interactive Abstract QR Matrix */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative p-6 sm:p-8 rounded-3xl bg-slate-950/90 border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(34,197,94,0.2)] backdrop-blur-2xl"
          >
            {/* Corner Alignment Targets */}
            <div className="corner-bracket-tl !w-6 !h-6 !border-emerald-400 !border-t-4 !border-l-4" />
            <div className="corner-bracket-tr !w-6 !h-6 !border-emerald-400 !border-t-4 !border-r-4" />
            <div className="corner-bracket-bl !w-6 !h-6 !border-emerald-400 !border-b-4 !border-l-4" />
            <div className="corner-bracket-br !w-6 !h-6 !border-emerald-400 !border-b-4 !border-r-4" />

            {/* Matrix Tile Grid (6x6) */}
            <div className="grid grid-cols-6 gap-2 sm:gap-2.5 w-60 h-60 sm:w-72 sm:h-72">
              {[...Array(36)].map((_, idx) => {
                // Fixed pattern nodes to mimic QR aesthetic
                const isFixedFinder = 
                  (idx < 3 || (idx >= 6 && idx <= 8) || (idx >= 12 && idx <= 14)) || // top-left
                  (idx >= 3 && idx <= 5) || (idx >= 9 && idx <= 11) || // top-right
                  (idx >= 24 && idx <= 26) || (idx >= 30 && idx <= 32); // bottom-left
                
                const isGlowing = (idx * 7) % 3 === 0;

                return (
                  <motion.button
                    key={idx}
                    onClick={(e) => handleTileClick(idx, e)}
                    whileHover={{ scale: 1.25, rotate: 90 }}
                    whileTap={{ scale: 0.8 }}
                    className={`rounded-md transition-all duration-300 relative group flex items-center justify-center cursor-pointer ${
                      isFixedFinder 
                        ? 'bg-emerald-400 shadow-[0_0_10px_#22c55e]' 
                        : isGlowing 
                        ? 'bg-cyan-400/80 hover:bg-cyan-300 shadow-[0_0_8px_#06b6d4]' 
                        : 'bg-slate-800/90 hover:bg-emerald-500/80 border border-slate-700/60'
                    }`}
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-black select-none">
                      ✨
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-4 text-center">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold tracking-wider">
                [CLICK TILES TO UNLOCK EASTER EGGS]
              </span>
            </div>
          </motion.div>

          {/* Floating dynamic Easter egg toast */}
          {activeToast && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-mono font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2 backdrop-blur-xl"
            >
              <Zap className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>{activeToast}</span>
            </motion.div>
          )}
        </div>

        {/* Right: Live Terminal Feed & Corporate Status */}
        <div className="lg:col-span-6 space-y-6">
          {/* Cyber Terminal Card */}
          <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-300 font-bold">RECRUITMENT_ENGINE.LOG</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            {/* Terminal lines */}
            <div className="space-y-2.5 font-mono text-xs sm:text-sm">
              {config.qrTech.logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <span className="text-emerald-400">➜</span>
                  <span className={log.includes('SUCCESSFULLY') ? 'text-emerald-300 font-bold glow-text-green' : 'text-slate-300'}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Corporate Ready Status Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/40 shadow-xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>SYSTEM DISPATCH COMPLETE</span>
            </div>

            <h3 className="text-lg sm:text-2xl font-extrabold font-display text-white">
              {config.qrTech.statusHeadline}
            </h3>

            <p className="mt-2 text-sm text-amber-300/90 font-sans italic flex items-center gap-1.5">
              <Laugh className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>"{config.qrTech.statusPunchline}"</span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
