import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Smile, 
  Users, 
  Rocket, 
  Sparkles, 
  Check, 
  Milestone,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Smile,
  Users,
  Rocket
};

export default function RoommateJourneyTimeline({ config, onEasterEgg }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1225] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Milestone className="w-3.5 h-3.5 text-cyan-400" />
          <span>FOUR-YEAR ROOMMATE ARCHIVE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          THE JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 glow-text-cyan">SO FAR...</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-sans max-w-lg mx-auto">
          From first-year room allocation to becoming corporate colleagues at the exact same company.
        </p>
      </div>

      {/* Timeline pathway */}
      <div className="relative">
        {/* Central glowing vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500/80 via-cyan-500/80 to-amber-500/80 shadow-[0_0_12px_#22c55e]" />

        <div className="space-y-12 md:space-y-16">
          {config.timeline.map((item, idx) => {
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
                {/* Center Node Icon on beam */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#0B1020] border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] z-10">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content Card (Half-width on desktop) */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1020]/90 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl group hover:scale-[1.02]">
                    
                    {/* Badge & Year */}
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded-full">
                        {item.year}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                      {item.headline}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      "{item.description}"
                    </p>

                    {/* Optional Features List (Year 2) */}
                    {item.features && (
                      <div className={`mt-3 space-y-1 text-xs text-slate-400 font-sans ${isEven ? 'text-left' : 'md:text-right'}`}>
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className={`flex items-center gap-1.5 ${isEven ? '' : 'md:justify-end'}`}>
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Placement Boss Level Drama (Final Year) */}
                    {item.stressKeywords && (
                      <div className="mt-4 p-3 rounded-2xl bg-[#0D1225] border border-slate-800 space-y-2">
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {item.stressKeywords.map((kw, kwIdx) => (
                            <span key={kwIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                              {kw}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {item.results.map((res, rIdx) => (
                            <div key={rIdx} className="p-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-center font-mono text-xs">
                              <span className="text-white font-bold">{res.name}: </span>
                              <span className="text-emerald-400 font-bold">{res.status}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-2 text-xs font-mono font-bold text-amber-300 text-center">
                          {item.plotTwistText}
                        </div>
                      </div>
                    )}

                    {/* System Log Footer */}
                    {item.systemLog && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 font-semibold">
                        ➜ {item.systemLog}
                      </div>
                    )}

                  </div>
                </div>

                {/* Empty opposite spacer on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}