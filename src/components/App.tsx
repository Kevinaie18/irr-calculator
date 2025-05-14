import React, { useState } from 'react';
import SliderCalc from './SliderCalc';

interface Tab {
  id: 'irr' | 'multiple' | 'time';
  label: string;
}

const tabs: Tab[] = [
  { id: 'irr', label: 'IRR ↔ Multiple & Time' },
  { id: 'multiple', label: 'Multiple ↔ IRR & Time' },
  { id: 'time', label: 'Time ↔ IRR & Multiple' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab['id']>('irr');

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
        <nav className="max-w-md mx-auto flex overflow-x-auto" role="tablist" aria-label="Calculator Modes">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-0 py-4 px-1 text-sm font-medium text-center 
                ${activeTab === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-bold' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              <span className="truncate">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <main className="max-w-md mx-auto bg-white shadow rounded-lg my-6">
        {/* Different calculator based on active tab */}
        {activeTab === 'irr' && <SliderCalc activeVariable="irr" />}
        {activeTab === 'multiple' && <SliderCalc activeVariable="multiple" />}
        {activeTab === 'time' && <SliderCalc activeVariable="time" />}
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