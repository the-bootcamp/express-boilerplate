const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const skillSchema = new Schema(
  {
    selectDescription: {Mixed, required: true},
    additionalInformation: {String}, 
    skillprovider: {[ObjectID], required:true}
  },
  {
    timestamps: true
  }
);

module.exports = model('Skill', skillSchema);