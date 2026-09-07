import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders, Save, RotateCcw, Check, User, Heart, Briefcase, Building } from 'lucide-react';
import { defaultPersonalization } from '../config/personalization';

export default function PersonalizeModal({ 
  isOpen, 
  onClose, 
  currentConfig, 
  onSaveConfig, 
  onResetDefault 
}) {
  const [formData, setFormData] = useState({
    friendName: currentConfig.friendName,
    yourName: currentConfig.yourName,
    companyName: currentConfig.companyName,
    placementRole: currentConfig.placementRole,
    batchYear: currentConfig.batchYear || '2026',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    onResetDefault();
    setFormData({
      friendName: defaultPersonalization.friendName,
      yourName: defaultPersonalization.yourName,
      companyName: defaultPersonalization.companyName,
      placementRole: defaultPersonalization.placementRole,
      batchYear: defaultPersonalization.batchYear,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-md w-full bg-slate-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(34,197,94,0.2)] text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold font-display">Personalize Details</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-emerald-400 mb-1">
                Friend's Name (To Congratulate)
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  name="friendName"
                  value={formData.friendName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Gauri"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-emerald-400 mb-1">
                Your Name (Sender / Friend)
              </label>
              <div className="relative">
                <Heart className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Disha"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-emerald-400 mb-1">
                Company Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. QR Tech Innovations"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-emerald-400 mb-1">
                Job / Placement Role
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  name="placementRole"
                  value={formData.placementRole}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Software Development Engineer"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-emerald-400 mb-1">
                Graduation / Batch Year
              </label>
              <input
                type="text"
                name="batchYear"
                value={formData.batchYear}
                onChange={handleChange}
                placeholder="e.g. 2026"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
              />
            </div>

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-white transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-[1.02] active:scale-95 transition"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Updated!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Apply Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
