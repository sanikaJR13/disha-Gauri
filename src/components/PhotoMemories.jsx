import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ZoomIn } from 'lucide-react';

export default function PhotoMemories({ config }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = config.photos || [];

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Soft warm glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>ROOMMATE MEMORIES ARCHIVE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
          FROM DAY ONE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600">TO PLACEMENT DAY 📸</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans max-w-lg mx-auto">
          A few snapshots of friendship, late-night laughs, and four years of shared roommate memories.
        </p>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4 relative z-10">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id || idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
            className={`polaroid-card rounded-2xl cursor-pointer ${photo.rotation || ''}`}
          >
            {/* Washi Tape / Pin Decor on Top */}
            <div className="w-12 h-3.5 bg-amber-200/80 -mt-5 mx-auto rounded-sm border border-amber-300 shadow-2xs transform -rotate-2" />

            {/* Photo Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mt-2.5 group">
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <div className="p-2.5 rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-md">
                  <ZoomIn className="w-5 h-5 text-rose-500" />
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center px-1">
              <h3 className="font-handwriting text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                {photo.title}
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Image */}
              <div className="relative aspect-[4/3] bg-slate-100">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption & Title */}
              <div className="p-6 bg-white text-slate-800">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-600 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPECIAL MEMORY</span>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  {selectedPhoto.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 font-sans leading-relaxed">
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