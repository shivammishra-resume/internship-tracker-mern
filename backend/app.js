const express = require("express");
const cors = require("cors");
const internshipRoutes = require("./routes/internshipRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.get("/", (req, res) => {
  res.send("Internship Tracker API running");
});


app.use(cors()); // 👈 allow frontend
app.use(express.json());

app.use("/api/internships", internshipRoutes);

app.use(errorHandler);

module.exports = app;
