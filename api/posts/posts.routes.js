const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");
const Post = require("../../models/Post");
const upload = require("../../middleware/multer");

///////// shortcut to use id as param for all functions instead of defining id everytime//////
router.param("postId", async (req, res, next, postId) => {
  try {
    // const post = await fetchPost(postId);
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      req.post = foundPost;
      next();
    } else {
      res.status(404).json({ message: "post not  found" });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", postsGet);
router.post("/", upload.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
