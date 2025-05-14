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