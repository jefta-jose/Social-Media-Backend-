import { Router } from 'express';
import { messageBetweenUsers,getMessage, deleteMessage, getMessageById, updateMessage, createMessage } from "../Controller/messageController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const messageRouter = Router();
messageRouter.get('/message', authenticateOperations, getMessage);
messageRouter.post('/message', authenticateOperations, createMessage);
messageRouter.put('/message/:id', authenticateOperations, updateMessage);
messageRouter.get('/message/:id', authenticateOperations, getMessageById);
messageRouter.delete('/message/:id', authenticateOperations, deleteMessage);
messageRouter.get('/messagebetween/:id', authenticateOperations, messageBetweenUsers);


export default messageRouter;
