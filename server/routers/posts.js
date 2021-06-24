import express from 'express';
import { createPost, getPosts, updatePost } from '../controllers/posts.js';
import { authenticateJWT } from '../utils/auth.js';

const router = express.Router();

router.get('/posts', authenticateJWT, getPosts);
router.post('/post', authenticateJWT, createPost);
router.put('/post', authenticateJWT, updatePost);

export default router;
