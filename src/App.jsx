import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { defaultPersonalization } from './config/personalization';
import { toggleAudio, isAudioEnabled } from './utils/audio';

// Components
import PageOneEntry from './components/PageOneEntry';
import HeroCongratulations from './components/HeroCongratulations';
import PhotoMemories from './components/PhotoMemories';
import PersonalMessage from './components/PersonalMessage';
import FinalSurprise from './components/FinalSurprise';
import Footer from './components/Footer';
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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleEnterCelebration = () => {
    setCurrentPage('celebration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayMystery = () => {
    setCurrentPage('entry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white relative">
      
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
          <main className="relative z-10">
            {/* 1. Congratulations Message */}
            <HeroCongratulations config={config} onReplayMystery={handleReplayMystery} />

            {/* 2. Photo Gallery & Memories */}
            <div id="photos-section">
              <PhotoMemories config={config} />
            </div>

            {/* 3. Personal Message for Them */}
            <PersonalMessage config={config} />

            {/* 4. One More Surprise & Box Telling to Cut the Cake */}
            <FinalSurprise config={config} />
          </main>

          {/* 5. Heartfelt Footer */}
          <Footer config={config} onReplayMystery={handleReplayMystery} />
        </motion.div>
      )}

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