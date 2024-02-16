import { Router } from 'express';
import { getPost, deletePost, getPostById, updatePost, createPost } from "../Controller/postController.js";

const postRouter = Router();
postRouter.get('/post', getPost);
postRouter.post('/post', createPost);
postRouter.put('/post/:id', updatePost);
postRouter.get('/post/:id', getPostById);
postRouter.delete('/post/:id', deletePost);





export default postRouter;
