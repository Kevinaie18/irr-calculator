import { useState, useEffect } from 'react';
import { calcIRR, calcMultiple, calcTime } from '../utils/calculationUtils';

/**
 * Custom hook for investment calculations
 * Manages the state and calculations between IRR, Multiple and Time
 * 
 * @param {string} activeVariable - Which variable should be calculated ('irr', 'multiple', 'time')
 * @param {object} defaultValues - Default values for each variable
 * @returns {object} State and handlers for the calculator
 */
const useInvestmentCalculator = (activeVariable, defaultValues = {}) => {
  // Default values with fallbacks
  const defaults = {
    time: defaultValues.time || 5,
    multiple: defaultValues.multiple || 2,
    irr: defaultValues.irr || 0.15
  };

  // State for all three variables
  const [time, setTime] = useState(defaults.time);
  const [multiple, setMultiple] = useState(defaults.multiple);
  const [irr, setIRR] = useState(defaults.irr);
  
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

  // Handlers for value changes
  const handleTimeChange = (value) => {
    setTime(value);
    setLastChanged('time');
  };

  const handleMultipleChange = (value) => {
    setMultiple(value);
    setLastChanged('multiple');
  };

  const handleIRRChange = (value) => {
    setIRR(value);
    setLastChanged('irr');
  };

  // Calculate current values
  const calculatedValues = {
    irr: activeVariable === 'irr' ? calcIRR(multiple, time) : irr,
    multiple: activeVariable === 'multiple' ? calcMultiple(irr, time) : multiple,
    time: activeVariable === 'time' ? calcTime(irr, multiple) : time
  };

  return {
    time,
    multiple,
    irr,
    handleTimeChange,
    handleMultipleChange,
    handleIRRChange,
    calculatedValues,
    isReadOnly: (variable) => variable === activeVariable
  };
};

export default useInvestmentCalculator;