import { Router } from 'express';
import { getPost, deletePost, getPostById, updatePost, createPost } from "../Controller/postController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';


const postRouter = Router();
postRouter.get('/post', authenticateOperations, getPost);
postRouter.post('/post', authenticateOperations, createPost);
postRouter.put('/post/:id', authenticateOperations, updatePost);
postRouter.get('/post/:id', authenticateOperations, getPostById);
postRouter.delete('/post/:id', authenticateOperations, deletePost);

export default postRouter;
