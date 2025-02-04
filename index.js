const express = require("express");
const connectDB = require("./db");
const User = require("./schema");

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("User Management System API");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port https://localhost:${PORT}`));
