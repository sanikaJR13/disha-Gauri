import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, Zap } from 'lucide-react';
import { playPartyPop } from '../utils/audio';
import { triggerStarBurst } from '../utils/confetti';

export default function PlotTwistMeter({ config, onEasterEgg }) {
  const [recalculated, setRecalculated] = useState(false);

  const handleRecalculate = (e) => {
    setRecalculated(true);
    playPartyPop();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(
      (rect.left + rect.width / 2) / window.innerWidth,
      (rect.top + rect.height / 2) / window.innerHeight
    );
    setTimeout(() => setRecalculated(false), 2000);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-10 rounded-3xl bg-white/95 border border-amber-300 shadow-xl text-center relative overflow-hidden backdrop-blur-2xl"
      >
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Calculator className="w-3.5 h-3.5 text-amber-600" />
          <span>STATISTICAL PROBABILITY ENGINE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
          CALCULATING <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600">THE ODDS...</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 font-sans max-w-md mx-auto">
          Mathematical proof that this roommate placement duo was written in the stars.
        </p>

        {/* Odds items list */}
        <div className="mt-8 max-w-md mx-auto space-y-2.5">
          {config.odds.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-slate-400 text-[10px]">0{idx + 1}.</span>
                <span>{item.label}</span>
              </div>

              <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-700">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-300 space-y-2 shadow-sm">
          <div className="text-xs font-mono text-amber-800 font-bold tracking-widest uppercase">
            CALCULATION RESULT
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900">
            {config.oddsResult}
          </h3>
          <p className="text-xs text-slate-500 font-sans pt-1">
            Probability: 1 in 10,000,000,000 ✨
          </p>
        </div>

        {/* Recalculate Button */}
        <div className="mt-6">
          <button
            onClick={handleRecalculate}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 border border-slate-300 hover:border-amber-400 text-xs font-mono font-bold text-slate-700 hover:text-amber-700 hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>{recalculated ? "Universe Confirmed: 1000% Destined!" : "Recalculate Probability"}</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}