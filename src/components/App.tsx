import React, { useState } from 'react';
import Tabs, { TabId } from './Tabs';
import Calculator from './Calculator';
import { AnimatePresence, motion } from 'framer-motion';

const tabs = [
  { id: 'irr' as TabId, label: 'IRR ↔ Multiple & Time' },
  { id: 'multiple' as TabId, label: 'Multiple ↔ IRR & Time' },
  { id: 'time' as TabId, label: 'Time ↔ IRR & Multiple' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('irr');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-center py-4 text-gray-800">
            Investment Calculator
          </h1>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Content Area */}
      <main className="max-w-md mx-auto bg-white shadow rounded-lg my-6 min-h-[350px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Calculator activeVariable={activeTab} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>Investment Calculator PWA</p>
        <p className="mt-1">IRR = (Multiple)^(1/Time) - 1</p>
      </footer>
    </div>
  );
};

export default App; 