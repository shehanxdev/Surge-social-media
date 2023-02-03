const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      default: null,
    },

    description: String,
    picturepath: String,
    userPicturePath: String,
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
