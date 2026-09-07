import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Laugh } from 'lucide-react';

export default function EasterEggToast({ message, onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-[#0D1225]/95 border border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.4)] text-amber-300 text-xs sm:text-sm font-mono font-bold flex items-center gap-2.5 backdrop-blur-xl"
      >
        <Laugh className="w-4 h-4 text-amber-400 animate-bounce" />
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}