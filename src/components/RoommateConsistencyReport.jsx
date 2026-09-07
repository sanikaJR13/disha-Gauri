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
  ShieldCheck, 
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
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1225] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          <span>ANALYSING DATA FROM: FIRST YEAR → FINAL YEAR</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          ROOMMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 glow-text-cyan">CONSISTENCY REPORT</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-lg mx-auto">
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
                  ? 'bg-gradient-to-br from-[#0B1020] via-emerald-950/40 to-[#0B1020] border-emerald-400/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]'
                  : 'bg-[#0B1020]/90 hover:bg-[#0D1225] border-slate-800 hover:border-slate-700 shadow-lg'
              }`}
            >
              {/* Corner Tech Brackets */}
              <div className="corner-bracket-tl !w-3 !h-3 !border-emerald-500/40" />
              <div className="corner-bracket-br !w-3 !h-3 !border-emerald-500/40" />

              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-[#0D1225] border border-slate-800 text-emerald-400 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  METRIC_0{idx + 1}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-200 font-display">
                  {item.title}
                </h3>

                <div className="mt-2.5">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                    item.color === 'amber'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : item.color === 'cyan'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : item.color === 'rose'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : item.color === 'gold'
                      ? 'bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-amber-300 border border-amber-400/50'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {item.status.includes('✓') && <Check className="w-3 h-3 stroke-[3]" />}
                    <span>{item.status}</span>
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400 font-sans leading-normal">
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
        className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B1020] via-[#0D1225] to-[#0B1020] border border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)] text-center relative overflow-hidden backdrop-blur-xl"
      >
        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-600/40 px-3.5 py-1 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>FINAL SYSTEM VERDICT</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-1">
            ROOMMATE CONSISTENCY: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-pink-400 glow-text-gold">LEGENDARY 🏆</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-lg mt-1">
            0% Roommate disputes recorded. 100% Shared memories & comedy unlocked.
          </p>
        </div>
      </motion.div>

    </section>
  );
}