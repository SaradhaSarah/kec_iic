const ProjectSubmission = require('../models/ProjectSubmission');

// Create a new project submission
exports.createProjectSubmission = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const projectSubmission = await ProjectSubmission.create({ title, description, userId });
    res.status(201).json({ success: true, data: projectSubmission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all project submissions
exports.getProjectSubmissions = async (req, res) => {
  try {
    const projectSubmissions = await ProjectSubmission.find();
    res.status(200).json({ success: true, data: projectSubmissions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a project submission by ID
exports.getProjectSubmissionById = async (req, res) => {
  try {
    const projectSubmissionId = req.params.projectSubmissionId;
    const projectSubmission = await ProjectSubmission.findById(projectSubmissionId);
    if (!projectSubmission) {
      return res.status(404).json({ success: false, error: 'Project submission not found' });
    }
    res.status(200).json({ success: true, data: projectSubmission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a project submission by ID
exports.updateProjectSubmission = async (req, res) => {
  try {
    const projectSubmissionId = req.params.projectSubmissionId;
    const { title, description } = req.body;
    const projectSubmission = await ProjectSubmission.findByIdAndUpdate(
      projectSubmissionId,
      { title, description },
      { new: true }
    );
    if (!projectSubmission) {
      return res.status(404).json({ success: false, error: 'Project submission not found' });
    }
    res.status(200).json({ success: true, data: projectSubmission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a project submission by ID
exports.deleteProjectSubmission = async (req, res) => {
  try {
    const projectSubmissionId = req.params.projectSubmissionId;
    const projectSubmission = await ProjectSubmission.findByIdAndRemove(projectSubmissionId);
    if (!projectSubmission) {
      return res.status(404).json({ success: false, error: 'Project submission not found' });
    }
    res.status(200).json({ success: true, data: projectSubmission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
