const express = require("express");
const Application = require("../models/Application");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

//creating a route for new application
router.post("/", protect, async (req, res) => {
  try {
    const { company, role, link, status } = req.body;

    const newApplication = await Application.create({
      user: req.user.id,
      company,
      role,
      link,
      status,
    });

    res.status(201).json(newApplication);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// creating  route to show user applications
router.get("/", protect, async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user.id });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// READ ONE - ek application ki details
router.get("/:id", protect, async (req, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Update route 
router.put("/:id", protect, async (req, res) => {
  try {
    const application = await Application.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Route for deleting an application
router.delete("/:id", protect, async (req, res) => {
  try {
    const application = await Application.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ message: "Application deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;