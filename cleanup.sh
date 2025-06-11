#!/bin/bash
echo "Cleaning up node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json
echo "Reinstalling dependencies..."
npm install
echo "Cleanup complete!"
