const express = require("express");
const internshipRoutes = require("./routes/internshipRoutes");

const app = express();

app.use(express.json());

app.use("/api/internships", internshipRoutes);

module.exports = app;
