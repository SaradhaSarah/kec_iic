const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSubmissionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId,
    ref: 'User',
    required: true }
});

const ProjectSubmission = mongoose.model('ProjectSubmission', projectSubmissionSchema);

module.exports = ProjectSubmission;
