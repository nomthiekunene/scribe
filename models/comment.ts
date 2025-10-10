import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  authorId: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.comment || mongoose.model("comment", commentSchema);