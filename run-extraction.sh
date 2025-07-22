#!/bin/bash

echo "🚀 Running WordPress content extraction..."
node extract-all-real-content.js

echo ""
echo "🎯 Starting Next.js development server..."
npm run dev
