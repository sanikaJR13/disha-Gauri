import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { defaultPersonalization } from './config/personalization';
import { toggleAudio, isAudioEnabled } from './utils/audio';

// Components
import PageOneEntry from './components/PageOneEntry';
import TopPortalNav from './components/TopPortalNav';
import HeroCongratulations from './components/HeroCongratulations';
import RoommateConsistencyReport from './components/RoommateConsistencyReport';
import RoommateJourneyTimeline from './components/RoommateJourneyTimeline';
import PlotTwistMeter from './components/PlotTwistMeter';
import CompatibilityScore from './components/CompatibilityScore';
import AchievementsUnlocked from './components/AchievementsUnlocked';
import PersonalMessage from './components/PersonalMessage';
import FinalSurprise from './components/FinalSurprise';
import Footer from './components/Footer';
import EasterEggToast from './components/EasterEggToast';
import PersonalizeModal from './components/PersonalizeModal';

export default function App() {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('gauri_disha_portal_config');
      if (saved) {
        return { ...defaultPersonalization, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not read saved config', e);
    }
    return defaultPersonalization;
  });

  const [currentPage, setCurrentPage] = useState('entry'); // 'entry' (Page 1) or 'celebration' (Page 2)
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeEasterEgg, setActiveEasterEgg] = useState(null);

  const handleToggleSound = () => {
    const next = toggleAudio();
    setIsSoundOn(next);
  };

  const handleEnterCelebration = () => {
    setCurrentPage('celebration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayMystery = () => {
    setCurrentPage('entry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerEasterEgg = (context = "") => {
    const list = config.easterEggs || defaultPersonalization.easterEggs;
    const randomEgg = list[Math.floor(Math.random() * list.length)];
    setActiveEasterEgg(randomEgg);
    setTimeout(() => {
      setActiveEasterEgg((curr) => (curr === randomEgg ? null : curr));
    }, 3500);
  };

  const handleSaveConfig = (updatedData) => {
    const merged = { ...config, ...updatedData };
    setConfig(merged);
    try {
      localStorage.setItem('gauri_disha_portal_config', JSON.stringify(merged));
    } catch (e) {
      console.warn('Could not save config', e);
    }
  };

  const handleResetDefault = () => {
    setConfig(defaultPersonalization);
    try {
      localStorage.removeItem('gauri_disha_portal_config');
    } catch (e) {
      console.warn('Could not reset config', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#060810] text-slate-100 font-sans selection:bg-amber-400 selection:text-black relative">
      
      {/* PAGE 1: MYSTERY ENTRY PAGE */}
      {currentPage === 'entry' && (
        <PageOneEntry
          config={config}
          onEnterCelebration={handleEnterCelebration}
        />
      )}

      {/* PAGE 2: MAIN CELEBRATION EXPERIENCE */}
      {currentPage === 'celebration' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Slim Top Navigation */}
          <TopPortalNav
            config={config}
            isSoundOn={isSoundOn}
            toggleSound={handleToggleSound}
            onReplayMystery={handleReplayMystery}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />

          {/* Continuous Flow of Celebration Sections */}
          <main className="relative z-10">
            {/* Section 1: Grand Congratulations & Merging Cards */}
            <HeroCongratulations config={config} onEasterEgg={handleTriggerEasterEgg} />

            {/* Section 2: Roommate Consistency Report */}
            <RoommateConsistencyReport config={config} onEasterEgg={handleTriggerEasterEgg} />

            {/* Section 3: The Roommate Journey */}
            <RoommateJourneyTimeline config={config} onEasterEgg={handleTriggerEasterEgg} />

            {/* Section 4: The Plot Twist Odds Meter */}
            <PlotTwistMeter config={config} onEasterEgg={handleTriggerEasterEgg} />

            {/* Section 5: Roommate Compatibility Score */}
            <CompatibilityScore config={config} onEasterEgg={handleTriggerEasterEgg} />

            {/* Section 6: Achievements Unlocked */}
            <AchievementsUnlocked config={config} onEasterEgg={handleTriggerEasterEgg} />

            {/* Section 7: Personal Message */}
            <PersonalMessage config={config} />

            {/* Section 8: One More Surprise & Interactive Cake */}
            <FinalSurprise config={config} />
          </main>

          {/* Footer */}
          <Footer config={config} onReplayMystery={handleReplayMystery} />
        </motion.div>
      )}

      {/* Easter Egg Floating Toast */}
      <EasterEggToast message={activeEasterEgg} onClose={() => setActiveEasterEgg(null)} />

      {/* Settings / Personalization Drawer */}
      <PersonalizeModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentConfig={config}
        onSaveConfig={handleSaveConfig}
        onResetDefault={handleResetDefault}
      />

    </div>
  );
}