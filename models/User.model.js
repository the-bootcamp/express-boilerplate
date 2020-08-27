const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type:String, 
    required:[true, 'Name is required'],
  },
  email: {
    type:String, 
    required:[true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true
  },
  telephone: {
    type:String, 
    required:true, 
    length: 9
  }, 
  address: {
    type:String, 
    required:true, 
    maxlength: 80
  },
  passwordHash: {
    type:String,
    required: [true, 'Password is required'], 
    minlength: 6
  },
  skillprovider: {
    type:String
  },
  additionalinformation: {
    type:String
  },
  jobowner: {
    type:String
  },
  skills: [Schema.Types.ObjectId],
  jobs: [Schema.Types.ObjectId],
  signupagreement: {
    type:String,
    required:true
  } 
},
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);
