#!/bin/bash
# favicon-generator.sh
# Script to generate favicon.ico from PNG using ImageMagick

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null
then
    echo "ImageMagick is not installed. Please install it first."
    echo "On macOS: brew install imagemagick"
    echo "On Ubuntu/Debian: sudo apt-get install imagemagick"
    exit 1
fi

# Check if input file exists
if [ ! -f "favicon.png" ]; then
    echo "favicon.png not found in current directory."
    exit 1
fi

echo "Generating favicon.ico with multiple sizes..."

# Generate favicon.ico with multiple sizes
convert favicon.png -define icon:auto-resize=64,48,32,16 favicon.ico

echo "Done! favicon.ico has been created."
echo "Move it to your project's public folder."