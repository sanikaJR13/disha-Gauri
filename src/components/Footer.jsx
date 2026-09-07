import React from 'react';
import { Heart, Sparkles, RotateCcw, ArrowUp, QrCode } from 'lucide-react';

export default function Footer({ config, onReplayScan }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-slate-800/80 bg-slate-950/80 text-center text-slate-400 font-sans backdrop-blur-md">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Heart & Made with note */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
          <span>friendship & a lot of excitement</span>
        </div>

        {/* Dedicated for Friend */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-400 tracking-wider">SPECIALLY CRAFTED FOR</div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
            {config.friendName} ✨
          </h3>
          <p className="text-sm font-semibold text-amber-300">
            CONGRATULATIONS ON YOUR PLACEMENT! 🎉
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onReplayScan}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-400 text-xs font-mono text-slate-200 hover:text-emerald-300 transition active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Replay QR Scan Experience</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-cyan-300 transition active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom subtle note */}
        <p className="text-[11px] font-mono text-slate-500 pt-4">
          © A very special day deserves a very special celebration. 🚀✨
        </p>

      </div>
    </footer>
  );
}
