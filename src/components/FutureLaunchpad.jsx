import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Brain, Globe, Compass, Trophy, Rocket, Sparkles, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Briefcase: Briefcase,
  Brain: Brain,
  Globe: Globe,
  Compass: Compass,
  Trophy: Trophy,
  Rocket: Rocket,
};

export default function FutureLaunchpad({ config }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden text-center">
      {/* Background Cosmic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-t from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <Rocket className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Trajectory Analysis</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          WHAT'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 glow-text-cyan">NEXT? 👀</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-md mx-auto">
          Here is a quick forecast of what lies ahead in your stellar upcoming journey:
        </p>
      </div>

      {/* Possibilities Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {config.futureSteps.map((step, idx) => {
          const IconComponent = iconMap[step.icon] || Rocket;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-400/50 transition-all duration-300 shadow-xl flex flex-col items-center text-center group backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:text-amber-300 transition-transform">
                <IconComponent className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono text-slate-500 mb-1">
                STEP 0{idx + 1}
              </span>

              <h3 className="text-sm font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>

              <p className="mt-1.5 text-xs text-slate-400 font-sans">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Grand Launchpad Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden backdrop-blur-2xl"
      >
        {/* Animated Rocket Ascending Visual */}
        <motion.div
          animate={{
            y: [0, -16, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.6)] mb-6"
        >
          <Rocket className="w-10 h-10" />
        </motion.div>

        <h3 className="text-lg sm:text-2xl font-mono text-slate-300 tracking-wider">
          THIS PLACEMENT IS NOT THE DESTINATION.
        </h3>

        <h4 className="mt-2 text-3xl sm:text-6xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold">
          IT'S THE LAUNCHPAD. 🚀
        </h4>

        <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto">
          The horizon is wide open. New technologies, leadership roles, and unforgettable adventures are ready for you.
        </p>
      </motion.div>
    </section>
  );
}
