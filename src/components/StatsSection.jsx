import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Coffee, 
  Flame, 
  Award, 
  PartyPopper, 
  Rocket, 
  Heart,
  Cpu,
  Check
} from 'lucide-react';

const iconMap = {
  CheckCircle2: CheckCircle2,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Coffee: Coffee,
  Flame: Flame,
  Award: Award,
  PartyPopper: PartyPopper,
  Rocket: Rocket,
};

export default function StatsSection({ config }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="stats-section" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background Decor */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>Biometric & Milestone Telemetry</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 glow-text-green">SCAN RESULT</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono max-w-md mx-auto">
          Deep diagnostic completed. All professional parameters verified against world-class benchmarks.
        </p>
      </div>

      {/* Scan Results Grid / Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {config.stats.map((stat, idx) => {
          const IconComponent = iconMap[stat.icon] || CheckCircle2;
          const isHighlight = stat.label === "Placement" || stat.label === "Future Potential";
          
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`relative p-5 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                isHighlight 
                  ? 'bg-gradient-to-br from-slate-900/90 via-emerald-950/40 to-slate-900/90 border-emerald-400/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]'
                  : 'bg-slate-950/70 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700 shadow-lg'
              }`}
            >
              {/* Corner Tech Brackets */}
              <div className="corner-bracket-tl !w-3 !h-3 !border-emerald-500/40" />
              <div className="corner-bracket-br !w-3 !h-3 !border-emerald-500/40" />

              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-emerald-400 shadow-inner">
                  <IconComponent className="w-5 h-5 text-emerald-400" />
                </div>
                
                <span className="text-[10px] font-mono text-slate-500">
                  REF_0{idx + 1}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-300 font-sans">
                  {stat.label}
                </h3>
                
                <div className="mt-2 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                    stat.color === 'amber' 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                      : stat.color === 'cyan'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  }`}>
                    {stat.status.includes('VERIFIED') && <Check className="w-3 h-3 stroke-[3]" />}
                    <span>{stat.status}</span>
                  </span>
                  
                  <span className="text-emerald-400 text-xs font-mono font-semibold">
                    100%
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Summary Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900/90 to-teal-950/60 border border-emerald-500/40 shadow-[0_0_40px_rgba(34,197,94,0.15)] text-center relative overflow-hidden backdrop-blur-xl"
      >
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl" />
        
        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-900/40 border border-emerald-600/40 px-3 py-1 rounded-full">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>FINAL SYSTEM VERDICT</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold font-display text-white tracking-tight mt-1">
            RESULT: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-200 to-emerald-300 glow-text-gold">EXTRAORDINARY HUMAN DETECTED</span> ❤️
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-lg mt-1">
            Unmatched problem-solving capabilities, incredible perseverance, and infectious positive energy confirmed.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
