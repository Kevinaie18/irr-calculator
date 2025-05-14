import React, { useState } from 'react';
import SliderCalc from './SliderCalc';

const App = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('irr');

  // Tab configuration
  const tabs = [
    { id: 'irr', label: 'IRR ↔ Multiple & Time' },
    { id: 'multiple', label: 'Multiple ↔ IRR & Time' },
    { id: 'time', label: 'Time ↔ IRR & Multiple' }
  ];

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
        <nav className="max-w-md mx-auto flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-0 py-4 px-1 text-sm font-medium text-center 
                ${activeTab === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
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

/**
 * Utility functions for investment calculations
 */

/**
 * Calculate IRR from multiple and time
 * @param {number} multiple - Investment multiple
 * @param {number} time - Time in years
 * @returns {number} Internal Rate of Return
 */
export const calcIRR = (multiple, time) => {
  if (multiple <= 0 || time <= 0) return 0;
  return Math.pow(multiple, 1/time) - 1;
};

/**
 * Calculate multiple from IRR and time
 * @param {number} irr - Internal Rate of Return
 * @param {number} time - Time in years
 * @returns {number} Investment multiple
 */
export const calcMultiple = (irr, time) => {
  if (irr <= -1 || time <= 0) return 0.5;
  return Math.pow(1 + irr, time);
};

/**
 * Calculate time from IRR and multiple
 * @param {number} irr - Internal Rate of Return
 * @param {number} multiple - Investment multiple
 * @returns {number} Time in years
 */
export const calcTime = (irr, multiple) => {
  if (irr <= -1 || multiple <= 0) return 0.5;
  return Math.log(multiple) / Math.log(1 + irr);
};

/**
 * Format a decimal value as a percentage string
 * @param {number} value - Decimal value to format
 * @returns {string} Formatted percentage
 */
export const formatPercentage = (value) => {
  return `${(value * 100).toFixed(1)}%`;
};

/**
 * Format a value as a multiple string
 * @param {number} value - Value to format
 * @returns {string} Formatted multiple
 */
export const formatMultiple = (value) => {
  return `${value.toFixed(2)}×`;
};

/**
 * Format a value as a time string
 * @param {number} value - Value to format
 * @returns {string} Formatted time
 */
export const formatTime = (value) => {
  return `${value.toFixed(1)} years`;
};