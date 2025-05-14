/**
 * Constants for slider ranges and steps
 */

export const SLIDER_RANGES = {
    time: { 
      min: 0.5,         // Minimum time in years
      max: 30,          // Maximum time in years
      step: 0.1,        // Step increment for time slider
      defaultValue: 5   // Default value for time
    },
    
    multiple: { 
      min: 0.5,         // Minimum investment multiple
      max: 10,          // Maximum investment multiple
      step: 0.01,       // Step increment for multiple slider
      defaultValue: 2   // Default value for multiple
    },
    
    irr: { 
      min: -0.1,        // Minimum IRR (-10%)
      max: 1,           // Maximum IRR display on slider (100%)
      step: 0.001,      // Step increment for IRR slider
      defaultValue: 0.15 // Default value for IRR (15%)
    }
  };
  
  /**
   * Input field configurations
   */
  export const INPUT_CONFIGS = {
    time: {
      step: 0.1,       // Step for input field
      min: 0.5,        // Minimum allowed input value
      max: 30,         // Maximum allowed input value
      decimals: 1,     // Number of decimal places to display
      unit: 'years'    // Unit label
    },
    
    multiple: {
      step: 0.01,      // Step for input field
      min: 0.5,        // Minimum allowed input value
      max: 10,         // Maximum allowed input value
      decimals: 2,     // Number of decimal places to display
      unit: '×'        // Unit label
    },
    
    irr: {
      step: 0.1,       // Step for input field (as percentage)
      min: -10,        // Minimum allowed input value (as percentage)
      max: null,       // No maximum for IRR input
      decimals: 1,     // Number of decimal places to display
      unit: '%'        // Unit label
    }
  };