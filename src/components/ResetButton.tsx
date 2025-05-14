import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResetButtonProps {
  onClick: () => void;
  showToast: boolean;
  toastMessage: string;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick, showToast, toastMessage }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <button
        onClick={onClick}
        className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        {/* Heroicons Refresh Icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M5.582 9A7.003 7.003 0 0112 5c1.657 0 3.156.576 4.354 1.536M18.418 15A7.003 7.003 0 0112 19a6.978 6.978 0 01-4.354-1.536" /></svg>
        <span className="ml-2">Reset</span>
      </button>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow text-sm"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResetButton; 