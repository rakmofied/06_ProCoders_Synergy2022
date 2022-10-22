const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TranscriptSchema = new Schema(
  {
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["Placement", "Masters", "Other"],
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    year: {
      type: Number,
      enum: [1, 2, 3, 4],
      required: true,
    },
    paymentStatus: {
      type: Boolean,
      deafult: false,
    },
    status: {
      type: Number,
      enum: [1, 2, 3],
      default: 1,
    },
    time: { type: Date, default: Date.now },
  },
  { collection: "transcript" }
);

module.exports = mongoose.model("Transcript", TranscriptSchema);
