const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

////// fetchPOST :

// exports.fetchPost = async (postId, next) => {
//   // const { postId } = req.params;
//   console.log(postId);
//   try {
//     const foundPost = await Post.findById(postId);
//     // if (foundPost) {
//     //   return foundPost;
//     // } else {
//     //   next({ message: "post not found" });
//     // }
//     return foundPost;
//   } catch (error) {
//     next(error);
//   }
// };

exports.postsDelete = async (req, res, next) => {
  // const { postId } = req.params;
  // console.log(req);
  try {
    // const foundPost = await Post.findById(postId);
    // if (foundPost) {
    await req.postId.deleteOne();
    res.status(204).end();
    // } else {
    //   next({ message: "Post not found!" });
    // }
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  // const { postId } = req.params;
  try {
    // const foundPost = await Post.findById(postId);
    // if (foundPost) {
    await req.postId.updateOne(req.body);
    res.status(204).end();
    // } else {
    //   res.status(404).json({ message: "post not found" });
    // }
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
