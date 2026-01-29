const Internship = require("../models/Internship");

// GET all internships
exports.getInternships = async (req, res) => {
  const internships = await Internship.find();
  res.json(internships);
};

// CREATE internship
exports.createInternship = async (req, res) => {
  const { company, role, status, notes } = req.body;

  const internship = await Internship.create({
    company,
    role,
    status,
    notes
  });

  res.status(201).json(internship);
};
