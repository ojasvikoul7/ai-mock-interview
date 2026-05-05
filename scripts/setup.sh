#!/bin/bash
# Aptly ML System Setup Script

echo "🚀 Setting up Aptly ML System..."

# Check Python version
python_version=$(python3 --version 2>&1 | awk '{print $2}')
echo "Python version: $python_version"

# Create virtual environment
echo "📦 Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Install requirements
echo "📥 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Download spaCy model
echo "🧠 Downloading NLP models..."
python3 -m spacy download en_core_web_md

# Generate dataset (optional - takes time)
read -p "Generate full question dataset? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📚 Generating question bank (this may take a few minutes)..."
    python3 generate_dataset.py
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the API server:"
echo "  source venv/bin/activate"
echo "  python3 api.py"
echo ""
echo "API will be available at: http://localhost:8000"
echo "Documentation: http://localhost:8000/docs"
