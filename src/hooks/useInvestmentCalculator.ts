import { useState, useEffect } from 'react';
import { calcIRR, calcMultiple, calcTime } from '../utils/calculationUtils';

export type Variable = 'irr' | 'multiple' | 'time';

export interface CalculatorDefaults {
  time?: number;
  multiple?: number;
  irr?: number;
}

export interface CalculatorState {
  time: number;
  multiple: number;
  irr: number;
  handleTimeChange: (value: number) => void;
  handleMultipleChange: (value: number) => void;
  handleIRRChange: (value: number) => void;
  calculatedValues: {
    irr: number;
    multiple: number;
    time: number;
  };
  isReadOnly: (variable: Variable) => boolean;
}

const useInvestmentCalculator = (
  activeVariable: Variable,
  defaultValues: CalculatorDefaults = {},
  resetKey?: number
): CalculatorState => {
  const defaults = {
    time: defaultValues.time ?? 5,
    multiple: defaultValues.multiple ?? 2,
    irr: defaultValues.irr ?? 0.15,
  };

  const [time, setTime] = useState<number>(defaults.time);
  const [multiple, setMultiple] = useState<number>(defaults.multiple);
  const [irr, setIRR] = useState<number>(defaults.irr);
  const [lastChanged, setLastChanged] = useState<Variable | null>(null);

  // Reset state when resetKey changes
  useEffect(() => {
    setTime(defaults.time);
    setMultiple(defaults.multiple);
    setIRR(defaults.irr);
    setLastChanged(null);
  }, [resetKey]);

  useEffect(() => {
    if (!lastChanged) return;
    if (lastChanged === activeVariable) return;
    if (activeVariable === 'irr' && (lastChanged === 'multiple' || lastChanged === 'time')) {
      setIRR(calcIRR(multiple, time));
    } else if (activeVariable === 'multiple' && (lastChanged === 'irr' || lastChanged === 'time')) {
      setMultiple(calcMultiple(irr, time));
    } else if (activeVariable === 'time' && (lastChanged === 'irr' || lastChanged === 'multiple')) {
      setTime(calcTime(irr, multiple));
    }
  }, [time, multiple, irr, lastChanged, activeVariable]);

  const handleTimeChange = (value: number) => {
    setTime(value);
    setLastChanged('time');
  };
  const handleMultipleChange = (value: number) => {
    setMultiple(value);
    setLastChanged('multiple');
  };
  const handleIRRChange = (value: number) => {
    setIRR(value);
    setLastChanged('irr');
  };

  const calculatedValues = {
    irr: activeVariable === 'irr' ? calcIRR(multiple, time) : irr,
    multiple: activeVariable === 'multiple' ? calcMultiple(irr, time) : multiple,
    time: activeVariable === 'time' ? calcTime(irr, multiple) : time,
  };

  return {
    time,
    multiple,
    irr,
    handleTimeChange,
    handleMultipleChange,
    handleIRRChange,
    calculatedValues,
    isReadOnly: (variable: Variable) => variable === activeVariable,
  };
};

export default useInvestmentCalculator; 