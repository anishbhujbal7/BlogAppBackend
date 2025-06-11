const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = new Like({ post, user });
    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.json({
      success: true,
      post: updatedPost,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // 1. Delete from the Like collection
    const deletedLike = await Like.findOneAndDelete({
      _id: like,
      post: post,
    });

    if (!deletedLike) {
      return res.status(404).json({
        success: false,
        message: "Like not found",
      });
    }

    // 2. Pull from the Post.likes array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.json({
      success: true,
      post: updatedPost,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
