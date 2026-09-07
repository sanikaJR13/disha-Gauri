import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  BrainCircuit, 
  Laptop, 
  PartyPopper, 
  Rocket, 
  Sparkles,
  Milestone
} from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  BrainCircuit: BrainCircuit,
  Laptop: Laptop,
  PartyPopper: PartyPopper,
  Rocket: Rocket,
};

export default function JourneyTimeline({ config }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <Milestone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Execution Log & Milestones</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          THE JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 glow-text-cyan">SO FAR...</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-lg mx-auto">
          Every late-night study session, every challenge overcome, and every bold step leading straight to this celebration.
        </p>
      </div>

      {/* Connected Glowing Timeline */}
      <div className="relative">
        {/* Central glowing vertical beam (desktop) / Left vertical beam (mobile) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500/80 via-cyan-500/80 to-amber-500/80 shadow-[0_0_12px_#22c55e]" />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {config.journey.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Milestone;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center md:justify-between ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } pl-14 md:pl-0`}
              >
                {/* Center Node Icon on the vertical beam */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] z-10">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content Card (Half-width on desktop) */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl group hover:scale-[1.02]">
                    
                    {/* Top Tag & Period */}
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                        {item.period}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed">
                      "{item.description}"
                    </p>
                  </div>
                </div>

                {/* Empty opposite spacer on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* End Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center space-y-2 p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 max-w-2xl mx-auto backdrop-blur-md"
      >
        <div className="text-xs font-mono text-amber-400 tracking-widest uppercase">
          THE BEST PART?
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 glow-text-gold">
          HER STORY IS JUST GETTING STARTED. ✨
        </div>
      </motion.div>
    </section>
  );
}
