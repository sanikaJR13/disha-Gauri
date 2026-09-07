import React from 'react';
import { Heart, RotateCcw, ArrowUp } from 'lucide-react';

export default function Footer({ config, onReplayMystery }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const user1 = config?.user1 || 'GAURI';
  const user2 = config?.user2 || 'DISHA';

  return (
    <footer className="relative py-16 px-4 border-t border-stone-200/80 bg-[#faf7f2]/90 text-center text-stone-600 font-sans select-none">
      <div className="max-w-2xl mx-auto space-y-5">
        
        {/* Heart & Made with note */}
        <div className="flex items-center justify-center gap-2 font-journal text-lg text-stone-700">
          <span>Handcrafted with</span>
          <Heart className="w-4 h-4 fill-rose-400 text-rose-400 animate-pulse" />
          <span>friendship, college memories & endless comedy</span>
        </div>

        {/* Dedicated for Both Friends */}
        <div className="space-y-1">
          <div className="font-journal text-rose-600 text-base font-bold">SPECIALLY CRAFTED FOR</div>
          <h3 className="font-handwriting text-3xl sm:text-5xl font-black text-stone-900">
            {user1} & {user2} ✨
          </h3>
          <p className="font-handwriting text-xl sm:text-2xl font-bold text-rose-500">
            From Roommates to Teammates! ♡
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onReplayMystery}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-stone-50 border border-stone-300 font-journal text-base font-bold text-stone-700 hover:text-stone-900 transition active:scale-95 cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-4 h-4 text-rose-400" />
            <span>Replay Mystery Entry</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-stone-50 border border-stone-300 font-journal text-base font-bold text-stone-700 hover:text-stone-900 transition active:scale-95 cursor-pointer shadow-2xs"
          >
            <ArrowUp className="w-4 h-4 text-sky-400" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom copyright / quote */}
        <p className="font-journal text-stone-400 text-base pt-3">
          © Four years in the making. The greatest friendship plot twist ever told. ♡
        </p>

      </div>
    </footer>
  );
}