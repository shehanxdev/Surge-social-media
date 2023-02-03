const mongoose = require("mongoose");
const Post = require("../models/posts");

const fetchPosts = async () => {
  try {
    const posts = await Post.find().sort({ createdAt: -1, likes: -1 });
    return posts;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { fetchPosts };
