import { Router } from 'express';
import { displayMember,getGroupMember, deleteGroupMember, getGroupMemberById, updateGroupMember, createGroupMember } from "../Controller/groupMembersController.js";

const groupMemberRouter = Router();
groupMemberRouter.get('/groupmembers', getGroupMember);
groupMemberRouter.post('/groupmembers', createGroupMember);
groupMemberRouter.put('/groupmembers/:id', updateGroupMember);
groupMemberRouter.get('/groupmembers/:id', getGroupMemberById);
groupMemberRouter.delete('/groupmembers/:id', deleteGroupMember);
groupMemberRouter.get('/groupmembersdisplay/:id', displayMember);


export default groupMemberRouter;
