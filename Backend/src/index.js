const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const path = require("path");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// ✅ Serve static files from "uploads" inside "src"
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const personaRoutes = require('./routes/personaRoutes'); // Import routes
app.use('/api', personaRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
