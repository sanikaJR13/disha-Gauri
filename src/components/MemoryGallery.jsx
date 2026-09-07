import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Heart, Sparkles, ZoomIn } from 'lucide-react';

export default function MemoryGallery({ config }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Ambience glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          <span>Scrapbook & Nostalgia Vault</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          SOME MEMORIES <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">BEFORE THE NEXT BIG CHAPTER ❤️</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-lg mx-auto">
          Snapshots of laughter, late-night cram sessions, and unforgettable memories made together.
        </p>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
        {config.memories.map((photo, idx) => (
          <motion.div
            key={photo.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
            className={`polaroid-card rounded-2xl cursor-pointer ${photo.rotation || ''}`}
          >
            {/* Tape / Pin Decor on Top */}
            <div className="w-12 h-4 bg-amber-100/70 -mt-5 mx-auto rounded-sm border border-amber-300/40 shadow-sm transform -rotate-2" />

            {/* Photo Container */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 mt-2 group">
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <div className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md">
                  <ZoomIn className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Polaroid Bottom Caption */}
            <div className="mt-4 text-center px-2">
              <h3 className="font-handwriting text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                {photo.title}
              </h3>
              <p className="font-sans text-xs text-slate-600 mt-1 line-clamp-2">
                {photo.caption}
              </p>
            </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Enlarged Photo */}
              <div className="relative aspect-[16/10] bg-slate-900">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo Details */}
              <div className="p-6 sm:p-8 bg-slate-950 text-white">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPECIAL MEMORY LOG</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-amber-200">
                  {selectedPhoto.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
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
