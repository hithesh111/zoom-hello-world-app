const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the main app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Zoom Hello World App is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Zoom Hello World App server running on http://localhost:${PORT}`);
    console.log(`📱 App will be available at http://localhost:${PORT}`);
    console.log(`🔍 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
