import { Router } from 'express';
import { getGroup, deleteGroup, getGroupById, updateGroup, createGroup } from "../Controller/groupController.js";

const groupRouter = Router();
groupRouter.get('/group', getGroup);
groupRouter.post('/group', createGroup);
groupRouter.put('/group/:id', updateGroup);
groupRouter.get('/group/:id', getGroupById);
groupRouter.delete('/group/:id', deleteGroup);

export default groupRouter;
