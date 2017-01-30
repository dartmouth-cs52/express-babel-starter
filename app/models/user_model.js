// user_model.js

import mongoose, { Schema } from 'mongoose';

// the schema for the user model
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  role: { // the role will be 1 => admin, 2 => teacher, 3 => student
    type: Number,
    required: true,
  },
  activities: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
    started_activity: Date,   // the date and time when they started the activity
    finished_activity: Date,  // the date & time when they completed the activity
  }],
  firstName: String,
  lastName: String,
  gradeLevels: [Number], // 1 => K-2, 2 => 3-5, 3 => 6-8
  categories: [Number], // 1=>autism, 2=>hearing, 3=>visual, 4=>learning, 5=>physical, 6=>social, 7=>speech, 8=>cognitive
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }], // this field will only be used when the user is a teacher
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, // this field will only be used when the user is a student
  expirationDate: Date,
  // mascot: Number, if we decide to allow users to select their mascot
});

UserSchema.set('toJSON', {
  virtuals: true,
});

// create model class
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
