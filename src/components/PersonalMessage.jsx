import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Mail, Stamp } from 'lucide-react';

export default function PersonalMessage({ config }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-rose-500/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>HEARTFELT LETTER</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          💌 A MESSAGE FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-pink-400">{config.user1} & {config.user2}</span>
        </h2>
      </div>

      {/* Elegant Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0B1020]/95 via-[#0D1225]/95 to-[#0B1020]/95 border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.15)] backdrop-blur-2xl text-slate-200"
      >
        {/* Top Header Card */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-400 tracking-wider">ROOMMATE TO TEAMMATE CHRONICLE</div>
              <div className="text-base sm:text-lg font-bold font-display text-white">To: {config.user1} & {config.user2} ✨</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
            <Stamp className="w-3.5 h-3.5" />
            <span>UNBREAKABLE DUO</span>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-sans text-slate-200">
          {config.personalMessage.paragraphs.map((p, idx) => (
            <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {p}
            </p>
          ))}

          {/* Highlighted Quote Banner */}
          <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-rose-950/40 to-slate-900/80 border border-amber-500/40 text-center shadow-lg">
            <h3 className="text-xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold">
              {config.personalMessage.highlightQuote}
            </h3>
          </div>

          <p className="font-semibold text-slate-200 whitespace-pre-line">
            {config.personalMessage.closing}
          </p>
        </div>

        {/* Bottom Signoff */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between">
          <div className="text-base sm:text-lg font-bold font-display text-amber-300">
            {config.personalMessage.signoff}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AUTHENTICATED FRIENDSHIP LORE</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}