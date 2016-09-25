import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const PostSchema = new Schema({
  title: String,
  tags: [String],
  category: String,
  author: String,
});

// create model class
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
