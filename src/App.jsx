import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { defaultPersonalization } from './config/personalization';
import { toggleAudio, isAudioEnabled } from './utils/audio';

// Components
import ScannerIntro from './components/ScannerIntro';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import JourneyTimeline from './components/JourneyTimeline';
import PersonalLetter from './components/PersonalLetter';
import QRTechSection from './components/QRTechSection';
import AchievementBadges from './components/AchievementBadges';
import MemoryGallery from './components/MemoryGallery';
import FutureLaunchpad from './components/FutureLaunchpad';
import FinalSurprise from './components/FinalSurprise';
import Footer from './components/Footer';
import PersonalizeModal from './components/PersonalizeModal';

export default function App() {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('qr_celebration_config');
      if (saved) {
        return { ...defaultPersonalization, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not read saved config', e);
    }
    return defaultPersonalization;
  });

  const [showScanner, setShowScanner] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isPersonalizerOpen, setIsPersonalizerOpen] = useState(false);

  // Sound toggle handler
  const handleToggleSound = () => {
    const newState = toggleAudio();
    setIsSoundOn(newState);
  };

  // Replay scan experience
  const handleReplayScan = () => {
    setShowScanner(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save updated config to state and localStorage
  const handleSaveConfig = (updatedData) => {
    const newConfig = { ...config, ...updatedData };
    setConfig(newConfig);
    try {
      localStorage.setItem('qr_celebration_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Could not save config', e);
    }
  };

  // Reset to default config
  const handleResetDefault = () => {
    setConfig(defaultPersonalization);
    try {
      localStorage.removeItem('qr_celebration_config');
    } catch (e) {
      console.warn('Could not reset config', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black relative">
      
      {/* 1. Futuristic Scanner Intro Overlay */}
      <AnimatePresence>
        {showScanner && (
          <ScannerIntro
            config={config}
            onComplete={() => setShowScanner(false)}
            isSoundOn={isSoundOn}
            toggleSound={handleToggleSound}
          />
        )}
      </AnimatePresence>

      {/* 2. Floating Navbar */}
      <Navbar
        config={config}
        isSoundOn={isSoundOn}
        toggleSound={handleToggleSound}
        onReplayScan={handleReplayScan}
        onOpenPersonalizer={() => setIsPersonalizerOpen(true)}
      />

      {/* 3. Main Celebration Single-Page Content */}
      <main className="relative z-10">
        <HeroSection config={config} />
        <StatsSection config={config} />
        <JourneyTimeline config={config} />
        <PersonalLetter config={config} />
        <QRTechSection config={config} />
        <AchievementBadges config={config} />
        <MemoryGallery config={config} />
        <FutureLaunchpad config={config} />
        <FinalSurprise config={config} />
      </main>

      {/* 4. Footer */}
      <Footer config={config} onReplayScan={handleReplayScan} />

      {/* 5. Live Personalization Drawer / Modal */}
      <PersonalizeModal
        isOpen={isPersonalizerOpen}
        onClose={() => setIsPersonalizerOpen(false)}
        currentConfig={config}
        onSaveConfig={handleSaveConfig}
        onResetDefault={handleResetDefault}
      />
    </div>
  );
}
