import { calcIRR, calcMultiple, calcTime } from '../utils/calculationUtils';

describe('Investment Calculator Utilities', () => {
  describe('calcIRR', () => {
    test('calculates IRR correctly for standard values', () => {
      expect(calcIRR(2, 5)).toBeCloseTo(0.14869, 4); // 2x over 5 years ≈ 14.87% IRR
    });

    test('handles edge cases', () => {
      expect(calcIRR(0, 5)).toBe(0); // invalid input
      expect(calcIRR(2, 0)).toBe(0); // invalid input
      expect(calcIRR(0.5, 5)).toBeLessThan(0); // negative IRR
      expect(calcIRR(10, 1)).toBe(9); // 900% IRR (10x in 1 year)
    });
  });

  describe('calcMultiple', () => {
    test('calculates multiple correctly for standard values', () => {
      expect(calcMultiple(0.15, 5)).toBeCloseTo(2.01136, 4); // 15% IRR over 5 years ≈ 2.01x
    });

    test('handles edge cases', () => {
      expect(calcMultiple(-1.1, 5)).toBe(0.5); // invalid input
      expect(calcMultiple(0, 5)).toBe(1); // 0% IRR = 1x
      expect(calcMultiple(10, 1)).toBe(11); // 1000% IRR for 1 year
    });
  });

  describe('calcTime', () => {
    test('calculates time correctly for standard values', () => {
      expect(calcTime(0.15, 2)).toBeCloseTo(4.959, 2); // 15% IRR to reach 2x ≈ 4.96 years
    });

    test('handles edge cases', () => {
      expect(calcTime(-1.1, 2)).toBe(0.5); // invalid input
      expect(calcTime(0, 2)).toBe(Infinity); // mathematically, log(multiple)/log(1+0) is Infinity
      expect(calcTime(0.15, 0)).toBe(0.5); // invalid input
    });
  });
});