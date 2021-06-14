import express from 'express';
import { createPost, getPosts, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/post', createPost);
router.put('/post', updatePost);

export default router;
