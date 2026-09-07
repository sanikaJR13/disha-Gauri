import React from 'react';
import { Volume2, VolumeX, RotateCcw, Sliders, QrCode } from 'lucide-react';

export default function TopPortalNav({
  config,
  isSoundOn,
  toggleSound,
  onReplayMystery,
  onOpenSettings
}) {
  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-3 sm:px-6 max-w-5xl mx-auto pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between p-2 sm:px-4 sm:py-2.5 rounded-full bg-white/85 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        
        {/* Left: Status & Dual User Badge */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
            <QrCode className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-emerald-700 font-bold leading-none flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              STATUS: PLACED ✓
            </span>
            <span className="text-xs font-extrabold text-slate-800 tracking-wider font-display">
              {config.user1} + {config.user2}
            </span>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isSoundOn ? "Mute Sound Effects" : "Enable Sound Effects"}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition active:scale-95 cursor-pointer"
          >
            {isSoundOn ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Re-Scan / Replay Mystery Page */}
          <button
            onClick={onReplayMystery}
            title="Replay Mystery Entry Page"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[11px] font-mono font-bold text-slate-700 border border-slate-200 transition active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
            <span className="hidden sm:inline">Re-Scan</span>
          </button>

          {/* Settings / Customize Drawer */}
          <button
            onClick={onOpenSettings}
            title="Customize Names & Roles"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-rose-500/10 border border-rose-300 text-[11px] font-bold text-rose-600 hover:bg-rose-100 transition active:scale-95 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-rose-500" />
            <span className="hidden xs:inline">Settings</span>
          </button>
        </div>

      </div>
    </header>
  );
}