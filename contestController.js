const Contest = require('../models/Contest');

exports.createContest = async (req, res) => {
  try
  {
    const { title, description, startDate, endDate } = req.body;
    const contest = await Contest.create({ title, description, startDate, endDate });
    res.status(201).json({ success: true, data: contest });
  } 
  
  catch (error) 
  {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a contest by ID
exports.getContest = async (req, res) => {
  try
  {
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) {
      return res.status(404).json({ success: false, error: 'Contest not found' });
    }
    res.status(200).json({ success: true, data: contest });
  } 
  
  catch (error) 
  {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a contest by ID
exports.updateContest = async (req, res) => {
  try
  {
    const { title, description, startDate, endDate } = req.body;
    const contest = await Contest.findByIdAndUpdate(
      req.params.contestId,
      { title, description, startDate, endDate },
      { new: true }
    );
    if (!contest) {
      return res.status(404).json({ success: false, error: 'Contest not found' });
    }
    res.status(200).json({ success: true, data: contest });
  } 
  
  catch (error) 
  {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a contest by ID
exports.deleteContest = async (req, res) => {
  try
  {
    const contest = await Contest.findByIdAndDelete(req.params.contestId);
    if (!contest) {
      return res.status(404).json({ success: false, error: 'Contest not found' });
    }
    res.status(200).json({ success: true, data: contest });
  } 
  
  catch (error) 
  {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Enroll a user in a contest
exports.enrollContest = async (req, res) => {
  try
  {
    const { userId } = req.body;
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) {
      return res.status(404).json({ success: false, error: 'Contest not found' });
    }
    contest.participants.push(userId);
    await contest.save();
    res.status(200).json({ success: true, data: contest });
  } 
  
  catch (error) 
  {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add a participant to a contest
exports.addParticipant = async (req, res) => {
  try {
    const { userId } = req.body;
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) {
      return res.status(404).json({ success: false, error: 'Contest not found' });
    }
    if (contest.participants.includes(userId)) {
      return res.status(400).json({ success: false, error: 'Participant already added' });
    }
    contest.participants.push(userId);
    await contest.save();
    res.status(200).json({ success: true, data: contest });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Remove a participant from a contest
exports.removeParticipant = async (req, res) => {
  try {
    const { userId } = req.body;
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) {
      return res.status(404).json({ success: false, error: 'Contest not found' });
    }
    const index = contest.participants.indexOf(userId);
    if (index === -1) {
      return res.status(400).json({ success: false, error: 'Participant not found' });
    }
    contest.participants.splice(index, 1);
    await contest.save();
    res.status(200).json({ success: true, data: contest });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
