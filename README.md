# Investment Calculator PWA

A Progressive Web App (PWA) built with React and Tailwind CSS that calculates IRR, Multiple, and Time values for investments. The app is optimized for iOS devices and can be installed as a home screen app.

![Investment Calculator Preview](https://via.placeholder.com/800x450/3b82f6/FFFFFF?text=Investment+Calculator+PWA)

## Live Demo

Visit the live demo: [Investment Calculator PWA](https://irr-calculator.vercel.app)

## Features

- Three calculation modes:
  - Calculate IRR from Multiple and Time (with no upper limit on IRR values)
  - Calculate Multiple from IRR and Time
  - Calculate Time from IRR and Multiple

- Real-time calculations as sliders are adjusted
- Manual data entry for precise inputs
- iOS-optimized interface with touch-friendly controls
- Works offline with service worker caching
- Can be installed on home screen as a PWA

### Offline Functionality

The app includes a service worker that provides:
- Offline access to the application
- Caching of static assets and resources
- Automatic updates when new versions are deployed
- Fast loading times for returning visitors

## Formulas Used

- IRR = (Multiple)^(1/Time) - 1
- Multiple = (1+IRR)^Time
- Time = ln(Multiple) / ln(1+IRR)

## Project Structure

```
investment-calculator/
├── public/                     # Static files
│   ├── index.html              # Entry HTML file with PWA meta tags
│   ├── manifest.json           # PWA manifest
│   ├── service-worker.js       # Service worker for offline functionality
│   ├── favicon.svg             # SVG favicon
│   ├── logo.svg                # Main app logo
│   ├── maskable_icon.svg       # Maskable icon for PWA
│   ├── favicon-generator.sh    # Script to generate favicons
│   └── IconGenerator.jsx       # Icon generation component
│
├── src/                        # Source code
│   ├── components/             # React components
│   ├── utils/                  # Utility functions
│   ├── hooks/                  # Custom React hooks
│   ├── constants/              # App constants
│   ├── styles/                 # CSS and styling
│   ├── assets/                 # Static assets
│   ├── __tests__/             # Tests
│   ├── index.js               # Main entry point
│   └── setupTests.js          # Test configuration
│
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS config for Tailwind
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher (for React 18 compatibility)
- npm 8.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/investment-calculator.git
   cd investment-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `build` folder with the production-ready app.

## Deploying to Vercel

The app is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your GitHub repository in the Vercel dashboard
3. Vercel will automatically detect the Create React App configuration
4. Click "Deploy"

The app will be deployed with the following features:
- Automatic HTTPS
- Global CDN
- Continuous deployment from Git
- Preview deployments for pull requests

## PWA Installation on iOS

1. Open the deployed app in Safari.
2. Tap the Share button.
3. Scroll down and tap "Add to Home Screen".
4. Name the app and tap "Add".

## Browser Compatibility

- Safari iOS 13+
- Chrome for iOS
- Chrome 83+
- Firefox 76+
- Edge 83+

## Optimizations for iOS

- Custom meta tags for iOS compatibility
- Touch-friendly slider controls with proper size for finger input
- Disabled zoom and viewport scaling for app-like experience
- iOS-style UI components using Tailwind CSS
- "Add to Home Screen" prompt for iOS users

## Manual Data Entry

The calculator supports manual data entry for precise inputs:
- Direct number inputs for Time, Multiple, and IRR values
- Automatic validation and range checking
- Works alongside sliders for flexibility

## Unlimited IRR Values

Unlike many calculators, this app doesn't limit IRR to 100%:
- IRR calculations can exceed 100% when appropriate
- When IRR is the calculated value, it's shown as a result without slider constraints
- Appropriate formatting for large percentage values

## Development Notes

### Code Organization

- Components follow the single responsibility principle
- Custom hooks separate logic from presentation
- Constants are externalized for easy configuration
- Utility functions are pure and testable

### Testing

Run the test suite with:

```bash
npm test
```

### Adding New Features

When adding new features:
1. Create components in `src/components/`
2. Add utility functions to `src/utils/`
3. Define constants in `src/constants/`
4. Update tests as needed

## License

MIT

---

Created by [Kevin Le K]