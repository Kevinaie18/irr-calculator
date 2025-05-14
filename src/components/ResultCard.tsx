import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResultCardProps {
  label: string;
  value: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value }) => {
  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow text-center">
      <div className="text-gray-500 mb-2">{label}</div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="text-2xl font-bold text-blue-600"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResultCard; 