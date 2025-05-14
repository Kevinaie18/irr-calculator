import React, { useState } from 'react';
import { Variable, CalculatorDefaults } from '../hooks/useInvestmentCalculator';
import useInvestmentCalculator from '../hooks/useInvestmentCalculator';
import { SLIDER_RANGES } from '../constants/sliderRanges';
import Slider from './Slider';
import ResultCard from './ResultCard';
import ResetButton from './ResetButton';

interface CalculatorProps {
  activeVariable: Variable;
  defaultValues?: CalculatorDefaults;
}

const Calculator: React.FC<CalculatorProps> = ({ activeVariable, defaultValues }) => {
  const [resetKey, setResetKey] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const {
    time,
    multiple,
    irr,
    handleTimeChange,
    handleMultipleChange,
    handleIRRChange,
    calculatedValues,
    isReadOnly,
  } = useInvestmentCalculator(activeVariable, defaultValues ?? {}, resetKey);

  // Determine which two sliders to show and what to display as result
  const sliders = [
    {
      key: 'time',
      label: 'Time',
      value: time,
      min: SLIDER_RANGES.time.min,
      max: SLIDER_RANGES.time.max,
      step: SLIDER_RANGES.time.step,
      onChange: handleTimeChange,
      unit: 'years',
      ariaLabel: 'Time in years',
      disabled: isReadOnly('time'),
    },
    {
      key: 'multiple',
      label: 'Multiple',
      value: multiple,
      min: SLIDER_RANGES.multiple.min,
      max: SLIDER_RANGES.multiple.max,
      step: SLIDER_RANGES.multiple.step,
      onChange: handleMultipleChange,
      unit: '×',
      ariaLabel: 'Investment multiple',
      disabled: isReadOnly('multiple'),
    },
    {
      key: 'irr',
      label: 'IRR',
      value: irr * 100,
      min: SLIDER_RANGES.irr.min * 100,
      max: SLIDER_RANGES.irr.max * 100,
      step: SLIDER_RANGES.irr.step * 100,
      onChange: (v: number) => handleIRRChange(v / 100),
      unit: '%',
      ariaLabel: 'Internal Rate of Return',
      disabled: isReadOnly('irr'),
    },
  ];

  // Only show sliders for the two input variables
  const inputSliders = sliders.filter(s => !isReadOnly(s.key as Variable));

  // Result label and value
  let resultLabel = '';
  let resultValue = '';
  if (activeVariable === 'irr') {
    resultLabel = 'IRR';
    resultValue = `${(calculatedValues.irr * 100).toFixed(2)}%`;
  } else if (activeVariable === 'multiple') {
    resultLabel = 'Multiple';
    resultValue = `${calculatedValues.multiple.toFixed(2)}×`;
  } else if (activeVariable === 'time') {
    resultLabel = 'Time';
    resultValue = `${calculatedValues.time.toFixed(2)} years`;
  }

  // Reset handler
  const handleReset = () => {
    setResetKey(k => k + 1);
    setShowToast(true);
    setToastMessage('Values reset successfully.');
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      {inputSliders.map(slider => {
        const { key, ...sliderProps } = slider;
        return <Slider key={key} {...sliderProps} />;
      })}
      <ResultCard label={resultLabel} value={resultValue} />
      <ResetButton onClick={handleReset} showToast={showToast} toastMessage={toastMessage} />
    </div>
  );
};

export default Calculator; 