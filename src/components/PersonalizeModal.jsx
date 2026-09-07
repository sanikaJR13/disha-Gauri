import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders, Save, RotateCcw, Check } from 'lucide-react';
import { defaultPersonalization } from '../config/personalization';

export default function PersonalizeModal({ 
  isOpen, 
  onClose, 
  currentConfig, 
  onSaveConfig, 
  onResetDefault 
}) {
  const [formData, setFormData] = useState({
    user1: currentConfig.user1 || 'GAURI',
    user2: currentConfig.user2 || 'DISHA',
    companyName: currentConfig.companyName || 'QR Tech Innovations',
    role1: currentConfig.role1 || 'Software Development Engineer',
    role2: currentConfig.role2 || 'Software Development Engineer',
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
    }, 700);
  };

  const handleReset = () => {
    onResetDefault();
    setFormData({
      user1: defaultPersonalization.user1,
      user2: defaultPersonalization.user2,
      companyName: defaultPersonalization.companyName,
      role1: defaultPersonalization.role1,
      role2: defaultPersonalization.role2,
      batchYear: defaultPersonalization.batchYear,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 700);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-md w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-bold font-display text-slate-900">Personalize Roommate Data</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  User 01 Name
                </label>
                <input
                  type="text"
                  name="user1"
                  value={formData.user1}
                  onChange={handleChange}
                  required
                  placeholder="GAURI"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-orange-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  User 02 Name
                </label>
                <input
                  type="text"
                  name="user2"
                  value={formData.user2}
                  onChange={handleChange}
                  required
                  placeholder="DISHA"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                Company Name (Same for Both!)
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="QR Tech Innovations"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 font-sans"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  Role for {formData.user1}
                </label>
                <input
                  type="text"
                  name="role1"
                  value={formData.role1}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-orange-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  Role for {formData.user2}
                </label>
                <input
                  type="text"
                  name="role2"
                  value={formData.role2}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                Graduation / Batch Year
              </label>
              <input
                type="text"
                name="batchYear"
                value={formData.batchYear}
                onChange={handleChange}
                placeholder="2026"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-slate-500 font-sans"
              />
            </div>

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono font-bold text-slate-600 hover:text-slate-800 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 text-white font-bold text-sm shadow-md hover:scale-[1.02] active:scale-95 transition cursor-pointer"
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