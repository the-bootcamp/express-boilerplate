const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jobSchema = new Schema(
  {
    selectDescription: { type: String },
    image: { type: String },
    additionalInformation: { type: String, required: true },
    jobowner: { type: Schema.Types.ObjectId, required: true },
    jobstatus: { type: String, required: true },
    allocation: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Job", jobSchema);
