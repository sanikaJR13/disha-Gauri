import React from 'react';
import { Volume2, VolumeX, RotateCcw, Sliders, Sparkles, QrCode } from 'lucide-react';

export default function Navbar({ 
  config, 
  isSoundOn, 
  toggleSound, 
  onReplayScan, 
  onOpenPersonalizer 
}) {
  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-3 sm:px-6 max-w-5xl mx-auto pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between p-2 sm:px-4 sm:py-2.5 rounded-full bg-slate-950/70 border border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        
        {/* Left: Brand / ID badge */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
            <QrCode className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-emerald-400/80 leading-none">STATUS: PLACED ✓</span>
            <span className="text-xs font-bold text-slate-100 tracking-wide">{config.friendName}</span>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isSoundOn ? "Mute Sound Effects" : "Enable Sound Effects"}
            aria-label="Toggle Sound"
            className="p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition active:scale-95"
          >
            {isSoundOn ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Replay Scan Intro */}
          <button
            onClick={onReplayScan}
            title="Replay QR Scanning Experience"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Re-Scan</span>
          </button>

          {/* Personalize Drawer Trigger */}
          <button
            onClick={onOpenPersonalizer}
            title="Customize Name, Messages & Role"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-500/30 transition active:scale-95"
          >
            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">Customize</span>
          </button>
        </div>
      </div>
    </header>
  );
}
