// activity_model.js

import mongoose, { Schema } from 'mongoose';

// the schema for the activity model
const ActivitySchema = new Schema({
  gradeLevels: [Number], // 1 => K-2, 2 => 3-5, 3 => 6-8
  category: Number, // 1=>autism, 2=>hearing, 3=>visual, 4=>learning, 5=>physical, 6=>social, 7=>speech, 8=>cognitive
  name: String,
  url: String,  // url where the html for the activity can be found
  instructions: String, // Markdown formatted instructions for the activity
  body: String, // Markdown formatted text for activity (if it isn't an html page)
  shortName: String,  // the text that will be used for the URL of the activity
});

// create model class
const ActivityModel = mongoose.model('Activity', ActivitySchema);

export default ActivityModel;
