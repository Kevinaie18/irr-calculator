export interface SliderRange {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

export const SLIDER_RANGES: Record<'time' | 'multiple' | 'irr', SliderRange> = {
  time: {
    min: 0.5,
    max: 30,
    step: 0.1,
    defaultValue: 5,
  },
  multiple: {
    min: 0.5,
    max: 20,
    step: 0.1,
    defaultValue: 2,
  },
  irr: {
    min: -1.0, // -100%
    max: 2.0,  // 200%
    step: 0.001,
    defaultValue: 0.15,
  },
};

export interface InputConfig {
  step: number;
  min: number;
  max: number | null;
  decimals: number;
  unit: string;
}

export const INPUT_CONFIGS: Record<'time' | 'multiple' | 'irr', InputConfig> = {
  time: {
    step: 0.1,
    min: 0.5,
    max: 30,
    decimals: 1,
    unit: 'years',
  },
  multiple: {
    step: 0.1,
    min: 0.5,
    max: 20,
    decimals: 2,
    unit: '×',
  },
  irr: {
    step: 0.1,
    min: -100,
    max: 200,
    decimals: 1,
    unit: '%',
  },
}; 