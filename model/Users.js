const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: String, 
      default: uuidv4, 
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: Schema.Types.Mixed, 
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    email: {
      type: String,
      required: true,
    }
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
