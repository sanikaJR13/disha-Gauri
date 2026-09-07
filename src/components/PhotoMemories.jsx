import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ZoomIn, Pin } from 'lucide-react';

export default function PhotoMemories({ config }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = config?.photos || [];

  // Playful scrapbook sticky notes scattered between photos
  const scrapbookDoodles = [
    { text: "Rule #1: Midnight Maggie always tastes 10x better during exam week 🍜♡", bg: "bg-amber-100", border: "border-amber-200", rotate: "-rotate-3" },
    { text: "Plot Twist Rating: 10/10 Legendary 🌟", bg: "bg-pink-100", border: "border-pink-200", rotate: "rotate-2" },
    { text: "Corporate world is NOT ready for this roommate comedy 😂💼", bg: "bg-emerald-100", border: "border-emerald-200", rotate: "-rotate-2" }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto select-none">
      
      {/* Soft warm glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        
        {/* Doodle Tape Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/90 border border-pink-200 text-rose-700 font-journal text-lg tracking-wide uppercase mb-3 shadow-2xs">
          <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
          <span>COLLEGE HOSTEL TO SAME COMPANY CHRONICLES</span>
        </div>

        <h2 className="font-handwriting text-5xl sm:text-7xl font-black text-stone-900 leading-tight">
          Snapshots & Memories 📸
        </h2>
        
        <p className="mt-2 text-stone-600 text-sm sm:text-base font-sans max-w-lg mx-auto">
          Four years of shared rooms, chaotic study sessions, inside jokes, and now the exact same workplace.
        </p>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4 relative z-10">
        {photos.map((photo, idx) => {
          // Varied washi tape colors
          const tapeClasses = ['washi-tape-pink', 'washi-tape-yellow', 'washi-tape-mint', 'washi-tape-blue'];
          const tapeClass = tapeClasses[idx % tapeClasses.length];

          return (
            <motion.div
              key={photo.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              className={`polaroid-card cursor-pointer group ${photo.rotation || (idx % 2 === 0 ? '-rotate-1' : 'rotate-2')}`}
            >
              {/* Washi Tape on Top */}
              <div className={`w-16 h-4 ${tapeClass} -mt-5 mx-auto rounded-xs shadow-2xs rotate-[-1deg]`} />

              {/* Photo Image */}
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden bg-stone-100 mt-2.5 group">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle Hover Zoom Pill */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-2 rounded-full bg-white/95 text-stone-800 shadow-md backdrop-blur-xs flex items-center gap-1.5 px-3">
                    <ZoomIn className="w-4 h-4 text-rose-500" />
                    <span className="font-journal text-sm font-bold">Open</span>
                  </div>
                </div>
              </div>

              {/* Handwritten Title & Caption */}
              <div className="mt-4 text-center px-1">
                <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-stone-800 leading-tight">
                  {photo.title}
                </h3>
                <p className="font-sans text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Playful Scrapbook Sticky Notes Footer Collage */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        {scrapbookDoodles.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`p-4 sm:p-5 rounded-xl ${note.bg} border ${note.border} shadow-sm ${note.rotate} font-handwriting text-stone-800 font-bold text-xl sm:text-2xl leading-snug text-center relative`}
          >
            {/* Little Tape Strip on Sticky Note */}
            <div className="w-10 h-3.5 washi-tape-pink -mt-6 mx-auto rounded-2xs rotate-1" />
            <div className="mt-1">{note.text}</div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-stone-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-[#fffdfa] rounded-2xl overflow-hidden shadow-2xl border border-stone-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900/80 text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Image */}
              <div className="relative aspect-[4/3] bg-stone-100">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption & Title in Journal Style */}
              <div className="p-6 bg-[#fffdfa] text-stone-800">
                <div className="flex items-center gap-1.5 text-rose-500 font-journal text-lg mb-1">
                  <Heart className="w-4 h-4 fill-rose-400" />
                  <span>SPECIAL SCRAPBOOK MEMORY</span>
                </div>
                
                <h3 className="font-handwriting text-3xl font-bold text-stone-900">
                  {selectedPhoto.title}
                </h3>

                <p className="mt-2 text-sm text-stone-600 font-sans leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}