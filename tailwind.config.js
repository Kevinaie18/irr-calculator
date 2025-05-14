/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        // iOS specific styling
        borderRadius: {
          'ios': '8px'
        },
        boxShadow: {
          'ios': '0 2px 10px rgba(0, 0, 0, 0.05)'
        },
        colors: {
          'ios-blue': '#007AFF',
          'ios-gray': {
            50: '#F9F9F9',
            100: '#F2F2F7',
            200: '#E5E5EA',
            300: '#D1D1D6',
            400: '#C7C7CC',
            500: '#AEAEB2',
            600: '#8E8E93',
            700: '#636366',
            800: '#48484A',
            900: '#3A3A3C'
          }
        },
        fontFamily: {
          'ios': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
        }
      },
    },
    plugins: [],
  }