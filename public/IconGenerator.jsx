import React, { useEffect, useRef } from 'react';

const IconGenerator = () => {
  const logoRef = useRef(null);
  const maskableRef = useRef(null);
  const faviconRef = useRef(null);
  
  // SVG content for each icon
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Background -->
  <rect width="512" height="512" rx="100" fill="url(#gradient)" />
  
  <!-- Calculator Display -->
  <rect x="96" y="96" width="320" height="96" rx="16" fill="white" fill-opacity="0.95" />
  
  <!-- Display Content: IRR % -->
  <text x="116" y="156" font-family="Arial, sans-serif" font-weight="bold" font-size="40" fill="#3b82f6">IRR: 24.5%</text>
  
  <!-- Calculator Buttons: Row 1 -->
  <rect x="96" y="208" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="184" y="208" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="272" y="208" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="360" y="208" width="56" height="72" rx="12" fill="#f59e0b" fill-opacity="0.9" />
  
  <!-- Calculator Buttons: Row 2 -->
  <rect x="96" y="296" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="184" y="296" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="272" y="296" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="360" y="296" width="56" height="72" rx="12" fill="#f59e0b" fill-opacity="0.9" />
  
  <!-- Calculator Buttons: Row 3 -->
  <rect x="96" y="384" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="184" y="384" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="272" y="384" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
  <rect x="360" y="384" width="56" height="72" rx="12" fill="#f59e0b" fill-opacity="0.9" />
  
  <!-- Growth Chart Line -->
  <path d="M116,156 L140,140 L180,148 L220,124 L260,132 L300,108 L340,116 L380,96" 
        stroke="#10b981" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  
  <!-- Gradient Definition -->
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

  const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Background -->
  <rect width="512" height="512" rx="0" fill="url(#gradient)" />
  
  <!-- Safe Area Content: Centered in the middle 80% -->
  <g transform="scale(0.8) translate(64, 64)">
    <!-- Calculator Display -->
    <rect x="96" y="96" width="320" height="96" rx="16" fill="white" fill-opacity="0.95" />
    
    <!-- Display Content: IRR % -->
    <text x="116" y="156" font-family="Arial, sans-serif" font-weight="bold" font-size="40" fill="#3b82f6">IRR: 24.5%</text>
    
    <!-- Calculator Buttons: Row 1 -->
    <rect x="96" y="208" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="184" y="208" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="272" y="208" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="360" y="208" width="56" height="72" rx="12" fill="#f59e0b" fill-opacity="0.9" />
    
    <!-- Calculator Buttons: Row 2 -->
    <rect x="96" y="296" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="184" y="296" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="272" y="296" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="360" y="296" width="56" height="72" rx="12" fill="#f59e0b" fill-opacity="0.9" />
    
    <!-- Calculator Buttons: Row 3 -->
    <rect x="96" y="384" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="184" y="384" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="272" y="384" width="72" height="72" rx="12" fill="white" fill-opacity="0.9" />
    <rect x="360" y="384" width="56" height="72" rx="12" fill="#f59e0b" fill-opacity="0.9" />
    
    <!-- Growth Chart Line -->
    <path d="M116,156 L140,140 L180,148 L220,124 L260,132 L300,108 L340,116 L380,96" 
          stroke="#10b981" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  
  <!-- Gradient Definition -->
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <!-- Background -->
  <rect width="64" height="64" rx="12" fill="url(#gradient)" />
  
  <!-- Calculator Display -->
  <rect x="12" y="12" width="40" height="12" rx="2" fill="white" fill-opacity="0.95" />
  
  <!-- Display Content: % Symbol -->
  <text x="26" y="22" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#3b82f6">%</text>
  
  <!-- Calculator Buttons -->
  <rect x="12" y="28" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="23" y="28" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="34" y="28" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="45" y="28" width="7" height="9" rx="2" fill="#f59e0b" fill-opacity="0.9" />
  
  <rect x="12" y="39" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="23" y="39" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="34" y="39" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="45" y="39" width="7" height="9" rx="2" fill="#f59e0b" fill-opacity="0.9" />
  
  <rect x="12" y="50" width="20" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="34" y="50" width="9" height="9" rx="2" fill="white" fill-opacity="0.9" />
  <rect x="45" y="50" width="7" height="9" rx="2" fill="#f59e0b" fill-opacity="0.9" />
  
  <!-- Growth Line -->
  <path d="M15,20 L19,18 L23,19 L27,16 L31,17 L35,15 L39,16 L43,14" 
        stroke="#10b981" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  
  <!-- Gradient Definition -->
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

  useEffect(() => {
    // Function to create PNG from SVG
    const createPng = (svgElement, size, filename) => {
      if (!svgElement) return;
      
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      const img = new Image();
      const svgBlob = new Blob([svgElement.outerHTML], {type: 'image/svg+xml'});
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        URL.revokeObjectURL(url);
        
        // Create download link
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.textContent = `Download ${filename}`;
        link.className = "block mb-2 text-blue-500 hover:text-blue-700 underline";
        
        // Add to document
        const container = document.getElementById('download-links');
        if (container) {
          container.appendChild(link);
        }
      };
      
      img.src = url;
    };
    
    // Set SVG content
    if (logoRef.current) {
      logoRef.current.innerHTML = logoSvg;
      setTimeout(() => {
        createPng(logoRef.current, 192, 'logo192.png');
        createPng(logoRef.current, 512, 'logo512.png');
      }, 100);
    }
    
    if (maskableRef.current) {
      maskableRef.current.innerHTML = maskableSvg;
      setTimeout(() => {
        createPng(maskableRef.current, 512, 'maskable_icon.png');
      }, 100);
    }
    
    if (faviconRef.current) {
      faviconRef.current.innerHTML = faviconSvg;
      setTimeout(() => {
        createPng(faviconRef.current, 64, 'favicon.png');
      }, 100);
    }
  }, [logoSvg, maskableSvg, faviconSvg]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">PWA Icon Generator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">App Icon</h2>
          <div ref={logoRef} className="w-48 h-48 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Used for logo192.png and logo512.png</p>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Maskable Icon</h2>
          <div ref={maskableRef} className="w-48 h-48 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Used for maskable_icon.png (Android adaptive icons)</p>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Favicon</h2>
          <div ref={faviconRef} className="w-48 h-48 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Used for favicon.ico (browser tab icon)</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Download Icons</h2>
        <p className="mb-4 text-sm">Click the links below to download each icon file. Place these files in your project's <code className="bg-gray-200 px-1 rounded">public</code> folder.</p>
        <div id="download-links" className="space-y-1"></div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded border border-yellow-200">
          <h3 className="font-medium mb-2">Note about favicon.ico</h3>
          <p className="text-sm">For favicon.ico, you'll need to convert the PNG to ICO format. You can use an online converter such as <a href="https://convertio.co/png-ico/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Convertio</a> or <a href="https://favicon.io/favicon-converter/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">favicon.io</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default IconGenerator;