const express = require("express");
const internshipRoutes = require("./routes/internshipRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.use("/api/internships", internshipRoutes);

// Error handler (ALWAYS last)
app.use(errorHandler);

module.exports = app;
