import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createPost } from "../controllers/post.js";

const router = new Router();

// Create Post
router.post('/',checkAuth , createPost);

export default router;
