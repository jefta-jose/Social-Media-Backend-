import { Router } from 'express';
import { messageBetweenUsers,getMessage, deleteMessage, getMessageById, updateMessage, createMessage } from "../Controller/messageController.js";

const messageRouter = Router();
messageRouter.get('/message', getMessage);
messageRouter.post('/message', createMessage);
messageRouter.put('/message/:id', updateMessage);
messageRouter.get('/message/:id', getMessageById);
messageRouter.delete('/message/:id', deleteMessage);
messageRouter.get('/messagebetween/:id', messageBetweenUsers);


export default messageRouter;
