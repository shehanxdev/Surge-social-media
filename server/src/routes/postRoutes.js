const express = require("express");
const router = express.Router();
const { fetchPosts } = require("../controllers/fetchPosts");

router.get("/", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
