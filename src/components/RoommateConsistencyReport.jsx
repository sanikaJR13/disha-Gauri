import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Laugh, 
  Heart, 
  BookOpen, 
  Utensils, 
  MessageSquare, 
  Sparkles, 
  Briefcase, 
  Check, 
  Trophy,
  Activity
} from 'lucide-react';

const iconMap = {
  Home,
  Laugh,
  Heart,
  BookOpen,
  Utensils,
  MessageSquare,
  Sparkles,
  Briefcase
};

export default function RoommateConsistencyReport({ config, onEasterEgg }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="consistency-section" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Ambience */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Activity className="w-3.5 h-3.5 text-orange-500 animate-spin" />
          <span>ANALYSING DATA FROM: FIRST YEAR → FINAL YEAR</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
          ROOMMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600">CONSISTENCY REPORT</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans max-w-lg mx-auto">
          Deep diagnostic of four years of shared room dynamics, late-night laughs, and mutual survival tactics.
        </p>
      </div>

      {/* Report Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {config.consistencyReport.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Sparkles;
          const isHighlight = item.id === 'company' || item.id === 'room';

          return (
            <motion.div
              key={item.id || idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => onEasterEgg && onEasterEgg(item.title)}
              className={`relative p-5 rounded-2xl border transition-all duration-300 backdrop-blur-xl cursor-pointer ${
                isHighlight
                  ? 'bg-gradient-to-br from-amber-50/90 via-white to-rose-50/90 border-amber-300 shadow-md'
                  : 'bg-white/90 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-orange-600 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold">
                  METRIC_0{idx + 1}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 font-display">
                  {item.title}
                </h3>

                <div className="mt-2.5">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold ${
                    item.color === 'amber'
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : item.color === 'cyan'
                      ? 'bg-sky-100 text-sky-800 border border-sky-300'
                      : item.color === 'rose'
                      ? 'bg-rose-100 text-rose-800 border border-rose-300'
                      : item.color === 'gold'
                      ? 'bg-gradient-to-r from-amber-100 to-rose-100 text-amber-900 border border-amber-300'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    {item.status.includes('✓') && <Check className="w-3 h-3 stroke-[3]" />}
                    <span>{item.status}</span>
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500 font-sans leading-normal">
                  {item.note}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Final Verdict Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-rose-50 border border-amber-300 shadow-lg text-center relative overflow-hidden backdrop-blur-xl"
      >
        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full font-bold">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>FINAL SYSTEM VERDICT</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mt-1">
            ROOMMATE CONSISTENCY: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600">LEGENDARY 🏆</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-lg mt-1 font-medium">
            0% Roommate disputes recorded. 100% Shared memories & comedy unlocked.
          </p>
        </div>
      </motion.div>

    </section>
  );
}