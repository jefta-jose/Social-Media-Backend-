import { Router } from 'express';
import { getUserFriends ,getFriendship, deleteFriendship, getFriendshipById, updateFriendship, createFriendship } from "../Controller/friendshipController.js";

const friendshipRouter = Router();
friendshipRouter.get('/friendship', getFriendship);
friendshipRouter.post('/friendship', createFriendship);
friendshipRouter.put('/friendship/:id', updateFriendship);
friendshipRouter.get('/friendship/:id', getFriendshipById);
friendshipRouter.delete('/friendship/:id', deleteFriendship);
friendshipRouter.get('/friendsofuser/:userId', getUserFriends);

export default friendshipRouter;
