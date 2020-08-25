const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {type:String, required:true},
    email: {type:String, required:true},
    telephone: {type:String, required:true, length: 9}, 
    address: {type:String, required:true, maxlength: 30},
    passwordHash: {type:String, length: 6},
    skills: [Schema.Types.ObjectId],
    jobs: [Schema.Types.ObjectId] 
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);
