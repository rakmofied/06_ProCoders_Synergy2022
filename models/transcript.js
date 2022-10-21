const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TranscriptSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Placement', 'Higher Studies', 'Other'],
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  year: {
    type: Number,
    enum: [1,2,3,4],
    required: true
  },
  paymentStatus: {
    type: Boolean,
    deafult: false
  },
  status: {
    type: Number,
    enum: [1, 2, 3],
    default: 1
  }
});

module.exports = mongoose.model("Transcript", TranscriptSchema);
