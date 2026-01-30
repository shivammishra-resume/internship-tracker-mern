const Internship = require("../models/Internship");
const asyncHandler = require("../middleware/asyncHandler");

// GET all internships
exports.getInternships = asyncHandler(async (req, res) => {
  const internships = await Internship.find();
  res.json(internships);
});

// CREATE internship
exports.createInternship = asyncHandler(async (req, res) => {
  const { company, role, status, notes } = req.body;

  if (!company || !role) {
    res.status(400);
    throw new Error("Company and role are required");
  }

  const internship = await Internship.create({
    company,
    role,
    status,
    notes
  });

  res.status(201).json(internship);
});
// GET single internship
exports.getInternshipById = asyncHandler(async (req, res) => {
  const internship = await Internship.findById(req.params.id);

  if (!internship) {
    res.status(404);
    throw new Error("Internship not found");
  }

  res.json(internship);
});
// UPDATE internship
exports.updateInternship = asyncHandler(async (req, res) => {
  const internship = await Internship.findById(req.params.id);

  if (!internship) {
    res.status(404);
    throw new Error("Internship not found");
  }

  internship.company = req.body.company || internship.company;
  internship.role = req.body.role || internship.role;
  internship.status = req.body.status || internship.status;
  internship.notes = req.body.notes || internship.notes;

  const updatedInternship = await internship.save();

  res.json(updatedInternship);
});
// DELETE internship
exports.deleteInternship = asyncHandler(async (req, res) => {
  const internship = await Internship.findById(req.params.id);

  if (!internship) {
    res.status(404);
    throw new Error("Internship not found");
  }

  await internship.deleteOne();

  res.json({ message: "Internship removed" });
});
