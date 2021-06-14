import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: 'Anonymous',
    },
    attachment: String,
    likeCount: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model('Post', schema);
