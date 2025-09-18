// server.js - serves the built SPA and respects Render's PORT env var
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, 'dist');

app.use(express.static(DIST));
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

// Listen on 0.0.0.0 so Render can reach it
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server ready on port ${PORT}`);
});
