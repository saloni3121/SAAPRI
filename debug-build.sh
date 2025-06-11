#!/bin/bash
echo "Running debug build..."
# Increase Node.js memory limit if needed
NODE_OPTIONS="--max-old-space-size=4096" npm run build -- --debug
