const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const skillSchema = new Schema(
  {
    selectDescription: {type: String, required: true},
    skillprovider: {type:[Schema.Types.ObjectId], required:true}
  },
  {
    timestamps: true
  }
);

module.exports = model('Skill', skillSchema);