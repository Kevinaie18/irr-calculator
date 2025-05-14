import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  label: string;
  ariaLabel: string;
  unit?: string;
  disabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({ value, min, max, step, onChange, label, ariaLabel, unit, disabled }) => {
  const rangeRef = useRef<HTMLInputElement>(null);
  const [bubblePos, setBubblePos] = useState(0);

  // Calculate bubble position as a percentage
  useEffect(() => {
    if (rangeRef.current) {
      const percent = (value - min) / (max - min);
      setBubblePos(percent * 100);
    }
  }, [value, min, max]);

  return (
    <div className="slider-container mb-6 relative">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="flex items-center relative">
        <div className="w-full relative">
          <input
            ref={rangeRef}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={e => onChange(Number(e.target.value))}
            aria-label={ariaLabel}
            disabled={disabled}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-gray-200 to-blue-500 focus:outline-none"
            style={{ background: `linear-gradient(to right, #3b82f6 ${(bubblePos || 0)}%, #e5e7eb ${(bubblePos || 0)}%)` }}
          />
          {/* Floating value bubble */}
          <AnimatePresence>
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -top-8 left-0"
              style={{ left: `calc(${bubblePos}% - 24px)` }}
            >
              <div className="px-2 py-1 rounded bg-blue-600 text-white text-xs font-semibold shadow">
                {value}{unit}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {unit && <span className="ml-2 text-gray-600">{unit}</span>}
      </div>
    </div>
  );
};

export default Slider; 