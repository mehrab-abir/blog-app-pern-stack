import express from 'express';
import { postController } from './post.controller';
const router = express.Router();

router.get('/all-posts',postController.getAllPosts);
router.get('/posts-by-tags',postController.filterPostsByTags);
router.post('/new-post',postController.createPost);

export const postRouter = router;