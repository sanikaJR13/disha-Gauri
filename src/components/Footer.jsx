import React from 'react';
import { Heart, RotateCcw, ArrowUp } from 'lucide-react';

export default function Footer({ config, onReplayMystery }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-slate-200 bg-white/80 text-center text-slate-500 font-sans backdrop-blur-md">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Heart & Made with note */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-slate-600 font-medium">
          <span>Made with</span>
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
          <span>friendship, memories & endless comedy</span>
        </div>

        {/* Dedicated for Both Friends */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-700 font-bold tracking-wider">SPECIALLY CRAFTED FOR</div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
            {config.user1} & {config.user2} ✨
          </h3>
          <p className="text-sm font-bold text-orange-600 font-display">
            FROM ROOMMATES TO TEAMMATES. ❤️💼
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onReplayMystery}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 transition active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
            <span>Replay Mystery Entry</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 transition active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-sky-500" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom copyright / quote */}
        <p className="text-[11px] font-mono text-slate-400 pt-4">
          © A very special day deserves a very special celebration. 🚀✨
        </p>

      </div>
    </footer>
  );
}