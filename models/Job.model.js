const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const jobSchema = new Schema(
  {
    selectDescription: {Mixed},
    image: {String},
    additionalInformation: {String, required: true},
    jobowner: {ObjectID, required: true},
    jobstatus: {String, required: true},
    allocation: {ObjectID}
  },
  {
    timestamps: true
  }
);

module.exports = model('Job', jobSchema);