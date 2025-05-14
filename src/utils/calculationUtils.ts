// Utility functions for investment calculations

/**
 * Calculate IRR from multiple and time
 * @param multiple Investment multiple
 * @param time Time in years
 * @returns Internal Rate of Return
 */
export function calcIRR(multiple: number, time: number): number {
  if (multiple <= 0 || time <= 0) return 0;
  return Math.pow(multiple, 1 / time) - 1;
}

/**
 * Calculate multiple from IRR and time
 * @param irr Internal Rate of Return
 * @param time Time in years
 * @returns Investment multiple
 */
export function calcMultiple(irr: number, time: number): number {
  if (irr <= -1 || time <= 0) return 0.5;
  return Math.pow(1 + irr, time);
}

/**
 * Calculate time from IRR and multiple
 * @param irr Internal Rate of Return
 * @param multiple Investment multiple
 * @returns Time in years
 */
export function calcTime(irr: number, multiple: number): number {
  if (irr <= -1 || multiple <= 0) return 0.5;
  if (Math.abs(irr) < 1e-8) return 1; // Avoid division by zero, treat as 1 year for 0% IRR
  return Math.log(multiple) / Math.log(1 + irr);
}

/**
 * Format a decimal value as a percentage string
 * @param value Decimal value to format
 * @returns Formatted percentage
 */
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

/**
 * Format a value as a multiple string
 * @param value Value to format
 * @returns Formatted multiple
 */
export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}×`;
}

/**
 * Format a value as a time string
 * @param value Value to format
 * @returns Formatted time
 */
export function formatTime(value: number): string {
  return `${value.toFixed(1)} years`;
} 