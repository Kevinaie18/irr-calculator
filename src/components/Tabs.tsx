import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type TabId = 'irr' | 'multiple' | 'time';

interface Tab {
  id: TabId;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const idx = tabs.findIndex(tab => tab.id === activeTab);
    const node = tabRefs.current[idx];
    if (node) {
      setUnderline({ left: node.offsetLeft, width: node.offsetWidth });
    }
  }, [activeTab, tabs]);

  return (
    <nav role="tablist" aria-label="Calculator Modes" className="relative flex justify-center">
      {tabs.map((tab, idx) => (
        <button
          key={tab.id}
          ref={el => { tabRefs.current[idx] = el; }}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 min-w-0 py-4 px-1 text-sm font-medium text-center transition-colors duration-200
            ${activeTab === tab.id ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        >
          <span className="truncate">{tab.label}</span>
        </button>
      ))}
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-blue-600 rounded"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ left: underline.left, width: underline.width }}
      />
    </nav>
  );
};

export default Tabs; 