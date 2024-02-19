import { Router } from 'express';
import { getaCommenttForUser,getComment, deleteComment, getCommentById, updateComment, createComment} from "../Controller/commentController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const commentRouter = Router();
commentRouter.get('/comment', authenticateOperations, getComment);
commentRouter.post('/comment', authenticateOperations, createComment);
commentRouter.put('/comment/:id', authenticateOperations, updateComment);
commentRouter.get('/comment/:id', authenticateOperations, getCommentById);
commentRouter.delete('/comment/:id', authenticateOperations, deleteComment);
commentRouter.get('/commentforuser', authenticateOperations, getaCommenttForUser);



export default commentRouter;
