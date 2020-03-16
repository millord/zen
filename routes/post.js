const router = require("express").Router();
const Post = require("../models/Post");

// adding a new post
router.post("/add", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savePost = await post.save();
    res.status(201).send(savePost);
  } catch (err) {
    res.status(400).send("Invalid post");
  }
});

// getting all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send("No data");
  }
});

// get a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

// delete a post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.status(200).send(removedPost);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

// update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.status(200).send(updatedPost);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

module.exports = router;
