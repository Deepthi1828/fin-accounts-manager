const express = require("express");
const cors = require("cors");
require("dotenv").config();

// DB connection (runs once)
require("./src/config/db");

// Routes
const incomeRoutes = require("./src/routes/income.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Finance Accounts Management API running");
});

// API routes
app.use("/api/income", incomeRoutes);

// Port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
