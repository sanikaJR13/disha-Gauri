import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Mail, Stamp } from 'lucide-react';

export default function PersonalMessage({ config }) {
  const user1 = config?.user1 || 'GAURI';
  const user2 = config?.user2 || 'DISHA';

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200/20 via-amber-200/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 font-journal text-lg tracking-wide uppercase mb-3 shadow-2xs">
          <Mail className="w-4 h-4 text-amber-600" />
          <span>A HEARTFELT SCRAPBOOK LETTER</span>
        </div>

        <h2 className="font-handwriting text-5xl sm:text-7xl font-black text-stone-900 leading-tight">
          Dear {user1} & {user2} 💌
        </h2>
      </div>

      {/* Lined Notebook Page Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-6 sm:p-12 rounded-2xl bg-lined-paper border border-stone-200/90 shadow-[0_15px_40px_rgba(51,47,46,0.08)] text-stone-700"
      >
        {/* Washi Tape at Corners */}
        <div className="absolute -top-3 -left-3 w-16 h-5 washi-tape-pink rounded-2xs -rotate-12 shadow-2xs pointer-events-none" />
        <div className="absolute -top-3 -right-3 w-16 h-5 washi-tape-yellow rounded-2xs rotate-12 shadow-2xs pointer-events-none" />

        {/* Notebook Top Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-stone-200/80 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-500 shadow-2xs">
              <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
            </div>
            <div>
              <div className="font-journal text-rose-600 text-base font-bold">ROOMMATE TO TEAMMATE CHRONICLE</div>
              <div className="font-handwriting text-2xl sm:text-3xl font-bold text-stone-900 leading-none mt-0.5">
                Special Delivery: {user1} & {user2} ✨
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-900 font-journal text-base font-bold rotate-2">
            <Stamp className="w-4 h-4 text-amber-600" />
            <span>LEGENDARY DUO</span>
          </div>
        </div>

        {/* Paragraphs with Notebook Line Spacing */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-sans text-stone-700">
          {config.personalMessage.paragraphs.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}

          {/* Highlighted Quote Banner in Pastel Scrapbook Style */}
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-amber-50/90 border-2 border-dashed border-amber-300 text-center shadow-2xs rotate-[-0.5deg]">
            <span className="font-journal text-amber-700 text-lg block mb-1">⭐️ IMPORTANT ROOMMATE RULE ⭐️</span>
            <h3 className="font-handwriting text-3xl sm:text-5xl font-black text-rose-600 leading-tight">
              "{config.personalMessage.highlightQuote}"
            </h3>
          </div>

          <p className="font-bold text-stone-900 whitespace-pre-line text-lg leading-relaxed">
            {config.personalMessage.closing}
          </p>
        </div>

        {/* Bottom Signoff */}
        <div className="mt-10 pt-6 border-t-2 border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-handwriting text-2xl sm:text-3xl font-black text-rose-600">
            {config.personalMessage.signoff}
          </div>

          <div className="flex items-center gap-1.5 font-journal text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-3.5 py-1 rounded-full text-base font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>AUTHENTICATED FRIENDSHIP LORE ♡</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}