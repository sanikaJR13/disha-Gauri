import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send, Stamp, Mail } from 'lucide-react';

export default function PersonalLetter({ config }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-amber-500/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <Mail className="w-3.5 h-3.5 text-rose-400" />
          <span>Personal Decrypted Transmission</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          💌 A LITTLE MESSAGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">FOR YOU...</span>
        </h2>
      </div>

      {/* Warm Elegant Letter Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-900/95 border border-rose-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(244,63,94,0.15)] backdrop-blur-2xl text-slate-200"
      >
        {/* Top Letter Header & Wax Seal / Stamp */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              <Heart className="w-5 h-5 fill-rose-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-rose-400/90 tracking-wider">CONFIDENTIAL & HEARTFELT</div>
              <div className="text-base sm:text-lg font-bold font-display text-white">To: {config.friendName} ✨</div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              <Stamp className="w-3.5 h-3.5" />
              <span>CERTIFIED PROUD</span>
            </div>
          </div>
        </div>

        {/* Letter Body */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-sans text-slate-200">
          <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100 font-display">
            {config.letter.greeting || `Dear ${config.friendName},`}
          </div>

          {config.letter.paragraphs.map((p, idx) => (
            <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {p}
            </p>
          ))}

          {/* Highlighted Banner Inside Letter */}
          <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-purple-950/40 to-slate-900/80 border border-rose-500/40 text-center shadow-lg">
            <h3 className="text-xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold">
              {config.letter.highlight}
            </h3>
          </div>

          <p className="font-medium text-slate-200">
            {config.letter.signoff}
          </p>
        </div>

        {/* Signature & Signoff */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-slate-400">
              {config.letter.footerSign}
            </div>
            <div className="text-2xl sm:text-3xl font-handwriting font-bold text-amber-300 tracking-wide mt-1">
              {config.yourName} ❤️
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AUTHENTICATED FRIENDSHIP TOKEN</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
