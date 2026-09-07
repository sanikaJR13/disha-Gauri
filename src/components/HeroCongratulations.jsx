import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  ChevronDown, 
  Upload, 
  Camera,
  Trash2,
  ArrowRight,
  Image as ImageIcon
} from 'lucide-react';

export default function HeroCongratulations({ config, onReplayMystery }) {
  // Read saved uploaded photo from localStorage or config
  const [customPhoto, setCustomPhoto] = useState(() => {
    try {
      return localStorage.getItem('gauri_disha_hero_photo') || null;
    } catch {
      return null;
    }
  });

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Active photo: uploaded > config.heroPhoto > blank
  const activePhoto = customPhoto || config?.heroPhoto || '';

  const handleScrollNext = () => {
    const el = document.getElementById('photos-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result;
        if (dataUrl) {
          setCustomPhoto(dataUrl);
          try {
            localStorage.setItem('gauri_disha_hero_photo', dataUrl);
          } catch (e) {
            console.warn('Could not save photo to localStorage', e);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleRemovePhoto = (e) => {
    e.stopPropagation();
    setCustomPhoto(null);
    try {
      localStorage.removeItem('gauri_disha_hero_photo');
    } catch (e) {
      console.warn('Could not remove photo from localStorage', e);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const user1 = config?.user1 || 'GAURI';
  const user2 = config?.user2 || 'DISHA';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-8 pb-12 px-4 bg-cyber-grid text-slate-800 select-none overflow-hidden">
      
      {/* ========================================================================= */}
      {/* AMBIENT BACKGROUND GLOWS & DOODLE PARTICLES */}
      {/* ========================================================================= */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />

      {/* Doodle Dot Clusters on left & right sides (as in 2nd image) */}
      <div className="absolute top-1/3 left-4 sm:left-12 opacity-30 pointer-events-none flex flex-wrap w-16 gap-1.5">
        {[...Array(16)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block" />
        ))}
      </div>
      <div className="absolute top-2/3 right-4 sm:right-12 opacity-30 pointer-events-none flex flex-wrap w-16 gap-1.5">
        {[...Array(16)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block" />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* TOP BAR: HOME BUTTON & TOP CORNER HANDWRITTEN DOODLE NOTES */}
      {/* ========================================================================= */}
      <div className="w-full max-w-6xl flex items-start justify-between relative z-20">
        
        {/* Top Left: Home Icon Button & Handwritten Note */}
        <div className="flex flex-col items-start gap-2">
          {onReplayMystery ? (
            <button
              onClick={onReplayMystery}
              title="Return to Entry Mystery"
              className="p-2.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 text-slate-700 transition cursor-pointer"
            >
              <Home className="w-5 h-5 stroke-[2.2]" />
            </button>
          ) : (
            <div className="p-2.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs text-slate-700">
              <Home className="w-5 h-5 stroke-[2.2]" />
            </div>
          )}

          {/* Top Left Note */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden sm:block font-handwriting text-slate-700 font-bold text-xl leading-snug rotate-[-3deg] select-none mt-2"
          >
            <div>Same Room</div>
            <div>Same Chaos</div>
            <div className="flex items-center gap-1">
              <span>Same Company</span>
              <span className="text-rose-400 text-lg">♡</span>
            </div>
          </motion.div>
        </div>

        {/* Top Right: Handwritten Note */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:block text-right font-handwriting text-slate-700 font-bold text-xl leading-snug rotate-[3deg] select-none"
        >
          <div>Roommates</div>
          <div>for Life</div>
          <div className="text-slate-600 text-lg">( now also</div>
          <div className="text-slate-600 text-lg">Colleagues! )</div>
          <div className="text-rose-400 text-xl font-bold">♡</div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-2xl w-full mx-auto flex flex-col items-center text-center mt-2 sm:mt-0">
        
        {/* 1. PLOT TWIST UNLOCKED Tag with Doodled Rays */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          {/* Left rays */}
          <svg className="w-5 h-4 text-slate-400 stroke-current" viewBox="0 0 24 16" fill="none" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="2" x2="6" y2="12" />
            <line x1="20" y1="6" x2="16" y2="14" />
          </svg>

          <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-600 font-extrabold uppercase">
            {config?.hero?.badge || "PLOT TWIST UNLOCKED"}
          </span>

          {/* Right rays */}
          <svg className="w-5 h-4 text-slate-400 stroke-current" viewBox="0 0 24 16" fill="none" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="2" x2="18" y2="12" />
            <line x1="4" y1="6" x2="8" y2="14" />
          </svg>
        </motion.div>

        {/* 2. Large Script "Congratulations" with Pink Brush Stroke & Doodled Hearts */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative inline-block mb-2"
        >
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-handwriting text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-normal select-none">
              Congratulations
            </h1>

            {/* Pink Doodled Hearts */}
            <div className="flex flex-col items-center -mt-4">
              <span className="text-pink-400 font-handwriting text-3xl sm:text-4xl font-black rotate-12 leading-none">♡</span>
              <span className="text-pink-400 font-handwriting text-2xl sm:text-3xl font-black -rotate-12 -mt-1 leading-none">♡</span>
            </div>
          </div>

          {/* Pink Highlighter / Brush Stroke underneath */}
          <div className="w-11/12 h-2 sm:h-2.5 bg-pink-300/80 rounded-full mx-auto -mt-3 sm:-mt-4 shadow-xs" />
        </motion.div>

        {/* 3. Duo Names: GAURI & DISHA with Burst Rays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 sm:gap-4 my-2"
        >
          {/* Left Yellow Burst Rays */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 stroke-current shrink-0" viewBox="0 0 32 32" fill="none" strokeWidth="3" strokeLinecap="round">
            <line x1="28" y1="16" x2="12" y2="16" />
            <line x1="25" y1="6" x2="14" y2="10" />
            <line x1="25" y1="26" x2="14" y2="22" />
          </svg>

          <div className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 uppercase">
              {user1}
            </span>
            <span className="text-slate-400 font-light mx-2 sm:mx-3 text-2xl sm:text-4xl">&</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600 uppercase">
              {user2}
            </span>
          </div>

          {/* Right Yellow Burst Rays */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 stroke-current shrink-0" viewBox="0 0 32 32" fill="none" strokeWidth="3" strokeLinecap="round">
            <line x1="4" y1="16" x2="20" y2="16" />
            <line x1="7" y1="6" x2="18" y2="10" />
            <line x1="7" y1="26" x2="18" y2="22" />
          </svg>
        </motion.div>

        {/* 4. Subtitle Narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xs sm:text-base text-slate-600 font-sans max-w-lg mx-auto leading-relaxed mt-1"
        >
          From sharing a college room in the first year<br />
          to starting a new chapter in the same company...
        </motion.p>

        {/* 5. "YOU BOTH DID IT! ♡" Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100/90 border border-pink-200 text-rose-700 font-mono font-bold text-xs sm:text-sm shadow-xs">
            <span>YOU BOTH DID IT!</span>
            <span className="text-pink-500 font-handwriting text-base">♡</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 6. CENTERPIECE POLAROID PHOTO FRAME WITH STICKY NOTES & ARROWS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative my-4 w-full max-w-[340px] sm:max-w-[420px]"
        >
          {/* Washi Tape at Top */}
          <div className="w-24 h-6 bg-pink-300/80 rounded-xs border-y border-pink-400/40 -mb-3 mx-auto shadow-xs rotate-[-1deg] relative z-30 pointer-events-none" />

          {/* LEFT STICKY NOTE: "First Roommates ... ♡" */}
          <div className="absolute -left-6 sm:-left-20 top-8 sm:top-12 z-20 -rotate-6 transition-transform hover:scale-105">
            <div className="bg-pink-100/95 border border-pink-200/90 rounded-sm shadow-md p-3 sm:p-4 text-center font-handwriting text-slate-800 font-bold text-base sm:text-lg leading-tight w-24 sm:w-28">
              <div>First</div>
              <div>Roommates</div>
              <div className="text-pink-400 font-black text-sm">... ♡</div>
            </div>

            {/* Dotted curved arrow pointing toward bottom of photo */}
            <div className="absolute -bottom-8 right-2 sm:right-0 w-12 h-10 pointer-events-none">
              <svg viewBox="0 0 50 40" fill="none" className="w-full h-full text-slate-700 stroke-current">
                <path d="M 10 5 Q 30 15 35 32" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                <path d="M 28 28 L 35 34 L 38 26" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* RIGHT STICKY NOTE: "... Now Teammates ♡" */}
          <div className="absolute -right-6 sm:-right-20 top-20 sm:top-24 z-20 rotate-6 transition-transform hover:scale-105">
            {/* Dotted curved arrow pointing down toward sticky note */}
            <div className="absolute -top-7 -left-5 w-12 h-8 pointer-events-none">
              <svg viewBox="0 0 50 35" fill="none" className="w-full h-full text-slate-700 stroke-current">
                <path d="M 40 5 Q 20 5 10 24" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                <path d="M 6 16 L 9 26 L 18 22" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <div className="bg-emerald-100/95 border border-emerald-200/90 rounded-sm shadow-md p-3 sm:p-4 text-center font-handwriting text-slate-800 font-bold text-base sm:text-lg leading-tight w-24 sm:w-28">
              <div className="text-slate-600 text-sm">... Now</div>
              <div>Teammates</div>
              <div className="text-rose-400 font-black text-base">♡</div>
            </div>
          </div>

          {/* POLAROID WHITE FRAME */}
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative bg-white p-3.5 sm:p-4 pb-8 sm:pb-10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.12)] border transition-all duration-300 ${
              isDragging 
                ? 'border-pink-500 scale-105 rotate-0 shadow-[0_25px_60px_rgba(244,63,94,0.3)]' 
                : 'border-slate-200/80 -rotate-1 hover:rotate-0'
            }`}
          >
            
            {/* PHOTO AREA (INTERACTIVE DRAG & DROP / UPLOAD / BLANK PLACEHOLDER) */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-xs overflow-hidden bg-slate-100/90 border border-slate-200/60 flex flex-col items-center justify-center text-center group">
              {activePhoto ? (
                <>
                  <img
                    src={activePhoto}
                    alt={`${user1} and ${user2}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Actions Toolbar */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold font-mono text-xs flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
                    >
                      <Camera className="w-4 h-4 text-orange-500" />
                      <span>Change Photo</span>
                    </button>

                    <button
                      onClick={handleRemovePhoto}
                      className="px-4 py-1.5 rounded-xl bg-rose-600/90 hover:bg-rose-600 text-white font-bold font-mono text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Photo</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Blank Photo Placeholder with Click & Drag-Drop */
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full h-full flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xs transition-colors cursor-pointer ${
                    isDragging 
                      ? 'border-pink-500 bg-pink-50/80' 
                      : 'border-slate-300 bg-slate-50/70 hover:bg-slate-100/90'
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-rose-500 mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  
                  <div className="font-handwriting text-2xl font-bold text-slate-700">
                    {isDragging ? 'Drop Photo Here!' : 'Click to Upload Photo'}
                  </div>
                  
                  <p className="text-[11px] font-sans text-slate-400 mt-1 max-w-[200px] leading-tight">
                    Choose any photo from your computer or drag & drop it here
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 font-mono text-xs font-bold shadow-2xs group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select Photo</span>
                  </div>
                </div>
              )}

              {/* Hidden File Input for instant local image upload */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 7. MILESTONE STEPPER ICONS WITH DASHED CONNECTORS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 mb-8 w-full max-w-lg px-2"
        >
          <div className="flex items-center justify-between text-center">
            
            {/* Step 1: Same Room */}
            <div className="flex flex-col items-center gap-1 min-w-[65px]">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700">
                <Home className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-600 leading-tight">
                Same<br />Room
              </span>
            </div>

            {/* Dotted Connector 1 */}
            <div className="flex-1 mx-1 border-t-2 border-dashed border-slate-300 -mt-4" />

            {/* Step 2: Same Friendship */}
            <div className="flex flex-col items-center gap-1 min-w-[65px]">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-rose-500">
                <Heart className="w-5 h-5 stroke-[2] fill-rose-50" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-600 leading-tight">
                Same<br />Friendship
              </span>
            </div>

            {/* Dotted Connector 2 */}
            <div className="flex-1 mx-1 border-t-2 border-dashed border-slate-300 -mt-4" />

            {/* Step 3: Same Dreams */}
            <div className="flex flex-col items-center gap-1 min-w-[65px]">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-indigo-500">
                <GraduationCap className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-600 leading-tight">
                Same<br />Dreams
              </span>
            </div>

            {/* Dotted Connector 3 */}
            <div className="flex-1 mx-1 border-t-2 border-dashed border-slate-300 -mt-4" />

            {/* Step 4: Same Company! */}
            <div className="flex flex-col items-center gap-1 min-w-[65px] relative">
              {/* Sparkles above briefcase */}
              <div className="absolute -top-3 flex items-center gap-0.5 text-amber-500">
                <span className="text-[10px] leading-none">\</span>
                <span className="text-[10px] leading-none">|</span>
                <span className="text-[10px] leading-none">/</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600">
                <Briefcase className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 leading-tight">
                Same<br />Company!
              </span>
            </div>

          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 8. CTA BUTTON: "Let's Celebrate! →" */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="my-2"
        >
          <button
            onClick={handleScrollNext}
            className="group px-9 py-3.5 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 text-white font-display font-bold text-base sm:text-lg shadow-[0_12px_28px_rgba(244,63,94,0.35)] hover:shadow-[0_18px_38px_rgba(244,63,94,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Let's Celebrate!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* 9. BOTTOM CORNER PASTEL BLOBS & SCROLL INDICATOR */}
      {/* ========================================================================= */}
      <div className="w-full max-w-6xl flex items-end justify-between relative z-10 mt-8">
        
        {/* Bottom Left: Pastel Pink Organic Blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative p-6 sm:p-8 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-pink-100/80 border border-pink-200/60 shadow-xs font-handwriting text-slate-700 font-bold text-lg sm:text-2xl leading-snug rotate-[-4deg] max-w-[150px] sm:max-w-[200px]"
        >
          <div>Grateful</div>
          <div>for this</div>
          <div className="flex items-center gap-1">
            <span>journey</span>
            <span className="text-rose-400">♡</span>
          </div>
        </motion.div>

        {/* Center: Scroll Down Indicator */}
        <div 
          onClick={handleScrollNext}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer mb-2"
        >
          <div className="w-px h-6 bg-slate-300" />
          <div className="flex flex-col items-center -space-y-2">
            <ChevronDown className="w-4 h-4 text-slate-400" />
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400 mt-1">
            SCROLL FOR MORE
          </span>
        </div>

        {/* Bottom Right: Pastel Sky Blue Organic Blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative p-6 sm:p-8 rounded-[60%_40%_30%_70%/50%_60%_40%_55%] bg-sky-100/80 border border-sky-200/60 shadow-xs font-handwriting text-slate-700 font-bold text-lg sm:text-2xl leading-snug rotate-[4deg] max-w-[150px] sm:max-w-[210px] text-right"
        >
          <div>On to</div>
          <div>bigger adventures!</div>
          <div className="flex items-center justify-end gap-1.5 text-xl">
            <span>😊</span>
            <span className="text-sky-500">♡</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}