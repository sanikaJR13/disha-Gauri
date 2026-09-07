import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, CheckCircle, Sparkles, Smile, Shield } from 'lucide-react';

export default function CompatibilityScore({ config, onEasterEgg }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-slate-800 shadow-2xl backdrop-blur-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1225] border border-rose-500/30 text-rose-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>ALGORITHMIC COMPATIBILITY TELEMETRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            ROOMMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">COMPATIBILITY ANALYSIS</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans">
            Diagnostic breakdown of roommate dynamics and comedy output.
          </p>
        </div>

        {/* Progress Bars */}
        <div className="space-y-6 max-w-xl mx-auto">
          {config.compatibility.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs sm:text-sm">
                <span className="font-bold text-slate-200">
                  {item.label} {item.note && <span className="text-amber-300">{item.note}</span>}
                </span>
                <span className="font-bold text-emerald-400">{item.percentage}%</span>
              </div>

              {/* Bar track */}
              <div className="w-full bg-[#0D1225] rounded-full h-3.5 overflow-hidden border border-slate-800 p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.15, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-sm`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom verdict card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-rose-950/40 via-[#0D1225] to-emerald-950/40 border border-rose-500/30 text-center shadow-lg"
        >
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
            FINAL SYSTEM RESULT
          </div>
          <div className="text-lg sm:text-2xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold">
            {config.compatibilityResult}
          </div>
        </motion.div>

      </div>
    </section>
  );
}