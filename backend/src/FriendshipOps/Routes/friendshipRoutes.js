import { Router } from 'express';
import { getUserFriends ,getFriendship, deleteFriendship, getFriendshipById, updateFriendship, createFriendship } from "../Controller/friendshipController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const friendshipRouter = Router();
friendshipRouter.get('/friendship', authenticateOperations, getFriendship);
friendshipRouter.post('/friendship', authenticateOperations, createFriendship);
friendshipRouter.put('/friendship/:id', authenticateOperations, updateFriendship);
friendshipRouter.get('/friendship/:id', authenticateOperations, getFriendshipById);
friendshipRouter.delete('/friendship/:id', authenticateOperations, deleteFriendship);
friendshipRouter.get('/friendsofuser/:userId', authenticateOperations, getUserFriends);


export default friendshipRouter;
