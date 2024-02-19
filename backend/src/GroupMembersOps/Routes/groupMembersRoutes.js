import { Router } from 'express';
import { displayMember,getGroupMember, deleteGroupMember, getGroupMemberById, updateGroupMember, createGroupMember } from "../Controller/groupMembersController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const groupMemberRouter = Router();
// Use authenticateOperations middleware for protected routes
groupMemberRouter.get('/groupmembers', authenticateOperations, getGroupMember);
groupMemberRouter.post('/groupmembers', authenticateOperations, createGroupMember);
groupMemberRouter.put('/groupmembers/:id', authenticateOperations, updateGroupMember);
groupMemberRouter.get('/groupmembers/:id', authenticateOperations, getGroupMemberById);
groupMemberRouter.delete('/groupmembers/:id', authenticateOperations, deleteGroupMember);
groupMemberRouter.get('/groupmembersdisplay/:id', authenticateOperations, displayMember);



export default groupMemberRouter;
