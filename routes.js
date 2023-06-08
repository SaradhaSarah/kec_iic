const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const ProjectSubmission = require('../models/ProjectSubmission');
const Contest = require('../models/Contest');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
// Create a new project submission
router.post('/project-submissions', async (req, res) => {
    try {
      const { title, description, userId } = req.body;
  
      // Create a new project submission
      const newProjectSubmission = new ProjectSubmission({ title, description, userId });
      await newProjectSubmission.save();
  
      res.status(201).json({ message: 'Project submission created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Create a new contest
  router.post('/contests', async (req, res) => {
    try {
      const { title, description, startDate, endDate } = req.body;
  
      // Create a new contest
      const newContest = new Contest({ title, description, startDate, endDate });
      await newContest.save();
  
      res.status(201).json({ message: 'Contest created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Fetch all users
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Fetch all project submissions
  router.get('/project-submissions', async (req, res) => {
    try {
      const projectSubmissions = await ProjectSubmission.find();
      res.json(projectSubmissions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Fetch all contests
  router.get('/contests', async (req, res) => {
    try {
      const contests = await Contest.find();
      res.json(contests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;