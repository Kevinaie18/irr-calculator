import React from 'react';
import { formatPercentage, formatMultiple, formatTime } from '../utils/calculationUtils';

/**
 * InfoBox component to display calculation results
 * @param {object} props - Component props
 * @param {string} props.activeTab - Which variable is being calculated ('irr', 'multiple', or 'time')
 * @param {number} props.irr - Current IRR value
 * @param {number} props.multiple - Current multiple value
 * @param {number} props.time - Current time value
 * @param {object} props.calculatedValues - Object containing calculated values
 */
const InfoBox = ({ activeTab, irr, multiple, time, calculatedValues }) => {
  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
      {activeTab === 'irr' && (
        <>
          <p className="font-medium">Calculated IRR</p>
          <p className="text-xl font-bold mt-1">
            {formatPercentage(calculatedValues.irr)}
          </p>
          <p className="mt-2 text-xs text-gray-600">
            {multiple.toFixed(2)}× return over {time.toFixed(1)} years
          </p>
        </>
      )}
      
      {activeTab === 'multiple' && (
        <>
          <p className="font-medium">Calculated Multiple</p>
          <p className="text-xl font-bold mt-1">
            {formatMultiple(calculatedValues.multiple)}
          </p>
          <p className="mt-2 text-xs text-gray-600">
            {formatPercentage(irr)} IRR over {time.toFixed(1)} years
          </p>
        </>
      )}
      
      {activeTab === 'time' && (
        <>
          <p className="font-medium">Calculated Time</p>
          <p className="text-xl font-bold mt-1">
            {formatTime(calculatedValues.time)}
          </p>
          <p className="mt-2 text-xs text-gray-600">
            To grow {multiple.toFixed(2)}× at {formatPercentage(irr)} IRR
          </p>
        </>
      )}
    </div>
  );
};

export default InfoBox;