import React, { useState, useEffect } from 'react';
import { calcIRR, calcMultiple, calcTime, formatPercentage, formatMultiple, formatTime } from '../utils/calculationUtils';
import { SLIDER_RANGES } from '../constants/sliderRanges';

// Use ranges from constants
const RANGES = SLIDER_RANGES;

/**
 * Main slider calculator component
 * @param {object} props - Component props
 * @param {string} props.activeVariable - Which variable is being controlled ('irr', 'multiple', or 'time')
 */
const SliderCalc = ({ activeVariable }) => {
  // State for all three variables
  const [time, setTime] = useState(RANGES.time.defaultValue);
  const [multiple, setMultiple] = useState(RANGES.multiple.defaultValue);
  const [irr, setIRR] = useState(RANGES.irr.defaultValue);

  // Flag for tracking which value was last changed (to prevent calculation loops)
  const [lastChanged, setLastChanged] = useState(null);

  // Update calculations when values change
  useEffect(() => {
    if (!lastChanged) return;

    // Skip calculations if the active variable was changed
    // (since that's what the user is directly controlling)
    if (lastChanged === activeVariable) return;

    // Calculate the active variable based on the other two
    if (activeVariable === 'irr' && (lastChanged === 'multiple' || lastChanged === 'time')) {
      setIRR(calcIRR(multiple, time));
    } else if (activeVariable === 'multiple' && (lastChanged === 'irr' || lastChanged === 'time')) {
      setMultiple(calcMultiple(irr, time));
    } else if (activeVariable === 'time' && (lastChanged === 'irr' || lastChanged === 'multiple')) {
      setTime(calcTime(irr, multiple));
    }
  }, [time, multiple, irr, lastChanged, activeVariable]);

  // Handle slider changes
  const handleTimeChange = (e) => {
    const value = parseFloat(e.target.value);
    setTime(value);
    setLastChanged('time');
  };

  const handleMultipleChange = (e) => {
    const value = parseFloat(e.target.value);
    setMultiple(value);
    setLastChanged('multiple');
  };

  const handleIRRChange = (e) => {
    const value = parseFloat(e.target.value);
    setIRR(value);
    setLastChanged('irr');
  };

  // Handle input field changes for manual entry
  const handleTimeInput = (e) => {
    let value = parseFloat(e.target.value);
    // Validate and constrain the value
    if (!isNaN(value)) {
      value = Math.max(RANGES.time.min, Math.min(RANGES.time.max, value));
      setTime(value);
      setLastChanged('time');
    }
  };

  const handleMultipleInput = (e) => {
    let value = parseFloat(e.target.value);
    // Validate and constrain the value
    if (!isNaN(value)) {
      value = Math.max(RANGES.multiple.min, Math.min(RANGES.multiple.max, value));
      setMultiple(value);
      setLastChanged('multiple');
    }
  };

  const handleIRRInput = (e) => {
    // For IRR, convert percentage input to decimal
    let value = parseFloat(e.target.value) / 100;
    // Validate the value, only enforce minimum bound
    if (!isNaN(value)) {
      value = Math.max(RANGES.irr.min, value);
      setIRR(value);
      setLastChanged('irr');
    }
  };

  // Returns whether a slider should be displayed based on the active variable
  const isHidden = (variable) => {
    return variable === activeVariable && variable === 'irr';
  };

  // Returns whether an input should be read-only
  const isReadOnly = (variable) => {
    return variable === activeVariable;
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <div className="space-y-8">
        {/* Time Slider */}
        <div className="slider-container">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-700 font-medium">Time</label>
            <div className="flex items-center">
              <input
                type="number"
                min={RANGES.time.min}
                max={RANGES.time.max}
                step={RANGES.time.step}
                value={time}
                onChange={handleTimeInput}
                readOnly={isReadOnly('time')}
                className={`w-16 text-right px-2 py-1 border rounded mr-2 
                  ${isReadOnly('time') 
                    ? 'bg-gray-100 text-blue-600 font-semibold' 
                    : 'border-gray-300'}`}
              />
              <span className="text-gray-600">years</span>
            </div>
          </div>
          <input
            type="range"
            min={RANGES.time.min}
            max={RANGES.time.max}
            step={RANGES.time.step}
            value={time}
            onChange={handleTimeChange}
            disabled={isReadOnly('time')}
            className={`w-full h-2 rounded-lg appearance-none cursor-pointer 
              ${isReadOnly('time') 
                ? 'bg-gray-300' 
                : 'bg-gradient-to-r from-blue-300 to-blue-600'}`}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{RANGES.time.min}</span>
            <span>{RANGES.time.max}</span>
          </div>
        </div>

        {/* Multiple Slider */}
        <div className="slider-container">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-700 font-medium">Multiple</label>
            <div className="flex items-center">
              <input
                type="number"
                min={RANGES.multiple.min}
                max={RANGES.multiple.max}
                step={RANGES.multiple.step}
                value={multiple}
                onChange={handleMultipleInput}
                readOnly={isReadOnly('multiple')}
                className={`w-16 text-right px-2 py-1 border rounded mr-2 
                  ${isReadOnly('multiple') 
                    ? 'bg-gray-100 text-blue-600 font-semibold' 
                    : 'border-gray-300'}`}
              />
              <span className="text-gray-600">×</span>
            </div>
          </div>
          <input
            type="range"
            min={RANGES.multiple.min}
            max={RANGES.multiple.max}
            step={RANGES.multiple.step}
            value={multiple}
            onChange={handleMultipleChange}
            disabled={isReadOnly('multiple')}
            className={`w-full h-2 rounded-lg appearance-none cursor-pointer 
              ${isReadOnly('multiple') 
                ? 'bg-gray-300' 
                : 'bg-gradient-to-r from-blue-300 to-blue-600'}`}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{RANGES.multiple.min}×</span>
            <span>{RANGES.multiple.max}×</span>
          </div>
        </div>

        {/* IRR Display or Slider */}
        <div className="slider-container">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-700 font-medium">IRR</label>
            <div className="flex items-center">
              <input
                type="number"
                min={RANGES.irr.min * 100}
                step="0.1"
                value={(irr * 100).toFixed(1)}
                onChange={handleIRRInput}
                readOnly={isReadOnly('irr')}
                className={`w-16 text-right px-2 py-1 border rounded mr-2 
                  ${isReadOnly('irr') 
                    ? 'bg-gray-100 text-blue-600 font-semibold' 
                    : 'border-gray-300'}`}
              />
              <span className="text-gray-600">%</span>
            </div>
          </div>
          
          {/* Only show IRR slider if IRR is not the active variable */}
          {!isHidden('irr') && (
            <>
              <input
                type="range"
                min={RANGES.irr.min}
                max={RANGES.irr.max}
                step={RANGES.irr.step}
                value={Math.min(irr, RANGES.irr.max)} // Limit slider movement but not the actual value
                onChange={handleIRRChange}
                disabled={isReadOnly('irr')}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer 
                  ${isReadOnly('irr') 
                    ? 'bg-gray-300' 
                    : 'bg-gradient-to-r from-blue-300 to-blue-600'}`}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatPercentage(RANGES.irr.min)}</span>
                <span>{formatPercentage(RANGES.irr.max)}</span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        {activeVariable === 'irr' && (
          <p>Adjust Time or Multiple to calculate IRR. Enter values manually or use sliders.</p>
        )}
        {activeVariable === 'multiple' && (
          <p>Adjust Time or IRR to calculate Multiple. Enter values manually or use sliders.</p>
        )}
        {activeVariable === 'time' && (
          <p>Adjust IRR or Multiple to calculate Time. Enter values manually or use sliders.</p>
        )}
      </div>
    </div>
  );
};

export default SliderCalc;