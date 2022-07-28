const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
