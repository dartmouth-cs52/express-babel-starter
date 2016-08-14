import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const PostSchema = new Schema({
  title: String,
  tags: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

// create model class
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
