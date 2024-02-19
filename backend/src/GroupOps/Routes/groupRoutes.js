import { Router } from 'express';
import { getGroup, deleteGroup, getGroupById, updateGroup, createGroup } from "../Controller/groupController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const groupRouter = Router();
groupRouter.get('/group', authenticateOperations, getGroup);
groupRouter.post('/group', authenticateOperations, createGroup);
groupRouter.put('/group/:id', authenticateOperations, updateGroup);
groupRouter.get('/group/:id', authenticateOperations, getGroupById);
groupRouter.delete('/group/:id', authenticateOperations, deleteGroup);

export default groupRouter;
