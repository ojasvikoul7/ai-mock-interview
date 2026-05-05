#!/bin/bash
# Run the complete Aptly system

echo "🚀 Starting Aptly Interview System..."
echo ""

# Check if Python API is running
echo "1. Starting Python API server..."
cd "$(dirname "$0")"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "   Virtual environment not found. Running setup first..."
    ./setup.sh
fi

# Start API in background
source venv/bin/activate
python api.py &
API_PID=$!

# Wait for API to start
echo "   Waiting for API to start..."
sleep 3

# Check if API is running
if curl -s http://localhost:8000/ > /dev/null; then
    echo "   ✅ API is running at http://localhost:8000"
else
    echo "   ⚠️  API may not have started properly. Check api.py output."
fi

echo ""
echo "2. Starting HTTP server for frontend..."
python -m http.server 8080 &
SERVER_PID=$!
sleep 2
echo "   ✅ Frontend server running at http://localhost:8080"

echo ""
echo "═══════════════════════════════════════════════════"
echo "  APTLY IS READY!"
echo "═══════════════════════════════════════════════════"
echo ""
echo "📱 Open browser: http://localhost:8080/setup.html"
echo ""
echo "🔧 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for user interrupt
trap "kill $API_PID $SERVER_PID 2>/dev/null; exit" INT
wait
