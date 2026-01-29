const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Rejected", "Offer"],
      default: "Applied"
    },
    notes: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Internship", internshipSchema);
