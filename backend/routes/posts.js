import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
  createCategory,
  getCategory,
  createComment,
  getComments,
  deleteCategory,
  editPost,
} from "../controllers/post.js";

const router = express.Router();

// create post
router.post("/createPost", createPost);
router.get("/getPosts", getPosts);
router.delete("/deletePost/:id", deletePost);
router.put("/editPost/:id", editPost);

// category
router.post("/createCategory", createCategory);
router.get("/getCategory", getCategory);
router.delete("/deleteCategory/:id", deleteCategory);

// comments
router.post("/createComment", createComment);
router.get("/getComments", getComments);

export default router;
