import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Mail, Stamp } from 'lucide-react';

export default function PersonalMessage({ config }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/20 via-rose-200/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Mail className="w-3.5 h-3.5 text-amber-600" />
          <span>HEARTFELT LETTER</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
          💌 A MESSAGE FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600">{config.user1} & {config.user2}</span>
        </h2>
      </div>

      {/* Elegant Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-6 sm:p-12 rounded-3xl bg-white/95 border border-amber-300 shadow-xl backdrop-blur-2xl text-slate-700"
      >
        {/* Top Header Card */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-500 shadow-xs">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-700 font-bold tracking-wider">ROOMMATE TO TEAMMATE CHRONICLE</div>
              <div className="text-base sm:text-lg font-bold font-display text-slate-900">To: {config.user1} & {config.user2} ✨</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono font-bold">
            <Stamp className="w-3.5 h-3.5 text-amber-600" />
            <span>UNBREAKABLE DUO</span>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-sans text-slate-600">
          {config.personalMessage.paragraphs.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}

          {/* Highlighted Quote Banner */}
          <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 border border-amber-300 text-center shadow-sm">
            <h3 className="text-xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600">
              {config.personalMessage.highlightQuote}
            </h3>
          </div>

          <p className="font-semibold text-slate-800 whitespace-pre-line">
            {config.personalMessage.closing}
          </p>
        </div>

        {/* Bottom Signoff */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="text-base sm:text-lg font-bold font-display text-amber-800">
            {config.personalMessage.signoff}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>AUTHENTICATED FRIENDSHIP LORE</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}