import { Router } from 'express';
import { getaCommenttForUser,getComment, deleteComment, getCommentById, updateComment, createComment} from "../Controller/commentController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const commentRouter = Router();
commentRouter.get('/comment', getComment);
commentRouter.post('/comment', createComment);
commentRouter.put('/comment/:id', updateComment);
commentRouter.get('/comment/:id', getCommentById);
commentRouter.delete('/comment/:id', authenticateOperations, deleteComment);
commentRouter.get('/commentforuser', getaCommenttForUser);


export default commentRouter;
